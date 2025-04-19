import os
import openai
from pathlib import Path
import PyPDF2
import json
import tiktoken

# Initialize OpenAI client
client = openai.OpenAI(
    api_key="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"  # Replace with your OpenAI API key
)

def count_tokens(text):
    """Count the number of tokens in a text."""
    encoding = tiktoken.encoding_for_model("gpt-4")
    return len(encoding.encode(text))

def chunk_text(text, max_tokens=6000):
    """Split text into chunks that fit within token limit."""
    encoding = tiktoken.encoding_for_model("gpt-4")
    tokens = encoding.encode(text)
    chunks = []
    current_chunk = []
    current_length = 0
    
    for token in tokens:
        if current_length + 1 > max_tokens:
            chunks.append(encoding.decode(current_chunk))
            current_chunk = [token]
            current_length = 1
        else:
            current_chunk.append(token)
            current_length += 1
    
    if current_chunk:
        chunks.append(encoding.decode(current_chunk))
    
    return chunks

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
    return text

def analyze_demographics_chunk(chunk, county_name, chunk_num, total_chunks):
    """Analyze a chunk of demographic data using OpenAI API."""
    prompt = f"""Analyze this part {chunk_num} of {total_chunks} of the demographic data for {county_name} and extract these specific metrics:
    - Total households
    - Population 65 and older
    - Population under 18
    - Average household size
    - High school graduate percentage
    - Total population
    - Percentage speaking English less than very well
    - Percentage with broadband internet subscription
    - Percentage who drove alone (car/truck/van)
    - Median household income
    - Percentage with no health insurance coverage
    - Percentage of all families below poverty line
    - Top 3 race population percentages ("Some other race" is not a race)
    - Hispanic/Latino percentage

    Format the response as a JSON object with these exact keys.
    If any metric is not found in this chunk, use null for that value.
    Only include values that you are certain about from this chunk.

    Here's the text to analyze:
    {chunk}
    """

    response = client.chat.completions.create(
        model="gpt-4-turbo-preview",  # Using turbo for larger context window
        messages=[
            {"role": "system", "content": "You are a demographic data analyzer. Extract and format the requested demographic information into a JSON object."},
            {"role": "user", "content": prompt}
        ],
        temperature=0,
        max_tokens=1000
    )

    try:
        response_text = response.choices[0].message.content
        start_idx = response_text.find('{')
        end_idx = response_text.rfind('}') + 1
        json_str = response_text[start_idx:end_idx]
        return json.loads(json_str)
    except Exception as e:
        print(f"Error parsing response for {county_name} chunk {chunk_num}: {e}")
        return None

def merge_demographic_results(results):
    """Merge multiple chunk results into a single result."""
    merged = {}
    for key in results[0].keys():
        if key == "Top 3 race populations":
            # For race populations, combine and sort by population
            all_races = []
            for result in results:
                if result[key]:
                    # Handle both string and dict formats
                    if isinstance(result[key], list):
                        for race_data in result[key]:
                            if isinstance(race_data, dict):
                                all_races.append(race_data)
                            elif isinstance(race_data, str):
                                # If it's just a string, try to parse it
                                try:
                                    race_name, population = race_data.split(":")
                                    all_races.append({
                                        "race": race_name.strip(),
                                        "population": int(population.strip().replace(",", ""))
                                    })
                                except:
                                    print(f"Warning: Could not parse race data: {race_data}")
            
            # Remove duplicates based on race name and keep highest population
            race_dict = {}
            for race_data in all_races:
                try:
                    race_name = race_data.get("race", "")
                    population = race_data.get("population", 0)
                    if race_name and population:
                        if race_name not in race_dict or population > race_dict[race_name]["population"]:
                            race_dict[race_name] = race_data
                except Exception as e:
                    print(f"Warning: Error processing race data: {race_data}, Error: {e}")
            
            # Sort by population and take top 3
            try:
                merged[key] = sorted(race_dict.values(), key=lambda x: x.get("population", 0), reverse=True)[:3]
            except Exception as e:
                print(f"Warning: Error sorting race data: {e}")
                print(f"Race dict contents: {race_dict}")
                merged[key] = []  # Fallback to empty list if sorting fails
        else:
            # For numeric values, take the first non-null value
            for result in results:
                if result[key] is not None:
                    merged[key] = result[key]
                    break
            else:
                merged[key] = None
    return merged

def analyze_demographics(text, county_name):
    """Analyze demographic data using OpenAI API with chunking."""
    chunks = chunk_text(text)
    print(f"Split text into {len(chunks)} chunks for {county_name}")
    
    results = []
    for i, chunk in enumerate(chunks, 1):
        print(f"Analyzing chunk {i} of {len(chunks)} for {county_name}...")
        result = analyze_demographics_chunk(chunk, county_name, i, len(chunks))
        if result:
            results.append(result)
    
    if results:
        return merge_demographic_results(results)
    return None

def main():
    pdf_dir = Path("data/pdf")
    results = {}

    for pdf_file in pdf_dir.glob("*.pdf"):
        county_name = pdf_file.stem.replace("_demographic", "").replace("_demographics", "").replace("_", " ").title()
        print(f"\nAnalyzing {county_name}...")
        
        text = extract_text_from_pdf(pdf_file)
        demographics = analyze_demographics(text, county_name)
        
        if demographics:
            results[county_name] = demographics
            print(f"\nResults for {county_name}:")
            print(json.dumps(demographics, indent=2))
        else:
            print(f"Failed to analyze {county_name}")

    with open("result/demographic_results.json", "w") as f:
        json.dump(results, f, indent=2)

if __name__ == "__main__":
    main() 
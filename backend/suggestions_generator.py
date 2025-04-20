import json
import os
from openai import OpenAI
from typing import Dict, List
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def load_demographic_data() -> Dict:
    """Load demographic data from JSON file."""
    with open('backend/result/demographic_results.json', 'r') as f:
        return json.load(f)

def analyze_demographic_data(data: Dict, county: str = None) -> str:
    """Convert demographic data into a format suitable for OpenAI analysis."""
    analysis = "Based on the following demographic data"
    
    if county:
        if county not in data:
            raise ValueError(f"County '{county}' not found in the demographic data.")
        analysis += f" for {county} County:\n\n"
        stats = data[county]
        for key, value in stats.items():
            if isinstance(value, dict):
                analysis += f"{key}:\n"
                for subkey, subvalue in value.items():
                    analysis += f"  - {subkey}: {subvalue}%\n"
            else:
                analysis += f"- {key}: {value}\n"
    else:
        analysis += " for multiple counties:\n\n"
        for county, stats in data.items():
            analysis += f"\n{county} County:\n"
            for key, value in stats.items():
                if isinstance(value, dict):
                    analysis += f"{key}:\n"
                    for subkey, subvalue in value.items():
                        analysis += f"  - {subkey}: {subvalue}%\n"
                else:
                    analysis += f"- {key}: {value}\n"
    
    return analysis

def generate_suggestions(data: Dict, county: str = None) -> List[str]:
    """Generate suggestions using OpenAI API based on demographic data for a specific county."""
    api_key = os.getenv('OPENAI_API_KEY')
    if not api_key:
        raise ValueError("OpenAI API key not found. Please set it in the .env file or as an environment variable.")
    
    client = OpenAI(api_key=api_key)
    
    analysis = analyze_demographic_data(data, county)
    county_text = f" for {county} County" if county else ""
    
    prompt = f"""Based on the following demographic data{county_text}, provide specific, actionable suggestions 
    for how the state government can create analytics opportunities and solutions to support data-driven, 
    culturally and demographically sensitive fire recovery, response, and survivor support. SVI is the Social Vulnerability Index.
    
    Each suggestion MUST be under 7 words and should be a simple, actionable recommendation that ONLY the government can implement.
    Examples of good suggestions:
    - "Fund Spanish translator program"
    - "Increase firefighter department budget"
    - "Establish mobile clinic program"
    - "Implement multilingual alert system"
    - "Create elderly evacuation program"

    Data:
    {analysis}

    Please provide ONLY short, simple suggestions that address the unique demographic challenges shown in the data.
    Each suggestion must be under 7 words and must be something that ONLY the government can implement.
    Return ONLY the list of suggestions in Python list format, with each suggestion as a string."""

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a data analytics expert specializing in disaster recovery and demographic analysis. Return only a Python list of one-sentence suggestions for analytics solutions."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=1000
    )
    
    # Extract the response content
    content = response.choices[0].message.content
    
    # Try to parse the response as a Python list
    try:
        # If the response is already in list format, evaluate it
        if content.strip().startswith('[') and content.strip().endswith(']'):
            suggestions = eval(content)
        else:
            # Otherwise, split by newlines and clean up
            suggestions = [s.strip() for s in content.split('\n') if s.strip()]
            # Remove any numbering or bullet points
            suggestions = [s.lstrip('0123456789.- *') for s in suggestions]
    except Exception as e:
        print(f"Error parsing suggestions: {e}")
        # Fallback: return the raw content as a single-item list
        suggestions = [content]
    
    return suggestions

def save_suggestions_to_json(suggestions_by_county: Dict[str, List[str]], filename: str = 'suggestions_results.json'):
    """Save suggestions to a JSON file in the results folder."""
    output_path = os.path.join('backend/result', filename)
    with open(output_path, 'w') as f:
        json.dump(suggestions_by_county, f, indent=4)
    print(f"\nSuggestions saved to {output_path}")

def main():
    # Load demographic data
    data = load_demographic_data()
    
    # Get list of counties
    counties = list(data.keys())
    
    # Dictionary to store suggestions for all counties
    suggestions_by_county = {}
    
    # Generate suggestions for each county
    for county in counties:
        print(f"\nAnalytics Recommendations for {county} County:\n")
        suggestions = generate_suggestions(data, county)
        suggestions_by_county[county] = suggestions
        for i, suggestion in enumerate(suggestions, 1):
            print(f"{i}. {suggestion}")
        print("\n" + "-"*80)
    
    # Save all suggestions to a JSON file
    save_suggestions_to_json(suggestions_by_county)

if __name__ == "__main__":
    main()

import argparse, datetime as dt, sys, json, os
from typing import Tuple, Dict, Any
from geopy.geocoders import Nominatim
import pandas as pd, requests

# Valid daily variables (see Open‑Meteo docs)
DAILY_VARS = [
    "temperature_2m_max",
    "temperature_2m_min",
    "precipitation_sum",
    "wind_speed_10m_max",
    "wind_gusts_10m_max",
]

def geocode_county(county: str, state: str) -> Tuple[float, float]:
    """Return (lat, lon) for '<county> County, <state>, USA'."""
    loc = Nominatim(user_agent="county-weather").geocode(f"{county} County, {state}, USA")
    if not loc:
        raise ValueError("County not found—check spelling.")
    return loc.latitude, loc.longitude

def fetch_forecast(lat: float, lon: float, days: int = 1) -> pd.DataFrame:
    """Fetch weather forecast for specified number of days."""
    today = dt.date.today()
    params = {
        "latitude": lat,
        "longitude": lon,
        "timezone": "auto",
        "daily": ",".join(DAILY_VARS),
        "start_date": today.isoformat(),
        "end_date": (today + dt.timedelta(days=days-1)).isoformat(),
    }
    r = requests.get("https://api.open-meteo.com/v1/forecast", params=params, timeout=10)
    r.raise_for_status()
    data = r.json()["daily"]
    df = pd.DataFrame(data).rename(
        columns={
            "time": "date",
            "temperature_2m_max": "t_max",
            "temperature_2m_min": "t_min",
            "precipitation_sum": "precip",
            "wind_speed_10m_max": "wind_max",
            "wind_gusts_10m_max": "gust_max",
        }
    )
    return df

def get_weather_for_county(county: str, state: str) -> Dict[str, Any]:
    """Get weather data for a single county and return as dictionary."""
    try:
        lat, lon = geocode_county(county, state)
        df = fetch_forecast(lat, lon, days=1)  # Only get today's forecast
        
        # Convert the first row to a dictionary
        if not df.empty:
            weather_data = df.iloc[0].to_dict()
            # The date is already a string in the API response, no need to format it
            return weather_data
        else:
            return {"error": "No data available"}
    except Exception as e:
        return {"error": str(e)}

def get_weather_for_all_counties(demographic_file: str, output_file: str):
    """Get weather data for all counties in the demographic file and save to JSON."""
    # Load the counties from the demographic data
    with open(demographic_file, 'r') as f:
        demographic_data = json.load(f)
    
    # List of counties to process
    counties = list(demographic_data.keys())
    
    # State abbreviation for all counties (California)
    state = "CA"
    
    # Create output directory if it doesn't exist
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Dictionary to store all weather data
    all_weather_data = {}
    
    # Get weather data for each county
    for county in counties:
        print(f"Processing {county} County, {state}...")
        weather_data = get_weather_for_county(county, state)
        all_weather_data[county] = weather_data
    
    # Save to JSON file
    with open(output_file, 'w') as f:
        json.dump(all_weather_data, f, indent=2)
    
    print(f"Weather data saved to {output_file}")

def main():
    p = argparse.ArgumentParser(description="Get weather forecast for counties.")
    p.add_argument("--demographic", default="backend/result/demographic_results.json", 
                  help="Path to demographic data JSON file")
    p.add_argument("--output", default="backend/result/weather_results.json", 
                  help="Path to output JSON file")
    p.add_argument("--county", help="Single county to get weather for")
    p.add_argument("--state", default="CA", help="State abbreviation")
    args = p.parse_args()

    if args.county:
        # Single county mode
        weather_data = get_weather_for_county(args.county, args.state)
        print(f"\nWeather for {args.county} County, {args.state}:")
        print(json.dumps(weather_data, indent=2))
    else:
        # All counties mode
        get_weather_for_all_counties(args.demographic, args.output)

if __name__ == "__main__":
    main()

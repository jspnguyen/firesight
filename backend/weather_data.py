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

# Current weather variables
CURRENT_VARS = [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
]

def geocode_county(county: str, state: str) -> Tuple[float, float]:
    """Return (lat, lon) for '<county> County, <state>, USA'."""
    loc = Nominatim(user_agent="county-weather").geocode(f"{county} County, {state}, USA")
    if not loc:
        raise ValueError("County not found—check spelling.")
    return loc.latitude, loc.longitude

def fetch_forecast(lat: float, lon: float, days: int = 1) -> Tuple[pd.DataFrame, Dict]:
    """Fetch weather forecast and current weather for specified number of days."""
    today = dt.date.today()
    
    # Fetch forecast data
    forecast_params = {
        "latitude": lat,
        "longitude": lon,
        "timezone": "auto",
        "daily": ",".join(DAILY_VARS),
        "start_date": today.isoformat(),
        "end_date": (today + dt.timedelta(days=days-1)).isoformat(),
    }
    
    # Fetch current weather data
    current_params = {
        "latitude": lat,
        "longitude": lon,
        "timezone": "auto",
        "current": ",".join(CURRENT_VARS),
    }
    
    # Make API calls
    forecast_r = requests.get("https://api.open-meteo.com/v1/forecast", params=forecast_params, timeout=10)
    current_r = requests.get("https://api.open-meteo.com/v1/forecast", params=current_params, timeout=10)
    
    forecast_r.raise_for_status()
    current_r.raise_for_status()
    
    # Process forecast data
    forecast_data = forecast_r.json()["daily"]
    df = pd.DataFrame(forecast_data).rename(
        columns={
            "time": "date",
            "temperature_2m_max": "t_max",
            "temperature_2m_min": "t_min",
            "precipitation_sum": "precip",
            "wind_speed_10m_max": "wind_max",
            "wind_gusts_10m_max": "gust_max",
        }
    )
    
    # Process current weather data
    current_data = current_r.json()
    if "current" not in current_data:
        print("Warning: No current weather data available")
        current_weather = {
            "current_temp": None,
            "feels_like": None,
            "humidity": None,
        }
    else:
        current = current_data["current"]
        current_weather = {
            "current_temp": current.get("temperature_2m"),
            "feels_like": current.get("apparent_temperature"),
            "humidity": current.get("relative_humidity_2m"),
        }
    
    return df, current_weather

def get_weather_for_county(county: str, state: str) -> Dict[str, Any]:
    """Get weather data for a single county and return as dictionary."""
    try:
        lat, lon = geocode_county(county, state)
        df, current_weather = fetch_forecast(lat, lon, days=1)  # Only get today's forecast
        
        # Convert the first row to a dictionary
        if not df.empty:
            weather_data = df.iloc[0].to_dict()
            # Add current weather data, using forecast data as fallback if current data is None
            weather_data.update({
                "current_temp": current_weather["current_temp"] or weather_data["t_max"],
                "feels_like": current_weather["feels_like"] or weather_data["t_max"],
                "humidity": current_weather["humidity"] or 50,  # Default humidity if not available
            })
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

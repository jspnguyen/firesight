from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path
from typing import Dict, Optional

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load weather data
def load_weather_data() -> Dict:
    weather_file = Path(__file__).parent / "result" / "weather_results.json"
    try:
        with open(weather_file, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

@app.get("/api/weather/{county}")
async def get_weather(county: str) -> Dict:
    """
    Get weather data for a specific county.
    """
    weather_data = load_weather_data()
    
    # Convert county name to match the format in the JSON file
    county = county.replace(" County", "").strip()
    
    if county not in weather_data:
        raise HTTPException(status_code=404, detail=f"Weather data not found for {county}")
    
    return weather_data[county]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 
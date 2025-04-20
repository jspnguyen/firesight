'use client';

import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import InfoSidebar from './InfoSidebar';
import type { Feature, Polygon } from 'geojson';

// Initialize Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const CITY_COORDINATES = {
  "Yolo County, CA": { longitude: -121.7405, latitude: 38.5449, zoom: 11 },
  "Santa Clara County, CA": { longitude: -121.8863, latitude: 37.3382, zoom: 11 },
  "Los Angeles County, CA": { longitude: -118.2437, latitude: 34.0522, zoom: 10 },
  "Monterey County, CA": { longitude: -121.8947, latitude: 36.6005, zoom: 11 },
  "Shasta County, CA": { longitude: -122.3784, latitude: 40.5865, zoom: 10 },
} as const;

// County FIPS codes for California
const COUNTY_FIPS = {
  "Yolo County, CA": "113",
  "Santa Clara County, CA": "085",
  "Los Angeles County, CA": "037",
  "Monterey County, CA": "053",
  "Shasta County, CA": "089"
} as const;

// County GeoJSON data with rigid shapes
const COUNTY_BOUNDARIES: Record<string, Feature<Polygon>> = {
  "Yolo County, CA": {
    type: "Feature",
    properties: { name: "Yolo County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-122.0, 38.9], // Northwest
        [-121.7, 38.9], // North
        [-121.4, 38.8], // Northeast
        [-121.4, 38.6], // East
        [-121.5, 38.4], // Southeast
        [-121.8, 38.3], // South
        [-122.1, 38.5], // Southwest
        [-122.0, 38.7], // West
        [-122.0, 38.9]  // Back to start
      ]]
    }
  },
  "Santa Clara County, CA": {
    type: "Feature",
    properties: { name: "Santa Clara County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-122.2, 37.4], // Northwest
        [-121.8, 37.5], // North
        [-121.2, 37.4], // Northeast
        [-121.3, 37.1], // East
        [-121.5, 36.9], // Southeast
        [-121.8, 36.9], // South
        [-122.1, 37.1], // Southwest
        [-122.2, 37.2], // West
        [-122.2, 37.4]  // Back to start
      ]]
    }
  },
  "Los Angeles County, CA": {
    type: "Feature",
    properties: { name: "Los Angeles County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-118.9, 34.8],  // Northwest
        [-117.8, 34.8],  // North
        [-117.6, 34.5],  // Northeast
        [-117.7, 34.0],  // East
        [-118.1, 33.7],  // Southeast
        [-118.4, 33.7],  // South
        [-118.6, 33.9],  // Southwest
        [-118.8, 34.3],  // West
        [-118.9, 34.8]   // Back to start
      ]]
    }
  },
  "Monterey County, CA": {
    type: "Feature",
    properties: { name: "Monterey County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-121.9, 36.9], // Northwest
        [-121.4, 36.9], // North
        [-121.0, 36.7], // Northeast
        [-121.1, 36.3], // East
        [-121.3, 36.0], // Southeast
        [-121.6, 35.9], // South
        [-121.8, 36.2], // Southwest
        [-121.9, 36.5], // West
        [-121.9, 36.9]  // Back to start
      ]]
    }
  },
  "Shasta County, CA": {
    type: "Feature",
    properties: { name: "Shasta County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-122.8, 41.0], // Northwest
        [-122.2, 41.1], // North
        [-121.8, 41.0], // Northeast
        [-121.7, 40.6], // East
        [-121.9, 40.3], // Southeast
        [-122.3, 40.2], // South
        [-122.6, 40.4], // Southwest
        [-122.8, 40.7], // West
        [-122.8, 41.0]  // Back to start
      ]]
    }
  }
};

interface MapboxMapProps {
  onCitySelect?: (city: string) => void;
}

export default function MapboxMap({ onCitySelect }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showInfoSidebar, setShowInfoSidebar] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-119.4179, 36.7783], // California center
      zoom: 5.5, // Good zoom level to see all of California
    });

    map.current = newMap;

    // Add markers once map is loaded
    newMap.on('load', () => {
      // Add county boundaries source
      newMap.addSource('counties', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: Object.values(COUNTY_BOUNDARIES)
        }
      });

      // Add county boundaries layer
      newMap.addLayer({
        id: 'county-boundaries',
        type: 'line',
        source: 'counties',
        paint: {
          'line-color': '#FF6B35',
          'line-width': 2,
          'line-opacity': 0.8
        }
      });

      // Add county fill layer
      newMap.addLayer({
        id: 'county-fill',
        type: 'fill',
        source: 'counties',
        paint: {
          'fill-color': '#FF6B35',
          'fill-opacity': 0.1
        }
      });

      // Initially hide both layers
      newMap.setLayoutProperty('county-boundaries', 'visibility', 'none');
      newMap.setLayoutProperty('county-fill', 'visibility', 'none');

      Object.entries(CITY_COORDINATES).forEach(([cityName, coords]) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([coords.longitude, coords.latitude])
          .addTo(newMap);

        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="text-sm font-semibold">${cityName}</h3>`);

        marker.setPopup(popup);
        markersRef.current.push(marker);

        marker.getElement().addEventListener('click', () => {
          navigateToCity(cityName as keyof typeof CITY_COORDINATES);
        });
      });
    });

    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Handle predefined city navigation
  const navigateToCity = (cityName: keyof typeof CITY_COORDINATES) => {
    if (!map.current) return;
    
    const coords = CITY_COORDINATES[cityName];
    setSelectedCity(cityName);
    setShowInfoSidebar(true);
    setIsCollapsed(true);
    
    if (onCitySelect) {
      onCitySelect(cityName);
    }

    // Show the county boundaries
    map.current.setLayoutProperty('county-boundaries', 'visibility', 'visible');
    map.current.setLayoutProperty('county-fill', 'visibility', 'visible');

    // Get the county name without ", CA" suffix
    const countyName = cityName.replace(', CA', '');

    // Update filters to show only the selected county
    const filter: mapboxgl.FilterSpecification = ['==', ['get', 'name'], countyName];

    map.current.setFilter('county-boundaries', filter);
    map.current.setFilter('county-fill', filter);

    map.current.flyTo({
      center: [coords.longitude, coords.latitude],
      zoom: coords.zoom,
      duration: 2000,
      essential: true
    });
  };

  // Handle general location search
  const handleSearch = async () => {
    if (!searchInput || !map.current) return;

    const searchTerm = searchInput.toLowerCase().trim();
    setIsLoading(true);

    // First check if it's one of our predefined cities
    const cityName = Object.keys(CITY_COORDINATES).find(city => 
      city.toLowerCase().includes(searchTerm)
    );

    if (cityName) {
      navigateToCity(cityName as keyof typeof CITY_COORDINATES);
      setSearchInput('');
      setIsLoading(false);
      setTimeout(() => {
        setIsCollapsed(true);
        setShowInfoSidebar(true);
      }, 300);
      return;
    }

    // If not a predefined city, search using Mapbox Geocoding API
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchInput
        )}.json?access_token=${mapboxgl.accessToken}&limit=1`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        const placeName = data.features[0].place_name;

        setSelectedCity(placeName);
        
        if (onCitySelect) {
          onCitySelect(placeName);
        }

        map.current.flyTo({
          center: [longitude, latitude],
          zoom: 13,
          duration: 2000,
          essential: true
        });

        setSearchInput('');
        setTimeout(() => {
          setIsCollapsed(true);
          setShowInfoSidebar(true);
        }, 300);
      }
    } catch (error) {
      console.error('Error searching location:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-10">
        <div 
          className={`flex gap-2 transition-all duration-300 origin-left
            ${isCollapsed ? 'scale-90' : 'scale-100'}
            ${isCollapsed ? 'w-14 p-1 bg-transparent' : 'w-96 p-2 bg-white rounded-lg shadow-lg'}`}
        >
          {!isCollapsed ? (
            <>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for any location..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 bg-white"
                disabled={isLoading}
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300`}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsCollapsed(false);
                setShowInfoSidebar(false);
              }}
              className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute right-0 top-0 h-full">
        <InfoSidebar selectedCity={selectedCity || "Location"} visible={showInfoSidebar} />
      </div>
    </div>
  );
} 

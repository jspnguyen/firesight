'use client';

import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import InfoSidebar from './InfoSidebar';

// Initialize Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const CITY_COORDINATES = {
  "Davis, CA": { longitude: -121.7405, latitude: 38.5449, zoom: 13 },
  "San Jose, CA": { longitude: -121.8863, latitude: 37.3382, zoom: 12 },
  "Los Angeles, CA": { longitude: -118.2437, latitude: 34.0522, zoom: 11 },
} as const;

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

        setSelectedCity(null);
        
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
        <InfoSidebar selectedCity={selectedCity || "Davis, CA"} visible={showInfoSidebar} />
      </div>
    </div>
  );
} 
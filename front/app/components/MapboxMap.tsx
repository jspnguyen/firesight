'use client';

import { useState, useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

// Initialize Mapbox
const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapboxMapProps {
  initialViewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
}

export default function MapboxMap({ initialViewState = { longitude: -121.7405, latitude: 38.5449, zoom: 12 } }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [searchInput, setSearchInput] = useState('');
  const [lng, setLng] = useState(initialViewState.longitude);
  const [lat, setLat] = useState(initialViewState.latitude);
  const [zoom, setZoom] = useState(initialViewState.zoom);
  const [mapboxgl, setMapboxgl] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('mapbox-gl').then((mapbox) => {
        setMapboxgl(mapbox.default);
        mapbox.default.accessToken = accessToken;
      });
    }
  }, []);

  useEffect(() => {
    if (!mapboxgl || !mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxgl]);

  const handleSearch = async () => {
    if (!searchInput || !map.current || !mapboxgl) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchInput
        )}.json?access_token=${accessToken}&limit=1`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        
        map.current.flyTo({
          center: [longitude, latitude],
          zoom: 14
        });

        // Remove existing markers
        const markers = document.getElementsByClassName('mapboxgl-marker');
        Array.from(markers).forEach(marker => marker.remove());

        // Add new marker
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map.current);
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute top-4 left-4 z-10 w-96 bg-white rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search for a location..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
} 
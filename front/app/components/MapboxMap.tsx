'use client';

import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import InfoSidebar from './InfoSidebar';
import type { Feature, Polygon } from 'geojson';
import weatherData from './result/weather_results.json';
import demographicData from './result/demographic_results.json';
import { Camera, ChevronLeft, Save, Mail, Loader2, X } from 'lucide-react';

// Initialize Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const CITY_COORDINATES = {
  "Yolo County, CA": { longitude: -121.7405, latitude: 38.5449, zoom: 11 },
  "Los Angeles County, CA": { longitude: -118.2437, latitude: 34.0522, zoom: 10 },
  "Monterey County, CA": { longitude: -121.8947, latitude: 36.6005, zoom: 11 },
  "Shasta County, CA": { longitude: -122.3784, latitude: 40.5865, zoom: 10 },
  "Kern County, CA": { longitude: -119.0195, latitude: 35.3434, zoom: 10 },
  "Riverside County, CA": { longitude: -117.3874, latitude: 33.9534, zoom: 10 },
} as const;

// County FIPS codes for California
const COUNTY_FIPS = {
  "Yolo County, CA": "113",
  "Los Angeles County, CA": "037",
  "Monterey County, CA": "053",
  "Shasta County, CA": "089",
  "Kern County, CA": "029",
  "Riverside County, CA": "065"
} as const;

// Calculate fire risk level based on weather and demographic data
const calculateFireRisk = (countyName: string): number => {
  const county = countyName.replace(", CA", "");
  const weather = weatherData[county as keyof typeof weatherData];
  const demographics = demographicData[county as keyof typeof demographicData];
  
  if (!weather || !demographics) return 0;
  
  // Normalize and weight different risk factors
  const tempRisk = Math.min((weather.t_max - 15) / 20, 1); // Higher risk above 35°C
  const windRisk = Math.min((weather.wind_max + weather.gust_max) / 100, 1); // Higher risk with strong winds
  const precipRisk = Math.max(1 - weather.precip / 10, 0); // Lower risk with precipitation
  const sviRisk = demographics.svi; // Social Vulnerability Index (already 0-1)
  
  // Combine risk factors (weights can be adjusted)
  const totalRisk = (tempRisk * 0.3) + (windRisk * 0.3) + (precipRisk * 0.2) + (sviRisk * 0.2);
  return Math.min(Math.max(totalRisk, 0), 1);
};

// County GeoJSON data with more accurate shapes
const COUNTY_BOUNDARIES: Record<string, Feature<Polygon>> = {
  "Shasta County, CA": {
    type: "Feature",
    properties: { name: "Shasta County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-122.9424, 41.1846], // Northwest
        [-122.5972, 41.1998], // North
        [-121.8307, 41.1834], // Northeast
        [-121.7082, 40.8940], // East
        [-121.6271, 40.4913], // Southeast
        [-121.9183, 40.2766], // South
        [-122.3681, 40.1385], // Southwest
        [-122.6826, 40.3824], // West
        [-122.9424, 41.1846]  // Back to start
      ]]
    }
  },
  "Los Angeles County, CA": {
    type: "Feature",
    properties: { name: "Los Angeles County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-118.9429, 34.8180], // Northwest
        [-118.1664, 34.8900], // North
        [-117.6551, 34.8235], // Northeast
        [-117.6551, 34.0222], // East
        [-118.1555, 33.7032], // Southeast
        [-118.4083, 33.7032], // South
        [-118.6831, 33.9037], // Southwest
        [-118.8853, 34.0768], // West
        [-118.9429, 34.8180]  // Back to start
      ]]
    }
  },
  "Yolo County, CA": {
    type: "Feature",
    properties: { name: "Yolo County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-122.1571, 38.8634], // Northwest
        [-121.9073, 38.8525], // North
        [-121.7466, 38.8525], // Northeast
        [-121.5914, 38.5796], // East
        [-121.4966, 38.3033], // Southeast
        [-121.6847, 38.2924], // South
        [-121.8618, 38.2924], // Southwest
        [-122.0460, 38.5796], // West
        [-122.1571, 38.8634]  // Back to start
      ]]
    }
  },
  "Monterey County, CA": {
    type: "Feature",
    properties: { name: "Monterey County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-121.9073, 36.9107], // Northwest
        [-121.4582, 36.9107], // North
        [-121.1429, 36.7305], // Northeast
        [-120.8987, 36.3919], // East
        [-121.2473, 35.9079], // Southeast
        [-121.4692, 35.7932], // South
        [-121.8508, 35.9189], // Southwest
        [-121.9347, 36.3373], // West
        [-121.9073, 36.9107]  // Back to start
      ]]
    }
  },
  "Kern County, CA": {
    type: "Feature",
    properties: { name: "Kern County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-119.9183, 35.7891], // Northwest
        [-119.4424, 35.8998], // North
        [-118.9307, 35.8834], // Northeast
        [-118.7082, 35.5940], // East
        [-118.4271, 35.2913], // Southeast
        [-118.5183, 34.9766], // South
        [-119.1681, 34.8385], // Southwest
        [-119.6826, 35.0824], // West
        [-119.9183, 35.7891]  // Back to start
      ]]
    }
  },
  "Riverside County, CA": {
    type: "Feature",
    properties: { name: "Riverside County" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-117.5, 34.0], // Northwest near San Bernardino Forest
        [-117.1, 34.1], // North near Big Bear
        [-116.5, 34.1], // North central
        [-115.5, 34.1], // Northeast near Joshua Tree
        [-114.7, 34.3], // Far northeast at Colorado River
        [-114.6, 34.1], // East at Colorado River
        [-114.5, 33.8], // Southeast at Colorado River
        [-114.7, 33.4], // Far southeast at Blythe
        [-115.5, 33.2], // South near Salton Sea
        [-116.1, 33.4], // South central
        [-116.8, 33.4], // Southwest near mountains
        [-117.2, 33.5], // Southwest near coast
        [-117.5, 33.7], // West near Laguna Beach
        [-117.6, 33.9], // Northwest near Anaheim
        [-117.5, 34.0]  // Back to start
      ]]
    }
  }
};

// High-risk zones within counties
const HIGH_RISK_ZONES: Record<string, Array<Feature<Polygon>>> = {
  "Shasta County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.9 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-122.5, 40.8],
          [-122.4, 40.85],
          [-122.3, 40.82],
          [-122.25, 40.78],
          [-122.3, 40.75],
          [-122.35, 40.72],
          [-122.4, 40.65],
          [-122.45, 40.68],
          [-122.5, 40.75],
          [-122.5, 40.8]
        ]]
      }
    },
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 2", riskLevel: 0.85 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-122.0, 40.7],
          [-121.95, 40.72],
          [-121.9, 40.68],
          [-121.85, 40.65],
          [-121.8, 40.62],
          [-121.85, 40.58],
          [-121.9, 40.55],
          [-121.95, 40.52],
          [-122.0, 40.55],
          [-122.0, 40.7]
        ]]
      }
    }
  ],
  "Los Angeles County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.95 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-118.5, 34.5],
          [-118.45, 34.52],
          [-118.4, 34.48],
          [-118.35, 34.45],
          [-118.3, 34.42],
          [-118.35, 34.38],
          [-118.4, 34.35],
          [-118.45, 34.32],
          [-118.5, 34.35],
          [-118.5, 34.5]
        ]]
      }
    }
  ],
  "Yolo County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.8 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-121.9, 38.7],
          [-121.85, 38.72],
          [-121.8, 38.68],
          [-121.75, 38.65],
          [-121.7, 38.62],
          [-121.75, 38.58],
          [-121.8, 38.55],
          [-121.85, 38.52],
          [-121.9, 38.55],
          [-121.9, 38.7]
        ]]
      }
    }
  ],
  "Monterey County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.87 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-121.5, 36.5],
          [-121.45, 36.52],
          [-121.4, 36.48],
          [-121.35, 36.45],
          [-121.3, 36.42],
          [-121.35, 36.38],
          [-121.4, 36.35],
          [-121.45, 36.32],
          [-121.5, 36.35],
          [-121.5, 36.5]
        ]]
      }
    }
  ],
  "Kern County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.92 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-119.5, 35.5],
          [-119.45, 35.52],
          [-119.4, 35.48],
          [-119.35, 35.45],
          [-119.3, 35.42],
          [-119.35, 35.38],
          [-119.4, 35.35],
          [-119.45, 35.32],
          [-119.5, 35.35],
          [-119.5, 35.5]
        ]]
      }
    }
  ],
  "Riverside County, CA": [
    {
      type: "Feature" as const,
      properties: { name: "High Risk Zone 1", riskLevel: 0.88 },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [-117.0, 33.9],
          [-116.95, 33.92],
          [-116.9, 33.88],
          [-116.85, 33.85],
          [-116.8, 33.82],
          [-116.85, 33.78],
          [-116.9, 33.75],
          [-116.95, 33.72],
          [-117.0, 33.75],
          [-117.0, 33.9]
        ]]
      }
    }
  ]
};

interface MapboxMapProps {
  onCitySelect?: (city: string) => void;
}

export default function MapboxMap({ onCitySelect }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const targetMarkersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showInfoSidebar, setShowInfoSidebar] = useState(false);
  const [showScreenshotPopup, setShowScreenshotPopup] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [isCapturingScreenshot, setIsCapturingScreenshot] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailRecipient, setEmailRecipient] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-119.4179, 36.7783], // California center
      zoom: 5.5, // Good zoom level to see all of California
      preserveDrawingBuffer: true
    });

    // Add zoom controls to bottom right
    newMap.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    map.current = newMap;

    // Add markers once map is loaded
    newMap.on('load', () => {
      // Calculate fire risk for all counties and add to features
      const featuresWithRisk = Object.entries(COUNTY_BOUNDARIES).map(([cityName, feature]) => ({
        ...feature,
        properties: {
          ...feature.properties,
          fireRisk: calculateFireRisk(cityName)
        }
      }));

      // Add county boundaries source first
      newMap.addSource('counties', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: featuresWithRisk
        }
      });

      // Add high-risk zones source
      newMap.addSource('high-risk-zones', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: Object.values(HIGH_RISK_ZONES).flat()
        }
      });

      // Add county fill layer first (underneath everything)
      newMap.addLayer({
        id: 'county-fill',
        type: 'fill',
        source: 'counties',
        paint: {
          'fill-color': 'rgba(255, 165, 0, 0.2)'  // Light orange color with 20% opacity
        }
      });

      // Add high-risk zones layer
      newMap.addLayer({
        id: 'high-risk-zones',
        type: 'fill',
        source: 'high-risk-zones',
        paint: {
          'fill-color': 'rgba(255, 0, 0, 0.4)',
          'fill-outline-color': 'rgba(255, 0, 0, 0.8)'
        }
      });

      // Add county boundaries layer on top
      newMap.addLayer({
        id: 'county-boundaries',
        type: 'line',
        source: 'counties',
        paint: {
          'line-color': '#FF6B35',
          'line-width': 2,
          'line-opacity': 0.67
        }
      });

      // Initially hide all layers
      newMap.setLayoutProperty('county-boundaries', 'visibility', 'none');
      newMap.setLayoutProperty('county-fill', 'visibility', 'none');
      newMap.setLayoutProperty('high-risk-zones', 'visibility', 'none');

      // Add markers for each city
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
      targetMarkersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      targetMarkersRef.current = [];
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

    // Clear any existing target markers
    targetMarkersRef.current.forEach(marker => marker.remove());
    targetMarkersRef.current = [];

    // Show the layers only for the selected county
    map.current.setLayoutProperty('county-boundaries', 'visibility', 'visible');
    map.current.setLayoutProperty('county-fill', 'visibility', 'visible');
    map.current.setLayoutProperty('high-risk-zones', 'visibility', 'visible');

    // Get the county name without ", CA" suffix
    const countyName = cityName.replace(', CA', '');

    // Calculate fire risk for the selected county
    const fireRisk = calculateFireRisk(cityName);

    // Update the source data to include fire risk
    const countyFeature = COUNTY_BOUNDARIES[cityName];
    if (countyFeature) {
      countyFeature.properties = {
        ...countyFeature.properties,
        fireRisk: fireRisk
      };
    }

    // Update source data to show only the selected county
    if (map.current.getSource('counties')) {
      (map.current.getSource('counties') as mapboxgl.GeoJSONSource).setData({
        type: 'FeatureCollection',
        features: [countyFeature]
      });
    }

    // Update high-risk zones to show only for selected county
    if (map.current.getSource('high-risk-zones')) {
      const countyRiskZones = HIGH_RISK_ZONES[cityName] || [];
      (map.current.getSource('high-risk-zones') as mapboxgl.GeoJSONSource).setData({
        type: 'FeatureCollection',
        features: countyRiskZones
      });
    }

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

    // If not a predefined city, hide all layers
    map.current.setLayoutProperty('county-boundaries', 'visibility', 'none');
    map.current.setLayoutProperty('county-fill', 'visibility', 'none');
    map.current.setLayoutProperty('high-risk-zones', 'visibility', 'none');

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

  // Function to take a screenshot of the map
  const takeScreenshot = async () => {
    if (!map.current) return;
    
    setIsCapturingScreenshot(true);
    
    try {
      // Wait for the map to be fully rendered
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Force the map to render a frame
      map.current.triggerRepaint();
      
      // Get the map canvas
      const mapCanvas = map.current.getCanvas();
      
      // Create a new canvas with the same dimensions
      const canvas = document.createElement('canvas');
      canvas.width = mapCanvas.width;
      canvas.height = mapCanvas.height;
      
      // Get the context and draw the map canvas onto it
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }
      
      // Clear the canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the map canvas
      ctx.drawImage(mapCanvas, 0, 0);
      
      // Convert to data URL
      const dataUrl = map.current.getCanvas().toDataURL('image/png');
      
      // Check if the data URL is valid (not blank)
      if (dataUrl === 'data:,') {
        throw new Error('Screenshot is blank. The map may not be fully rendered.');
      }
      
      setScreenshotUrl(dataUrl);
      setShowScreenshotPopup(true);
    } catch (error) {
      console.error('Error taking screenshot:', error);
      alert('Failed to capture screenshot. Please try again.');
    } finally {
      setIsCapturingScreenshot(false);
    }
  };
  
  // Function to save screenshot to computer
  const saveScreenshot = () => {
    if (!screenshotUrl) return;
    
    // Create a link element
    const link = document.createElement('a');
    link.href = screenshotUrl;
    link.download = `firesight-map-${new Date().toISOString().slice(0, 10)}.png`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close popup
    setShowScreenshotPopup(false);
  };
  
  // Function to handle email button click
  const handleEmailClick = () => {
    if (!screenshotUrl) return;
    
    // Show the email modal instead of using prompts
    setShowEmailModal(true);
  };

  // Function to send the email
  const sendEmail = () => {
    if (!emailRecipient) return;
    
    // Create a subject line with the current date and selected city
    const today = new Date().toISOString().slice(0, 10);
    const subject = `Firesight Map Screenshot - ${selectedCity || "Location"} - ${today}`;
    
    // Create a body with information about the screenshot
    let body = `Hello,\n\nI'm sharing a screenshot from the Firesight wildfire monitoring dashboard for ${selectedCity || "this location"}.\n\nThis screenshot was taken on ${today}.`;
    
    // Add the user's message if provided
    if (emailMessage) {
      body += `\n\nAdditional message: ${emailMessage}`;
    }
    
    body += `\n\nBest regards,\nFiresight User`;
    
    // Encode the subject and body for the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Create the mailto link with the recipient
    const mailtoLink = `mailto:${emailRecipient}?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Open the default email client
    window.open(mailtoLink, '_blank');
    
    // Reset form and close modals
    setEmailRecipient('');
    setEmailMessage('');
    setShowEmailModal(false);
    setShowScreenshotPopup(false);
  };

  // Function to generate a random point within a polygon
  const generateRandomPointInPolygon = (polygon: Feature<Polygon>): [number, number] => {
    console.log("Generating random point in polygon:", polygon);
    
    const coordinates = polygon.geometry.coordinates[0]; // Get the first ring of the polygon
    console.log("Polygon coordinates:", coordinates);
    
    const bounds = {
      minLng: Math.min(...coordinates.map(coord => coord[0])),
      maxLng: Math.max(...coordinates.map(coord => coord[0])),
      minLat: Math.min(...coordinates.map(coord => coord[1])),
      maxLat: Math.max(...coordinates.map(coord => coord[1]))
    };
    
    console.log("Polygon bounds:", bounds);
    
    // Generate a random point within the bounding box
    let point: [number, number] = [0, 0]; // Initialize with default values
    let isInside = false;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops
    
    // Keep generating points until we find one inside the polygon
    while (!isInside && attempts < maxAttempts) {
      const lng = bounds.minLng + Math.random() * (bounds.maxLng - bounds.minLng);
      const lat = bounds.minLat + Math.random() * (bounds.maxLat - bounds.minLat);
      point = [lng, lat];
      
      // Check if the point is inside the polygon using ray casting algorithm
      isInside = isPointInPolygon(point, coordinates);
      attempts++;
    }
    
    if (!isInside) {
      console.warn("Failed to generate a point inside the polygon after", maxAttempts, "attempts. Using center point.");
      // Use the center of the bounding box as a fallback
      point = [
        (bounds.minLng + bounds.maxLng) / 2,
        (bounds.minLat + bounds.maxLat) / 2
      ];
    }
    
    console.log("Generated point:", point);
    return point;
  };

  // Ray casting algorithm to check if a point is inside a polygon
  const isPointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
    const [x, y] = point;
    let inside = false;
    
    // Make sure we have a valid polygon
    if (!polygon || polygon.length < 3) {
      console.error("Invalid polygon:", polygon);
      return false;
    }
    
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      
      // Check if the point is on the edge of the polygon
      if ((yi === y && yj === y) && ((x >= xi && x <= xj) || (x >= xj && x <= xi))) {
        return true;
      }
      
      const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    
    return inside;
  };

  // Function to add random targets within a county
  const addRandomTargets = (countyName: string) => {
    console.log("addRandomTargets called with county:", countyName);
    
    if (!map.current) {
      console.error("Map is not initialized");
      return;
    }
    
    // Convert county name to the format used in COUNTY_BOUNDARIES
    const formattedCountyName = `${countyName} County, CA`;
    console.log("Looking for county with name:", formattedCountyName);
    
    // Get the county feature
    const countyFeature = COUNTY_BOUNDARIES[formattedCountyName as keyof typeof COUNTY_BOUNDARIES];
    if (!countyFeature) {
      console.error("County feature not found for:", formattedCountyName);
      return;
    }
    
    console.log("County feature found:", countyFeature);
    
    // Clear existing target markers only
    console.log("Clearing existing target markers:", targetMarkersRef.current.length);
    targetMarkersRef.current.forEach(marker => marker.remove());
    targetMarkersRef.current = [];
    
    // Generate 4-8 random points within the county
    const numTargets = Math.floor(Math.random() * 5) + 4; // Random number between 4 and 8
    console.log("Generating", numTargets, "targets");
    const targets: [number, number][] = [];
    
    for (let i = 0; i < numTargets; i++) {
      const point = generateRandomPointInPolygon(countyFeature);
      targets.push(point);
      console.log("Generated target", i+1, "at:", point);
    }
    
    // Add markers for each target
    targets.forEach((point, index) => {
      console.log("Adding marker for target", index+1, "at:", point);
      const marker = new mapboxgl.Marker({
        color: '#FF4500', // Orange-red color
        scale: 0.8
      })
        .setLngLat(point)
        .addTo(map.current!);
      
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3 class="text-sm font-semibold">Target ${index + 1}</h3>`);
      
      marker.setPopup(popup);
      targetMarkersRef.current.push(marker); // Add to target markers ref instead
    });
    
    // Zoom to the county
    const coords = CITY_COORDINATES[formattedCountyName as keyof typeof CITY_COORDINATES];
    if (coords) {
      console.log("Zooming to county at:", coords);
      map.current.flyTo({
        center: [coords.longitude, coords.latitude],
        zoom: coords.zoom,
        duration: 2000,
        essential: true
      });
    } else {
      console.error("Coordinates not found for county:", formattedCountyName);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 z-10">
        <div className="flex gap-2">
          <div 
            className={`flex items-center transition-all duration-300 ease-out
              ${isCollapsed ? 'w-12 scale-95' : 'w-[400px] bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100'}
              ${isCollapsed ? '' : 'px-4 py-2'}`}
          >
            {!isCollapsed ? (
              <>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for any location..."
                  className="flex-1 bg-transparent text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  disabled={isLoading}
                />
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className={`text-slate-600 text-base font-medium focus:outline-none disabled:text-slate-300 
                      transition-all duration-300 relative group overflow-hidden
                      ${searchInput ? 'px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0' : 'hover:text-orange-500'}`}
                  >
                    {isLoading ? (
                      'Searching...'
                    ) : (
                      <>
                        <span className={`relative z-10 ${searchInput ? 'animate-pulse' : ''}`}>Search</span>
                        {searchInput && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        )}
                      </>
                    )}
                  </button>
                  <div className="w-px h-4 bg-slate-200"/>
                  <button
                    onClick={() => setIsCollapsed(true)}
                    className="text-slate-400 hover:text-orange-500 focus:outline-none 
                      transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsCollapsed(false);
                  setShowInfoSidebar(false);
                }}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg 
                  transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-orange-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
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
          
          {isCollapsed && (
            <button
              onClick={takeScreenshot}
              disabled={isCapturingScreenshot}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg 
                transition-all duration-200 hover:scale-110 active:scale-95 hover:shadow-lg group
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCapturingScreenshot ? (
                <Loader2 className="h-5 w-5 text-slate-400 animate-spin" />
              ) : (
                <Camera 
                  className="h-5 w-5 text-slate-400 transition-colors duration-200 group-hover:text-orange-500" 
                />
              )}
            </button>
          )}
        </div>
      </div>
      
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute right-0 top-0 h-full">
        <InfoSidebar 
          selectedCity={selectedCity || "Location"} 
          visible={showInfoSidebar} 
          onTakeAction={addRandomTargets}
        />
      </div>

      {/* Screenshot Popup */}
      {showScreenshotPopup && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-[2px] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Map Screenshot</h3>
              <button 
                onClick={() => setShowScreenshotPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {screenshotUrl && (
              <div className="mb-4 border border-gray-200 rounded overflow-hidden">
                <img 
                  src={screenshotUrl} 
                  alt="Map Screenshot" 
                  className="w-full h-auto"
                />
              </div>
            )}
            
            <div className="flex justify-between">
              <button
                onClick={saveScreenshot}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition-all duration-300"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Email Screenshot</h3>
              <button 
                onClick={() => setShowEmailModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={emailRecipient}
                  onChange={(e) => setEmailRecipient(e.target.value)}
                  placeholder="recipient@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Add a message to your email..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={sendEmail}
                  disabled={!emailRecipient}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 

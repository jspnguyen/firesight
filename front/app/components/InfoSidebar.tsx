"use client"

import { useState, useEffect, useRef } from "react"
import { Info, Cloud, Lightbulb, ChevronRight, Loader2, Sun, CloudSun, Moon, CloudRain, CloudSnow, CloudLightning, Wind as WindIcon, Droplets, ArrowUp, ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import demographicData from "./result/demographic_results.json"
import suggestionsData from "./result/suggestions_results.json"
import { motion } from "framer-motion"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

// Map of cities to their corresponding counties
const cityToCountyMap = {
  "Yolo County, CA": "Yolo",
  "Los Angeles County, CA": "Los Angeles",
  "Monterey County, CA": "Monterey",
  "Shasta County, CA": "Shasta",
  "Kern County, CA": "Kern",
  "Riverside County, CA": "Riverside"
}

// Weather condition mapping based on temperature and precipitation
const getWeatherCondition = (temp: number, precip: number) => {
  if (precip > 0) {
    if (temp < 0) return "Snowy";
    return "Rainy";
  }
  if (temp > 25) return "Sunny";
  if (temp > 20) return "Partly Cloudy";
  if (temp > 15) return "Cloudy";
  if (temp > 10) return "Mostly Cloudy";
  return "Cold";
};

// Default suggestions in case the county data is not available
const defaultSuggestions = [
  ["Increase emergency response training", "https://www.fema.gov/emergency-managers/individuals-communities/youth"],
  ["Enhance community outreach programs", "https://thesocialchangeagency.org/blog/community-outreach-done-right-tips-for-charities-and-funders/"],
  ["Improve multilingual communication", "https://www.fcc.gov/MultilingualAlerting_EAS-WEA"],
  ["Boost volunteer recruitment", "https://www.redcross.org/volunteer/become-a-volunteer.html"],
  ["Expand disaster preparedness education", "https://www.ready.gov/plan"]
]

interface InfoSidebarProps {
  selectedCity: string | null;
  visible: boolean;
  onTakeAction?: (countyName: string) => void;
}

interface RaceData {
  name: string;
  percentage: string;
}

interface WeatherData {
  date: string;
  t_max: number;
  t_min: number;
  precip: number;
  wind_max: number;
  gust_max: number;
  current_temp: number;
  feels_like: number;
  humidity: number;
}

// Add a helper function to format temperature
const formatTemperature = (temp: number | null | undefined): string => {
  if (temp === null || temp === undefined || isNaN(temp)) {
    return "N/A";
  }
  return `${Math.round(temp)}°C`;
};

// Add a function to get the appropriate weather icon
const getWeatherIcon = (condition: string, size = 24) => {
  const iconProps = {
    size,
    strokeWidth: 1.5,
    className: "weather-icon",
  };

  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun {...iconProps} className="weather-icon sunny" />;
    case "partly cloudy":
      return <CloudSun {...iconProps} className="weather-icon cloudy" />;
    case "cloudy":
    case "mostly cloudy":
      return <Cloud {...iconProps} className="weather-icon cloudy" />;
    case "rainy":
      return <CloudRain {...iconProps} className="weather-icon rainy" />;
    case "snowy":
      return <CloudSnow {...iconProps} className="weather-icon snowy" />;
    default:
      return <Cloud {...iconProps} className="weather-icon cloudy" />;
  }
};

export default function InfoSidebar({ selectedCity, visible = false, onTakeAction }: InfoSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleSuggestions, setVisibleSuggestions] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("info")
  const [isScrollable, setIsScrollable] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [allSuggestionsShown, setAllSuggestionsShown] = useState(false)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weatherError, setWeatherError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const infoContentRef = useRef<HTMLDivElement>(null)
  
  // Check if the selected city is one of our predefined cities
  const isKnownCity = selectedCity && Object.keys(cityToCountyMap).includes(selectedCity);
  
  // Get the county name for the selected city
  const countyName = isKnownCity ? cityToCountyMap[selectedCity as keyof typeof cityToCountyMap] : null;
  
  // Get the demographic data for the county
  const countyData = countyName ? demographicData[countyName as keyof typeof demographicData] : null;
  
  // Get the suggestions data for the county, with fallback to default suggestions
  const countySuggestions = countyName && suggestionsData[countyName as keyof typeof suggestionsData] 
    ? suggestionsData[countyName as keyof typeof suggestionsData] 
    : defaultSuggestions;
  
  // Get the race data from the demographic data
  const raceData = countyData?.top_3_race ? 
    Object.entries(countyData.top_3_race)
      .map(([name, percentage]) => ({
        name,
        percentage: `${percentage}%`
      }))
      .sort((a, b) => {
        const aPercent = parseFloat(a.percentage.replace('%', ''));
        const bPercent = parseFloat(b.percentage.replace('%', ''));
        return bPercent - aPercent;
      }) : 
    null;

  // Reset states when location changes
  useEffect(() => {
    setVisibleSuggestions([])
    setAllSuggestionsShown(false)
    setIsLoading(false)
  }, [selectedCity])

  // Handle tab changes and suggestion reveals
  useEffect(() => {
    if (isKnownCity && activeTab === "suggestions" && !allSuggestionsShown) {
      // Only start loading if we haven't shown all suggestions yet
      if (visibleSuggestions.length < countySuggestions.length) {
        setIsLoading(true)
        const timer = setTimeout(() => {
          setVisibleSuggestions(prev => {
            const nextIndex = prev.length;
            const newSuggestions = [...prev, nextIndex];
            
            // Check if we've shown all suggestions
            if (newSuggestions.length === countySuggestions.length) {
              setAllSuggestionsShown(true)
            }
            
            setIsLoading(false)
            return newSuggestions;
          })
        }, 2000)

        return () => clearTimeout(timer)
      }
    }
  }, [isKnownCity, activeTab, visibleSuggestions.length, countySuggestions.length, allSuggestionsShown])

  useEffect(() => {
    if (visible) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [visible]);

  // Add scroll detection
  useEffect(() => {
    const checkScrollable = () => {
      const container = document.querySelector('.suggestions-container');
      if (container) {
        const isScrollableNow = container.scrollHeight > container.clientHeight;
        setIsScrollable(isScrollableNow);
        
        // Check if we're at the bottom
        const isAtBottomNow = Math.abs((container.scrollHeight - container.scrollTop) - container.clientHeight) < 10;
        setIsAtBottom(isAtBottomNow);
      }
    };

    // Check initially
    checkScrollable();
    
    // Add scroll event listener
    const container = document.querySelector('.suggestions-container');
    if (container) {
      container.addEventListener('scroll', checkScrollable);
    }

    // Add resize observer
    const resizeObserver = new ResizeObserver(checkScrollable);
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollable);
        resizeObserver.unobserve(container);
      }
    };
  }, [visibleSuggestions, activeTab]);

  const handleScrollClick = () => {
    const container = document.querySelector('.suggestions-container');
    if (container) {
      const currentScroll = container.scrollTop;
      const targetScroll = currentScroll + container.clientHeight * 0.8;
      
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Fetch weather data when county changes
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!countyName) {
        setWeatherData(null)
        return
      }

      setWeatherLoading(true)
      setWeatherError(null)

      try {
        const response = await fetch(`http://localhost:8000/api/weather/${countyName}`)
        if (!response.ok) {
          throw new Error(`Weather data not found for ${countyName}`)
        }
        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        setWeatherError(error instanceof Error ? error.message : 'Failed to fetch weather data')
        setWeatherData(null)
      } finally {
        setWeatherLoading(false)
      }
    }

    fetchWeatherData()
  }, [countyName])

  const handleDownloadPDF = async () => {
    if (!countyName || !countyData) return;
    
    setIsDownloading(true);
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      let yPosition = 20;
      const lineHeight = 7;
      const margin = 20;
      
      // Helper function to add text with proper line breaks
      const addText = (text: string, fontSize = 12, isBold = false) => {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        pdf.text(text, margin, yPosition);
        yPosition += lineHeight;
      };
      
      // Add header
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${countyName} County Information`, margin, yPosition);
      yPosition += lineHeight * 2;
      
      // Add race distribution
      addText('Race Distribution', 16, true);
      if (raceData) {
        raceData.forEach((race, index) => {
          addText(`${index + 1}. ${race.name}: ${race.percentage}`);
        });
      }
      yPosition += lineHeight;
      
      // Add key statistics
      addText('Key Statistics', 16, true);
      addText(`Population: ${countyData.total_pop.toLocaleString()}`);
      addText(`Median Income: $${countyData.median_income.toLocaleString()}`);
      addText(`Average Household Size: ${countyData.avg_household_size} people`);
      addText(`Poverty Rate: ${countyData.poverty_pct}%`);
      addText(`Homeless Population: ${countyData.total_homeless.toLocaleString()}`);
      yPosition += lineHeight;
      
      // Add additional metrics
      addText('Additional Metrics', 16, true);
      addText(`Limited English Proficiency: ${countyData.eng_less_than_very_well_pct}%`);
      addText(`Social Vulnerability Index: ${countyData.svi.toFixed(2)}`);
      
      // Add weather data if available
      if (weatherData) {
        yPosition += lineHeight;
        addText('Current Weather', 16, true);
        addText(`Temperature: ${formatTemperature(weatherData.current_temp)}`);
        addText(`Feels Like: ${formatTemperature(weatherData.feels_like)}`);
        addText(`Humidity: ${Math.round(weatherData.humidity)}%`);
        addText(`Wind: ${weatherData.wind_max} km/h`);
        addText(`Precipitation: ${weatherData.precip} mm`);
      }
      
      // Add suggestions if available
      if (countySuggestions) {
        yPosition += lineHeight;
        addText('Recommendations', 16, true);
        countySuggestions.forEach((suggestion, index) => {
          addText(`${index + 1}. ${suggestion[0]}`);
        });
      }
      
      pdf.save(`${countyName}_County_Info.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderNoDataMessage = () => (
    <div className="p-4 text-center text-slate-500">
      <p className="text-lg font-medium">Data not available</p>
      <p className="mt-2 text-sm">We currently only have data for Yolo County, Los Angeles County, Monterey County, and Shasta County.</p>
    </div>
  );

  return (
    <div
      className={`fixed rounded-2xl right-0 top-2 z-20 w-full max-w-md transform bg-white shadow-lg transition-transform duration-300 ease-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes wiggle {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-15%) translateX(-50%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes sunPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
          }
        }

        @keyframes cloudFloat {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-5px) translateY(-2px);
          }
          75% {
            transform: translateX(5px) translateY(2px);
          }
        }

        @keyframes rainDrop {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateY(10px);
            opacity: 1;
          }
        }

        @keyframes snowFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: translateY(10px) rotate(360deg);
            opacity: 1;
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .weather-icon {
          transition: all 0.3s ease;
        }

        .weather-icon.sunny {
          animation: sunPulse 3s infinite;
          color: #f97316;
        }

        .weather-icon.cloudy {
          animation: cloudFloat 4s infinite;
          color: #64748b;
        }

        .weather-icon.rainy {
          animation: cloudFloat 4s infinite;
          color: #475569;
        }

        .weather-icon.snowy {
          animation: cloudFloat 4s infinite;
          color: #94a3b8;
        }

        .rain-drops {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .rain-drop {
          position: absolute;
          width: 2px;
          height: 10px;
          background: #60a5fa;
          animation: rainDrop 1s infinite;
        }

        .snow-flake {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #f8fafc;
          border-radius: 50%;
          animation: snowFall 2s infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .weather-display {
          background: linear-gradient(135deg, #6ea5ff 0%, #ffa071 100%);
          position: relative;
          overflow: hidden;
        }

        .weather-display::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 80%);
          pointer-events: none;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        .temp-value {
          background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .metric-card {
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .metric-value {
          background: linear-gradient(135deg, #2C3E50 0%, #3498DB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {visible && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-10 top-4 hidden rounded-l-md rounded-r-none bg-white shadow-md transition-all duration-300 hover:bg-orange-50 hover:shadow-orange-100 md:flex group"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ChevronRight 
            className={`h-5 w-5 transition-all duration-300 ease-out 
              ${!sidebarOpen ? "rotate-180" : ""} 
              group-hover:scale-110 group-hover:text-orange-500`} 
          />
        </Button>
      )}

      <Tabs defaultValue="info" onValueChange={setActiveTab}>
        <TabsList className="sticky top-0 z-10 grid w-full grid-cols-3 bg-white rounded-t-2xl p-1">
          <TabsTrigger 
            value="info" 
            className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 
              data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)]
              hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]"
          >
            <Info className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110" />
            <span className="font-medium">Info</span>
          </TabsTrigger>
          <TabsTrigger 
            value="weather" 
            className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 
              data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)]
              hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]"
          >
            <Cloud className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110" />
            <span className="font-medium">Weather</span>
          </TabsTrigger>
          <TabsTrigger 
            value="suggestions" 
            className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 
              data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)]
              hover:scale-[1.02] active:scale-[0.98] data-[state=active]:animate-[wiggle_1s_ease-in-out_infinite]"
          >
            <Lightbulb className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110" />
            <span className="font-medium">Suggestions</span>
          </TabsTrigger>
        </TabsList>

        <div className="p-4">
          <TabsContent 
            value="info" 
            className="mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card className="overflow-hidden border-1 shadow-lg">
              <CardHeader className="sticky top-0 z-10 pb-2 bg-gradient-to-r from-orange-50 to-amber-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <Info className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-700">{selectedCity || "Location"}</span>
                      <span className="text-sm font-normal text-slate-500">{countyName ? `${countyName} County` : "Select a location"}</span>
                    </div>
                  </CardTitle>
                  {isKnownCity && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white hover:bg-orange-50 transition-colors duration-300"
                      onClick={handleDownloadPDF}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <Loader2 className="h-5 w-5 animate-spin text-orange-500" />
                      ) : (
                        <Download className="h-5 w-5 text-orange-500" />
                      )}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent 
                ref={infoContentRef}
                className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide"
              >
                {!isKnownCity ? renderNoDataMessage() : (
                  <div className="space-y-6">
                    {/* Race Distribution Section */}
                    <div className="space-y-3">
                      <h3 className="font-medium text-slate-700 flex items-center gap-2 mt-3">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        Top 3 Races
                      </h3>
                      <div className="space-y-2">
                        {raceData?.map((race, index) => (
                          <div 
                            key={index} 
                            className="group relative overflow-hidden rounded-lg bg-slate-50 p-3 transition-all duration-300 hover:bg-orange-50"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-medium text-slate-700 shadow-sm">
                                  {index + 1}
                                </div>
                                <span className="font-medium text-slate-800">{race.name}</span>
                              </div>
                              <span className="font-semibold text-orange-600">{race.percentage}</span>
                            </div>
                            <div 
                              className="absolute bottom-0 left-0 h-1 bg-orange-200 transition-all duration-300 group-hover:bg-orange-400"
                              style={{ width: race.percentage }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Statistics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Population", value: countyData?.total_pop.toLocaleString() },
                        { label: "Median Income", value: countyData ? `$${countyData.median_income.toLocaleString()}` : "N/A" },
                        { label: "Avg. Household Size", value: countyData ? `${countyData.avg_household_size} people` : "N/A" },
                        { label: "Poverty Rate", value: countyData ? `${countyData.poverty_pct}%` : "N/A" },
                        { label: "Homeless Population", value: countyData ? countyData.total_homeless.toLocaleString() : "N/A" }
                      ].map((stat, index) => (
                        <div 
                          key={index}
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:from-orange-50 hover:to-white"
                        >
                          <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
                          <p className="mt-1 text-2xl font-bold text-slate-800">
                            {stat.value}
                          </p>
                          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-200 to-amber-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      ))}
                    </div>

                    {/* Additional Metrics */}
                    <div className="space-y-3">
                      <h3 className="font-medium text-slate-700 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        Additional Metrics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Limited English", value: countyData ? `${countyData.eng_less_than_very_well_pct}%` : "N/A" },
                          { label: "Social Vulnerability", value: countyData ? countyData.svi.toFixed(2) : "N/A" }
                        ].map((metric, index) => (
                          <div 
                            key={index}
                            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-white p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:from-orange-50 hover:to-white"
                          >
                            <h3 className="text-sm font-medium text-slate-500">{metric.label}</h3>
                            <p className="mt-1 text-lg font-semibold text-slate-800">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent 
            value="weather" 
            className="mt-0 transform transition-all duration-300"
          >
            <div className="weather-display rounded-2xl p-6 relative min-h-[500px]">
              {/* Floating Particles Background */}
              <div className="floating-particles">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      animationDelay: `${Math.random() * 20}s`,
                      opacity: Math.random() * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="rounded-full bg-white/30 p-3 backdrop-blur-md"
                    >
                      {getWeatherIcon(getWeatherCondition(weatherData?.current_temp || 0, weatherData?.precip || 0), 32)}
                    </motion.div>
                    <div>
                      <h2 className="text-white text-2xl font-semibold">Current Weather</h2>
                      <p className="text-white/80">{selectedCity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm">Last Updated</p>
                    <p className="text-white font-medium">{weatherData?.date || 'N/A'}</p>
                  </div>
                </div>

                {/* Main Temperature Display */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card rounded-3xl p-8 mb-8 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-end gap-4">
                      <h1 className="temp-value text-7xl font-bold">
                        {formatTemperature(weatherData?.current_temp).replace('°C', '')}°
                      </h1>
                      <span className="text-4xl font-light text-slate-600 mb-2">C</span>
                    </div>
                    <p className="text-xl text-slate-600 mt-2">
                      {getWeatherCondition(weatherData?.current_temp || 0, weatherData?.precip || 0)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500">Feels like</p>
                    <p className="text-3xl font-semibold text-slate-700">
                      {formatTemperature(weatherData?.feels_like)}
                    </p>
                  </div>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "High",
                      value: formatTemperature(weatherData?.t_max),
                      icon: <ArrowUp className="text-red-500" />,
                      color: "from-red-500/10 to-orange-500/10"
                    },
                    {
                      label: "Low",
                      value: formatTemperature(weatherData?.t_min),
                      icon: <ArrowDown className="text-blue-500" />,
                      color: "from-blue-500/10 to-cyan-500/10"
                    },
                    {
                      label: "Humidity",
                      value: `${Math.round(weatherData?.humidity || 0)}%`,
                      icon: <Droplets className="text-sky-500" />,
                      color: "from-sky-500/10 to-blue-500/10"
                    },
                    {
                      label: "Wind",
                      value: `${weatherData?.wind_max || 0} km/h`,
                      icon: <WindIcon className="text-teal-500" />,
                      color: "from-teal-500/10 to-green-500/10"
                    },
                    {
                      label: "Gust",
                      value: `${weatherData?.gust_max || 0} km/h`,
                      icon: <WindIcon className="text-emerald-500" />,
                      color: "from-emerald-500/10 to-teal-500/10"
                    },
                    {
                      label: "Precip.",
                      value: `${weatherData?.precip || 0} mm`,
                      icon: <span className="text-xl">🌧️</span>,
                      color: "from-indigo-500/10 to-purple-500/10",
                      className: "text-[0.95rem]"
                    }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`metric-card glass-card rounded-2xl p-4 bg-gradient-to-br ${metric.color}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {metric.icon}
                        <span className={`text-slate-600 font-medium ${metric.className || ''}`}>{metric.label}</span>
                      </div>
                      <p className="metric-value text-2xl font-bold">{metric.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent 
            value="suggestions" 
            className="mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card className="border-1 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="rounded-full bg-gradient-to-r from-orange-50 to-amber-50 p-2">
                    <Lightbulb className="h-5 w-5 text-orange-500" />
                  </div>
                  <span>Suggestions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                {!isKnownCity ? renderNoDataMessage() : (
                  <>
                    <div className="suggestions-container space-y-4 max-h-[400px] overflow-y-auto scrollbar-hide relative">
                      <div className="space-y-4">
                        {countySuggestions.map((suggestion, index) => (
                          <div key={index}>
                            {visibleSuggestions.includes(index) ? (
                              <div 
                                className="rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm transition-all duration-500 hover:shadow-md hover:border-orange-200 hover:from-orange-50 hover:to-white"
                                style={{
                                  animation: 'slideIn 0.5s ease-out'
                                }}
                              >
                                <div className="flex items-start gap-4">
                                  <div className="mt-1 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 p-2 shadow-inner transition-transform duration-300 group-hover:scale-110">
                                    <Lightbulb className="h-5 w-5 text-orange-600" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-medium text-slate-800 text-lg mb-2">{suggestion[0]}</p>
                                    <div className="flex gap-3">
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-8 px-4 bg-white hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors duration-300"
                                        onClick={() => {
                                          if (onTakeAction && countyName) {
                                            console.log("Take Action clicked for county:", countyName);
                                            onTakeAction(countyName);
                                          } else {
                                            console.log("Take Action clicked but onTakeAction or countyName is missing", { onTakeAction, countyName });
                                          }
                                        }}
                                      >
                                        Take Action
                                      </Button>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-8 px-4 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-300"
                                        onClick={() => window.open(suggestion[1], '_blank')}
                                      >
                                        Learn More
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : index === visibleSuggestions.length && !allSuggestionsShown ? (
                              <div 
                                className="rounded-lg border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm cursor-pointer hover:shadow-md hover:border-orange-200 transition-all duration-300"
                                onClick={() => {
                                  if (!isLoading) {
                                    setIsLoading(true)
                                    setTimeout(() => {
                                      setVisibleSuggestions(prev => {
                                        const newSuggestions = [...prev, index];
                                        if (newSuggestions.length === countySuggestions.length) {
                                          setAllSuggestionsShown(true)
                                        }
                                        return newSuggestions;
                                      })
                                      setIsLoading(false)
                                    }, 2000)
                                  }
                                }}
                              >
                                <div className="flex h-[90px] items-center justify-center">
                                  {isLoading ? (
                                    <div className="relative">
                                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 opacity-50 blur-lg animate-pulse"></div>
                                      <Loader2 className="h-8 w-8 animate-spin text-orange-500 relative" />
                                    </div>
                                  ) : (
                                    <div className="text-slate-400 flex items-center gap-2">
                                      <Lightbulb className="h-5 w-5" />
                                      <span>Click to reveal next suggestion</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                    {isScrollable && !isAtBottom && (
                      <>
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -z-10 transition-opacity duration-300 ease-in-out backdrop-blur-sm"
                          style={{ 
                            opacity: isScrollable && !isAtBottom ? '1' : '0'
                          }} 
                        />
                        <button 
                          onClick={handleScrollClick}
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer group z-20 transition-all duration-300 ease-in-out animate-bounce"
                          style={{ 
                            opacity: isScrollable && !isAtBottom ? '1' : '0',
                            transform: `translate(-50%, ${isScrollable && !isAtBottom ? '0' : '10px'})`
                          }}
                          aria-label="Scroll down"
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-orange-200 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                            <div className="bg-white rounded-full p-2 shadow-lg transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-orange-100 relative">
                              <svg 
                                className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:translate-y-0.5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
} 
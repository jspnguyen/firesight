"use client"

import { useState, useEffect } from "react"
import { Info, Cloud, Lightbulb, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import demographicData from "./result/demographic_results.json"
import weatherData from "./result/weather_results.json"
import suggestionsData from "./result/suggestions_results.json"

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
  if (precip > 0) return "Rainy"
  if (temp > 25) return "Hot"
  if (temp > 20) return "Sunny"
  if (temp > 15) return "Partly Cloudy"
  if (temp > 10) return "Cloudy"
  return "Cold"
}

// Default suggestions in case the county data is not available
const defaultSuggestions = [
  "Increase emergency response training",
  "Enhance community outreach programs",
  "Improve multilingual communication",
  "Boost volunteer recruitment",
  "Expand disaster preparedness education"
]

interface InfoSidebarProps {
  selectedCity: string | null;
  visible: boolean;
}

export default function InfoSidebar({ selectedCity, visible = false }: InfoSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleSuggestions, setVisibleSuggestions] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("info")
  const [isScrollable, setIsScrollable] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [allSuggestionsShown, setAllSuggestionsShown] = useState(false)
  
  // Check if the selected city is one of our predefined cities
  const isKnownCity = selectedCity && Object.keys(cityToCountyMap).includes(selectedCity);
  
  // Get the county name for the selected city
  const countyName = isKnownCity ? cityToCountyMap[selectedCity as keyof typeof cityToCountyMap] : null;
  
  // Get the demographic data for the county
  const countyData = countyName ? demographicData[countyName as keyof typeof demographicData] : null;
  
  // Get the weather data for the county
  const countyWeather = countyName ? weatherData[countyName as keyof typeof weatherData] : null;
  
  // Get the suggestions data for the county, with fallback to default suggestions
  const countySuggestions = countyName && suggestionsData[countyName as keyof typeof suggestionsData] 
    ? suggestionsData[countyName as keyof typeof suggestionsData] 
    : defaultSuggestions;
  
  // Get the race data from the demographic data
  const raceData = countyData?.top_3_race ? 
    Object.entries(countyData.top_3_race).map(([name, percentage]) => ({
      name,
      percentage: `${percentage}%`
    })) : 
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
        setIsScrollable(container.scrollHeight > container.clientHeight);
        // Check if we're at the bottom
        const isBottom = Math.abs((container.scrollHeight - container.scrollTop) - container.clientHeight) < 10;
        setIsAtBottom(isBottom);
      }
    };

    // Check initially and whenever suggestions change
    checkScrollable();
    
    // Add scroll event listener
    const container = document.querySelector('.suggestions-container');
    if (container) {
      container.addEventListener('scroll', checkScrollable);
    }

    // Add resize observer to check when container size changes
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
      const scrollDistance = container.clientHeight * 0.8; // Scroll 80% of the container height
      container.scrollBy({ top: scrollDistance, behavior: 'smooth' });
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
      className={`fixed rounded-2xl right-0 top-2 z-20 w-full max-w-md transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {visible && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-10 top-4 hidden rounded-l-md rounded-r-none bg-white shadow-md transition-all duration-300 hover:bg-orange-50 hover:shadow-orange-100 md:flex group"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ChevronRight 
            className={`h-5 w-5 transition-all duration-300 ease-in-out 
              ${!sidebarOpen ? "rotate-180" : ""} 
              group-hover:scale-125 group-hover:text-orange-500
              animate-[pulse_1.5s_ease-in-out_infinite] group-hover:animate-none`} 
          />
        </Button>
      )}

      <Tabs defaultValue="info" onValueChange={setActiveTab}>
        <TabsList className="sticky top-0 z-10 grid w-full grid-cols-3 bg-white rounded-t-2xl">
          <TabsTrigger 
            value="info" 
            className="flex items-center gap-1 transition-all duration-300 hover:bg-slate-50"
          >
            <Info className="h-4 w-4 transition-transform duration-300 group-data-[state=active]:text-orange-500 group-hover:scale-110" />
            <span className="transition-colors duration-300 group-data-[state=active]:text-orange-500">Info</span>
          </TabsTrigger>
          <TabsTrigger 
            value="weather" 
            className="flex items-center gap-1 transition-all duration-300 hover:bg-slate-50"
          >
            <Cloud className="h-4 w-4 transition-transform duration-300 group-data-[state=active]:text-orange-500 group-hover:scale-110" />
            <span className="transition-colors duration-300 group-data-[state=active]:text-orange-500">Weather</span>
          </TabsTrigger>
          <TabsTrigger 
            value="suggestions" 
            className="flex items-center gap-1 transition-all duration-300 hover:bg-slate-50"
          >
            <Lightbulb className="h-4 w-4 transition-transform duration-300 group-data-[state=active]:text-orange-500 group-hover:scale-110" />
            <span className="transition-colors duration-300 group-data-[state=active]:text-orange-500">Suggestions</span>
          </TabsTrigger>
        </TabsList>

        <div className="p-4">
          <TabsContent 
            value="info" 
            className="mt-0 transform transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5 text-slate-600" />
                  {selectedCity || "Location"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isKnownCity ? renderNoDataMessage() : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-slate-700">Top 3 Races</h3>
                      <ul className="mt-1 space-y-1 pl-5 text-sm">
                        {raceData?.map((race, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span>#{index + 1}: {race.name}</span>
                            <span className="font-medium text-slate-700">{race.percentage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Population</h3>
                        <p className="font-medium text-slate-800">{countyData ? countyData.total_pop.toLocaleString() : "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Median Income</h3>
                        <p className="font-medium text-slate-800">{countyData ? `$${countyData.median_income.toLocaleString()}` : "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Avg. Household Size</h3>
                        <p className="font-medium text-slate-800">{countyData ? `${countyData.avg_household_size} people` : "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Poverty Rate</h3>
                        <p className="font-medium text-slate-800">{countyData ? `${countyData.poverty_pct}%` : "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Limited English</h3>
                        <p className="font-medium text-slate-800">{countyData ? `${countyData.eng_less_than_very_well_pct}%` : "N/A"}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Social Vulnerability</h3>
                        <p className="font-medium text-slate-800">{countyData ? countyData.svi.toFixed(2) : "N/A"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent 
            value="weather" 
            className="mt-0 transform transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cloud className="h-5 w-5 text-slate-600" />
                  Current Weather
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isKnownCity ? renderNoDataMessage() : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex items-center justify-center rounded-lg bg-slate-50 p-4">
                      <div className="flex flex-col items-center">
                        <Cloud className="h-12 w-12 text-slate-600" />
                        <span className="mt-2 text-3xl font-bold">
                          {countyWeather ? `${Math.round(countyWeather.t_max)}°C` : "N/A"}
                        </span>
                        <span className="text-sm text-slate-500">
                          {countyWeather ? getWeatherCondition(countyWeather.t_max, countyWeather.precip) : "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">High</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? `${Math.round(countyWeather.t_max)}°C` : "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Low</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? `${Math.round(countyWeather.t_min)}°C` : "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Wind</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? `${countyWeather.wind_max} km/h` : "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Gust</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? `${countyWeather.gust_max} km/h` : "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Precipitation</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? `${countyWeather.precip} mm` : "N/A"}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Date</h3>
                      <p className="font-medium text-slate-800">{countyWeather ? countyWeather.date : "N/A"}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent 
            value="suggestions" 
            className="mt-0 transform transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-slate-600" />
                  Suggestions
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
                                    <p className="font-medium text-slate-800 text-lg mb-2">{suggestion}</p>
                                    <div className="flex gap-3">
                                      <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="h-8 px-4 bg-white hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors duration-300"
                                      >
                                        Take Action
                                      </Button>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-8 px-4 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-300"
                                      >
                                        Learn More
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : index === visibleSuggestions.length && !allSuggestionsShown ? (
                              <div 
                                className="rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm cursor-pointer hover:shadow-md hover:border-orange-200 transition-all duration-300"
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
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        <div 
                          onClick={handleScrollClick}
                          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer group"
                        >
                          <div className="animate-bounce bg-white rounded-full p-2 shadow-md transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-lg group-hover:scale-110">
                            <svg 
                              className="w-4 h-4 text-orange-500 transition-colors duration-300 group-hover:text-orange-600" 
                              fill="none" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="3" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </CardContent>

              <style jsx global>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .suggestions-container::-webkit-scrollbar {
                  display: none;
                }
                
                .suggestions-container {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
} 
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

interface RaceData {
  name: string;
  percentage: string;
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
        .animate-bounce {
          animation: bounce 2s infinite;
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
            className=" mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card className="overflow-hidden border-1 shadow-lg">
              <CardHeader className="sticky top-0 z-10 pb-2 bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="rounded-full bg-white p-2 shadow-sm">
                    <Info className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-700">{selectedCity || "Location"}</span>
                    <span className="text-sm font-normal text-slate-500">{countyName ? `${countyName} County` : "Select a location"}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
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
                        { label: "Poverty Rate", value: countyData ? `${countyData.poverty_pct}%` : "N/A" }
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
            className="mt-0 transform transition-all duration-200 data-[state=inactive]:opacity-0 data-[state=active]:animate-in data-[state=inactive]:animate-out"
          >
            <Card className="border-1 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="rounded-full bg-gradient-to-r from-orange-50 to-amber-50 p-2">
                    <Cloud className="h-5 w-5 text-orange-500" />
                  </div>
                  <span>Current Weather</span>
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
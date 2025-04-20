"use client"

import { useState, useEffect } from "react"
import { Info, Cloud, Lightbulb, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import demographicData from "./result/demographic_results.json"
import weatherData from "./result/weather_results.json"
import suggestionsData from "./result/suggestions_results.json"

// Map of cities to their corresponding counties
const cityToCountyMap = {
  "Davis, CA": "Yolo",
  "San Jose, CA": "Santa Clara", // Note: Santa Clara is not in our JSON, will need to handle this
  "Los Angeles, CA": "Los Angeles",
}

// Language data (still hardcoded as it's not in the JSON)
const languageData = {
  "Davis, CA": [
    { name: "English", percentage: "75.5%" },
    { name: "Chinese", percentage: "12.5%" },
    { name: "Spanish", percentage: "8%" },
  ],
  "San Jose, CA": [
    { name: "English", percentage: "43%" },
    { name: "Spanish", percentage: "23.5%" },
    { name: "Vietnamese", percentage: "10.8%" },
  ],
  "Los Angeles, CA": [
    { name: "English", percentage: "40%" },
    { name: "Spanish", percentage: "42%" },
    { name: "Chinese", percentage: "2.4%" },
  ],
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
  
  // Get the language data for the selected city
  const languages = isKnownCity ? languageData[selectedCity as keyof typeof languageData] : null;

  useEffect(() => {
    if (visible) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [visible]);

  const renderNoDataMessage = () => (
    <div className="p-4 text-center text-slate-500">
      <p className="text-lg font-medium">Data not available</p>
      <p className="mt-2 text-sm">We currently only have data for Davis, San Jose, and Los Angeles.</p>
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

      <Tabs defaultValue="info">
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
                  {selectedCity || "Location"} Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isKnownCity ? renderNoDataMessage() : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-slate-700">Languages</h3>
                      <ul className="mt-1 space-y-1 pl-5 text-sm">
                        {languages?.map((lang, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span>#{index + 1}: {lang.name}</span>
                            <span className="font-medium text-slate-700">{lang.percentage}</span>
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
                        <p className="font-medium text-slate-800">{countyData ? `${countyData.eng_limited_pct}%` : "N/A"}</p>
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
              <CardContent>
                {!isKnownCity ? renderNoDataMessage() : (
                  <div className="space-y-3">
                    {countySuggestions.map((suggestion, index) => (
                      <div key={index} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-amber-100 p-1">
                            <Lightbulb className="h-4 w-4 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{suggestion}</p>
                            <div className="mt-1 flex gap-2">
                              <Button variant="outline" size="sm" className="h-7 text-xs">
                                Volunteer
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 text-xs">
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
} 
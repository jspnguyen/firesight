"use client"

import { useState } from "react"
import { Info, Cloud, Lightbulb, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const cityData = {
  "Davis, CA": {
    languages: [
      { name: "English", percentage: "75.5%" },
      { name: "Chinese", percentage: "12.5%" },
      { name: "Spanish", percentage: "8%" },
    ],
    demographics: {
      population: "69,413",
      averageMedian: "$67,426",
      avgHouseholdAge: "25.7 years",
      fireStationPersonnel: "45 personnel",
    },
    weather: {
      temperature: "75°F",
      condition: "Sunny",
      wind: "8 mph",
      direction: "NW",
      gust: "15 mph",
      humidity: "45%",
    },
  },
  "San Jose, CA": {
    languages: [
      { name: "English", percentage: "43%" },
      { name: "Spanish", percentage: "23.5%" },
      { name: "Vietnamese", percentage: "10.8%" },
    ],
    demographics: {
      population: "1,013,240",
      averageMedian: "$117,324",
      avgHouseholdAge: "36.5 years",
      fireStationPersonnel: "650 personnel",
    },
    weather: {
      temperature: "70°F",
      condition: "Partly Cloudy",
      wind: "12 mph",
      direction: "W",
      gust: "20 mph",
      humidity: "62%",
    },
  },
  "Los Angeles, CA": {
    languages: [
      { name: "English", percentage: "40%" },
      { name: "Spanish", percentage: "42%" },
      { name: "Chinese", percentage: "2.4%" },
    ],
    demographics: {
      population: "3,898,747",
      averageMedian: "$65,290",
      avgHouseholdAge: "35.8 years",
      fireStationPersonnel: "3,435 personnel",
    },
    weather: {
      temperature: "72°F",
      condition: "Clear",
      wind: "7 mph",
      direction: "SW",
      gust: "12 mph",
      humidity: "58%",
    },
  },
}

interface InfoSidebarProps {
  selectedCity: string;
}

export default function InfoSidebar({ selectedCity = "Davis, CA" }: InfoSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const city = cityData[selectedCity as keyof typeof cityData]

  const suggestions = {
    "Davis, CA": [
      "Need additional Chinese translators for emergency communications",
      "Need student volunteer coordinators",
      "Need emergency response training for campus areas",
      "Need bike evacuation route coordinators",
      "Need community outreach for student housing areas",
    ],
    "San Jose, CA": [
      "Need additional Vietnamese translators",
      "Need tech industry emergency coordinators",
      "Need volunteer firefighters",
      "Need emergency response training in tech campuses",
      "Need community outreach in diverse neighborhoods",
    ],
    "Los Angeles, CA": [
      "Need additional Spanish translators",
      "Need traffic evacuation coordinators",
      "Need emergency response training in entertainment venues",
      "Need wildfire preparedness coordinators",
      "Need community outreach in dense urban areas",
    ],
  }

  return (
    <div
      className={`fixed right-0 top-0 z-20 h-auto min-h-screen w-full max-w-md transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-10 top-4 hidden rounded-l-md rounded-r-none bg-white shadow-md md:flex"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <ChevronRight className={`h-5 w-5 transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
      </Button>

      <Tabs defaultValue="info" className="flex h-full min-h-screen flex-col">
        <TabsList className="sticky top-0 z-10 grid w-full grid-cols-3 bg-white">
          <TabsTrigger value="info" className="flex items-center gap-1">
            <Info className="h-4 w-4" />
            <span>Info</span>
          </TabsTrigger>
          <TabsTrigger value="weather" className="flex items-center gap-1">
            <Cloud className="h-4 w-4" />
            <span>Weather</span>
          </TabsTrigger>
          <TabsTrigger value="suggestions" className="flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            <span>Suggestions</span>
          </TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto">
          <div className="h-full p-4">
            <TabsContent value="info" className="mt-0 h-full">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Info className="h-5 w-5 text-slate-600" />
                    {selectedCity} Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-slate-700">Languages</h3>
                      <ul className="mt-1 space-y-1 pl-5 text-sm">
                        {city.languages.map((lang, index) => (
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
                        <p className="font-medium text-slate-800">{city.demographics.population}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Average Median</h3>
                        <p className="font-medium text-slate-800">{city.demographics.averageMedian}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Avg. Household Age</h3>
                        <p className="font-medium text-slate-800">{city.demographics.avgHouseholdAge}</p>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-slate-500">Fire Station Personnel</h3>
                        <p className="font-medium text-slate-800">{city.demographics.fireStationPersonnel}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weather" className="mt-0 h-full">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cloud className="h-5 w-5 text-slate-600" />
                    Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 flex items-center justify-center rounded-lg bg-slate-50 p-4">
                      <div className="flex flex-col items-center">
                        <Cloud className="h-12 w-12 text-slate-600" />
                        <span className="mt-2 text-3xl font-bold">{city.weather.temperature}</span>
                        <span className="text-sm text-slate-500">{city.weather.condition}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Wind</h3>
                      <p className="font-medium text-slate-800">{city.weather.wind}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Direction</h3>
                      <p className="font-medium text-slate-800">{city.weather.direction}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Gust</h3>
                      <p className="font-medium text-slate-800">{city.weather.gust}</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-slate-500">Humidity</h3>
                      <p className="font-medium text-slate-800">{city.weather.humidity}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions" className="mt-0 h-full">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="h-5 w-5 text-slate-600" />
                    Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {suggestions[selectedCity as keyof typeof suggestions].map((suggestion, index) => (
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
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
} 
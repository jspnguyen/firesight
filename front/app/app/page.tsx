'use client';

import { useState } from 'react';
import MapboxMap from '../components/MapboxMap';
import InfoSidebar from '../components/InfoSidebar';
import WelcomePage from '../components/WelcomePage';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Davis, CA");
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <>
      {showWelcome && <WelcomePage onComplete={() => setShowWelcome(false)} />}
      <main className="h-screen w-full relative">
        <div className="absolute inset-0">
          <MapboxMap onCitySelect={handleCitySelect} />
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3">
          <InfoSidebar selectedCity={selectedCity} />
        </div>
      </main>
    </>
  );
}

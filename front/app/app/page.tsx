'use client';

import { useState } from 'react';
import MapboxMap from '../components/MapboxMap';
import WelcomePage from '../components/WelcomePage';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Davis, CA");
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomePage key="welcome" onComplete={() => setShowWelcome(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <div className="absolute inset-0">
              <MapboxMap onCitySelect={handleCitySelect} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

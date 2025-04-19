'use client';

import { useEffect } from 'react';
import { Flame } from 'lucide-react';

interface WelcomePageProps {
  onComplete: () => void;
}

export default function WelcomePage({ onComplete }: WelcomePageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Logo animation */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 animate-ping">
              <Flame className="h-12 w-12 text-orange-500 opacity-75" />
            </div>
            <Flame className="h-12 w-12 text-orange-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Fyr
              <span className="ml-1 inline-block animate-pulse text-orange-600">_</span>
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Wildfire Management System
            </p>
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-8">
          <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full origin-left animate-[loading_3s_ease-in-out] rounded-full bg-orange-600" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
} 
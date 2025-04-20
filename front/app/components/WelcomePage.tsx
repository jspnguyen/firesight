'use client';

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomePageProps {
  onComplete: () => void;
}

export default function WelcomePage({ onComplete }: WelcomePageProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 200);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="relative w-full max-w-2xl px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-[#252b3d]/50 p-12 backdrop-blur-sm"
        >
          <div className="flex items-center gap-6">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.75,
                  ease: "easeInOut",
                }}
                className="absolute"
              >
                <Flame className="h-[72px] w-[72px] text-orange-400" />
              </motion.div>
              <Flame className="absolute h-16 w-16 text-orange-500" />
            </div>
            <div>
              <h1 className="text-6xl font-bold text-white">
                Firesight
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  className="ml-2 inline-block h-[6px] w-8 bg-orange-500"
                />
              </h1>
              <p className="mt-2 text-lg text-slate-400">
                Data-driven wildfire strategy
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-2 flex justify-between text-sm text-slate-400">
              <span>Initializing system</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full origin-left bg-orange-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-orange-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 
'use client';

import { useRouter } from 'next/navigation';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push('/main');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
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

          <div className="mt-16 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterApp}
              className="rounded-full bg-orange-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-orange-600"
            >
              Enter App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 
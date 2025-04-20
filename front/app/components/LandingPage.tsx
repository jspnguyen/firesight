"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Flame, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleEnterApp = () => {
    router.push("/main")
  }

  if (!isMounted) {
    return null // or a loading state
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
        />

        {/* Forest silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-black/20 backdrop-blur-sm">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 L0,120 L1200,120 L1200,0 L0,0 Z M100,120 L100,70 L130,90 L160,60 L190,80 L220,50 L250,70 L280,40 L310,60 L340,30 L370,50 L400,20 L430,40 L460,10 L490,30 L520,0 L550,20 L580,0 L610,30 L640,10 L670,40 L700,20 L730,50 L760,30 L790,60 L820,40 L850,70 L880,50 L910,80 L940,60 L970,90 L1000,70 L1030,100 L1060,80 L1090,110 L1120,90 L1150,120 L1200,120 Z"
              fill="rgba(0, 0, 0, 0.8)"
            />
          </svg>
        </div>

        {/* Ember particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: windowSize.height + Math.random() * 100,
              opacity: 0.3 + Math.random() * 0.7,
              scale: 0.5 + Math.random() * 1.5,
            }}
            animate={{
              y: -100,
              opacity: [0.3 + Math.random() * 0.7, 0],
              scale: [0.5 + Math.random() * 1.5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 20,
              ease: "easeOut",
            }}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgb(${220 + Math.random() * 35}, ${100 + Math.random() * 50}, ${Math.random() * 30})`,
              boxShadow: `0 0 ${5 + Math.random() * 10}px ${3 + Math.random() * 5}px rgba(${220 + Math.random() * 35}, ${100 + Math.random() * 50}, ${Math.random() * 30}, 0.8)`,
            }}
          />
        ))}

        {/* Smoke effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`smoke-${i}`}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            initial={{
              x: 200 + i * 300,
              y: windowSize.height,
              scale: 1,
              opacity: 0.1,
            }}
            animate={{
              y: windowSize.height - 800,
              scale: 10,
              opacity: [0.1, 0.2, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20 + i * 5,
              delay: i * 4,
              ease: "easeOut",
            }}
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40vh] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"
        style={{
          transform: `translate(-50%, 20%) scale(1.5) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-6 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Flame className="h-16 w-16 text-orange-400 opacity-75" />
              </motion.div>
              <Flame className="h-16 w-16 text-orange-500" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl font-bold tracking-tighter text-white md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Firesight
            <motion.span
              className="ml-2 inline-block h-[6px] w-8 bg-orange-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.25,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          {/* Catchphrase */}
          <motion.p
            className="text-white mt-4 max-w-md text-xl text-slate-300 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Data-driven wildfire strategy
          </motion.p>

          {/* Button */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button
              className="flex items-center gap-4 text-[2rem] text-white bg-[#E85D04] hover:bg-[#DC5803] rounded-[32px] px-8 py-4 transition-colors border-2 border-orange-300 shadow-lg hover:shadow-orange-500/50"
              onClick={handleEnterApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="h-8 w-8" />
              <span>Launch Application</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
} 
"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Flame, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)

  // Memoize static values to prevent unnecessary recalculations
  const emberParticles = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      initialX: Math.random() * windowSize.width,
      initialY: windowSize.height + Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.7,
      scale: 0.5 + Math.random() * 1.5,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 20,
      width: 2 + Math.random() * 4,
      height: 2 + Math.random() * 4,
      color: `rgb(${220 + Math.random() * 35}, ${100 + Math.random() * 50}, ${Math.random() * 30})`,
      glowSize: 5 + Math.random() * 10,
      glowSpread: 3 + Math.random() * 5
    })), [windowSize.width, windowSize.height])

  const smokeParticles = useMemo(() => 
    [...Array(5)].map((_, i) => ({
      id: i,
      initialX: 200 + i * 300,
      duration: 20 + i * 5,
      delay: i * 4,
      width: 50 + Math.random() * 100,
      height: 50 + Math.random() * 100
    })), [])

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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Static gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />

        {/* Ember particles */}
        {emberParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
              opacity: particle.opacity,
              scale: particle.scale,
            }}
            animate={{
              y: -100,
              opacity: [particle.opacity, 0],
              scale: [particle.scale, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut",
            }}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.glowSize}px ${particle.glowSpread}px ${particle.color.replace('rgb', 'rgba').replace(')', ', 0.8)')}`,
            }}
          />
        ))}

        {/* Smoke effect */}
        {smokeParticles.map((particle) => (
          <motion.div
            key={`smoke-${particle.id}`}
            className="absolute rounded-full bg-white/5 backdrop-blur-md"
            initial={{
              x: particle.initialX,
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
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut",
            }}
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
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
              className="flex items-center gap-4 text-[2rem] text-white bg-black hover:bg-black/90 rounded-[32px] px-12 py-6 transition-all border-2 border-[#FF6B35]/20 hover:border-[#FF6B35]/40 shadow-lg hover:shadow-[#FF6B35]/20"
              onClick={handleEnterApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="h-8 w-8 text-[#FF6B35]" />
              <span>Launch</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  )
} 
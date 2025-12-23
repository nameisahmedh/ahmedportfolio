"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"

export function InteractiveChair() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate offset from center (-1 to 1 range)
      const offsetX = (e.clientX - centerX) / (rect.width / 2)
      const offsetY = (e.clientY - centerY) / (rect.height / 2)

      // Apply subtle rotation (max 15 degrees)
      setRotation({
        x: -offsetY * 12, // Tilt up/down based on Y position
        y: offsetX * 15, // Tilt left/right based on X position
      })
    }

    const handleMouseLeave = () => {
      // Smoothly reset to center
      setRotation({ x: 0, y: 0 })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-64 h-80 md:w-72 md:h-[400px] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/empty-chair-waiting.jpg"
          alt="Empty chair waiting for opportunities"
          fill
          className="object-contain drop-shadow-2xl pointer-events-none"
          style={{
            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))",
          }}
          priority
        />
      </div>

      <div
        className="absolute bottom-4 left-1/2 w-40 h-6 bg-black/10 rounded-full blur-xl transition-all duration-200"
        style={{
          transform: `translateX(calc(-50% + ${rotation.y * 2}px)) translateY(${rotation.x * 0.5}px)`,
          opacity: 0.15,
        }}
      />

      {/* Hint text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
        Move cursor to interact
      </div>
    </div>
  )
}

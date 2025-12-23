"use client"

import { useRef, useState, useEffect } from "react"
import { Sparkles, Code2, Database, Brain } from "lucide-react"

export function InteractiveChair() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [activeIcon, setActiveIcon] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const offsetX = (e.clientX - centerX) / (rect.width / 2)
      const offsetY = (e.clientY - centerY) / (rect.height / 2)

      setRotation({
        x: -offsetY * 12,
        y: offsetX * 15,
      })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const icons = [
    { Icon: Sparkles, label: "AI" },
    { Icon: Code2, label: "Dev" },
    { Icon: Database, label: "Data" },
    { Icon: Brain, label: "ML" },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-64 h-80 md:w-72 md:h-[400px] transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Icon Display */}
        <div className="relative">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeIcon === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-foreground flex items-center justify-center shadow-2xl">
                  <item.Icon className="w-16 h-16 md:w-20 md:h-20 text-background" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold text-foreground whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shadow */}
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

"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { TypingEffect } from "./typing-effect"
import { InteractiveChair } from "./interactive-chair"

export function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector("#projects")
    if (element) {
      const offset = 0 // Consistent with navbar navigation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        {/* Left side - Content (2/3) */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 text-black text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Open to remote work worldwide
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100 text-foreground">
            Hi, I'm Ahmed
            <span className="block text-muted-foreground">Mohammad Kammar Ahmed</span>
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up animation-delay-200 h-8">
            <TypingEffect
              texts={[
                "Data Science Enthusiast",
                "Building ML & AI Solutions",
                "Full Stack Developer",
                "Exploring RAG & AI Agents",
              ]}
              className="text-foreground font-medium"
            />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up animation-delay-300">
            A Data Science student specializing in ML, AI, and full-stack development. Building intelligent solutions with RAG systems, vector search, and automation while creating impactful data-driven applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up animation-delay-400">
            <Button
              size="lg"
              className="rounded-full px-8 bg-foreground hover:bg-foreground/90 text-background border-0"
              onClick={handleScrollToProjects}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 animate-fade-up animation-delay-500">
            <span className="text-sm text-muted-foreground">Based in Hyderabad, India</span>
          </div>
        </div>

        {/* Right side - Interactive Chair (1/3) */}
        <div className="lg:col-span-1 h-[400px] lg:h-[500px] animate-fade-up animation-delay-300">
          <InteractiveChair />
        </div>
      </div>
    </section>
  )
}

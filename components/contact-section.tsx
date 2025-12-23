"use client"

import type React from "react"

import { AnimatedSection } from "./animated-section"
import { Github, Linkedin, Mail, ArrowRight, FileText, ArrowUp } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center font-medium">Contact</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center text-foreground">
            Do you want to start a project together?
          </h2>
          <p className="text-foreground/60 mb-16 max-w-lg mx-auto text-center text-lg leading-relaxed">
            Interested in data science collaborations, ML projects, or just want to chat about AI? I'd love to hear from
            you.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link
              href="mailto:mdqamarahmed123@gmail.com"
              className="group p-8 rounded-2xl border border-border hover:border-black hover:bg-foreground transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-foreground group-hover:bg-background/20 flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                <Mail className="h-7 w-7 text-background" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground group-hover:text-background">Email</span>
              <span className="text-sm text-foreground/60 group-hover:text-background/70 mt-1">Get in touch</span>
              <ArrowRight className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-background" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohammad-kammar-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border hover:border-black hover:bg-foreground transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-foreground group-hover:bg-background/20 flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                <Linkedin className="h-7 w-7 text-background" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground group-hover:text-background">LinkedIn</span>
              <span className="text-sm text-foreground/60 group-hover:text-background/70 mt-1">Connect with me</span>
              <ArrowRight className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-background" />
            </Link>

            <Link
              href="https://github.com/nameisahmedh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border hover:border-black hover:bg-foreground transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-foreground group-hover:bg-background/20 flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                <Github className="h-7 w-7 text-background" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground group-hover:text-background">GitHub</span>
              <span className="text-sm text-foreground/60 group-hover:text-background/70 mt-1">See my code</span>
              <ArrowRight className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-background" />
            </Link>

            <Link
              href="/ahmed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border hover:border-black hover:bg-foreground transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-foreground group-hover:bg-background/20 flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                <FileText className="h-7 w-7 text-background" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground group-hover:text-background">Resume</span>
              <span className="text-sm text-foreground/60 group-hover:text-background/70 mt-1">Download CV</span>
              <ArrowRight className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-background" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={400}>
          <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mohammad Kammar Ahmed</p>

            {/* Back to Top Button */}
            <button
              onClick={handleBackToTop}
              className="group flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Back to top
              <span className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-black transition-all">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


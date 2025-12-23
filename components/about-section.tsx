"use client"

import { AnimatedSection } from "./animated-section"
import { GraduationCap, Users, Brain, TrendingUp, Database, Code2, Globe } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-foreground/10 shadow-2xl animate-fade-up">
              <Image
                src="/profile-photo.jpg"
                alt="Mohammad Kammar Ahmed"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 text-center font-medium">About</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Aspiring Machine Learning Intern & Data Science Student focused on building intelligent solutions and data-driven applications.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 bg-card hover:shadow-lg transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-medium">Education</h3>
              <p className="text-xl font-heading font-bold mb-1 text-foreground">CMR Technical Campus</p>
              <p className="text-muted-foreground">B.Tech CSE (Data Science)</p>
              <p className="text-muted-foreground">2022 - 2026</p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-foreground font-bold">
                <TrendingUp className="w-4 h-4" />
                CGPA: 8.38
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 bg-card hover:shadow-lg transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-medium">Leadership</h3>
              <p className="text-xl font-heading font-bold mb-1 text-foreground">General Secretary</p>
              <p className="text-foreground/60">"Codeoholics" Community</p>
              <p className="text-foreground/60 mt-4 text-sm leading-relaxed">
                Leading a vibrant community of developers, organizing tech events, and fostering collaborative learning
                in Data Science and AI.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={300}>
            <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 bg-card hover:shadow-lg transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-medium">Time Zone</h3>
              <p className="text-xl font-heading font-bold mb-1 text-foreground">Hyderabad, India</p>
              <p className="text-foreground/60 mt-2 text-sm leading-relaxed">
                Open to remote work worldwide. Flexible with different time zones for collaboration.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={400}>
            <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 bg-card hover:shadow-lg transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2 font-medium">Tech Stack</h3>
              <p className="text-xl font-heading font-bold mb-1 text-foreground">Data Science + AI + Full Stack</p>
              <p className="text-foreground/60 mt-2 text-sm leading-relaxed">
                Specializing in Data Science, ML, AI technologies (RAG, LLM, Vector Search), and full-stack development to build intelligent, data-driven applications and automation solutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500} className="md:col-span-2">
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center">
                  <Brain className="h-7 w-7 text-background" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Focus Areas</h3>
                  <p className="text-lg font-heading font-bold text-foreground">What I Love Working With</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Database, label: "Data Analysis" },
                  { icon: Brain, label: "Machine Learning" },
                  { icon: Code2, label: "Full Stack Dev" },
                  { icon: TrendingUp, label: "Data Visualization" },
                ].map((interest) => (
                  <div
                    key={interest.label}
                    className="group/item flex items-center gap-3 p-4 rounded-xl border border-border hover:border-foreground/20 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover/item:bg-foreground group-hover/item:scale-110 transition-all">
                      <interest.icon className="h-5 w-5 text-foreground group-hover/item:text-background transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}


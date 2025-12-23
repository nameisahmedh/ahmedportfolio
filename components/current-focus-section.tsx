"use client"

import { AnimatedSection } from "./animated-section"
import { Bot, Zap, Brain, Workflow, Lightbulb, TrendingUp } from "lucide-react"

export function CurrentFocusSection() {
    const focusAreas = [
        {
            title: "AI Agents",
            description: "Building intelligent autonomous agents that can perform complex tasks and make decisions",
            icon: Bot,
        },
        {
            title: "Automation",
            description: "Creating workflow automation solutions to streamline processes and improve efficiency",
            icon: Zap,
        },
        {
            title: "RAG Systems",
            description: "Deep diving into Retrieval-Augmented Generation for context-aware AI applications",
            icon: Brain,
        },
        {
            title: "LLM Integration",
            description: "Exploring advanced techniques for integrating Large Language Models into real-world applications",
            icon: Workflow,
        },
    ]

    return (
        <section id="current-focus" className="py-32 px-6 bg-accent/30">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-foreground" />
                        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium text-center">
                            What I'm Exploring
                        </p>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-foreground">
                        Current Focus & Learning
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Continuously expanding my expertise in cutting-edge AI technologies and automation to build next-generation intelligent systems.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {focusAreas.map((area, index) => (
                        <AnimatedSection key={area.title} animation="fade-up" delay={index * 100}>
                            <div className="group relative rounded-2xl overflow-hidden border border-border bg-card p-8 hover:shadow-xl transition-all duration-300">
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <area.icon className="w-7 h-7 text-background" />
                                    </div>

                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                                        {area.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Future Plans */}
                <AnimatedSection animation="fade-up" delay={400}>
                    <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center shrink-0">
                                <Lightbulb className="w-6 h-6 text-background" />
                            </div>
                            <div>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                                    Upcoming Projects
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Working on innovative AI-powered solutions that leverage these technologies to solve real-world problems.
                                    Stay tuned for exciting new projects combining AI agents, RAG systems, and intelligent automation!
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

"use client"

import { AnimatedSection } from "./animated-section"
import { FileSearch, HeartPulse, Sparkles, BarChart3, Bot, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    // Data Science Projects First
    {
      title: "ArixStructure",
      subtitle: "Document Intelligence",
      description:
        "AI-powered document analyzer for intelligent document processing. Extracts insights, generates summaries, and performs semantic search.",
      tags: ["Python", "Streamlit", "Hugging Face", "NLP", "Transformers"],
      icon: FileSearch,
      github: "https://github.com/nameisahmedh/ArixStructure",
      demo: "https://github.com/nameisahmedh/ArixStructure",
      image: "/arix-structure.png",
      category: "datascience",
    },
    {
      title: "Stroke Prediction",
      subtitle: "Healthcare ML Model",
      description:
        "ML application with 7 algorithms for stroke risk prediction. Features sequential workflow, SMOTE preprocessing, smart feature selection, batch predictions, model persistence, and interactive analytics.",
      tags: ["Flask", "scikit-learn", "XGBoost", "CatBoost", "Pandas", "NumPy", "Bootstrap 5", "Render"],
      icon: HeartPulse,
      github: "https://github.com/nameisahmedh/strokeprediction",
      demo: "https://strokeprediction-1-1ykl.onrender.com/",
      image: "/stroke-prediction.png",
      category: "datascience",
    },
    // ML Projects Second
    {
      title: "RAG-Based ML Teaching Assistant",
      subtitle: "AI-Powered Video Learning Assistant",
      description:
        "AI-powered learning assistant that helps users find exact concepts inside long educational videos using Retrieval-Augmented Generation (RAG). Returns precise video number, start time, and end time for any queried topic.",
      tags: ["Python", "RAG", "LLM", "Vector Search", "Embeddings", "Semantic Search", "NLP"],
      icon: Bot,
      github: "https://github.com/nameisahmedh/RAG-based-ML-teaching-Assistant",
      demo: "https://drive.google.com/file/d/1GGfGsx3oN0IgES0eyMUPExevDRNFAcvr/view",
      image: "/rag-ml-assistant.jpg",
      category: "ml",
    },
    {
      title: "California House Price Prediction",
      subtitle: "ML Regression Model",
      description:
        "A modern web application for predicting California housing prices using machine learning. Built with Flask and powered by a Random Forest regression model trained on 20,000+ California housing records with 83% accuracy.",
      tags: ["Python", "Flask", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "HTML5", "CSS3"],
      icon: BarChart3,
      github: "https://github.com/nameisahmedh/house-price-prediction",
      demo: "https://github.com/nameisahmedh/house-price-prediction",
      image: "/california-house-price.png",
      category: "ml",
    },
    {
      title: "Iris Classification",
      subtitle: "Machine Learning Classification",
      description:
        "ML classification with 5 models (Random Forest, SVM, Decision Tree, KNN, Naive Bayes) for iris species identification with confidence scores.",
      tags: ["Flask", "Python", "Scikit-learn", "Pandas", "NumPy", "HTML5", "CSS3"],
      icon: HeartPulse,
      github: "https://github.com/nameisahmedh/iris-classification",
      demo: "https://iris-classification2.onrender.com/",
      image: "/iris-classification.png",
      category: "ml",
    },
    // AI Projects Last
    {
      title: "Arix",
      subtitle: "AI Content Generation Platform",
      description:
        "AI-powered content creation platform for generating articles, blog titles, images, and removing backgrounds. Features authentication and premium plans.",
      tags: ["React 19", "Node.js", "MongoDB", "Google Gemini", "ClipDrop API", "Cloudinary", "Clerk", "Tailwind CSS"],
      icon: Sparkles,
      github: "https://github.com/nameisahmedh/Arix",
      demo: "https://drive.google.com/file/d/18zuzGOTaA_SpfqxLCQhLZG68_M_miQPE/view",
      image: "/arix-ai-platform.png",
      category: "ai",
    },
    {
      title: "ArixAI Resume Analyzer",
      subtitle: "AI-Powered Resume Analysis",
      description:
        "AI resume analyzer with ATS scoring, keyword matching, and actionable feedback. Powered by Perplexity AI with authentication and dark/light theme.",
      tags: ["React 19", "Node.js 20", "Perplexity AI", "PostgreSQL", "Drizzle ORM", "Clerk", "Tailwind CSS"],
      icon: FileSearch,
      github: "https://github.com/nameisahmedh/arixai_resume_analyzer",
      demo: "https://drive.google.com/file/d/1rblOCgiCw3SwnzfRZ89LY6JDdy9f3f2e/view",
      image: "/arix-ai-resume-analyzer.png",
      category: "ai",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "datascience", label: "Data Science Projects" },
    { id: "ml", label: "ML Projects" },
    { id: "ai", label: "AI Projects" },
  ]

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center font-medium">Projects</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-foreground">
            Data Science & AI Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            My projects include developing machine learning models, data visualization dashboards, and full-stack web
            applications focused on solving real-world problems.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full font-medium uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer ${activeFilter === filter.id
                  ? "bg-foreground text-background shadow-lg scale-105"
                  : "bg-accent text-foreground hover:bg-foreground hover:text-background hover:scale-105"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 80}>
              <div className="group relative rounded-2xl overflow-hidden border border-border hover:border-foreground/20 bg-card p-8 md:p-10 hover:shadow-2xl transition-all duration-300">
                {/* Hover Preview Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40 z-10" />
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>

                <div className="relative z-20 flex flex-col md:flex-row gap-8">
                  <div className="w-20 h-20 rounded-2xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-10 h-10 text-background" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{project.subtitle}</p>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                          title="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer"
                          title={project.demo.includes("drive.google.com") ? "Watch Demo" : "Live Demo"}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-accent text-foreground text-xs font-medium uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

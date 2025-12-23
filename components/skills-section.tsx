"use client"

import { AnimatedSection } from "./animated-section"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      title: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "CatBoost", "TensorFlow", "NLP"],
    },
    {
      title: "AI & Advanced",
      skills: ["RAG", "Vector Search", "LLM", "Embeddings", "OpenAI API", "Gemini API", "Perplexity AI", "Hugging Face"],
    },
    {
      title: "Web Development",
      skills: ["React.js", "Next.js", "Node.js", "Flask", "Streamlit", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "PostgreSQL", "Drizzle ORM", "Cloudinary", "Clerk", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center font-medium">Skills</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-foreground">
            Tools & Languages
          </h2>
          <p className="text-foreground/60 text-center max-w-2xl mx-auto mb-16">
            Specialized in data science tools, web development frameworks, and programming languages that allow me to
            build data-driven applications and analytical solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div className="p-8 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-500 bg-background">
                <h3 className="text-lg font-heading font-bold mb-6 flex items-center gap-2 text-foreground">
                  <span className="w-3 h-3 rounded-full bg-foreground" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-black/20 text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}


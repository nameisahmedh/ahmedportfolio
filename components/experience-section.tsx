"use client"

import { AnimatedSection } from "./animated-section"
import { Calendar, Sparkles, Users, Award, Rocket } from "lucide-react"

export function ExperienceSection() {
  const achievements = [
    {
      title: "General Secretary — Codeoholics Community",
      description:
        "Leading the largest technical community on campus. Organized national-level hackathons with 50+ colleges participating and orchestrated 'Code to Cloud: AI Edition' workshops, training over 1,000 students in Machine Learning and AI technologies.",
      type: "Leadership Role",
      date: "2024 – Present",
      icon: Users,
    },
    {
      title: "Lead Organizer — Hack For Mini 2.0",
      description:
        "Managed a national-level online hackathon with 1,300+ participants. Coordinated technical infrastructure and cross-functional teams for a successful 48-hour event, ensuring seamless experience for all participants.",
      type: "Hackathon Organizer",
      date: "2024",
      icon: Rocket,
    },
    {
      title: "Code to Cloud: AI Edition",
      description:
        "Organized this tech workshop in collaboration with GDG Hyderabad, bringing together developers to explore cloud and AI technologies. Trained over 1,000 students in ML and AI.",
      type: "Workshop Organizer",
      date: "2024",
      icon: Sparkles,
    },
    {
      title: "DevFest Hyderabad",
      description:
        "Attended and participated in Google's developer festival, networking with industry professionals and learning about cutting-edge ML/AI technologies.",
      type: "Conference",
      date: "2024",
      icon: Award,
    },
  ]

  return (
    <section id="journey" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center font-medium">Journey</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-foreground">
            Events & Experiences
          </h2>
          <p className="text-foreground/60 text-center max-w-2xl mx-auto mb-16">
            Active participation in tech communities and events focused on AI, Data Science, and Cloud technologies.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title} animation="fade-up" delay={index * 150}>
              <div className="group p-8 rounded-2xl border border-border hover:border-foreground/20 bg-background hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-7 h-7 text-background" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-foreground/5 text-foreground text-xs font-medium uppercase tracking-wider">
                        {achievement.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {achievement.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-foreground">{achievement.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{achievement.description}</p>
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


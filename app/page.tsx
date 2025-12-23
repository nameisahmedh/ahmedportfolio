import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CurrentFocusSection } from "@/components/current-focus-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { NeuralNetworkBg } from "@/components/neural-network-bg"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NeuralNetworkBg />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CurrentFocusSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

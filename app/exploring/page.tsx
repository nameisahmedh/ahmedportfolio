import { CurrentFocusSection } from "@/components/current-focus-section"
import { Navbar } from "@/components/navbar"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ExploringPage() {
    return (
        <main className="min-h-screen bg-background">
            <NeuralNetworkBg />
            <Navbar />

            {/* Back to Home Link */}
            <div className="pt-32 px-6 max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>

            <CurrentFocusSection />
        </main>
    )
}

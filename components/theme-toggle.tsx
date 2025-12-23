"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                <div className="w-5 h-5" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground group-hover:rotate-180 transition-transform duration-300" />
            ) : (
                <Moon className="h-5 w-5 text-foreground group-hover:-rotate-12 transition-transform duration-300" />
            )}
        </button>
    )
}

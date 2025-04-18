"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import "./theme-toggle.css"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="theme-toggle-placeholder" />
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    // Add a class to the body for animation purposes
    document.body.classList.add("theme-transition")
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 500)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

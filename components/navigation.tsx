"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import ThemeToggle from "./theme-toggle"
import Logo from "./logo"
import "./navigation.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo />
            <span>AInbox</span>
          </Link>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="#features" onClick={() => setIsOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="nav-actions">
            <Link href="/signin" className="btn btn-outline" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
            <Link href="/signup" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

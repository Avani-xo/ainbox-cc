"use client"

import { useTheme } from "next-themes"

export default function Logo() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill={isDark ? "#a78bfa" : "#7c3aed"} />
      <path
        d="M8 10H24M8 16H18M8 22H14"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="22" r="4" fill="white" />
      <path
        d="M22 20V24M20 22H24"
        stroke={isDark ? "#a78bfa" : "#7c3aed"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

"use client"

import { type ReactNode, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import "./page-transition.css"

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prevPathRef.current !== pathname && containerRef.current) {
      containerRef.current.classList.add("page-transition-active")

      const timer = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.remove("page-transition-active")
        }
      }, 500)

      prevPathRef.current = pathname
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <div ref={containerRef} className="page-transition-container">
      {children}
    </div>
  )
}

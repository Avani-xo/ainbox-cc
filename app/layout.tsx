import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AInbox - Smart Email Triage",
  description: "AI-powered email management to save you time and boost productivity",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="app-container">
            <Navigation />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

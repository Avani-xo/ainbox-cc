"use client"

import type React from "react"

import { useState } from "react"
import "./hero.css"

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ email, password, name, activeTab })
    // Reset form
    setEmail("")
    setPassword("")
    setName("")
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tame Your Inbox with <span className="gradient-text">AI-Powered</span> Email Management
          </h1>
          <p className="hero-description">
            AInbox uses artificial intelligence to categorize, prioritize, and summarize your emails, saving you hours
            every week and ensuring you never miss important messages.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">85%</span>
              <span className="stat-label">Less Email Stress</span>
            </div>
            <div className="stat">
              <span className="stat-value">3.5h</span>
              <span className="stat-label">Saved Weekly</span>
            </div>
            <div className="stat">
              <span className="stat-value">99%</span>
              <span className="stat-label">Important Email Detection</span>
            </div>
          </div>
        </div>

        <div className="hero-form-container">
          <div className="form-tabs">
            <button
              className={`form-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
            <button
              className={`form-tab ${activeTab === "signin" ? "active" : ""}`}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              {activeTab === "signup" ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="form-footer">
            <p>
              {activeTab === "signup" ? "Already have an account? " : "Don't have an account? "}
              <button className="text-link" onClick={() => setActiveTab(activeTab === "signup" ? "signin" : "signup")}>
                {activeTab === "signup" ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

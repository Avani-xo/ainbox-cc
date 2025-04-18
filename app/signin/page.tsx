"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import "../auth.css"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in
    console.log({ email, password })
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>

        <h1 className="auth-title">Sign In</h1>
        <p className="auth-subtitle">Welcome back! Sign in to your account</p>

        <form className="auth-form" onSubmit={handleSubmit}>
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
            <div className="form-label-row">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Link href="/forgot-password" className="text-link">
                Forgot password?
              </Link>
            </div>
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
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

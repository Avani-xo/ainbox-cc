"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import "./pricing.css"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Basic email management for personal use",
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        "Connect 1 email account",
        "Basic email categorization",
        "100 AI-processed emails per month",
        "Email summaries",
        "Basic spam protection",
      ],
    },
    {
      name: "Pro",
      description: "Advanced features for professionals",
      price: {
        monthly: 9.99,
        annual: 7.99,
      },
      popular: true,
      features: [
        "Connect 3 email accounts",
        "Advanced email categorization",
        "Unlimited AI-processed emails",
        "Priority inbox",
        "Advanced spam protection",
        "Email analytics",
        "Quick actions & templates",
      ],
    },
    {
      name: "Business",
      description: "Complete solution for teams and businesses",
      price: {
        monthly: 19.99,
        annual: 16.99,
      },
      features: [
        "Connect unlimited email accounts",
        "Team collaboration features",
        "Admin dashboard",
        "Custom integrations",
        "Advanced analytics",
        "Priority support",
        "Custom AI training",
        "99.9% uptime SLA",
      ],
    },
  ]

  return (
    <section id="pricing" className="pricing-section section">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">Choose the plan that's right for you</p>

        <div className="pricing-toggle">
          <span className={!isAnnual ? "active" : ""}>Monthly</span>
          <label className="toggle">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <span className="slider"></span>
          </label>
          <span className={isAnnual ? "active" : ""}>
            Annual <span className="discount">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? "popular" : ""}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                {plan.price.monthly > 0 && <span className="period">/ month</span>}
              </div>
              {isAnnual && plan.price.monthly > 0 && <p className="billing-note">Billed annually</p>}
              <button className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} plan-button`}>Get Started</button>
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

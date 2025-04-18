import { Mail, Clock, Sparkles } from "lucide-react"
import "./features.css"

export default function Features() {
  const features = [
    {
      icon: <Mail size={24} />,
      title: "Smart Categorization",
      description: "Automatically sorts emails into categories like important, social, promotions, and more.",
    },
    {
      icon: <Clock size={24} />,
      title: "Priority Inbox",
      description: "Identifies urgent emails that need your immediate attention and surfaces them first.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Email Summaries",
      description: "Get concise summaries of long emails so you can quickly understand the content.",
    },
  ]

  return (
    <section id="features" className="features-section section">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">Everything you need to take control of your inbox</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

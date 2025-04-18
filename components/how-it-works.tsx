import "./how-it-works.css"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Email",
      description: "Securely connect your email accounts from Gmail, Outlook, or any other provider.",
    },
    {
      number: "02",
      title: "AI Analyzes Your Inbox",
      description: "Our AI scans your emails and learns your preferences and communication patterns.",
    },
    {
      number: "03",
      title: "Smart Organization",
      description: "Emails are automatically categorized, prioritized, and summarized for easy management.",
    },
    {
      number: "04",
      title: "Take Control",
      description: "Use our intuitive interface to manage your emails more efficiently than ever before.",
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works-section section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get started in minutes, save hours every week</p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span>AInbox</span>
            </Link>
            <p className="footer-description">AI-powered email management to save you time and boost productivity.</p>
            <div className="footer-social">
              <Link href="#" aria-label="GitHub">
                <Github size={20} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Roadmap</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <Mail size={16} />
                <span>hello@ainbox.com</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>123 AI Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AInbox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

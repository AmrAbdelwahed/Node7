import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const bookingUrl = "https://calendly.com/amrabdelwahed00/30min"

export function AppverseFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="shell footer-main">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let's make your next website <em>matter.</em></h2>
        <a className="button button-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a consultation <ArrowUpRight size={18} aria-hidden="true" /></a>
        <p className="footer-contact">Prefer email? <a href="mailto:amrabdelwahed00@gmail.com">amrabdelwahed00@gmail.com</a></p>
      </div>
      <div className="shell footer-bottom">
        <Link href="/" className="footer-brand">Node7<span>.</span></Link>
        <p>Independent website design studio.</p>
        <nav aria-label="Footer navigation">
          <Link href="/faq">FAQ</Link>
          <Link href="/revisions">Revisions</Link>
          <Link href="/t&c">Terms</Link>
        </nav>
        <small>© {new Date().getFullYear()} Node7</small>
      </div>
    </footer>
  )
}

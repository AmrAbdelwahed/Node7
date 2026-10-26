import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

const bookingUrl = "https://calendly.com/amrabdelwahed00/30min"
const services = [
  { number: "01", title: "Website design", description: "A distinctive visual system and a clear path from first impression to inquiry." },
  { number: "02", title: "Development", description: "Responsive, fast pages built to feel as considered as they look." },
  { number: "03", title: "Brand & direction", description: "The typography, imagery, and messaging that make your business recognizable." },
  { number: "04", title: "Ongoing support", description: "Thoughtful improvements after launch as your business and content evolve." },
]
const plans = [
  { name: "Starter", price: "$2,500–$3,500", detail: "A focused web presence for a growing business.", features: ["Custom responsive design", "Up to 5 pages", "Basic search setup"] },
  { name: "Professional", price: "$4,500–$6,500", detail: "More room for your story, services, and conversion goals.", features: ["Expanded page system", "Content and interaction planning", "Advanced integrations as scoped"] },
  { name: "Enterprise", price: "$7,500–$10,000", detail: "A larger digital platform with tailored functionality.", features: ["Custom platform scope", "CRM or workflow integrations", "Priority launch planning"] },
]

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className="hero-section shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Independent digital design studio</p>
            <h1 id="hero-heading">Your website should <em>move</em> your business forward.</h1>
            <p className="hero-description">Node7 designs and builds websites with a point of view, a clear purpose, and room to grow.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a consultation <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="text-link" href="#services">Explore what we do <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/node7-studio-direction.webp" alt="Abstract typography and layout studies arranged on a studio desk" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="cover-image" />
            <span className="visual-caption">Every detail starts with an idea.</span>
          </div>
        </section>

        <section id="services" className="section shell" aria-labelledby="services-heading">
          <div className="section-intro">
            <p className="eyebrow">What we do</p>
            <h2 id="services-heading">Good design works harder.</h2>
            <p>From the first conversation to the final detail, we connect strong visual thinking with the practical needs of your business.</p>
          </div>
          <div className="service-list">
            {services.map((service) => <div className="service-row" key={service.number}>
              <span className="row-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>)}
          </div>
        </section>

        <section id="work" className="section shell" aria-labelledby="work-heading">
          <div className="section-intro work-intro">
            <p className="eyebrow">Our perspective</p>
            <h2 id="work-heading">Made for the way people actually browse.</h2>
            <p>Clear on a phone. Convincing on a desktop. Easy to navigate everywhere in between.</p>
          </div>
          <div className="work-layout">
            <figure className="work-image work-image-large">
              <Image src="/node7-responsive-study.webp" alt="Illustrative responsive website concept displayed on desktop, tablet, and phone" fill sizes="(max-width: 800px) 100vw, 60vw" className="cover-image" />
              <figcaption>Responsive by design</figcaption>
            </figure>
            <figure className="work-image work-image-small">
              <Image src="/node7-process-study.webp" alt="Illustrative pencil wireframes arranged on a studio desk" fill sizes="(max-width: 800px) 100vw, 35vw" className="cover-image" />
              <figcaption>Built with intention</figcaption>
            </figure>
          </div>
          <p className="work-note">Images illustrate our design approach. Client case studies can be added when approved work is available.</p>
        </section>

        <section id="process" className="section process-section shell" aria-labelledby="process-heading">
          <div className="section-intro"><p className="eyebrow">The process</p><h2 id="process-heading">A practical path from idea to launch.</h2></div>
          <div className="process-grid">
            <div><span>01 / Discover</span><h3>Get clear</h3><p>We learn about your audience, offer, and what the website needs to accomplish.</p></div>
            <div><span>02 / Create</span><h3>Shape the experience</h3><p>We develop the visual direction and build a responsive experience around your content.</p></div>
            <div><span>03 / Launch</span><h3>Make it real</h3><p>We refine the details, test the core journeys, and prepare the site for handoff.</p></div>
          </div>
        </section>

        <section id="pricing" className="section shell" aria-labelledby="pricing-heading">
          <div className="section-intro"><p className="eyebrow">Investment</p><h2 id="pricing-heading">A starting point for your project.</h2><p>Indicative project ranges in CAD. We’ll confirm scope, timing, and a final quote together.</p></div>
          <div className="pricing-grid">
            {plans.map((plan) => <article className="plan" key={plan.name}>
              <h3>{plan.name}</h3><p className="plan-price">{plan.price} <small>CAD</small></p>
              <p className="plan-detail">{plan.detail}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Discuss this scope <ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>)}
          </div>
        </section>

        <section className="about-band shell" aria-labelledby="about-heading">
          <p className="eyebrow">About Node7</p><h2 id="about-heading">A smaller studio, a more considered experience.</h2>
          <Link href="/About" className="text-link">Get to know us <ArrowRight size={18} aria-hidden="true" /></Link>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}

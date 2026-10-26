import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Node7 approaches website design, development, and collaboration.",
}

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <header className="inner-hero shell">
          <p className="eyebrow">About the studio</p>
          <h1>Digital work with <em>purpose.</em></h1>
          <p>Node7 is an independent website design studio focused on clear ideas, memorable experiences, and practical outcomes for growing businesses.</p>
        </header>
        <section className="inner-grid shell" aria-label="How we work">
          <article><h2>Start with the why</h2><p>Before discussing layouts, we get clear on who the site serves and what people need to do when they arrive.</p></article>
          <article><h2>Make every detail count</h2><p>Typography, structure, imagery, and interactions should all support the same story.</p></article>
          <article><h2>Design for real devices</h2><p>The experience should work well on a phone, keyboard, and large screen. Accessibility and responsive behavior belong in the process from the start.</p></article>
          <article><h2>Build for what comes next</h2><p>A website should be easy to update and ready to evolve as your business does.</p></article>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}

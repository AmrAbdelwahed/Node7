import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata: Metadata = { title: "FAQ", description: "Answers to common questions about working with Node7 on a website project." }

const questions = [
  { question: "What kinds of websites do you design?", answer: "We focus on marketing websites, service business sites, landing pages, and larger custom digital experiences. We’ll recommend a scope based on what your business needs." },
  { question: "How does a project start?", answer: "We begin with a conversation about your goals, audience, content, and timeline. From there, we define the work and prepare a tailored proposal." },
  { question: "How much does a website cost?", answer: "Our indicative project ranges start at $2,500 CAD. The final quote depends on the page count, content, integrations, and other requirements." },
  { question: "Will my website work on mobile?", answer: "Yes. Responsive layouts and mobile navigation are part of the design and development process." },
  { question: "Can I request revisions?", answer: "Yes. Revision rounds and scope are defined in the project agreement. You can also read our revision policy for more detail." },
  { question: "Do you offer support after launch?", answer: "Ongoing support can be planned around your needs, whether that means content changes, maintenance, or further improvements." },
]
export default function FAQPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <header className="inner-hero shell">
          <p className="eyebrow">Frequently asked questions</p>
          <h1>Good questions, <em>clear answers.</em></h1>
          <p>A few useful details about working with Node7. If your question is more specific, we can cover it during a consultation.</p>
        </header>
        <section className="faq-list shell" aria-label="Questions and answers">
          {questions.map(({ question, answer }) => <details key={question}>
            <summary>{question}</summary>
            <p>{answer} {question === "Can I request revisions?" && <Link href="/revisions">Read the revision policy.</Link>}</p>
          </details>)}
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}

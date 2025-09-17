import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://node7.design/#pricing",
    name: "Website Design Pricing Plans",
    description:
      "Premium website design pricing plans - Starter, Professional, and Enterprise packages for all business needs",
    url: "https://node7.design/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Website Design Services",
      description: "Professional website design services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "2999",
          priceCurrency: "USD",
          description: "Custom 5-page website with responsive design and basic SEO",
        },
        {
          "@type": "Offer",
          name: "Professional Plan",
          price: "5999",
          priceCurrency: "USD",
          description: "Advanced website with custom features and conversion optimization",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "12999",
          priceCurrency: "USD",
          description: "Full-scale website with advanced integrations and ongoing support",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://node7.design/",
    name: "Node7 | Premium Website Design Agency | Modern Websites That Drive Results",
    description:
      "Node7 helps businesses stand out with sleek, conversion-focused website design. Expert web design, branding, and development services that drive real results.",
    url: "https://node7.design/",
    mainEntity: {
      "@type": "Organization",
      name: "Node7 Design Agency",
      url: "https://node7.design",
      sameAs: [
        "https://twitter.com/node7design",
        "https://www.linkedin.com/company/node7design",
        "https://instagram.com/node7design",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://node7.design/#services",
        name: "Services Section",
        url: "https://node7.design/#services",
      },
      {
        "@type": "WebPageElement",
        "@id": "https://node7.design/#portfolio",
        name: "Portfolio Section",
        url: "https://node7.design/#portfolio",
      },
      {
        "@type": "WebPageElement",
        "@id": "https://node7.design/#testimonials",
        name: "Testimonials Section",
        url: "https://node7.design/#testimonials",
      },
      {
        "@type": "WebPageElement",
        "@id": "https://node7.design/#pricing",
        name: "Pricing Section",
        url: "https://node7.design/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        <Testimonials />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

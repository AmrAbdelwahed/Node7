"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

type Currency = "USD"

const PRICES: Record<Currency, { starter: string; professional: string; enterprise: string; save: string }> = {
  USD: {
    starter: "$2,999",
    professional: "$5,999",
    enterprise: "$12,999",
    save: "Most Popular",
  },
}

const starterExamples = [
  "modern-business-website",
  "restaurant-landing-page",
  "portfolio-showcase",
  "service-business-site",
  "startup-landing-page",
]

const professionalExamples = [
  "ecommerce-platform",
  "saas-application-site",
  "corporate-website",
  "agency-portfolio",
  "tech-startup-site",
]

const enterpriseExamples = [
  "enterprise-platform",
  "multi-brand-website",
  "custom-web-application",
  "large-scale-ecommerce",
  "enterprise-portal",
]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Starter" | "Professional" | "Enterprise">(null)
  const [currency, setCurrency] = useState<Currency>("USD")

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(198,255,58,0.12)", color: ACCENT }}
          >
            Our Website Design Packages
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            Investment in Your Success.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400" itemProp="description">
            Transparent pricing. Premium results. Websites that drive real business growth.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="https://calendly.com/amrabdelwahed00/30min" target="_blank">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Starter
              </div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].starter}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">one-time</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setOpenPlan("Starter")}
                  onTouchStart={() => setOpenPlan("Starter")}
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "#0a0a0a",
                    color: "#ffffff",
                    border: "1px solid #333",
                  }}
                >
                  View Portfolio
                </Button>
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://calendly.com/amrabdelwahed00/30min">Get Started</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Custom 5-page website",
                  "Mobile-responsive design",
                  "Basic SEO optimization",
                  "Contact form integration",
                  "2 rounds of revisions",
                  "2-week delivery",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
              style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
            >
              {PRICES[currency].save}
            </div>

            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Professional
              </div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].professional}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">one-time</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setOpenPlan("Professional")}
                  onTouchStart={() => setOpenPlan("Professional")}
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "#0a0a0a",
                    color: "#ffffff",
                    border: "1px solid #333",
                  }}
                >
                  View Portfolio
                </Button>
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://calendly.com/amrabdelwahed00/30min">Get Started</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Custom 10-page website",
                  "Advanced animations & interactions",
                  "Conversion optimization",
                  "Advanced SEO setup",
                  "CMS integration",
                  "3 rounds of revisions",
                  "3-week delivery",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Enterprise
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].enterprise}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">one-time</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => setOpenPlan("Enterprise")}
                  onTouchStart={() => setOpenPlan("Enterprise")}
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "#0a0a0a",
                    color: "#ffffff",
                    border: "1px solid #333",
                  }}
                >
                  View Portfolio
                </Button>
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://calendly.com/amrabdelwahed00/30min">Get Started</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Unlimited pages & features",
                  "Custom web application",
                  "Advanced integrations",
                  "Performance optimization",
                  "Ongoing support & maintenance",
                  "Unlimited revisions",
                  "4-6 week delivery",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      <ExamplesDialog
        open={openPlan === "Starter"}
        onOpenChange={(v) => setOpenPlan(v ? "Starter" : null)}
        planName="Starter Package"
        price={PRICES[currency].starter}
        videoIds={starterExamples}
      />
      <ExamplesDialog
        open={openPlan === "Professional"}
        onOpenChange={(v) => setOpenPlan(v ? "Professional" : null)}
        planName="Professional Package"
        price={PRICES[currency].professional}
        videoIds={professionalExamples}
      />
      <ExamplesDialog
        open={openPlan === "Enterprise"}
        onOpenChange={(v) => setOpenPlan(v ? "Enterprise" : null)}
        planName="Enterprise Package"
        price={PRICES[currency].enterprise}
        videoIds={enterpriseExamples}
      />
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Search, Target, Wrench } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "Custom Website Design",
      description: "Bespoke designs that capture your brand's unique identity and convert visitors into customers.",
    },
    {
      icon: Code,
      title: "Brand Identity & UI/UX",
      description: "Complete brand systems and user experiences that engage your audience and drive results.",
    },
    {
      icon: Search,
      title: "SEO & Performance Optimization",
      description: "Lightning-fast websites optimized for search engines and maximum visibility.",
    },
    {
      icon: Target,
      title: "Conversion-Focused Landing Pages",
      description: "High-converting pages designed to turn traffic into leads and sales.",
    },
    {
      icon: Wrench,
      title: "Ongoing Website Maintenance & Support",
      description: "Keep your website secure, updated, and performing at its best with our ongoing support.",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <div
          className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "rgba(198,255,58,0.12)", color: "#C6FF3A" }}
        >
          Our Services
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Everything you need to succeed online
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          From strategy to launch and beyond, we provide comprehensive website design services that drive real business
          growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400/10">
                <service.icon className="h-6 w-6 text-lime-400" />
              </div>
              <CardTitle className="text-xl text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

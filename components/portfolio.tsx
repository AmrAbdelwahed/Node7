"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: "/premium-website-design-showcase-on-laptop.jpg",
      description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
    },
    {
      title: "SaaS Application",
      category: "Technology",
      image: "/modern-responsive-website-on-multiple-devices.jpg",
      description: "Clean, conversion-focused design for a B2B software platform.",
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: "/modern-website-wireframe-mockup-on-tablet.jpg",
      description: "Professional corporate presence with integrated CMS and analytics.",
    },
    {
      title: "Creative Agency",
      category: "Design",
      image: "/premium-website-design-process-sketches.jpg",
      description: "Bold, creative portfolio site with stunning visual storytelling.",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <div
          className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "rgba(198,255,58,0.12)", color: "#C6FF3A" }}
        >
          Our Work
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Portfolio that speaks for itself
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Discover how we've helped businesses transform their online presence with stunning, results-driven websites.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <Card
            key={index}
            className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="text-sm text-lime-300 mb-2">{item.category}</div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-200 mb-4">{item.description}</p>
                      <Button className="bg-lime-400 text-black hover:bg-lime-300 rounded-full px-6">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild className="bg-lime-400 text-black hover:bg-lime-300 rounded-full px-8 py-3 text-lg font-medium">
          <a href="https://calendly.com/amrabdelwahed00/30min" target="_blank" rel="noopener noreferrer">
            Discuss Your Project
          </a>
        </Button>
      </div>
    </section>
  )
}

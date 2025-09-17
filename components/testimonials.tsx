"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "Node7 transformed our online presence completely. Our website conversion rate increased by 340% in the first month, and we're seeing unprecedented growth in qualified leads.",
      rating: 5,
      image: "/professional-woman-ceo.png",
    },
    {
      name: "Michael Chen",
      company: "GrowthLab",
      role: "Marketing Director",
      content:
        "Working with Node7 was a game-changer. They didn't just design a website – they created a conversion machine. Our ROI has been incredible, and the ongoing support is exceptional.",
      rating: 5,
      image: "/professional-marketing-director.png",
    },
    {
      name: "Emily Rodriguez",
      company: "Bloom Wellness",
      role: "Founder",
      content:
        "The team at Node7 understood our vision perfectly. They delivered a stunning website that not only looks amazing but actually drives results. Our booking rate has tripled since launch.",
      rating: 5,
      image: "/professional-woman-founder-wellness.jpg",
    },
    {
      name: "David Thompson",
      company: "Elite Consulting",
      role: "Managing Partner",
      content:
        "Node7's strategic approach to web design is unmatched. They created a website that positions us as the premium choice in our market. The results speak for themselves – 250% increase in qualified inquiries.",
      rating: 5,
      image: "/professional-man-consulting-partner.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="text-center mb-12">
        <div
          className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "rgba(198,255,58,0.12)", color: "#C6FF3A" }}
        >
          Client Success Stories
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          What our clients say about Node7
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Don't just take our word for it. Here's what business leaders say about working with Node7.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-lime-400 text-lime-400" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-300">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-lime-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

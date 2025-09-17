export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Node7 Design Agency",
    url: "https://node7.design",
    logo: "https://node7.design/logo.png",
    description:
      "Node7 is a premium website design agency serving clients globally with modern, conversion-focused websites that drive real business results.",
    sameAs: [
      "https://www.instagram.com/node7design",
      "https://www.linkedin.com/company/node7design",
      "https://twitter.com/node7design",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressRegion: "Worldwide",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        url: "https://calendly.com/amrabdelwahed00/30min",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United Kingdom" },
      { "@type": "Place", name: "Australia" },
      { "@type": "Place", name: "Europe" },
    ],
  }

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Node7 Design Agency</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Crafting modern websites that drive real business results for ambitious brands worldwide.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Custom Website Design",
              desc: "Bespoke websites that capture your brand's unique identity and convert visitors into customers.",
            },
            {
              title: "Global Reach",
              desc: "Serving ambitious businesses worldwide with premium web design and development services.",
            },
            {
              title: "Conversion-Focused",
              desc: "Every design decision is backed by data and optimized for maximum business results.",
            },
            {
              title: "Brand Storytelling",
              desc: "Helping brands communicate their vision through compelling digital experiences.",
            },
            {
              title: "Collaborative Process",
              desc: "Work directly with our design team for seamless communication and exceptional results.",
            },
            {
              title: "Results-Driven",
              desc: "Websites optimized for search engines, conversions, and long-term business growth.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
        <p className="text-lg opacity-80 mb-8">Let Node7 create a website that drives real business results.</p>
        <a
          href="https://calendly.com/amrabdelwahed00/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-all text-lg"
        >
          Book a Free Strategy Call
        </a>
      </section>
    </>
  )
}

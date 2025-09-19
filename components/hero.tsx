import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="https://calendly.com/amrabdelwahed00/30min" target="_blank" rel="noopener noreferrer">
        Book a Free Strategy Call
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-lime-400 flex items-center justify-center">
              <span className="text-black text-sm font-bold">N7</span>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">Node7 Design Agency</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">MODERN</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">WEBSITES</span>
            <span className="block">THAT DRIVE RESULTS</span>
          </h1>
          <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">
            Node7 helps businesses stand out with sleek, conversion-focused website design.
          </p>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "node7 app" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Replace the phoneData array in components/hero.tsx with these design-focused videos

const phoneData = [
  {
    title: "Strategy-Driven",
    sub: "Every design decision backed by data.",
    tone: "strategy",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    // Website design process video
    videoSrc: "https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38aec6b98853d8e3c&profile_id=174",
  },
  {
    title: "Pixel-Perfect",
    sub: "Designs that look flawless on every device.",
    tone: "design",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    // Responsive design showcase
    videoSrc: "https://player.vimeo.com/external/370467553.hd.mp4?s=15f91fb1d9e5b1b9a1b7b7b7b7b7b7b7b7b7b7b7&profile_id=174",
  },
  {
    title: "Proven Results",
    sub: "Websites that convert visitors to customers.",
    tone: "results",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    // Analytics/results visualization
    videoSrc: "https://player.vimeo.com/external/435003493.hd.mp4?s=7e12c58b5c8e7b3a9b2a3b1c5d9e8f7a6b4c2d1e&profile_id=174",
  },
  {
    title: "Modern Design",
    sub: "Contemporary aesthetics that captivate.",
    tone: "modern",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    // Modern web design elements
    videoSrc: "https://player.vimeo.com/external/421847224.hd.mp4?s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b&profile_id=174",
  },
  {
    title: "Expert-Level",
    sub: "Industry-leading design and development.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    // Premium design showcase
    videoSrc: "https://player.vimeo.com/external/397704345.hd.mp4?s=9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e&profile_id=174",
  },
]
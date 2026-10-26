import { Button } from "@/components/ui/button"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="https://calendly.com/amrabdelwahed00/30min" target="_blank" rel="noopener noreferrer">
        Book Free Consultation
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
            Node7 helps businesses stand out with sleek, conversion-focused website design that drives real growth.
          </p>
          <div className="mt-6">{buttonNew}</div>

          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl">
            {benefitCards.map((card, i) => {
              const visibility = i <= 1 ? "block" : i === 2 ? "hidden md:block" : i === 3 ? "hidden lg:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <BenefitCard title={card.title} sub={card.sub} tone={card.tone} gradient={card.gradient} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  title = "Strategy-Driven",
  sub = "Every design decision backed by data.",
  tone = "strategy",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900/50 p-6 backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
      <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${gradient} opacity-20`} />
      <div className="relative z-10 space-y-3">
        <div className="text-2xl font-bold leading-snug text-white/90">{title}</div>
        <p className="text-sm text-white/70">{sub}</p>
        <div className="inline-flex items-center rounded-full bg-lime-400/10 px-3 py-1 text-xs uppercase tracking-wider text-lime-300 border border-lime-400/20">
          {tone}
        </div>
      </div>
    </div>
  )
}

const benefitCards = [
  {
    title: "Strategy-Driven",
    sub: "Every design decision backed by data and user research.",
    tone: "strategy",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
  },
  {
    title: "Pixel-Perfect",
    sub: "Designs that look flawless on every device and screen size.",
    tone: "design",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },
  {
    title: "Proven Results",
    sub: "Websites that convert visitors into customers and drive growth.",
    tone: "results",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
  },
  {
    title: "Expert-Level",
    sub: "Industry-leading design and development expertise.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
  },
]

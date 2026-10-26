"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

const bookingUrl = "https://calendly.com/amrabdelwahed00/30min"
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Approach" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/About", label: "About" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href="/" className="brand" aria-label="Node7 home" onClick={() => setOpen(false)}>
          <span className="brand-mark">N<span>7</span></span><span>Node7<span className="brand-period">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <a className="nav-cta" href={bookingUrl} target="_blank" rel="noopener noreferrer">Let's talk <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation" inert={!open}>
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book a consultation <ArrowUpRight size={17} aria-hidden="true" /></a>
      </nav>
    </header>
  )
}

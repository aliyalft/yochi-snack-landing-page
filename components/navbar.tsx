"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { NAV_LINKS, waLink } from "@/lib/site"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener("scroll", onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const orderLink = waLink(
    "Halo Yochi Snack, saya ingin memesan cemilan sehat."
  )

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          aria-label="Navigasi utama"
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled
              ? "glass border border-border/70 shadow-lg shadow-primary/5"
              : "bg-transparent"
          )}
        >
          {/* Brand */}
          <a
            href="#beranda"
            className="flex items-center gap-2 rounded-xl font-serif text-xl font-bold text-primary transition-all duration-200 active:scale-[0.97]"
          >
            <span className="flex size-14 items-center justify-center">
              <img
                src="/images/iconyochi.png"
                alt="Yochi Snack"
                width={70}
                height={70}
                className="object-contain"
              />
            </span>

            Yochi Snack
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:bg-accent/60 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Desktop order */}
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 sm:inline-flex"
            >
              Pesan Sekarang
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className={cn(
                "inline-flex size-11 touch-manipulation items-center justify-center rounded-xl border border-border bg-card text-primary",
                "transition-all duration-150",
                "hover:bg-accent/60",
                "active:scale-90 active:bg-primary/10",
                "lg:hidden"
              )}
            >
              {open ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-72 max-w-[80vw] flex-col gap-2 bg-card p-6 shadow-2xl",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Mobile drawer brand */}
          <div className="mb-5 flex items-center gap-3 border-b border-primary/10 pb-5">
            <a
              href="#beranda"
              onClick={() => setOpen(false)}
              className="flex min-w-0 flex-1 items-center gap-2.5"
            >
              <img
                src="/images/iconyochi.png"
                alt="Yochi Snack"
                width={60}
                height={60}
                className="h-11 w-11 shrink-0 object-contain"
              />

              <p className="min-w-0 whitespace-nowrap font-serif text-[1.15rem] font-bold leading-none text-primary">
                Yochi Snack
              </p>
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-primary/15 bg-transparent text-primary transition-all duration-150 active:scale-90 active:bg-primary/10"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Menu links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                touch-manipulation rounded-xl
                px-4 py-3
                text-base font-medium text-foreground/85
                transition-all duration-150
                hover:bg-accent/60 hover:text-primary
                active:scale-[0.97]
                active:bg-primary/10
                active:text-primary
              "
            >
              {link.label}
            </a>
          ))}

          {/* Order button */}
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="
              mt-3 touch-manipulation rounded-xl
              bg-primary px-4 py-3.5
              text-center text-base font-semibold
              text-primary-foreground
              shadow-md shadow-primary/30
              transition-all duration-150
              active:scale-[0.97]
              active:bg-primary/90
            "
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
  )
}
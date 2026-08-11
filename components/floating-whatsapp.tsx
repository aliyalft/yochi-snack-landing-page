"use client"

import { FaWhatsapp } from "react-icons/fa"
import { waLink } from "@/lib/site"

export function FloatingWhatsApp() {
  const link = waLink(
    "Halo Yochi Snack, saya ingin bertanya mengenai produk Yochi Snack."
  )

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi Yochi Snack melalui WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-primary/90 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <FaWhatsapp className="size-7 sm:size-8" />

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
        Chat via WhatsApp
      </span>
    </a>
  )
}
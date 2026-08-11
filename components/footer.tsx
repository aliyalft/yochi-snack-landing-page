import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

import { NAV_LINKS } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              {/* Logo background */}
              <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-2xl bg-white px-2 shadow-sm ring-1 ring-white/40">
                <Image
                  src="/images/iconyochi.png"
                  alt="Logo Yochi Snack"
                  width={78}
                  height={50}
                  className="h-auto w-[78px] object-contain"
                />
              </div>

              <h3 className="font-serif text-3xl font-bold text-white">
                Yochi Snack
              </h3>
            </div>

            <p className="mt-5 max-w-md text-base leading-8 text-white/75">
              Cemilan berbahan sayuran yang gurih dan renyah untuk menemani
              berbagai momen bersama keluarga.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Menu
            </h4>

            <nav className="mt-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-base text-white/75 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Hubungi Kami
            </h4>

            <div className="mt-5 space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6287872038056"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-base text-white/75 transition-colors duration-300 hover:text-white"
              >
                <Phone
                  className="size-5 shrink-0"
                  aria-hidden="true"
                />

                087872038056
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yochi_snack/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-base text-white/75 transition-colors duration-300 hover:text-white"
              >
                <FaInstagram
                  className="size-5 shrink-0"
                  aria-hidden="true"
                />

                @yochi_snack
              </a>

              {/* Maps */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Villa+Pamulang+Jl+Pandu+2+Blok+DD1+No.7+Pondok+Benda+Tangerang+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 text-base text-white/75 transition-colors duration-300 hover:text-white"
              >
                <MapPin
                  className="size-5 shrink-0"
                  aria-hidden="true"
                />

                Lokasi Kami
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/65 sm:text-base">
            © 2026 Yochi Snack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
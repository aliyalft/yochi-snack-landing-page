import { MapPin, Phone } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { INSTAGRAM, INSTAGRAM_URL, WA_DISPLAY, waLink, MAPS_URL } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold">
              Yochi Snack
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Cemilan sehat berbahan alami yang cocok untuk menemani
              aktivitas sehari-hari.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold">
              Menu
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#beranda" className="hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-white">
                  Produk
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold">
              Hubungi Kami
            </h4>

            <div className="mt-3 space-y-3 text-sm text-primary-foreground/80">

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="size-4" />
                {WA_DISPLAY}
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaInstagram className="size-4" />
                @{INSTAGRAM}
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MapPin className="size-4" />
                Lokasi Kami
              </a>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Yochi Snack. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
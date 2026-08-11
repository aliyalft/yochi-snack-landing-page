"use client"

import {
  ArrowUpRight,
  Clock3,
  MapPin,
} from "lucide-react"
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"

import { Reveal } from "@/components/reveal"
import { waLink } from "@/lib/site"

export function Contact() {
  const whatsappLink = waLink(
    "Halo Yochi Snack, saya ingin bertanya atau memesan produk Yochi Snack."
  )

  const instagramLink =
    "https://www.instagram.com/yochi_snack/"

  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Villa+Pamulang+Jl+Pandu+2+Blok+DD1+No.7+Pondok+Benda+Tangerang+Selatan"

  return (
    <section
      id="kontak"
      className="relative isolate overflow-hidden bg-[#fbf5e8] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-40 top-20 size-[30rem] rounded-full bg-primary/7 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-yellow/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Kontak &amp; Lokasi
            </span>

            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Yuk, Pesan Yochi Snack
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Hubungi kami atau temukan lokasi Yochi Snack dengan mudah.
            </p>
          </div>
        </Reveal>

        {/* DESKTOP / TABLET CONTENT */}
        <div className="mt-12 grid w-full items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <Reveal className="w-full">
            <div className="flex w-full flex-col">
              {/* Column heading */}
              <div className="min-h-[160px]">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Hubungi Kami
                </span>

                <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  Siap Bantu Pesananmu
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                  Pilih cara yang paling nyaman untuk terhubung dengan Yochi
                  Snack.
                </p>
              </div>

              {/* Contact cards */}
              <div className="mt-6 flex w-full flex-col gap-4">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between rounded-[1.75rem] border border-primary/10 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FaWhatsapp className="size-6" />
                    </span>

                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                        087872038056
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                {/* Instagram */}
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between rounded-[1.75rem] border border-primary/10 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FaInstagram className="size-6" />
                    </span>

                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        Instagram
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                        @yochi_snack
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                {/* Hours */}
                <div className="flex w-full items-center rounded-[1.75rem] border border-primary/10 bg-white px-5 py-5 shadow-sm sm:px-6">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock3
                        className="size-6"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        Jam Operasional
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                        08.00 WIB – 16.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={100} className="w-full">
            <div className="flex w-full flex-col">
              {/* Column heading */}
              <div className="min-h-[160px]">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Temukan Kami
                </span>

                <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  Lokasi Yochi Snack
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                  Lihat lokasi kami di peta atau buka langsung melalui Google
                  Maps.
                </p>
              </div>

              {/* Map */}
              <div className="mt-6 w-full overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-sm">
                <iframe
                  title="Lokasi Yochi Snack"
                  src="https://www.google.com/maps?q=Villa%20Pamulang%20Jl%20Pandu%202%20Blok%20DD1%20No.7%20Pondok%20Benda%20Tangerang%20Selatan&output=embed"
                  className="h-[300px] w-full border-0 sm:h-[360px] lg:h-[390px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Address */}
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-start justify-between gap-4 border-t border-primary/10 px-5 py-5 transition-colors duration-200 hover:bg-primary/[0.025] sm:px-6"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p className="font-semibold text-foreground">
                        Villa Pamulang
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Jl. Pandu 2 Blok DD1 No.7, Pondok Benda,
                        Tangerang Selatan
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
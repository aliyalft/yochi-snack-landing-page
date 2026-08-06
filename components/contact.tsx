"use client";

import {
  MapPin,
  Clock3,
  Phone,
  ExternalLink,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

import {
  INSTAGRAM,
  INSTAGRAM_URL,
  MAPS_URL,
  WA_DISPLAY,
  waLink,
} from "@/lib/site";

export function Contact() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Hubungi Kami
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold">
              Yuk, Pesan Sekarang!
            </h2>

            <p className="mt-4 text-muted-foreground">
              Kami siap melayani pesanan Anda. Hubungi kami melalui WhatsApp
              atau kunjungi lokasi kami.
            </p>

          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <Reveal>

            <div className="glass rounded-3xl border border-border p-8">

              <div className="space-y-7">

                <div className="flex gap-4">

                  <Phone className="text-primary" />

                  <div>
                    <h4 className="font-semibold">
                      WhatsApp
                    </h4>

                    <p className="text-muted-foreground">
                      {WA_DISPLAY}
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <FaInstagram className="text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Instagram
                    </h4>

                    <p className="text-muted-foreground">
                      @{INSTAGRAM}
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Clock3 className="text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Jam Operasional
                    </h4>

                    <p className="text-muted-foreground">
                      08.00 WIB - 16.00 WIB
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <MapPin className="text-primary" />

                  <div>

                    <h4 className="font-semibold">
                      Alamat
                    </h4>

                    <p className="text-muted-foreground leading-7">
                      Villa Pamulang
                      <br />
                      Jl. Pandu 2 Blok DD1 No.7
                      <br />
                      Pondok Benda
                      <br />
                      Tangerang Selatan
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={waLink(
                    "Halo Yochi Snack, saya ingin memesan produk."
                  )}
                  target="_blank"
                >
                  <Button size="lg">
                    Pesan via WhatsApp
                  </Button>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                  >
                    Instagram
                  </Button>
                </a>

              </div>

            </div>

          </Reveal>

          {/* RIGHT */}

          <Reveal delay={150}>

            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Villa+Pamulang+Jl+Pandu+2+Blok+DD1+No+7+Pondok+Benda+Tangerang+Selatan&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0"
              />

            </div>

            <div className="mt-5">

              <a
                href={MAPS_URL}
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                >
                  Buka di Google Maps
                  <ExternalLink className="ml-2 size-4"/>
                </Button>
              </a>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}
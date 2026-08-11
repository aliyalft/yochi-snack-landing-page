"use client"

import Image from "next/image"
import { Leaf, ShoppingBag } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { waLink } from "@/lib/site"

export function Hero() {
  const orderLink = waLink(
    "Halo Yochi Snack, saya ingin memesan produk Yochi Snack."
  )

  const goToProducts = () => {
    const target = document.getElementById("produk")

    if (!target) return

    window.scrollTo({
      top: target.offsetTop,
      behavior: "auto",
    })
  }

  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden border-b border-primary/10 bg-[#fbf8ef] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:flex lg:min-h-[700px] lg:items-center lg:pb-10"
    >
      {/* Soft colorful background */}
      <div
        className="pointer-events-none absolute -left-40 top-16 size-[34rem] rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-36 top-20 size-[34rem] rounded-full bg-yellow/14 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-9rem] left-1/2 h-[22rem] w-[70%] -translate-x-1/2 rounded-full bg-leaf/7 blur-3xl"
        aria-hidden="true"
      />

      {/* Soft fade menuju section berikutnya */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-primary/[0.035]"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* TEXT */}
          <Reveal>
            <div className="max-w-xl">
              <h1 className="text-balance font-serif text-[2.25rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[4.15rem] lg:leading-[1.08]">
                Cemilan Sehat dari Sayuran,{" "}
                <span className="text-primary">Renyah</span> di Setiap Gigitan
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                Nikmati stik bayam dan stik wortel yang dibuat dari bahan
                berkualitas. Cocok untuk keluarga, anak-anak, maupun teman
                santai.
              </p>

              {/* Desktop buttons */}
              <div className="mt-8 hidden items-center gap-4 lg:flex">
                <a
                  href={orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <ShoppingBag
                    className="size-5"
                    aria-hidden="true"
                  />

                  Pesan Sekarang
                </a>

                <a
                  href="#produk"
                  className="inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-white/80 px-7 py-4 font-semibold text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Lihat Produk
                </a>
              </div>
            </div>
          </Reveal>

          {/* PHOTO */}
          <Reveal delay={100}>
            <div className="pointer-events-none relative -mt-4 sm:-mt-2 lg:mt-0">
              <div className="relative mx-auto w-full max-w-[620px]">
                {/* Glow behind image */}
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-yellow/8 blur-3xl"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-24 rounded-full bg-primary/10 blur-3xl"
                  aria-hidden="true"
                />

                {/* Hero image */}
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_22px_60px_rgba(34,139,34,0.13)]">
                  <Image
                    src="/images/hero-snacks.png"
                    alt="Yochi Snack stik bayam dan stik wortel"
                    width={1200}
                    height={760}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Higienis badge */}
                <div className="animate-float absolute -bottom-4 right-3 z-20 flex max-w-[210px] items-center gap-2.5 rounded-2xl border border-primary/10 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:-bottom-5 sm:right-5 sm:max-w-[240px] sm:px-3.5 sm:py-3 lg:max-w-[245px]">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:size-10">
                    <Leaf
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-foreground sm:text-sm">
                      Dibuat Higienis
                    </p>

                    <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                      Bersih &amp; terjaga
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* MOBILE BUTTONS - SEJAJAR */}
          <div className="relative z-[100] mt-8 grid grid-cols-2 gap-3 lg:hidden">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[100] inline-flex min-h-14 touch-manipulation items-center justify-center gap-2 rounded-2xl bg-primary px-3 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-150 active:scale-[0.97] sm:text-base"
            >
              <ShoppingBag
                className="size-[18px] shrink-0"
                aria-hidden="true"
              />

              Pesan Sekarang
            </a>

            <button
              type="button"
              onPointerDown={goToProducts}
              className="relative z-[100] inline-flex min-h-14 touch-manipulation select-none items-center justify-center rounded-2xl border border-primary/20 bg-white px-3 py-3.5 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-150 active:scale-[0.97] active:bg-primary/10 sm:text-base"
            >
              Lihat Produk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
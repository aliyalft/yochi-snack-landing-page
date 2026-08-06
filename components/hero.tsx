"use client"

import Image from "next/image"
import { Leaf, ShoppingBag, Star } from "lucide-react"
import { waLink } from "@/lib/site"

export function Hero() {
  const orderLink = waLink("Halo Yochi Snack, saya ingin memesan cemilan sehat.")

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Background gradient + decor */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-accent/30" />
      <div className="absolute -left-24 top-24 -z-10 size-72 rounded-full bg-secondary/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-10 -z-10 size-80 rounded-full bg-yellow/30 blur-3xl" aria-hidden="true" />
      <Leaf className="absolute left-[8%] top-[22%] -z-10 size-16 rotate-12 text-leaf/30 animate-float" aria-hidden="true" />
      <Leaf className="absolute right-[10%] top-[30%] -z-10 size-10 -rotate-12 text-primary/20 animate-float-slow" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Text */}
        <div className="animate-in-hero flex flex-col items-start text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Leaf className="size-4" aria-hidden="true" />
            Cemilan sehat berbahan sayuran
          </span>
          <h1 className="text-balance font-serif text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Cemilan Sehat dari Sayuran, <span className="text-primary">Renyah</span> di Setiap Gigitan
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nikmati stik bayam dan stik wortel yang dibuat dari bahan berkualitas. Cocok untuk keluarga,
            anak-anak, maupun teman santai.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              <ShoppingBag className="size-5" aria-hidden="true" />
              Pesan Sekarang
            </a>
            <a
              href="#produk"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-card/70 px-7 py-3.5 text-base font-semibold text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/60"
            >
              Lihat Produk
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <div className="flex items-center gap-1 text-yellow">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-yellow" aria-hidden="true" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Disukai keluarga</span> — gurih, renyah &amp; sehat
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-in-hero" style={{ animationDelay: "150ms" }}>
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[2.5rem] bg-primary/15 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-card shadow-2xl shadow-primary/20 animate-float-slow">
            <Image
              src="/images/hero-snacks.png"
              alt="Aneka stik sayuran renyah Yochi Snack dengan bayam dan wortel segar"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating badge cards */}
          <div className="glass absolute -left-3 top-8 flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 shadow-lg sm:-left-6 animate-float">
            <span className="flex size-9 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
              <Leaf className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">100% Sayuran</p>
              <p className="text-xs text-muted-foreground">Bahan pilihan</p>
            </div>
          </div>

          <div className="glass absolute -bottom-4 right-2 flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-3 shadow-lg sm:right-6 animate-float-slow">
            <span className="flex size-9 items-center justify-center rounded-xl bg-yellow/25 text-yellow-foreground">
              <Star className="size-5 fill-current" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Best Seller</p>
              <p className="text-xs text-muted-foreground">Stik Bayam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

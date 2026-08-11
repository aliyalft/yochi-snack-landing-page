"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Carrot, Leaf, MessageCircle } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { waLink } from "@/lib/site"

const products = [
  {
    name: "Stik Bayam",
    price: "Rp25.000",
    image: "/images/stik-bayam.png",
    alt: "Stik Bayam Yochi Snack kemasan pouch",
    desc: "Stik gurih dari bayam pilihan, renyah dan kaya rasa.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Bayam.",
    tone: "green",
  },
  {
    name: "Stik Wortel",
    price: "Rp25.000",
    image: "/images/stik-wortel.png",
    alt: "Stik Wortel Yochi Snack kemasan pouch",
    desc: "Manis alami wortel dengan tekstur crispy yang pas.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Wortel.",
    tone: "orange",
  },
  {
    name: "Stik Bayam Toples",
    price: "Rp35.000",
    image: "/images/stik-bayam-toples.png",
    alt: "Stik Bayam Yochi Snack kemasan toples",
    desc: "Stik bayam gurih dan renyah dalam kemasan toples yang praktis.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Bayam Toples.",
    tone: "green",
  },
  {
    name: "Stik Wortel Toples",
    price: "Rp35.000",
    image: "/images/stik-wortel-toples.png",
    alt: "Stik Wortel Yochi Snack kemasan toples",
    desc: "Stik wortel gurih dan renyah dalam kemasan toples yang praktis.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Wortel Toples.",
    tone: "orange",
  },
]

export function Products() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider) return

    const cards = Array.from(slider.children) as HTMLElement[]
    if (!cards.length) return

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(sliderCenter - cardCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  const scrollToProduct = (index: number) => {
    const slider = sliderRef.current
    if (!slider) return

    const card = slider.children[index] as HTMLElement | undefined
    if (!card) return

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  return (
    <section
      id="produk"
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      {/* Background utama */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#faf7ee_0%,#f4ecd7_48%,#fbf8ef_100%)]" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_left,rgba(34,139,34,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(241,196,15,0.20),transparent_26%),radial-gradient(circle_at_bottom_center,rgba(151,200,60,0.10),transparent_32%)]"
        aria-hidden="true"
      />

      {/* Glow kiri */}
      <div
        className="absolute -left-32 top-20 z-[2] size-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Glow kanan */}
      <div
        className="absolute -right-32 top-28 z-[2] size-96 rounded-full bg-yellow/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Glow bawah */}
      <div
        className="absolute bottom-0 left-1/2 z-[2] h-64 w-[75%] -translate-x-1/2 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <Leaf
          className="absolute -left-5 top-[5%] size-20 -rotate-12 text-primary/24 sm:left-[2%] sm:top-[9%] sm:size-24 lg:size-28"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <Carrot
          className="absolute -right-4 top-[6%] size-20 rotate-12 text-yellow/65 sm:right-[2%] sm:top-[10%] sm:size-24 lg:size-28"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <Carrot
          className="absolute left-[5%] top-[48%] size-16 rotate-12 text-yellow/45 sm:size-20"
          strokeWidth={1.6}
          aria-hidden="true"
        />

        <Leaf
          className="absolute right-[5%] top-[50%] size-20 -rotate-12 text-primary/25 sm:size-24"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <Leaf
          className="absolute bottom-[11%] left-[8%] size-20 rotate-[18deg] text-leaf/28 sm:bottom-[8%] sm:left-[4%] sm:size-24"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <Carrot
          className="absolute bottom-[10%] right-[8%] size-20 -rotate-[16deg] text-yellow/60 sm:bottom-[9%] sm:right-[4%] sm:size-24"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <div className="absolute -left-12 top-[30%] h-52 w-24 rounded-r-full border border-white/60 bg-white/30" />
        <div className="absolute -right-10 top-[37%] h-56 w-24 rounded-l-full border border-white/60 bg-white/25" />
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Katalog
          </span>

          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Produk Kami
          </h2>

          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pilih cemilan favoritmu.
          </p>

          <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary via-leaf to-yellow" />
        </Reveal>

        {/* Product stage */}
        <div className="relative mt-12">
          {/* Stage hanya muncul tablet + desktop */}
          <div
            className="absolute inset-0 z-0 hidden rounded-[2.5rem] border border-white/50 bg-white/20 shadow-[0_30px_90px_rgba(34,139,34,0.08)] backdrop-blur-sm sm:block"
            aria-hidden="true"
          />

          <div
            className="absolute left-8 right-8 top-6 z-0 hidden h-24 rounded-full bg-primary/7 blur-3xl sm:block"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-8 left-1/2 z-0 hidden h-24 w-[70%] -translate-x-1/2 rounded-full bg-yellow/10 blur-3xl sm:block"
            aria-hidden="true"
          />

          {/* Mobile slider / Desktop grid */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="relative z-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[7%] pb-6 pt-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-6 sm:pb-8 sm:pt-6 lg:grid-cols-4"
          >
            {products.map((p, i) => (
              <div
                key={p.name}
                className="w-[86%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-none"
              >
                <Reveal delay={i * 100} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-[0_12px_34px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(34,139,34,0.14)]">
                    {/* Image area */}
                    <div
                      className={`relative overflow-hidden ${
                        p.tone === "green"
                          ? "bg-[linear-gradient(135deg,rgba(34,139,34,0.08),rgba(255,255,255,0.96),rgba(151,200,60,0.10))]"
                          : "bg-[linear-gradient(135deg,rgba(241,196,15,0.12),rgba(255,255,255,0.97),rgba(255,166,0,0.10))]"
                      }`}
                    >
                      <div className="relative aspect-[4/4.25] sm:aspect-[4/4.35]">
                        <div
                          className="absolute left-5 top-5 size-16 rounded-full bg-white/60 blur-2xl"
                          aria-hidden="true"
                        />

                        <div
                          className={`absolute bottom-4 right-5 size-20 rounded-full blur-2xl ${
                            p.tone === "green"
                              ? "bg-primary/14"
                              : "bg-yellow/18"
                          }`}
                          aria-hidden="true"
                        />

                        <div
                          className="absolute inset-x-10 bottom-5 h-8 rounded-full bg-foreground/5 blur-xl"
                          aria-hidden="true"
                        />

                        <Image
                          src={p.image}
                          alt={p.alt}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 25vw"
                          loading="lazy"
                          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105 sm:p-6"
                        />
                      </div>
                    </div>

                    {/* Gradient separator */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary via-leaf to-yellow" />

                    {/* Product info */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-2xl font-bold leading-tight text-foreground">
                        {p.name}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {p.desc}
                      </p>

                      <p className="mt-5 font-serif text-3xl font-bold text-primary">
                        {p.price}
                      </p>

                      <a
                        href={waLink(p.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Pesan ${p.name} via WhatsApp`}
                        className="ripple mt-5 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 sm:text-base"
                      >
                        <MessageCircle
                          className="size-5 shrink-0"
                          aria-hidden="true"
                        />
                        Pesan
                      </a>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile dots */}
        <div
          className="mt-6 flex items-center justify-center gap-2 sm:hidden"
          aria-label="Navigasi produk"
        >
          {products.map((product, index) => (
            <button
              key={product.name}
              type="button"
              onClick={() => scrollToProduct(index)}
              aria-label={`Lihat ${product.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-primary/25"
              }`}
            />
          ))}
        </div>

        {/* Bottom info */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-[1.75rem] border border-yellow/60 bg-white/80 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:px-7 sm:py-6">
              <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Tersedia dalam pilihan kemasan pouch dan toples untuk teman
                santai maupun stok camilan keluarga.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
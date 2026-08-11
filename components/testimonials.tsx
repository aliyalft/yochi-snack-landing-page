"use client"

import { Quote, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    name: "Ibu Rina",
    role: "Pelanggan",
    text: "Stik Bayam Yochi Snack enak banget, rasanya gurih dan renyah. Anak saya yang biasanya susah makan sayur malah suka.",
  },
  {
    name: "Kak Dinda",
    role: "Repeat Customer",
    text: "Stik Wortel Yochi Snack benar-benar bikin nagih! Teksturnya renyah, rasanya pas, dan cocok banget untuk camilan keluarga.",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24"
    >
      <div
        className="absolute -left-20 top-0 size-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-24 bottom-0 size-80 rounded-full bg-yellow/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Testimoni
            </span>

            <h2 className="mt-5 font-serif text-3xl font-bold sm:text-4xl">
              Apa Kata Pelanggan?
            </h2>

            <p className="mt-4 text-primary-foreground/75">
              Cerita dari pelanggan yang sudah menikmati Yochi Snack bersama
              keluarga.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <article className="relative h-full rounded-3xl bg-card p-7 text-foreground shadow-xl sm:p-8">
                <Quote
                  className="absolute right-6 top-6 text-primary/15"
                  size={42}
                />

                <div className="flex gap-1 text-yellow">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="size-4 fill-yellow"
                    />
                  ))}
                </div>

                <p className="mt-6 leading-8 text-muted-foreground">
                  “{item.text}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
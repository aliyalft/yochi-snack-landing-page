"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";

const testimonials = [
  {
    name: "Ibu Rina",
    role: "Pelanggan",
    text: "Stik Bayam Yochi Snack enak banget, rasanya gurih dan renyah. Anak saya yang biasanya susah makan sayur malah suka. 👍😊",
  },
  {
    name: "Kak Dinda",
    role: "Repeat Customer",
    text: "Stik Wortel Yochi Snack benar-benar bikin nagih! Teksturnya renyah, rasanya pas, dan cocok banget untuk camilan keluarga. Pasti repeat order lagi! ❤️",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-cream py-24"
    >
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-leaf/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Testimoni
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold">
              Apa Kata Pelanggan Kami?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Kepuasan pelanggan adalah prioritas kami. Terima kasih telah
              mempercayai Yochi Snack sebagai camilan sehat keluarga.
            </p>

          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 150}>

              <div className="glass relative rounded-3xl border border-border p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <Quote
                  className="absolute right-6 top-6 text-primary/20"
                  size={44}
                />

                <div className="mb-5 flex">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="fill-yellow text-yellow"
                      size={18}
                    />
                  ))}

                </div>

                <p className="leading-8 text-muted-foreground">
                  "{item.text}"
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
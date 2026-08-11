import {
  Leaf,
  Carrot,
  Cookie,
  Heart,
} from "lucide-react"

import { Reveal } from "@/components/reveal"

const reasons = [
  {
    icon: Leaf,
    title: "Bahan Berkualitas",
    desc: "Dipilih dengan perhatian untuk menghasilkan rasa yang konsisten dan nikmat.",
  },
  {
    icon: Carrot,
    title: "Sayuran Pilihan",
    desc: "Bayam dan wortel menjadi bagian utama dari varian stik Yochi Snack.",
  },
  {
    icon: Cookie,
    title: "Renyah & Gurih",
    desc: "Tekstur renyah dengan rasa gurih yang cocok untuk teman santai.",
  },
  {
    icon: Heart,
    title: "Untuk Seluruh Keluarga",
    desc: "Camilan praktis yang bisa dinikmati bersama dalam berbagai suasana.",
  },
]

export function WhyUs() {
  return (
    <section
      id="kenapa-kami"
      className="relative overflow-hidden bg-primary/5 py-16 sm:py-20 lg:py-24"
    >
      {/* Soft glow */}
      <div
        className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Keunggulan
            </span>

            <h2 className="mt-5 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Kenapa Memilih Kami
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-relaxed">
              Kami menghadirkan camilan yang dibuat dengan perhatian pada
              bahan, rasa, dan proses.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="group h-full rounded-[1.75rem] border border-primary/10 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 sm:rounded-3xl sm:p-7">
                {/* Icon */}
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-12 sm:rounded-2xl">
                  <item.icon
                    className="size-5 sm:size-6"
                    aria-hidden="true"
                  />
                </span>

                {/* Title */}
                <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-foreground sm:mt-6 sm:text-xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-6 text-muted-foreground sm:mt-3 sm:leading-7">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
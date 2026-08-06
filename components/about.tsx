import Image from "next/image"
import { Leaf, Sprout, Sparkles, Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  { icon: Leaf, label: "Bahan Berkualitas" },
  { icon: Sprout, label: "Lebih Sehat" },
  { icon: Sparkles, label: "Renyah" },
  { icon: Heart, label: "Cocok Untuk Semua Usia" },
]

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-20 sm:py-28">
      <Leaf className="absolute right-[6%] top-16 -z-10 size-14 rotate-45 text-leaf/15" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 -z-10 size-32 rounded-3xl bg-yellow/25" aria-hidden="true" />
          <div className="overflow-hidden rounded-[2rem] border-4 border-card shadow-xl shadow-primary/15">
            <Image
              src="/images/about-snacks.png"
              alt="Proses pembuatan cemilan sehat Yochi Snack dengan sayuran segar"
              width={640}
              height={640}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="glass absolute -bottom-5 left-6 rounded-2xl border border-border/60 px-5 py-3 shadow-lg">
            <p className="font-serif text-2xl font-bold text-primary">Higienis</p>
            <p className="text-xs text-muted-foreground">Diproses dengan standar bersih</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-accent/60 px-4 py-1.5 text-sm font-semibold text-primary">
              Tentang Kami
            </span>
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Tentang Yochi Snack
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Yochi Snack merupakan usaha makanan ringan yang menghadirkan cemilan sehat berbahan dasar
              sayuran seperti bayam dan wortel. Diproses secara higienis menggunakan bahan berkualitas
              sehingga menghasilkan stik yang gurih, renyah, dan cocok dinikmati semua kalangan.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

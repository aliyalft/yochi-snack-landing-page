import { Leaf, Carrot, Sparkles, Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Counter } from "@/components/counter"

const cards = [
  {
    icon: Leaf,
    title: "Bahan Berkualitas",
    desc: "Dipilih dari bahan segar dan terbaik untuk rasa maksimal.",
  },
  {
    icon: Carrot,
    title: "Menggunakan Sayuran Pilihan",
    desc: "Bayam dan wortel asli sebagai bahan utama setiap stik.",
  },
  {
    icon: Sparkles,
    title: "Renyah & Gurih",
    desc: "Tekstur crispy dengan rasa gurih yang bikin nagih.",
  },
  {
    icon: Heart,
    title: "Disukai Anak hingga Dewasa",
    desc: "Camilan favorit keluarga untuk segala suasana.",
  },
]

const stats = [
  { value: 100, suffix: "%", label: "Bahan Berkualitas" },
  { value: 100, suffix: "%", label: "Produk Homemade" },
  { value: 5, suffix: "★", label: "Rasa Favorit Keluarga" },
]

export function WhyUs() {
  return (
    <section id="kenapa-kami" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background to-cream/60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/60 px-4 py-1.5 text-sm font-semibold text-primary">
            Keunggulan
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Kenapa Memilih Kami
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Kami berkomitmen menghadirkan cemilan sehat yang lezat dan aman untuk seluruh keluarga.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg font-bold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-6 rounded-3xl border border-primary/15 bg-card/70 p-8 shadow-sm backdrop-blur sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

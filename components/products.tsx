import Image from "next/image"
import { MessageCircle, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { waLink } from "@/lib/site"

const products = [
  {
    name: "Stik Bayam",
    price: "Rp25.000",
    badge: "Best Seller",
    badgeClass: "bg-primary text-primary-foreground",
    image: "/images/stik-bayam.png",
    alt: "Stik bayam renyah Yochi Snack dalam mangkuk dengan daun bayam segar",
    desc: "Stik gurih dari bayam pilihan, renyah dan kaya rasa.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Bayam.",
  },
  {
    name: "Stik Wortel",
    price: "Rp25.000",
    badge: "Healthy Choice",
    badgeClass: "bg-yellow text-yellow-foreground",
    image: "/images/stik-wortel.png",
    alt: "Stik wortel renyah Yochi Snack dalam mangkuk dengan wortel segar",
    desc: "Manis alami wortel dengan tekstur crispy yang pas.",
    message: "Halo Yochi Snack, saya ingin memesan Stik Wortel.",
  },
]

export function Products() {
  return (
    <section id="produk" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/60 px-4 py-1.5 text-sm font-semibold text-primary">
            Katalog
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Produk Kami
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pilih cemilan favoritmu.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-md ${p.badgeClass}`}
                  >
                    {p.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1 text-yellow">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-yellow" aria-hidden="true" />
                    ))}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <p className="mt-4 font-serif text-3xl font-bold text-primary">{p.price}</p>

                  <a
                    href={waLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan ${p.name} via WhatsApp`}
                    className="ripple mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Pesan via WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

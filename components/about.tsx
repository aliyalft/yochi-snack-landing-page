import { Reveal } from "@/components/reveal"
import { Counter } from "@/components/counter"

const stats = [
  {
    value: 100,
    suffix: "%",
    label: "Bahan Berkualitas",
  },
  {
    value: 100,
    suffix: "%",
    label: "Produk Homemade",
  },
  {
    value: 5,
    suffix: "★",
    label: "Rasa Favorit Keluarga",
  },
]

export function About() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-primary/5 py-16 sm:py-20 lg:py-24"
    >
      {/* Soft decoration sama nuansanya dengan Keunggulan */}
      <div
        className="absolute -right-32 top-0 size-96 rounded-full bg-yellow/8 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-32 bottom-0 size-96 rounded-full bg-leaf/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* ABOUT */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Tentang Kami
            </span>

            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Cerita di Balik Yochi Snack
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              Yochi Snack hadir dari keinginan menghadirkan camilan berbahan
              sayuran yang tetap enak dinikmati. Berawal dari bayam dan wortel,
              setiap stik dibuat dengan perhatian pada rasa, kualitas bahan,
              dan proses yang higienis agar bisa menjadi teman camilan sederhana
              untuk berbagai momen sehari-hari.
            </p>
          </div>
        </Reveal>

        {/* STATISTICS */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm sm:mt-12">
            <div className="grid grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-2 py-6 text-center sm:px-6 sm:py-8 ${
                    index !== stats.length - 1
                      ? "border-r border-primary/10"
                      : ""
                  }`}
                >
                  <p className="font-serif text-2xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      duration={1400}
                    />
                  </p>

                  <p className="mt-2 text-[11px] leading-snug text-muted-foreground sm:text-sm">
                    {stat.label === "Bahan Berkualitas" ? (
                      <>
                        <span className="sm:hidden">
                          Bahan
                          <br />
                          Berkualitas
                        </span>

                        <span className="hidden sm:inline">
                          Bahan Berkualitas
                        </span>
                      </>
                    ) : stat.label === "Produk Homemade" ? (
                      <>
                        <span className="sm:hidden">
                          Produk
                          <br />
                          Homemade
                        </span>

                        <span className="hidden sm:inline">
                          Produk Homemade
                        </span>
                      </>
                    ) : (
                      stat.label
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-primary via-leaf to-yellow" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
import Image from "next/image"
import { Dumbbell, Wind, Users, Trophy } from "lucide-react"

const KEGIATAN = [
  {
    icon: Dumbbell,
    title: "Latihan Fisik & Jurus",
    desc: "Pemanasan, kuda-kuda, jurus tangan kosong, dan aplikasi teknik bertarung.",
  },
  {
    icon: Wind,
    title: "Olah Pernapasan",
    desc: "Latihan pernapasan untuk melatih tenaga dalam dan ketenangan batin.",
  },
  {
    icon: Users,
    title: "Sparring & Gerak Berpasangan",
    desc: "Melatih refleks, timing, dan penerapan jurus bersama sesama anggota.",
  },
  {
    icon: Trophy,
    title: "Ujian & Kejuaraan",
    desc: "Ujian kenaikan tingkat serta partisipasi dalam kejuaraan seni dan tanding.",
  },
]

export function Kegiatan() {
  return (
    <section
      id="kegiatan"
      className="scroll-mt-20 border-y border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border/70">
            <Image
              src="/images/tim-latihan.webp"
              alt="Anggota IKSPI Kera Sakti Pasker Tegal Kota berkumpul setelah latihan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          <div>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              Kegiatan
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
              Apa yang Kami Latih
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Latihan disusun bertahap agar setiap anggota berkembang secara
              menyeluruh — dari fisik, teknik, hingga mental dan spiritual.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {KEGIATAN.map((k) => (
                <div
                  key={k.title}
                  className="rounded-md border border-border/70 bg-background p-5"
                >
                  <k.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-wide text-foreground">
                    {k.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {k.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

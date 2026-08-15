import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-silat.png"
          alt="Pesilat IKSPI Kera Sakti dalam kuda-kuda gaya kera"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-24">
        <div className="max-w-2xl">
          <img
            src="/images/logo-ikspi.jpg"
            alt="Logo IKSPI Kera Sakti"
            className="mb-6 h-28 w-28 rounded-md border border-accent/30 bg-white object-contain p-1.5 shadow-lg shadow-black/40"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent">
            <MapPin className="h-3.5 w-3.5" />
            Tegal Selatan, Jawa Tengah
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl">
            Ikatan Keluarga Silat Putra Indonesia
            <span className="mt-2 block text-primary">Kera Sakti</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Perguruan pencak silat yang membina jasmani dan rohani melalui jurus
            gaya kera, kedisiplinan, dan persaudaraan. Selamat datang di halaman
            resmi <span className="text-foreground">Pasker Tegal Kota</span>.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#gabung"
              className="rounded-sm bg-primary px-7 py-3.5 text-center font-display text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Gabung Latihan
            </a>
            <a
              href="#tentang"
              className="rounded-sm border border-border px-7 py-3.5 text-center font-display text-sm uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { n: "1980", l: "Berdiri di Madiun" },
              { n: "10", l: "Tingkatan Sabuk" },
              { n: "2x", l: "Latihan / Minggu" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold text-accent">{s.n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

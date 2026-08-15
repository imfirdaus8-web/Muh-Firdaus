const TINGKAT = [
  {
    sabuk: "Sabuk Hitam",
    tingkat: "Tingkat Dasar",
    warna: "oklch(0.28 0.01 40)",
    desc: "Anggota baru (warga tingkat I). Mempelajari kuda-kuda, jurus dasar, dan pengenalan perguruan.",
  },
  {
    sabuk: "Sabuk Kuning",
    tingkat: "Tingkat II",
    warna: "oklch(0.8 0.15 90)",
    desc: "Pemantapan jurus dasar, pernapasan, serta penanaman disiplin dan mental.",
  },
  {
    sabuk: "Sabuk Biru",
    tingkat: "Tingkat III",
    warna: "oklch(0.55 0.13 250)",
    desc: "Penguasaan jurus lanjutan, teknik bertarung, dan pengembangan tenaga dalam.",
  },
  {
    sabuk: "Sabuk Merah (Warga)",
    tingkat: "Pendekar",
    warna: "oklch(0.55 0.2 27)",
    desc: "Tingkat kepelatihan. Berhak membina dan menyandang status warga penuh perguruan.",
  },
]

export function Tingkatan() {
  return (
    <section id="tingkatan" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
          Jenjang Latihan
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
          Tingkatan Sabuk
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Setiap anggota menempuh jenjang latihan bertahap. Kenaikan tingkat
          ditentukan melalui ujian jurus, fisik, dan mental yang diselenggarakan
          perguruan.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TINGKAT.map((t, i) => (
          <div
            key={t.sabuk}
            className="group relative overflow-hidden rounded-md border border-border/70 bg-card p-6 transition-colors hover:border-accent/50"
          >
            <span className="font-display text-5xl font-bold text-border transition-colors group-hover:text-accent/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className="mt-4 h-2.5 w-16 rounded-full"
              style={{ backgroundColor: t.warna }}
              aria-hidden
            />
            <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
              {t.sabuk}
            </h3>
            <p className="text-xs uppercase tracking-wider text-accent">
              {t.tingkat}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

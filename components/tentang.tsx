import { Heart, Shield, Sparkles } from "lucide-react"

const NILAI = [
  {
    icon: Shield,
    title: "Kedisiplinan",
    desc: "Membentuk pribadi yang tangguh, bertanggung jawab, dan taat pada norma perguruan serta masyarakat.",
  },
  {
    icon: Heart,
    title: "Persaudaraan",
    desc: "Mempererat tali silaturahmi antar anggota tanpa memandang suku, agama, maupun golongan.",
  },
  {
    icon: Sparkles,
    title: "Spiritual",
    desc: "Menyeimbangkan kekuatan fisik dengan ketenangan batin dan pengabdian kepada Tuhan Yang Maha Esa.",
  },
]

export function Tentang() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Tentang Perguruan
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
            Warisan Bela Diri Gaya Kera
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">IKSPI Kera Sakti</span> (Ikatan
              Keluarga Silat Putra Indonesia) adalah perguruan pencak silat yang
              didirikan oleh <span className="text-foreground">R. Totong Kiemdarto</span>{" "}
              pada tahun 1980 di Kota Madiun, Jawa Timur. Perguruan ini memadukan
              seni bela diri tradisional Indonesia dengan teknik gerakan yang
              terinspirasi dari kelincahan kera.
            </p>
            <p>
              <span className="text-foreground">Pasker Tegal Kota</span>{" "}
              hadir sebagai wadah pembinaan warga dan pelajar di wilayah Kota
              Tegal untuk mempelajari jurus, memupuk mental, serta membangun
              karakter melalui latihan rutin yang terstruktur dan penuh
              persaudaraan.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {NILAI.map((n) => (
            <div
              key={n.title}
              className="flex gap-5 rounded-md border border-border/70 bg-card p-6 transition-colors hover:border-accent/50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-primary/15 text-primary">
                <n.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                  {n.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {n.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

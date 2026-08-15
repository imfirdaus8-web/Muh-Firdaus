import { AtSign } from "lucide-react"

const SYARAT = [
  "Sehat jasmani dan rohani",
  "Bersedia mematuhi peraturan perguruan",
  "Membawa semangat disiplin dan persaudaraan",
  "Terbuka untuk usia pelajar hingga dewasa",
]

const KONTAK = [
  {
    icon: AtSign,
    label: "Instagram",
    value: "IKSPI Pasker Tegal Kota",
    href: "https://instagram.com/ikspi_debongtengah",
  },
]

export function Bergabung() {
  return (
    <section
      id="gabung"
      className="scroll-mt-20 border-t border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-background p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-display text-sm uppercase tracking-[0.3em] text-accent">
                Bergabung
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
                Jadi Bagian Keluarga Besar Kera Sakti
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Ingin belajar bela diri sekaligus membangun karakter? Datang
                langsung ke tempat latihan atau hubungi kami melalui kontak di
                samping.
              </p>

              <ul className="mt-8 space-y-3">
                {SYARAT.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-foreground">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              {KONTAK.map((k) => (
                <a
                  key={k.label}
                  href={k.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-md border border-border/70 bg-background p-5 transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/15 text-primary">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {k.label}
                    </p>
                    <p className="font-display text-lg font-semibold tracking-wide text-foreground group-hover:text-primary">
                      {k.value}
                    </p>
                  </div>
                </a>
              ))}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Klik akun Instagram di atas untuk menghubungi dan mengikuti
                kegiatan kami secara langsung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

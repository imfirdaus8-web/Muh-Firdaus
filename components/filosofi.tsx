const PANCA = [
  "Bertaqwa kepada Tuhan Yang Maha Esa",
  "Berbudi luhur, tahu benar dan salah",
  "Pemberani, tetapi tidak sombong",
  "Sanggup menegakkan keadilan dan kebenaran",
  "Setia kepada perguruan dan bangsa",
]

export function Filosofi() {
  return (
    <section
      id="filosofi"
      className="scroll-mt-20 border-y border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
              Filosofi & Lambang
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
              Makna di Balik Kera Sakti
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Gambar <span className="text-foreground">kera</span> melambangkan
                kelincahan, kecerdikan, dan ketangkasan dalam menghadapi lawan.
                Gerakan yang lincah namun terkendali menjadi ciri khas jurus
                perguruan ini.
              </p>
              <p>
                Warna <span className="text-primary">merah</span> menggambarkan
                keberanian, sedangkan warna{" "}
                <span className="text-accent">kuning emas</span> melambangkan
                keluhuran budi dan kejayaan. Keduanya mengingatkan setiap anggota
                untuk berani membela kebenaran dengan hati yang bersih.
              </p>
              <p>
                Setiap pesilat dituntun oleh sumpah dan janji untuk tidak
                menyalahgunakan ilmu, melainkan menjadikannya sarana pengabdian
                bagi sesama.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border/70 bg-background p-7 md:p-9">
            <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
              Panca Prasetya
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Lima janji yang dipegang teguh setiap anggota IKSPI Kera Sakti.
            </p>
            <ol className="mt-7 space-y-5">
              {PANCA.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-accent/40 font-display text-base font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

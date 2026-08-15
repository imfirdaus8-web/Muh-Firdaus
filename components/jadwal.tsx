import Image from "next/image"
import { Clock, MapPin, CalendarDays } from "lucide-react"

const JADWAL = [
  { hari: "Malam Rabu", waktu: "20.00 – Selesai", fokus: "Latihan Rutin" },
  { hari: "Malam Sabtu", waktu: "20.00 – Selesai", fokus: "Latihan Rutin" },
]

export function Jadwal() {
  return (
    <section id="jadwal" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            Jadwal & Lokasi
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-foreground text-balance md:text-5xl">
            Waktu Latihan
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Latihan rutin dilaksanakan dua kali dalam seminggu, yaitu malam
            Rabu dan malam Sabtu. Anggota baru dipersilakan datang untuk
            mengenal perguruan lebih dekat.
          </p>

          <div className="mt-8 space-y-3">
            {JADWAL.map((j) => (
              <div
                key={j.hari}
                className="flex items-center justify-between gap-4 rounded-md border border-border/70 bg-card px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/15 text-primary">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                      {j.hari}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-accent">
                      {j.fokus}
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {j.waktu}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-md border border-border/70 p-7 md:p-9">
          <Image
            src="/images/tim-latihan.webp"
            alt="Lokasi latihan IKSPI Kera Sakti Pasker Tegal Kota"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />

          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/15 text-accent">
              <MapPin className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
              Tempat Latihan
            </h3>
            <p className="mt-3 leading-relaxed text-foreground/90">
              Belakang Lapangan Tegal Selatan, Kota Tegal, Jawa Tengah.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Terbuka untuk pelajar dan umum. Tidak dipungut biaya pendaftaran
              awal — cukup niat, disiplin, dan kesungguhan.
            </p>
          </div>

          <a
            href="#gabung"
            className="relative mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-center font-display text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Hubungi Pelatih
          </a>
        </div>
      </div>
    </section>
  )
}

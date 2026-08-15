import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Tentang } from "@/components/tentang"
import { Filosofi } from "@/components/filosofi"
import { Tingkatan } from "@/components/tingkatan"
import { Kegiatan } from "@/components/kegiatan"
import { Jadwal } from "@/components/jadwal"
import { Bergabung } from "@/components/bergabung"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Tentang />
        <Filosofi />
        <Tingkatan />
        <Kegiatan />
        <Jadwal />
        <Bergabung />
      </main>
      <SiteFooter />
    </div>
  )
}

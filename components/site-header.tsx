"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { label: "Tentang", href: "#tentang" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Tingkatan", href: "#tingkatan" },
  { label: "Kegiatan", href: "#kegiatan" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Gabung", href: "#gabung" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo-ikspi.jpg"
            alt="Logo IKSPI Kera Sakti"
            className="h-11 w-11 rounded-sm bg-white object-contain p-0.5"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-foreground">
              IKSPI KERA SAKTI
            </span>
            <span className="block text-xs uppercase tracking-[0.2em] text-accent">
              Pasker Tegal Kota
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#gabung"
          className="hidden rounded-sm bg-primary px-5 py-2 font-display text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 md:inline-block"
        >
          Daftar Latihan
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2 font-display text-sm uppercase tracking-wider text-muted-foreground hover:bg-secondary hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#gabung"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-sm bg-primary px-3 py-2 text-center font-display text-sm uppercase tracking-wider text-primary-foreground"
              >
                Daftar Latihan
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

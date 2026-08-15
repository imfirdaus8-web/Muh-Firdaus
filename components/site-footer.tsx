export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-ikspi.jpg"
              alt="Logo IKSPI Kera Sakti"
              className="h-11 w-11 rounded-sm bg-white object-contain p-0.5"
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold tracking-wide text-foreground">
                IKSPI KERA SAKTI
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                Pasker Tegal Kota
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            Membina jasmani, rohani, dan persaudaraan melalui seni bela diri
            pencak silat gaya kera. Salam persaudaraan, salam Kera Sakti.
          </p>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} IKSPI Kera Sakti Pasker Tegal Kota ·
            Website informasi untuk keperluan komunitas
          </p>
        </div>
      </div>
    </footer>
  )
}

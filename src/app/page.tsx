import Image from "next/image";
import Link from "next/link";
import { Exchange } from "./bank-tools";
import { bankPages, regulatory } from "./corporate";

const highlights = [
  { title: "Perbankan konsumer", body: "Temukan tabungan, giro, deposito, dan layanan transaksi untuk kebutuhanmu.", href: "/product#konsumer" },
  { title: "Pembiayaan usaha", body: "Jelajahi pilihan pembiayaan untuk usaha mikro, UKM, dan institusi.", href: "/product#pembiayaan" },
  { title: "Solusi digital", body: "Kenali QRIS, virtual account, transfer host-to-host, dan Open Banking.", href: "/sampoerna-digital" },
];
const digitalPaths = [
  "/institusi-keuangan-dan-korporasi/virtual-account-fund-transfer-host-to-host",
  "/institusi-keuangan-dan-korporasi/rekening-dana-lender",
  "/article/qris-smm", "/article/open-banking", "/article/API-Merchant-QRIS",
];

export default function Home() {
  const digital = digitalPaths.flatMap((path) => bankPages.filter((page) => page.path === path));
  return <main id="konten">
    <section className="bank-hero" aria-labelledby="judul">
      <div className="shell bank-hero-copy">
        <h1 id="judul">Mari berkembang <em>bersama.</em></h1>
        <p className="lede">Tabungan, pembiayaan usaha, dan layanan digital untuk individu dan bisnis.</p>
        <div className="actions">
          <Link className="button primary" href="/product">Jelajahi produk <span aria-hidden="true">→</span></Link>
          <Link className="text-link" href="/sampoerna-digital">Sampoerna Digital <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="bank-hero-scene" aria-hidden="true">
        <div className="bank-hero-rings" />
        <div className="bank-hero-card">
          <Image src="/bank-card-hero.webp" alt="" fill preload sizes="(max-width: 600px) 85vw, 420px" />
        </div>
      </div>
    </section>
    <div className="service-strip"><div className="shell service-inner">
      <p>{regulatory}</p>
      <nav aria-label="Akses cepat"><Link href="/#kurs">Kurs valuta asing</Link><Link href="/office">Cari kantor</Link><Link href="/contact">Hubungi Kami</Link></nav>
    </div></div>
    <section className="shell section"><div className="section-head"><div><h2>Produk dan layanan perbankan</h2></div></div>
      <div className="bento">{highlights.map((item, index) => <article key={item.href} className={index === 0 ? "product product-featured" : "product"}><div><h3>{item.title}</h3><p>{item.body}</p><Link className="text-link" href={item.href}>Jelajahi →</Link></div></article>)}</div>
    </section>
    <section className="feature-band"><div className="shell section"><h2>Layanan perbankan digital</h2><p className="bank-intro">Solusi untuk pembayaran dan transaksi korporasi melalui jaringan seperti PRIMA, ATM Bersama, BI-FAST, dan QRIS.</p>
      <div className="bank-grid">{digital.map((page) => <Link className="bank-panel bank-card" key={page.path} href={page.path}><h3>{page.title}</h3><span aria-hidden="true">→</span></Link>)}</div>
    </div></section>
    <section className="shell section bank-updates"><p className="eyebrow"><span /> Program & informasi</p><h2>Kabar Bank Sampoerna</h2>
      <div className="bank-grid">
        <a className="bank-panel bank-card" href="https://pdaja.com/">PDaja · Pembiayaan untuk kebutuhan usaha <span aria-hidden="true">→</span></a>
        <Link className="bank-panel bank-card" href="/news">Berita dan pengumuman <span aria-hidden="true">→</span></Link>
        <Link className="bank-panel bank-card" href="/article/mitra-korporasi-dan-strategis">Mitra korporasi dan strategis <span aria-hidden="true">→</span></Link>
        <Link className="bank-panel bank-card" href="/article/testimoni-nasabah">Cerita pelaku UMKM <span aria-hidden="true">→</span></Link>
      </div>
    </section>
    <section className="shell section" id="kurs"><h2>Kurs valuta asing</h2><Exchange /></section>
  </main>;
}

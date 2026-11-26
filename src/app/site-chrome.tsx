import Link from "next/link";
import Image from "next/image";
import { Help, Search } from "./assist";

const navigation = [
  ["Produk", "/produk"], ["Fitur", "/fitur"], ["Promo", "/promo"],
  ["Acara", "/acara"], ["Informasi", "/informasi"],
];

export function SiteHeader() {
  return <>
    <a className="skip" href="#konten">Lewati ke konten</a>
    <header className="site-header"><div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Bank Sahabat Sampoerna, beranda"><Image src="/logo_bs.png" alt="Bank Sahabat Sampoerna" width={154} height={52} priority /></Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions">
        <Search />
        <Link className="button primary header-cta" href="/#unduh">Unduh aplikasi <span aria-hidden="true">→</span></Link>
        <details className="mobile-nav"><summary aria-label="Menu navigasi">≡</summary><nav aria-label="Navigasi seluler">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/#unduh">Unduh aplikasi</Link></nav></details>
      </div>
    </div></header>
  </>;
}

export function SiteFooter() {
  return <>
    <footer><div className="shell footer-inner"><div><strong>Bank Sahabat Sampoerna</strong><small>Prototype desain · Sampoerna Mobile Banking</small></div><nav aria-label="Navigasi footer"><Link href="/informasi/tentang">Tentang kami</Link><Link href="/informasi/kontak">Kontak & FAQ</Link><a href="#konten">Ke atas ↑</a></nav></div></footer>
    <Help />
  </>;
}

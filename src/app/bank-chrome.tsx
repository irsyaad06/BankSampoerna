import Image from "next/image";
import Link from "next/link";
import { BankSearch } from "./bank-tools";
import { bankNav, bankPages, bankingChannels, contact, regulatory } from "./corporate";

export function BankHeader() {
  return <>
    <a className="skip" href="#konten">Lewati ke konten</a>
    <header className="site-header"><div className="shell header-inner bank-header">
      <Link className="brand" href="/" aria-label="Bank Sahabat Sampoerna, beranda"><Image src="/logo_bs.png" alt="Bank Sahabat Sampoerna" width={154} height={52} priority /></Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">{bankNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <div className="header-actions"><BankSearch pages={bankPages.map(({ path, title, headings }) => ({ path, title, headings }))} />
        <details className="bank-menu"><summary className="button primary">E-Banking</summary><nav aria-label="Kanal e-banking">{bankingChannels.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></details>
        <details className="mobile-nav"><summary aria-label="Buka menu">≡</summary><nav aria-label="Navigasi seluler">{bankNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></details>
      </div>
    </div></header>
  </>;
}

export function BankFooter() {
  return <footer className="bank-footer"><div className="shell">
    <div className="footer-inner"><div><strong>PT Bank Sahabat Sampoerna</strong><p>{contact}</p><a href="tel:1500035">1500 035</a> &nbsp; <a href="mailto:info@banksampoerna.com">info@banksampoerna.com</a></div>
    <nav aria-label="Navigasi footer"><Link href="/contact">Hubungi Kami</Link><Link href="/term-and-condition">Syarat & Ketentuan</Link><Link href="/privacy-policy">Kebijakan Privasi</Link></nav></div>
    <p className="bank-note">{regulatory}</p>
  </div></footer>;
}

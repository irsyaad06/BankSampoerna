import Image from "next/image";
import Link from "next/link";
import { BankSearch } from "./bank-tools";
import { BankNavigation } from "./bank-navigation";
import { bankNav, bankPages, bankingChannels, contact, regulatory } from "./corporate";

export function BankHeader() {
  return <>
    <a className="skip" href="#konten">Lewati ke konten</a>
    <header className="site-header">
      <div className="bank-utility"><nav className="shell" aria-label="Tautan layanan">
        <Link href="/hubungan-investor">Hubungan Investor</Link>
        <Link href="/office">Jaringan Kantor</Link>
        <Link href="/contact">Hubungi Kami</Link>
      </nav></div>
      <div className="shell header-inner bank-header">
        <Link className="brand" href="/" aria-label="Bank Sahabat Sampoerna, beranda"><Image src="/logo_bs.png" alt="Bank Sahabat Sampoerna" width={154} height={52} priority /></Link>
        <BankNavigation channels={bankingChannels}><BankSearch pages={bankPages.map(({ path, title, headings }) => ({ path, title, headings }))} /></BankNavigation>
      </div>
    </header>
  </>;
}

export function BankFooter() {
  return <footer className="bank-footer"><div className="shell">
    <div className="footer-inner">
      <div><h2>PT Bank Sahabat Sampoerna</h2><p>{contact}</p><a className="footer-phone" href="tel:1500035">1500 035</a><a href="mailto:info@banksampoerna.com">info@banksampoerna.com</a></div>
      <nav aria-label="Navigasi footer">{bankNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/direktori">Direktori halaman</Link></nav>
    </div>
    <div className="footer-legal"><p>{regulatory}</p><div><Link href="/term-and-condition">Syarat & Ketentuan</Link><Link href="/privacy-policy">Kebijakan Privasi</Link></div></div>
  </div></footer>;
}

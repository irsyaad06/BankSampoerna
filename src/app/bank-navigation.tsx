"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type ReactNode } from "react";

type NavLink = { label: string; href: string };
const groups = [
  { title: "Produk & Layanan", href: "/product", links: [
    { label: "Tabungan, giro & deposito", href: "/product#konsumer" },
    { label: "Pembiayaan usaha", href: "/product#pembiayaan" },
    { label: "Program spesial", href: "/product#program-spesial" },
  ] },
  { title: "Sampoerna Digital", href: "/sampoerna-digital", links: [
    { label: "Open Banking", href: "/article/open-banking" },
    { label: "QRIS Merchant", href: "/article/qris-smm" },
    { label: "Virtual Account & Host to Host", href: "/institusi-keuangan-dan-korporasi/virtual-account-fund-transfer-host-to-host" },
  ] },
  { title: "Tentang Bank", href: "/about", links: [
    { label: "Profil Bank", href: "/article/bank-sahabat-sampoerna" },
    { label: "Berita & pengumuman", href: "/news" },
    { label: "Hubungan Investor", href: "/hubungan-investor" },
  ] },
];

function Chevron() {
  return <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m4 6 4 4 4-4" /></svg>;
}

export function BankNavigation({ children, channels }: { children: ReactNode; channels: NavLink[] }) {
  const pathname = usePathname();
  const region = useRef<HTMLDivElement>(null);
  function closeMenus() {
    region.current?.querySelectorAll("details[open]").forEach((menu) => menu.removeAttribute("open"));
  }

  return <div className="bank-navigation" ref={region} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
  }} onKeyDown={(event) => {
    if (event.key !== "Escape") return;
    const menu = event.target instanceof Element && event.target.closest("details[open]");
    if (menu) {
      closeMenus();
      menu.querySelector("summary")?.focus();
    }
  }}>
    <nav className="bank-desktop-nav" aria-label="Navigasi utama">
      {groups.map((group) => <details key={group.href} name="bank-nav" className="bank-nav-group">
        <summary data-current={pathname === group.href || group.links.some((link) => link.href === pathname) || undefined}>{group.title}<Chevron /></summary>
        <div className="bank-nav-dropdown">
          <Link className="bank-nav-overview" href={group.href} onClick={closeMenus}>Jelajahi {group.title} <span aria-hidden="true">→</span></Link>
          {group.links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus}>{link.label}</Link>)}
        </div>
      </details>)}
    </nav>
    <div className="bank-nav-actions">
      {children}
      <details className="bank-nav-group bank-ebanking" name="bank-nav">
        <summary className="button primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>E-Banking<Chevron /></summary>
        <div className="bank-nav-dropdown">{channels.map((item) => <a key={item.href} href={item.href}>{item.label} <span aria-hidden="true">↗</span></a>)}</div>
      </details>
      <details className="bank-nav-group bank-mobile-menu" name="bank-nav">
        <summary aria-label="Buka menu"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" /></svg></summary>
        <nav className="bank-nav-dropdown" aria-label="Navigasi seluler">
          {groups.map((group) => <Link key={group.href} href={group.href} onClick={closeMenus}>{group.title}</Link>)}
          <Link href="/hubungan-investor" onClick={closeMenus}>Hubungan Investor</Link>
          <Link href="/office" onClick={closeMenus}>Jaringan Kantor</Link>
          <Link href="/contact" onClick={closeMenus}>Hubungi Kami</Link>
        </nav>
      </details>
    </div>
  </div>;
}

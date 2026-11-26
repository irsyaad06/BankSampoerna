import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { bankPages, bankSource, contact, copy, type BankPage, type BankLink } from "../corporate";
import inventory from "../data/bank-snapshot.json";

type Props = { params: Promise<{ path: string[] }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return [...bankPages.map((page) => ({ path: page.path.slice(1).split("/") })), { path: ["direktori"] }];
}

async function getPage(params: Props["params"]): Promise<BankPage> {
  const path = "/" + (await params).path.join("/");
  if (path === "/direktori") return { path, title: "Direktori halaman", headings: [], links: bankPages.map((page) => ({ label: page.title, href: page.path })), tables: [] };
  return bankPages.find((entry) => entry.path === path) ?? notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: (await getPage(params)).title };
}

export default async function BankDetail({ params }: Props) {
  const page = await getPage(params);
  const directory = page.path === "/direktori";
  const text = copy[page.path];
  return <main id="konten" className="shell section bank-detail">
    <nav className="bank-breadcrumb" aria-label="Jejak navigasi"><Link href="/">Beranda</Link> / <span aria-current="page">{page.title}</span></nav>
    <header className="bank-detail-hero"><h1>{page.title}</h1>{text?.map((part) => <p className="bank-intro" key={part}>{part}</p>)}</header>
    {(page.path === "/contact" || page.path === "/office") && <div className="bank-panel bank-contact"><h2>Kantor pusat</h2><p>{contact}</p><div className="actions"><a href="tel:1500035">1500 035</a><a href="mailto:info@banksampoerna.com">Email informasi</a><a href="mailto:complainthandling.bss@banksampoerna.com">Email pengaduan</a></div></div>}
    {page.headings.length > 0 && <div className="bank-topics" aria-label="Topik halaman">{page.headings.map((heading) => <span key={heading}>{heading}</span>)}</div>}
    {page.tables.map((rows, index) => <div className="bank-panel bank-data table-scroll" key={index} tabIndex={0} aria-label={`Tabel data sumber ${index + 1}`}><table><tbody>{rows.map((row, n) => <tr key={n}>{row.map((cell, i) => n === 0 ? <th key={i} scope="col">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>)}
    {page.groups && Object.keys(page.groups).length > 0 ? Object.entries(page.groups).map(([group, links]) =>
      <section className="bank-group bank-resources" key={group} id={group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}><h2>{group}</h2><Resources links={links ?? []} /></section>
    ) : page.links.length > 0 && <section className="bank-resources"><h2>{directory ? "Halaman yang tersedia" : "Halaman dan dokumen terkait"}</h2><Resources links={page.links} /></section>}
    {directory ? <p className="bank-note">{bankPages.length} URL sumber tersedia. {inventory.failed.length} URL belum berhasil dimuat saat pengambilan.</p> : <div className="actions bank-source"><a className="button primary" href={bankSource + page.path}>Buka halaman resmi →</a><Link className="text-link" href="/direktori">Direktori halaman →</Link></div>}
  </main>;
}

function Resources({ links }: { links: BankLink[] }) {
  return <div className="bank-grid">{links.map((link) => link.href.startsWith("/") ? <Link className="bank-panel bank-card" key={link.href} href={link.href}>{link.label}<span aria-hidden="true">→</span></Link> : <a className="bank-panel bank-card" key={link.href} href={link.href}>{link.label}<span aria-hidden="true">→</span></a>)}</div>;
}

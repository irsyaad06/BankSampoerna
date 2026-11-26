import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faq, stores } from "../../content";
import { entryPath, sections } from "../../site-content";

type Route = { params: Promise<{ section: string; detail?: string[] }> };

export function generateStaticParams() {
  return Object.entries(sections).flatMap(([section, group]) => [
    { section, detail: [] },
    ...group.entries.map((entry) => ({ section, detail: [entry.slug] })),
  ]);
}

async function getPage({ params }: Route) {
  const { section, detail = [] } = await params;
  const group = Object.hasOwn(sections, section) ? sections[section] : undefined;
  const entry = group?.entries.find((item) => item.slug === detail[0]);
  if (!group || detail.length > 1 || (detail.length === 1 && !entry)) notFound();
  return { group, entry, section };
}

export async function generateMetadata(route: Route): Promise<Metadata> {
  const { group, entry } = await getPage(route);
  const item = entry ?? group;
  return { title: item.title + " | Sampoerna Mobile Banking", description: item.description };
}

export default async function LandingSection(route: Route) {
  const { group, entry, section } = await getPage(route);
  const item = entry ?? group;
  const downloads = section === "produk" || section === "fitur";
  return <main id="konten" className="shell subpage section">
    <nav className="breadcrumbs" aria-label="Jejak navigasi">
      <Link href="/">Beranda</Link><span aria-hidden="true">/</span>
      {entry ? <><Link href={"/" + section}>{group.title}</Link><span aria-hidden="true">/</span><span aria-current="page">{entry.title}</span></> : <span aria-current="page">{group.title}</span>}
    </nav>
    <header className="subpage-hero">
      <p className="eyebrow"><span /> Sampoerna Mobile Banking</p>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </header>
    {entry ? <div className="subpage-body">
      <article className="subpage-card">
        <h2>{entry.slug === "kontak" ? "Pertanyaan umum" : "Informasi layanan"}</h2>
        {entry.slug === "kontak" ? <div className="faq-inline">{faq.map((item) => <details key={item.title}><summary>{item.title}</summary><p>{item.description}</p></details>)}</div> : <p>{entry.details ?? entry.description}</p>}
        <div className="actions">
          {entry.source && <a className="button primary" href={entry.source}>Lihat sumber resmi →</a>}
          {!downloads && section === "informasi" && <a className="text-link" href="tel:1500035">Phone Banking 1500 035 →</a>}
          {downloads && !entry.source && <Link className="text-link" href="/#unduh">Lihat pilihan unduh →</Link>}
        </div>
      </article>
      <aside className="subpage-card">
        <h2>Jelajahi juga</h2>
        {group.entries.filter((related) => related.slug !== entry.slug).map((related) => <Link className="related-link" key={related.slug} href={entryPath(section, related)}>{related.title} <span aria-hidden="true">→</span></Link>)}
      </aside>
    </div> : <div className="subpage-grid">{group.entries.map((entry) => <article className="subpage-card" key={entry.slug}><h2>{entry.title}</h2><p>{entry.description}</p><Link className="text-link" href={entryPath(section, entry)} aria-label={"Lihat " + entry.title}>Lihat selengkapnya →</Link></article>)}</div>}
    {downloads && <div className="download subpage-download"><div><h2>Unduh aplikasi</h2><p>Mulai dari toko aplikasi resmi.</p></div><div className="actions">{stores.map((store) => <a key={store.label} className="button store" href={store.href}>{store.label} →</a>)}</div></div>}
  </main>;
}

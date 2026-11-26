import Image from "next/image";
import { Help, Search } from "./assist";
import { faq, features, official, products, stores } from "./content";

const nav = [
  { label: "Produk", href: "#produk" },
  { label: "Fitur", href: "#fitur" },
  { label: "Promo", href: "#promo" },
  { label: "Informasi", href: "#bantuan" },
];

export default function Home() {
  return <>
    <a className="skip" href="#konten">Lewati ke konten</a>
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#beranda" aria-label="Bank Sahabat Sampoerna, beranda"><Image src="/logo_bs.png" alt="Bank Sahabat Sampoerna" width={154} height={52} priority /></a>
        <nav className="desktop-nav" aria-label="Navigasi utama">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions">
          <Search />
          <a className="button primary header-cta" href="#unduh">Unduh aplikasi <span aria-hidden="true">→</span></a>
          <details className="mobile-nav"><summary aria-label="Menu navigasi">≡</summary><nav aria-label="Navigasi seluler">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#unduh">Unduh aplikasi</a></nav></details>
        </div>
      </div>
    </header>
    <main id="konten">
      <section className="shell hero" id="beranda" aria-labelledby="judul">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Sampoerna Mobile Banking</p>
          <h1 id="judul">Lebih dekat dengan <em>tujuanmu.</em></h1>
          <p className="lede">Buka rekening, kelola tabungan, dan lakukan transaksi harian. Semuanya dari Sampoerna Mobile Banking.</p>
          <div className="actions"><a className="button primary" href="#unduh">Unduh aplikasi <span aria-hidden="true">→</span></a><a className="text-link" href="#produk">Jelajahi produk <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art">
          <Image src="/smb-hero.webp" alt="Seorang perempuan menggunakan ponsel di kafe" fill sizes="(max-width: 760px) 100vw, 53vw" preload />
          <div className="hero-shade" />
          <div className="hero-caption"><span className="caption-icon" aria-hidden="true">→</span><span><strong>Perbankan dalam genggaman</strong><small>Bank Sahabat Sampoerna</small></span></div>
        </div>
      </section>
      <div className="shell trust"><span aria-hidden="true">◇</span><p>Bank Sahabat Sampoerna berizin dan diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia, serta merupakan peserta penjaminan LPS.</p></div>

      <section className="shell section" id="produk" aria-labelledby="judul-produk">
        <div className="section-head"><div><p className="eyebrow"><span /> Produk</p><h2 id="judul-produk">Rencana berbeda.<br /> Pilihan yang tepat.</h2></div><a className="text-link" href={official + "/our-product/"}>Semua produk <span aria-hidden="true">→</span></a></div>
        <div className="bento">{products.map((product, index) => <article className={index === 0 ? "product product-featured" : "product"} key={product.title}>
          <span className="product-symbol" aria-hidden="true">{product.symbol}</span>
          <div><p className="product-type">{product.type}</p><h3>{product.title}</h3><p>{product.description}</p><a className="text-link" href={product.href} aria-label={"Detail " + product.title}>Detail produk <span aria-hidden="true">→</span></a></div>
        </article>)}</div>
      </section>

      <section className="feature-band" id="fitur"><div className="shell section"><p className="eyebrow"><span /> Fitur & transaksi</p><h2>Kebutuhan harian, lebih praktis.</h2><div className="feature-grid">{features.map((item) => <article key={item.title}><span aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

      <section className="shell section" id="promo"><div className="promo"><div><p className="eyebrow"><span /> Promo & program</p><h2>Temukan kesempatan berikutnya.</h2><p>Cek penawaran, program undian, dan informasi acara dari Sampoerna Mobile Banking.</p></div><div className="actions"><a className="button primary" href={official + "/promo/"}>Lihat promo <span aria-hidden="true">→</span></a><a className="text-link" href={official + "/undian-2026/"}>Informasi undian <span aria-hidden="true">→</span></a><a className="text-link" href={official + "/event-lainnya/"}>Jadwal acara <span aria-hidden="true">→</span></a></div></div></section>

      <section className="shell section faq" id="bantuan">
        <div><p className="eyebrow"><span /> Informasi & bantuan</p><h2>Ada yang ingin ditanyakan?</h2><p>Phone Banking <a href="tel:1500035">1500 035</a></p></div>
        <div>{faq.map((item) => <details key={item.title}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.description}</p></details>)}</div>
      </section>

      <section className="shell section" id="unduh"><div className="download"><div><p className="eyebrow"><span /> Mulai dari aplikasi</p><h2>Bawa bankmu ke mana saja.</h2><p>Unduh Sampoerna Mobile Banking dari toko aplikasi resmi.</p></div><div className="actions">{stores.map((store) => <a key={store.label} className="button store" href={store.href}>{store.label} <span aria-hidden="true">→</span></a>)}</div></div></section>
    </main>
    <footer><div className="shell footer-inner"><div><strong>Bank Sahabat Sampoerna</strong><small>Prototype desain · Sampoerna Mobile Banking</small></div><nav aria-label="Navigasi footer"><a href={official + "/tentang-kami/"}>Tentang kami →</a><a href="tel:1500035">Phone Banking</a><a href="#beranda">Ke atas ↑</a></nav></div></footer>
    <Help />
  </>;
}

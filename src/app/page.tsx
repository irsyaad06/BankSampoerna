import Link from "next/link";
import Image from "next/image";
import { faq, features, products, stores } from "./content";

export default function Home() {
  return <>
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
        <div className="section-head"><div><p className="eyebrow"><span /> Produk</p><h2 id="judul-produk">Rencana berbeda.<br /> Pilihan yang tepat.</h2></div><Link className="text-link" href="/produk">Semua produk <span aria-hidden="true">→</span></Link></div>
        <div className="bento">{products.map((product, index) => <article className={index === 0 ? "product product-featured" : "product"} key={product.title}>
          <span className="product-symbol" aria-hidden="true">{product.symbol}</span>
          <div><p className="product-type">{product.type}</p><h3>{product.title}</h3><p>{product.description}</p><Link className="text-link" href={product.href} aria-label={"Detail " + product.title}>Detail produk <span aria-hidden="true">→</span></Link></div>
        </article>)}</div>
      </section>

      <section className="feature-band" id="fitur"><div className="shell section"><p className="eyebrow"><span /> Fitur & transaksi</p><div className="section-head"><h2>Kebutuhan harian, lebih praktis.</h2><Link className="text-link" href="/fitur">Semua fitur →</Link></div><div className="feature-grid">{features.map((item) => <article key={item.title}><span aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

      <section className="shell section" id="promo"><div className="promo"><div><p className="eyebrow"><span /> Promo & program</p><h2>Temukan kesempatan berikutnya.</h2><p>Cek penawaran, program undian, dan informasi acara dari Sampoerna Mobile Banking.</p></div><div className="actions"><Link className="button primary" href="/promo">Lihat promo <span aria-hidden="true">→</span></Link><Link className="text-link" href="/promo/program-undian">Informasi undian <span aria-hidden="true">→</span></Link><Link className="text-link" href="/acara">Jadwal acara <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="shell section faq" id="bantuan">
        <div><p className="eyebrow"><span /> Informasi & bantuan</p><h2>Ada yang ingin ditanyakan?</h2><p>Phone Banking <a href="tel:1500035">1500 035</a></p></div>
        <div>{faq.map((item) => <details key={item.title}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.description}</p></details>)}</div>
      </section>

      <section className="shell section" id="unduh"><div className="download"><div><p className="eyebrow"><span /> Mulai dari aplikasi</p><h2>Bawa bankmu ke mana saja.</h2><p>Unduh Sampoerna Mobile Banking dari toko aplikasi resmi.</p></div><div className="actions">{stores.map((store) => <a key={store.label} className="button store" href={store.href}>{store.label} <span aria-hidden="true">→</span></a>)}</div></div></section>
    </main>
  </>;
}

"use client";

import { useRef, useState } from "react";
import { faq, searchItems } from "./content";

export function Search() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = words.length
    ? searchItems.filter((item) => words.every((word) => (item.title + " " + item.description).toLowerCase().includes(word)))
    : searchItems.slice(0, 4);

  return <>
    <button className="search-button" type="button" aria-label="Cari informasi" onClick={() => dialog.current?.showModal()}>
      <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
    </button>
    <dialog ref={dialog} className="search-dialog" aria-labelledby="search-title">
      <div className="dialog-head"><h2 id="search-title">Cari informasi</h2><button type="button" aria-label="Tutup pencarian" onClick={() => dialog.current?.close()}>×</button></div>
      <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Kata kunci" placeholder="Cari produk, fitur, atau bantuan…" />
      <div className="results" aria-live="polite">
        {results.length ? results.map((item) => <a key={item.title} href={item.href} onClick={() => dialog.current?.close()}><strong>{item.title}</strong><span>{item.description}</span></a>) : <p>Belum ada hasil. Coba kata kunci seperti tabungan, QRIS, atau promo.</p>}
      </div>
    </dialog>
  </>;
}

export function Help() {
  const [selected, setSelected] = useState<number | null>(null);
  return <details className="help-widget">
    <summary aria-label="Bantuan cepat"><span aria-hidden="true">?</span> Bantuan</summary>
    <div className="help-panel">
      <h2>Bantuan cepat</h2>
      <p>Pilih topik untuk melihat jawabannya.</p>
      {faq.map((item, index) => <button type="button" key={item.title} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.title}</button>)}
      {selected !== null && <div className="help-answer" aria-live="polite"><p>{faq[selected].description}</p><a href={faq[selected].href}>Lihat selengkapnya →</a></div>}
      <a href="tel:1500035">Hubungi Phone Banking →</a>
    </div>
  </details>;
}

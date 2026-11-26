"use client";
import { useRef, useState } from "react";
import Link from "next/link";

export function BankSearch({ pages }: { pages: { path: string; title: string; headings: string[] }[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const items = pages.filter((page) => words.every((word) => [page.title, page.path, ...page.headings].join(" ").toLowerCase().includes(word))).slice(0, 12);
  return <>
    <button className="search-button" aria-label="Cari di situs" type="button" onClick={() => dialog.current?.showModal()}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
    </button>
    <dialog ref={dialog} className="search-dialog" aria-labelledby="bank-search-title">
      <div className="dialog-head"><h2 id="bank-search-title">Cari informasi</h2><button type="button" aria-label="Tutup pencarian" onClick={() => dialog.current?.close()}>×</button></div>
      <input aria-label="Kata kunci" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Coba tabungan, QRIS, atau laporan…" />
      <div className="results" aria-live="polite">{items.length ? items.map((item) => <Link key={item.path} href={item.path} onClick={() => dialog.current?.close()}><strong>{item.title}</strong><span>{item.path}</span></Link>) : <p>Belum ada hasil untuk kata kunci ini.</p>}</div>
    </dialog>
  </>;
}

const rates = [
  ["AUD", 12055, 12298, 12045, 12308],
  ["CNY", 2700, 2800, 2670, 2837],
  ["EUR", 20003, 20282, 19993, 20292],
  ["SGD", 14107, 14362, 14097, 14372],
  ["USD", 18240, 18490, 18220, 18510],
] as const;
const numbers = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 });

export function Exchange() {
  const [currency, setCurrency] = useState("USD");
  const [market, setMarket] = useState<"tt" | "notes">("tt");
  const [direction, setDirection] = useState<"to-idr" | "from-idr">("to-idr");
  const [amount, setAmount] = useState("1");
  const rate = rates.find(([code]) => code === currency) ?? rates[4];
  const value = Number(amount);
  const buy = market === "tt" ? rate[1] : rate[3];
  const sell = market === "tt" ? rate[2] : rate[4];
  const result = direction === "to-idr" ? value * buy : value / sell;
  return <div className="exchange-grid">
    <div className="bank-panel">
      <div className="table-scroll" tabIndex={0} aria-label="Tabel kurs valuta asing"><table><thead><tr><th rowSpan={2}>Mata uang</th><th colSpan={2}>Transfer (TT)</th><th colSpan={2}>Bank Notes</th></tr><tr><th>Beli</th><th>Jual</th><th>Beli</th><th>Jual</th></tr></thead><tbody>{rates.map(([code, ...values]) => <tr key={code}><th scope="row">{code}</th>{values.map((n,i) => <td key={i}>{numbers.format(n)}</td>)}</tr>)}</tbody></table></div>
      <p className="bank-note">Snapshot 26 November 2026, 17.30 WIB. Kurs beli dan jual dari sisi bank.</p>
    </div>
    <form className="bank-panel calculator" onSubmit={(event) => event.preventDefault()}>
      <h3>Simulasi kurs</h3>
      <label>Jenis kurs <select value={market} onChange={(e) => setMarket(e.target.value === "notes" ? "notes" : "tt")}><option value="tt">Transfer (TT)</option><option value="notes">Bank Notes</option></select></label>
      <label>Arah konversi <select value={direction} onChange={(e) => setDirection(e.target.value === "from-idr" ? "from-idr" : "to-idr")}><option value="to-idr">Valas ke rupiah</option><option value="from-idr">Rupiah ke valas</option></select></label>
      <label>Mata uang <select value={currency} onChange={(e) => setCurrency(e.target.value)}>{rates.map(([code]) => <option key={code}>{code}</option>)}</select></label>
      <label>Jumlah <input type="number" min="0" step="any" value={amount} onChange={(e) => setAmount(e.target.value)} /></label>
      <output aria-live="polite">{amount && value >= 0 && Number.isFinite(result) ? `${direction === "to-idr" ? "IDR" : currency} ${numbers.format(result)}` : "Masukkan jumlah yang valid"}</output>
    </form>
  </div>;
}

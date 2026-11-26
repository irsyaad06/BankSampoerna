import pages0 from "./data/pages-01.json";
import pages1 from "./data/pages-02.json";
import pages2 from "./data/pages-03.json";
import pages3 from "./data/pages-04.json";
import pages4 from "./data/pages-05.json";
import pages5 from "./data/pages-06.json";
import pages6 from "./data/pages-07.json";
import pages7 from "./data/pages-08.json";
import pages8 from "./data/pages-09.json";
import pages9 from "./data/pages-10.json";
import snapshot from "./data/bank-snapshot.json";

export type BankLink = { label: string; href: string };
export type BankPage = { path: string; title: string; headings: string[]; links: BankLink[]; tables: string[][][]; groups?: Partial<Record<string, BankLink[]>> };

export const bankPages: BankPage[] = [...pages0, ...pages1, ...pages2, ...pages3, ...pages4, ...pages5, ...pages6, ...pages7, ...pages8, ...pages9];
export const bankSource = "https://www.banksampoerna.com";
export const bankNav = [
  { label: "Produk & Layanan", href: "/product" },
  { label: "Sampoerna Digital", href: "/sampoerna-digital" },
  { label: "Jaringan Kantor", href: "/office" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Hubungan Investor", href: "/hubungan-investor" },
  { label: "Kontak", href: "/contact" },
];
export const bankingChannels = snapshot.channels;
export const regulatory = "Bank Sahabat Sampoerna berizin dan diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia, serta merupakan peserta penjaminan LPS.";
export const contact = "Sampoerna Strategic Square, North Tower, Mezzanine Floor, Jl. Jend. Sudirman Kav. 45, Jakarta 12930";
export const copy: Record<string, string[]> = {
  "/product": ["Jelajahi pembiayaan untuk usaha, simpanan dan transaksi perbankan, layanan digital, serta program khusus Bank Sampoerna."],
  "/about": ["Kenali profil Bank Sahabat Sampoerna, manajemen, pemegang saham, dan perjalanan perusahaan."],
  "/hubungan-investor": ["Akses laporan keuangan, laporan tahunan dan keberlanjutan, publikasi, dan keterbukaan informasi Bank Sahabat Sampoerna."],
  "/office": ["Kantor cabang melayani transaksi kas dan BI-FAST pada Senin–Jumat, pukul 08.00–15.00. Layanan RTGS dan SKN tersedia hingga pukul 14.30.", "Untuk mencari kantor berdasarkan wilayah, layanan valas, dan ATM 24 jam, gunakan pencari kantor resmi pada tautan sumber."],
  "/contact": ["Sampaikan pertanyaan atau pengaduan melalui Phone Banking, cabang, email, atau kanal resmi Bank Sampoerna.", "Simpan nomor registrasi pengaduan untuk memantau tindak lanjut. Jangan sertakan PIN, kata sandi, maupun kode OTP."],
  "/sampoerna-digital": ["Layanan digital Bank Sampoerna mencakup pembayaran QRIS, solusi virtual account, transfer host-to-host, dan integrasi perbankan untuk mitra."],
  "/article/tabungan-sampoerna": ["Tabungan untuk transaksi rutin dengan fasilitas kartu debit, mobile banking, dan internet banking. Fasilitas tarik tunai di jaringan ATM mengikuti kuota dan ketentuan bank.", "Setoran awal minimum Rp100.000, saldo minimum Rp50.000, dan biaya administrasi bulanan Rp10.000 pada snapshot halaman produk."],
  "/article/high-yield-saving-personal": ["Tabungan individu dengan bunga berjenjang berdasarkan saldo. Fasilitas transaksi mencakup mobile dan internet banking, dengan ketentuan biaya tarik tunai dan transfer yang tercantum pada informasi produk."],
  "/article/open-banking": ["Pelajari integrasi layanan Bank Sampoerna untuk kebutuhan mitra bisnis. Informasi API dan prosedur akses tersedia melalui kanal resmi."],
  "/privacy-policy": ["Baca kebijakan sumber untuk cakupan pemrosesan data, penggunaan data, perlindungan informasi, dan hak nasabah."],
  "/term-and-condition": ["Baca dokumen resmi untuk ketentuan pembukaan rekening, transaksi, dan penggunaan layanan Bank Sahabat Sampoerna."],
};

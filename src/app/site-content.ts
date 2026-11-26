export type Entry = {
  slug: string;
  title: string;
  description: string;
  details?: string;
  source?: string;
};

const smb = "https://sampoernamobile.banksampoerna.com";

export const sections: Record<string, { title: string; description: string; entries: Entry[] }> = {
  produk: {
    title: "Produk tabungan & deposito",
    description: "Pilih produk sesuai kebutuhan sehari-hari dan rencana keuanganmu.",
    entries: [
      { slug: "mobile-saving", title: "Sampoerna Mobile Saving", description: "Tabungan digital yang dapat dibuka melalui aplikasi.", details: "Gunakan rekening untuk menabung dan melakukan transaksi harian. Cek ketentuan saldo, biaya, dan fasilitas pada informasi produk resmi sebelum membuka rekening.", source: smb + "/our-product/" },
      { slug: "time-deposit", title: "Sampoerna Mobile Time Deposit", description: "Deposito berjangka yang dapat ditempatkan dari aplikasi.", details: "Tentukan dana yang ingin ditempatkan, lalu lihat pilihan tenor serta ketentuan pencairan yang tersedia di aplikasi atau informasi produk resmi.", source: smb + "/our-product/" },
      { slug: "tabungan-hati", title: "Tabungan Hati", description: "Tabungan yang menggabungkan kegiatan menabung dan berdonasi.", details: "Pelajari cara kerja donasi dan ketentuan tabungan melalui informasi resmi sebelum memilih produk ini.", source: smb + "/our-product/" },
    ],
  },
  fitur: {
    title: "Fitur & transaksi",
    description: "Kenali hal-hal yang bisa kamu lakukan melalui Sampoerna Mobile Banking.",
    entries: [
      { slug: "buka-rekening", title: "Pembukaan rekening", description: "Daftar melalui aplikasi dan ikuti tahapan verifikasi." },
      { slug: "qris", title: "Pembayaran QRIS", description: "Pindai kode QRIS merchant dan periksa nama merchant serta nominal sebelum konfirmasi." },
      { slug: "transfer", title: "Transfer", description: "Kirim uang melalui aplikasi. Periksa kembali nama penerima dan nominal sebelum konfirmasi." },
      { slug: "top-up", title: "Top up e-wallet", description: "Isi saldo dompet digital yang tersedia dengan memeriksa nomor tujuan dan nominal." },
      { slug: "bayar", title: "Bayar tagihan", description: "Lihat pilihan pembayaran tagihan yang tersedia di aplikasi." },
      { slug: "beli", title: "Pembelian", description: "Lihat produk digital yang tersedia melalui menu pembelian." },
      { slug: "deposito", title: "Penempatan deposito", description: "Lihat pilihan penempatan dan tenor deposito di aplikasi." },
      { slug: "transaksi-terjadwal", title: "Transaksi terjadwal", description: "Atur jadwal transaksi sesuai opsi yang tersedia di aplikasi." },
      { slug: "pengaturan-kartu", title: "Pengaturan kartu", description: "Temukan opsi pengelolaan kartu yang tersedia untuk rekeningmu." },
      { slug: "kirim-ke-teman", title: "Kirim ke teman", description: "Kenali fitur Kirim ke Teman pada Sampoerna Mobile Banking." },
      { slug: "tanpa-kartu", title: "Transaksi tanpa kartu", description: "Temukan informasi transaksi tanpa kartu dan ikuti petunjuk di aplikasi." },
    ],
  },
  promo: {
    title: "Promo & program",
    description: "Jelajahi penawaran Sampoerna Mobile Banking dan cek syarat serta periode pada kanal resmi.",
    entries: [
      { slug: "penawaran-terbaru", title: "Penawaran terbaru", description: "Lihat daftar penawaran, mekanisme, dan periode promo yang dipublikasikan bank.", source: smb + "/promo/" },
      { slug: "program-undian", title: "Program undian", description: "Lihat informasi program Sampoerna Mobile Saving dan pengumuman resmi.", source: smb + "/undian-2026/" },
    ],
  },
  acara: {
    title: "Acara & kabar",
    description: "Temukan kegiatan dan kabar terbaru dari Sampoerna Mobile Banking.",
    entries: [
      { slug: "sampoernafest", title: "SampoernaFest", description: "Informasi mengenai SampoernaFest tersedia di situs resmi acara.", source: "https://sampoernafest.com/" },
      { slug: "jadwal", title: "Jadwal acara", description: "Cek kegiatan yang dipublikasikan melalui kanal resmi.", source: smb + "/event-lainnya/" },
    ],
  },
  informasi: {
    title: "Informasi & bantuan",
    description: "Kenali layanan Sampoerna Mobile Banking dan temukan bantuan yang kamu perlukan.",
    entries: [
      { slug: "tentang", title: "Tentang Sampoerna Mobile Banking", description: "Sampoerna Mobile Banking adalah aplikasi perbankan dari Bank Sahabat Sampoerna untuk pembukaan rekening, tabungan, dan transaksi digital.", source: smb + "/tentang-kami/" },
      { slug: "edukasi", title: "Edukasi keamanan", description: "Jaga kerahasiaan PIN, kata sandi, serta kode OTP. Gunakan aplikasi dan kanal resmi untuk mendapatkan bantuan." },
      { slug: "pengkinian-data", title: "Pengkinian data", description: "Hubungi kanal resmi Bank Sahabat Sampoerna untuk mengetahui langkah pembaruan data nasabah.", source: smb + "/kontak-kami/" },
      { slug: "kontak", title: "Kontak & FAQ", description: "Temukan jawaban atas pertanyaan umum atau hubungi Phone Banking di 1500 035.", source: smb + "/kontak-kami/" },
    ],
  },
};

export function entryPath(section: string, entry: Entry) {
  return `/${section}/${entry.slug}`;
}

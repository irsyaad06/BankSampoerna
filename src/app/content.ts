import { entryPath, sections } from "./site-content";
export const stores = [
  { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.dwidasa.bss.mb.android" },
  { label: "App Store", href: "https://apps.apple.com/id/app/sampoerna-mobile-banking/id1371862087" },
];

export const products = [
  { title: "Sampoerna Mobile Saving", type: "Tabungan digital", description: "Buka rekening dan kelola tabungan sehari-hari langsung dari ponsel.", href: "/produk/mobile-saving", symbol: "→" },
  { title: "Sampoerna Mobile Time Deposit", type: "Deposito", description: "Siapkan tujuan berikutnya dengan pilihan tenor deposito di aplikasi.", href: "/produk/time-deposit", symbol: "◴" },
  { title: "Tabungan Hati", type: "Tabungan", description: "Menabung sambil berdonasi melalui program Tabungan Hati.", href: "/produk/tabungan-hati", symbol: "♡" },
];

export const features = [
  { title: "Pembukaan rekening", symbol: "+", description: "Mulai pendaftaran rekening dari aplikasi Sampoerna Mobile Banking." },
  { title: "Transfer & transaksi terjadwal", symbol: "↔", description: "Kirim uang dan atur jadwal transaksi dari satu aplikasi." },
  { title: "Pembayaran QRIS", symbol: "#", description: "Pindai kode QRIS untuk membayar di merchant." },
  { title: "Top up, bayar & beli", symbol: "→", description: "Isi saldo e-wallet dan kelola pembayaran sehari-hari." },
  { title: "Pengaturan kartu", symbol: "—", description: "Akses pengaturan kartu dari aplikasi." },
  { title: "Transaksi tanpa kartu", symbol: "□", description: "Jelajahi layanan transaksi tanpa kartu yang tersedia di aplikasi." },
];

export const faq = [
  { title: "Bagaimana cara membuka rekening?", description: "Unduh aplikasi Sampoerna Mobile Banking, pilih pendaftaran, lalu ikuti langkah verifikasi yang ditampilkan. Pembukaan rekening dilakukan melalui aplikasi resmi.", href: "/#unduh" },
  { title: "Apa saja produk yang tersedia?", description: "Jelajahi Sampoerna Mobile Saving, Sampoerna Mobile Time Deposit, dan Tabungan Hati. Informasi syarat dan ketentuan tersedia di situs resmi.", href: "/#produk" },
  { title: "Di mana saya bisa menemukan promo dan undian?", description: "Periode, ketentuan, dan informasi program tersedia di kanal resmi Sampoerna Mobile Banking.", href: "/promo" },
  { title: "Bagaimana cara menghubungi Bank Sampoerna?", description: "Hubungi Phone Banking Bank Sahabat Sampoerna di 1500 035.", href: "tel:1500035" },
];

export const searchItems = [
  ...Object.entries(sections).flatMap(([section, group]) => [
    { title: group.title, description: group.description, href: "/" + section },
    ...group.entries.map((entry) => ({ ...entry, href: entryPath(section, entry) })),
  ]),
  ...faq,
  { title: "Unduh aplikasi", description: "Tersedia di Google Play dan App Store.", href: "/#unduh" },
];

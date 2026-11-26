import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Sampoerna Mobile Banking | Bank Sahabat Sampoerna",
  description: "Kenali tabungan, deposito, dan transaksi digital Sampoerna Mobile Banking.",
  robots: { index: false, follow: false },
  icons: { icon: "/smb-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="id"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}

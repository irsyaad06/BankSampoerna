import type { Metadata } from "next";
import "./globals.css";
import { BankFooter, BankHeader } from "./bank-chrome";

export const metadata: Metadata = {
  title: { default: "Bank Sahabat Sampoerna", template: "%s | Bank Sahabat Sampoerna" },
  description: "Produk dan layanan, solusi digital, dan informasi perusahaan Bank Sahabat Sampoerna.",
  robots: { index: false, follow: false },
  icons: { icon: "/smb-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="id"><body><BankHeader />{children}<BankFooter /></body></html>;
}

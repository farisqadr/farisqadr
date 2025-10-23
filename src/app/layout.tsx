import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cal",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hemat.ai";

export const metadata: Metadata = {
  title:
    "hemat.ai - Chat, foto, voice note, biar hemat.ai yang catatin. Hemat waktu, hemat uang!",
  description:
    "hemat.ai membantu kamu mengatur keuangan dengan bantuan AI. Cukup kirim foto struk atau voice note pengeluaran kamu, biar hemat.ai yang catatin.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title:
      "hemat.ai - Chat, foto, voice note, biar hemat.ai yang catatin. Hemat waktu, hemat uang!",
    description:
      "hemat.ai membantu kamu mengatur keuangan dengan bantuan AI. Cukup kirim foto struk atau voice note pengeluaran kamu, biar hemat.ai yang catatin.",
    url: siteUrl,
    siteName: "hemat.ai",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "hemat.ai preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hemat.ai - Chat, foto, voice note, biar hemat.ai yang catatin.",
    description:
      "hemat.ai membantu kamu mengatur keuangan dengan bantuan AI. Cukup kirim foto struk atau voice note pengeluaran kamu, biar hemat.ai yang catatin.",
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#0CC144",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${plusJakarta.variable} bg-brand-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

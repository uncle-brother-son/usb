import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uncle Brother Son | eCommerce Design Collective for Visionary Brands",
  description: "Uncle Brother Son is an eCommerce design collective dedicated to creating exceptional digital experiences for visionary brands. Get in touch to transform your brand.",
  keywords: ["eCommerce design", "design collective", "brand design", "digital design", "UX design", "web design"],
  authors: [{ name: "Uncle Brother Son" }],
  creator: "Uncle Brother Son",
  publisher: "Uncle Brother Son",
  metadataBase: new URL("https://unclebrotherson.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Uncle Brother Son | eCommerce Design Collective",
    description: "An eCommerce Design Collective for Visionary Brands",
    url: "https://unclebrotherson.com",
    siteName: "Uncle Brother Son",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Uncle Brother Son | eCommerce Design Collective',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uncle Brother Son | eCommerce Design Collective",
    description: "An eCommerce Design Collective for Visionary Brands",
    creator: "@unclebrotherson",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#DEEC1C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-aeonik text-dark text-14 bg-light subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}

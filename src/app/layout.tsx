import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoMate.One - Automate Your Business with Python + AI",
  description: "AutoMate.One builds lightweight automations so you can focus on growth — starting at $39, delivered in 48h. Excel dashboards, web scraping, AI integrations and more.",
  keywords: ["automation", "python", "AI", "excel", "web scraping", "productivity", "AutoMate.One"],
  authors: [{ name: "AutoMate.One" }],
  openGraph: {
    title: "AutoMate.One - Automate Your Business with Python + AI",
    description: "AutoMate.One builds lightweight automations so you can focus on growth — starting at $39, delivered in 48h.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoMate.One - Automate Your Business with Python + AI",
    description: "AutoMate.One builds lightweight automations so you can focus on growth — starting at $39, delivered in 48h.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export const viewport = {
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y65RCPBRD0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y65RCPBRD0');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}

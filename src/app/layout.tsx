import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/sections/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoMate.One - Agency Automation Services | Save 15+ Hours/Week",
  description: "Custom automation services for agencies. Automated reporting (GA4, Meta, Google Ads), lead sourcing, file management, and AI workflows. Starting at $199. 5-7 day delivery.",
  keywords: [
    "agency automation", "automated reporting", "GA4 reporting", "Meta ads automation", 
    "Google Ads reporting", "lead sourcing automation", "spreadsheet automation", 
    "AI workflow automation", "agency productivity", "marketing automation", 
    "client reporting automation", "AutoMate.One", "python automation services"
  ],
  authors: [{ name: "AutoMate.One", url: "https://www.auto-mate.one" }],
  creator: "AutoMate.One",
  publisher: "AutoMate.One",
  alternates: {
    canonical: "https://www.auto-mate.one",
  },
  openGraph: {
    title: "AutoMate.One - Agency Automation Services | Save 15+ Hours/Week",
    description: "Custom automation services for agencies. Automated reporting, lead sourcing, and AI workflows. Starting at $199 with 5-7 day delivery.",
    type: "website",
    locale: "en_US",
    url: "https://www.auto-mate.one",
    siteName: "AutoMate.One",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoMate.One - Agency Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AutoMateOne",
    creator: "@AutoMateOne",
    title: "AutoMate.One - Agency Automation Services | Save 15+ Hours/Week",
    description: "Custom automation services for agencies. Automated reporting, lead sourcing, and AI workflows. Starting at $199 with 5-7 day delivery.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
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

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.auto-mate.one/#organization",
                  name: "AutoMate.One",
                  url: "https://www.auto-mate.one",
                  logo: "https://www.auto-mate.one/logo.svg",
                  description: "Custom automation services for agencies and businesses",
                  foundingDate: "2024",
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    url: "https://calendly.com/automate-one"
                  },
                  sameAs: [
                    "https://twitter.com/AutoMateOne",
                    "https://linkedin.com/company/automate-one"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.auto-mate.one/#business",
                  name: "AutoMate.One",
                  image: "https://www.auto-mate.one/logo.svg",
                  description: "Professional automation services for agencies. Automated reporting, lead sourcing, and workflow optimization.",
                  url: "https://www.auto-mate.one",
                  telephone: "+212-658-377929",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "MA"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "40.7128",
                    longitude: "-74.0060"
                  },
                  openingHours: "Mo-Fr 09:00-18:00",
                  priceRange: "$199-$1200+",
                  serviceArea: {
                    "@type": "Country",
                    name: "United States"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://www.auto-mate.one/#service",
                  name: "Agency Automation Services",
                  description: "Custom automation solutions for agencies including automated reporting, lead sourcing, and workflow optimization",
                  provider: {
                    "@id": "https://www.auto-mate.one/#organization"
                  },
                  serviceType: "Business Process Automation",
                  areaServed: "Worldwide",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Automation Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Automated Reporting",
                          description: "Daily/weekly client reports without copy/paste"
                        },
                        price: "199",
                        priceCurrency: "USD",
                        availability: "InStock"
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Lead Sourcing & Monitoring",
                          description: "Fresh prospects and competitor intel, auto-updated"
                        },
                        price: "199",
                        priceCurrency: "USD",
                        availability: "InStock"
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Custom Automations",
                          description: "Bespoke workflows, multi-source, or advanced integrations"
                        },
                        price: "1200",
                        priceCurrency: "USD",
                        availability: "InStock"
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        
        <Header />
        {children}
      </body>
    </html>
  );
}

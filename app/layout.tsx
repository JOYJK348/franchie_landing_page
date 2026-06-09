import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://ismlfranchise.iypan.com";
const googleAnalyticsId = "G-0QRKV9M70N";
const siteTitle = "ISML Franchise Opportunity | Language Learning Centre in India";
const siteDescription =
  "Start a foreign language education franchise with Indian School for Modern Languages. Partner with ISML for French, German and Japanese language training, operational support, transparent investment and revenue sharing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Indian School for Modern Languages"
  },
  description: siteDescription,
  applicationName: "Indian School for Modern Languages",
  authors: [{ name: "Indian School for Modern Languages", url: siteUrl }],
  creator: "Indian School for Modern Languages",
  publisher: "Indian School for Modern Languages",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "ISML franchise",
    "language franchise in India",
    "language learning franchise India",
    "education franchise opportunity",
    "foreign language institute franchise",
    "French German Japanese language franchise",
    "language learning centre franchise",
    "low investment education franchise",
    "franchise business in education sector",
    "study abroad language training franchise",
    "French language institute franchise",
    "German language institute franchise",
    "Japanese language institute franchise",
    "Synergy Pro franchise",
    "education business opportunity India",
    "best education franchise in India",
    "profitable education franchise",
    "training institute franchise India",
    "foreign language school franchise",
    "language academy franchise",
    "language training centre franchise",
    "language institute business opportunity",
    "foreign language business opportunity",
    "French classes franchise",
    "German classes franchise",
    "Japanese classes franchise",
    "French language training franchise",
    "German language training franchise",
    "Japanese language training franchise",
    "IELTS and language training franchise",
    "study abroad coaching franchise",
    "overseas education language training",
    "JLPT training franchise",
    "DELF training franchise",
    "Goethe German training franchise",
    "language certification training institute",
    "education franchise under 10 lakhs",
    "franchise investment 5 lakhs",
    "low cost franchise business India",
    "small investment education business",
    "education franchise with operational support",
    "FOCO education franchise",
    "franchise with revenue sharing model",
    "language franchise in Tamil Nadu",
    "language franchise in Chennai",
    "language franchise in Coimbatore",
    "language franchise in Madurai",
    "language franchise in Trichy",
    "language franchise in Bengaluru",
    "language franchise in Hyderabad",
    "language franchise in Pune",
    "language franchise in Delhi",
    "language franchise in Mumbai",
    "foreign language institute in India",
    "French German Japanese classes India",
    "career oriented language courses",
    "language learning for study abroad",
    "language learning for migration",
    "language training for students and professionals"
  ],
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "Indian School for Modern Languages",
    locale: "en_IN",
    images: [
      {
        url: "/about-isml.png",
        width: 1200,
        height: 630,
        alt: "ISML - Indian School for Modern Languages"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/about-isml.png"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        name: "Indian School for Modern Languages",
        alternateName: "ISML",
        url: siteUrl,
        description: siteDescription,
        areaServed: "India",
        telephone: "+91 7338895754",
        sameAs: [
          "https://www.instagram.com/ismlconnect",
          "https://www.linkedin.com/company/learnwithisml/",
          "https://www.youtube.com/@ISML_Official"
        ],
        knowsAbout: [
          "French language training",
          "German language training",
          "Japanese language training",
          "Foreign language education franchise",
          "Study abroad language preparation"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Indian School for Modern Languages",
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

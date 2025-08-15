import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema } from "@/lib/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spurly.io'),
  title: {
    default: 'Spurly - AI-Powered Dating Message Assistant | Find Your Words Faster',
    template: '%s | Spurly'
  },
  keywords: ['dating app assistant', 'AI messaging', 'dating message suggestions', 'text message helper', 'conversation starter', 'AI dating coach', 'message generator', 'dating app helper', 'Spurly app'],
  authors: [{ name: 'Phaethon Order LLC' }],
  creator: 'Phaethon Order LLC',
  publisher: 'Phaethon Order LLC',
  applicationName: 'Spurly',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',

    alternates: {
      canonical: "https://www.spurly.io/",
    },
    openGraph: {
      title: "Spurly – AI Dating Assistant with Message Suggestions",
      description:
        "Context-aware openers and replies for Tinder, Hinge, Bumble, Raya, OKCupid, and more that fit your style and match their vibe. Less guessing, more connecting. With Spurly.",
      url: "https://www.spurly.io/",
      siteName: "Spurly",
      type: "website",
    },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Spurly - Contextually Informed AI Dating Assistant with Message Suggestions',
    description: 'Spurly IP: Branding & Visual Identity. Get AI-powered, context-informed message suggestions and personality insights to use with dating and messaging apps.',
    images: ['/SpurlyArcLogo.png'],
    creator: '@spurlyapp',
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/manifest.json',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema)}}
        />
        <link rel="icon" type="image/png" href="https://www.spurly.io/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="https://www.spurly.io/favicon.svg" />
        <link rel="shortcut icon" href="https://www.spurly.io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.spurly.io/apple-touch-icon.png" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="https://www.spurly.io/favicon-32x32.png" sizes="32x32" />
        <link rel="manifest" href="https://www.spurly.io/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spurly.io'),
  title: {
    default: 'Spurly - AI-Powered Dating Message Assistant | Find Your Words Faster',
    template: '%s | Spurly'
  },
  description: 'Spurly is a contextually informed AI messaging assistant that helps you find the right words faster for dating apps, texts, and DMs. Get personalized message suggestions that match your style.',
  keywords: ['dating app assistant', 'AI messaging', 'dating message suggestions', 'text message helper', 'conversation starter', 'AI dating coach', 'message generator', 'dating app helper', 'Spurly app'],
  authors: [{ name: 'Phaethon Order LLC' }],
  creator: 'Phaethon Order LLC',
  publisher: 'Phaethon Order LLC',
  applicationName: 'Spurly',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spurly.io',
    siteName: 'Spurly',
    title: 'Spurly - AI-Powered Dating Message Assistant',
    description: 'Find your words faster with Spurly. Get AI-powered message suggestions for dating apps, texts, and DMs that match your personality and conversation style.',
    images: [
      {
        url: '/SpurlyBanner.png',
        width: 450,
        height: 174,
        alt: 'Spurly - Contextually Informed AI Messaging Assistant',
      },
      {
        url: '/SpurlyAppIcon.png',
        width: 512,
        height: 512,
        alt: 'Spurly App Icon',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Spurly - AI-Powered Dating Message Assistant',
    description: 'Find your words faster with AI-powered message suggestions for dating apps and texts.',
    images: ['/SpurlyBanner.png'],
    creator: '@spurlyapp',
  },
  
  icons: {
    icon: [
      { url: '/SpurlyAppIcon.png', sizes: '32x32', type: 'image/png' },
      { url: '/SpurlyAppIcon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/SpurlyAppIcon.png', sizes: '180x180', type: 'image/png' },
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
  
  verification: {
    // Add these when you have the verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://spurly.io',
  },
  
  category: 'lifestyle',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
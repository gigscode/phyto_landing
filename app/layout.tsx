import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://phytogenix.com'
const siteName = 'PhytoGenix'
const siteTitle = 'PhytoGenix - Advanced Herbal Clinical Research Platform'
const siteDescription =
  'PhytoGenix is a cutting-edge platform for managing herbal clinical research, laboratory results, and regulatory compliance.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  generator: 'Next.js',
  keywords: [
    'PhytoGenix',
    'herbal clinical research',
    'phytomedicine',
    'natural medicine',
    'laboratory results',
    'regulatory compliance',
    'AB-Mal',
    'AB-Animation',
    'Virucidine',
  ],
  authors: [{ name: 'PhytoGenix' }],
  creator: 'PhytoGenix',
  publisher: 'PhytoGenix',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/Phytogenixlogwhite.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/Phytogenixlogwhite.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}


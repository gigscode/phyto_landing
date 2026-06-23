import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'PhytoGenix - Advanced Herbal Clinical Research Platform',
  description: 'PhytoGenix is a cutting-edge platform for managing herbal clinical research, laboratory results, and regulatory compliance.',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-950 scroll-smooth">
      <body className="font-sans antialiased bg-slate-950 text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}


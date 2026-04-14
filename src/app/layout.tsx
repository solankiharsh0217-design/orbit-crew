import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display'
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'OrbitCrewDigital - White-Label Execution Partner for Agencies',
  description: 'A white-label execution partner helping agencies scale delivery without hiring in-house developers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable}`}>
        <div className="aurora-bg" />
        <CustomCursor />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
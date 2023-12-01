// Next imports
import type { Metadata } from 'next'

// Components
import { Navbar, Footer } from '@/components'

import './globals.css'

export const metadata: Metadata = {
  title: 'AutoMarket',
  description: 'Home of Quality Used Cars Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

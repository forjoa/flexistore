import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlexiStore',
  description: 'A completely customizable online store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

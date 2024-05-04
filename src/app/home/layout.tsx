import Nav from '@/components/home/globals/Nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlexiStore | Home',
  description: 'A   completely customizable online store',
}

export default function LayoutHome({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  )
}

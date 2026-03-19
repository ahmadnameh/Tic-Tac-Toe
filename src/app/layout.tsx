import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import ParticlesBackground from '@/components/layouts/ParticlesLayout/ParticlesBackground'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Games Next App',
  description: 'Tic Tac Toe game with algorithms build with next js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />
        <ParticlesBackground />
        <div className="h-[100vh] container mx-auto">{children}</div>
      </body>
    </html>
  )
}

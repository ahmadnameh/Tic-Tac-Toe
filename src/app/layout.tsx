import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import ParticlesBackground from '@/components/layouts/ParticlesLayout/ParticlesBackground'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from './Themes/ThemeProvider'
import  SelectThemeDrawer from '@/app/Themes/components/SelectThemeDrawer'

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
        <ThemeProvider>
          <Toaster position="top-center" />
          <ParticlesBackground />
          <div className="min-h-[100vh] h-[100%] flex justify-center items-center container mx-auto">
            <div className="absolute top-[30px] right-[50px]">
              <SelectThemeDrawer />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

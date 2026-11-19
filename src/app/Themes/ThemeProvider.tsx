'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="midnight"
      themes={['midnight', 'violet', 'emerald', 'ruby', 'amber', 'arctic', 'cosmic', 'rose']}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

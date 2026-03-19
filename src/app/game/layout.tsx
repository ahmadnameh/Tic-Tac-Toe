'use client'

import { GameSettingsContextProvider } from '@/context/GameContext'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return <GameSettingsContextProvider>{children}</GameSettingsContextProvider>
}

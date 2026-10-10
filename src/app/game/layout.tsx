'use client'

import { GameSettingsContextProvider } from '@/context/GameContext'
import { ReactNode } from 'react'
import PlayGuard from '../../Guard/PlayGuard'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <GameSettingsContextProvider>
      <PlayGuard>{children}</PlayGuard>
    </GameSettingsContextProvider>
  )
}

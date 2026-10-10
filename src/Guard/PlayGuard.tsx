'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import useGameSettingsContext from '@/hooks/useGameSettingsContext'

export default function PlayGuard({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const { isGameReady } = useGameSettingsContext()

  const isProtectedRoute = pathname === '/game/play' || pathname.startsWith('/game/play/')

  const isReady = isGameReady

  useEffect(() => {
    if (!isProtectedRoute) return

    if (!isReady) {
      router.replace('/game')
    }
  }, [isProtectedRoute, isReady, router])

  if (isProtectedRoute && !isReady) {
    return null
  }

  return <>{children}</>
}

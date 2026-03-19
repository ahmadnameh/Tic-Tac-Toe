'use client'

import XOStep1 from './Steps/step1/XOStep1'
import XOStep2 from './Steps/step2/XOStep2'

import useGameSettingsContext from '@/hooks/useGameSettingsContext'

export default function XOGameSteps() {
  const { gameState } = useGameSettingsContext()

  return !gameState?.opponentType ? <XOStep1 /> : <XOStep2 />
}

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { TDifficulty, TPlayerSymbol } from '@/types/types'

import VSComputerStep from './VSComputerStep'
import VSFriendStep from './VSFriendStep'

export default function XOStep2({ onChangeStep }: { onChangeStep: (val: 1 | 2) => void }) {
  const router = useRouter()
  const {
    setDifficulty,
    setPlayersName,
    resetGameState,
    gameState,
    isGameReady,
    saveFinalGameSettingState,
  } = useGameSettingsContext()

  const [readyToNavigate, setReadyToNavigate] = useState(false)

  useEffect(() => {
    if (isGameReady && readyToNavigate) {
      saveFinalGameSettingState()
      router.push('/game/play')
      setReadyToNavigate(false)
    }
  }, [isGameReady, saveFinalGameSettingState, router, readyToNavigate])

  function handleCancel() {
    resetGameState()
    onChangeStep(1)
  }

  function handleSetPlayerSymbol(selectedPlayerSymbol: TPlayerSymbol) {
    if (selectedPlayerSymbol === 'X') {
      setPlayersName({ X: 'You', O: 'Computer' })
    } else {
      setPlayersName({ X: 'Computer', O: 'You' })
    }
  }

  return gameState?.opponentType === 'computer' ? (
    <VSComputerStep
      onFinishingSteps={(difficulty: TDifficulty, playerSymbol: TPlayerSymbol) => {
        handleSetPlayerSymbol(playerSymbol)
        setDifficulty(difficulty)
        setReadyToNavigate(true)
      }}
      onCancel={handleCancel}
    />
  ) : (
    <VSFriendStep
      onFinishingSteps={(playersName: { X: string; O: string }) => {
        setPlayersName(playersName)
        setReadyToNavigate(true)
      }}
      onCancel={handleCancel}
    />
  )
}

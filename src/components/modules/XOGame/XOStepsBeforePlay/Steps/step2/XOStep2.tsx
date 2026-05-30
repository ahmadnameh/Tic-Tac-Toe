import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { TDifficulty } from '@/types/types'

import VSComputerStep from './VSComputerStep'
import VSFriendStep from './VSFriendStep'

export default function XOStep2({onChangeStep}:{onChangeStep:(val:1|2)=>void}) {
  const router = useRouter()
  const {
    setDifficulty,
    setPlayersName,
    resetGameState,
    gameState,
    isGameSettingsReady,
    saveFinalGameSettingState,
  } = useGameSettingsContext()

  const [readyToNavigate, setReadyToNavigate] = useState(false)

  useEffect(() => {
    if (isGameSettingsReady() && readyToNavigate) {
      saveFinalGameSettingState()
      router.push('/game/play')
      setReadyToNavigate(false)
    }
  }, [isGameSettingsReady, saveFinalGameSettingState, router, readyToNavigate])

  function handleCancel () {
    resetGameState()
    onChangeStep(1)
  }


  return gameState?.opponentType === 'computer' ? (
    <VSComputerStep
      onFinishingSteps={(difficulty: TDifficulty) => {
        setPlayersName({ X: 'You', O: 'Computer' })
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

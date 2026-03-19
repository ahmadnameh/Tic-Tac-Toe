import { useContext } from 'react'
import GameSettingsContext from '@/context/GameContext'

const useGameSettingsContext = () => {
  const context = useContext(GameSettingsContext)

  if (!context) {
    throw new Error('useGameSettingsContext must be used within an GameSettingsContextProvider')
  }
  return context
}

export default useGameSettingsContext

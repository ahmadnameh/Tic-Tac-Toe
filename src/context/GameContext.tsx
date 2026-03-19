import { ReactNode, createContext, useState, useMemo, useEffect } from 'react'
import { IGame, TDifficulty, TGames, TOpponentType, IGameSettings } from '@/types/types'

const GameSettingsContext = createContext<IGameSettings | null>(null)

export default GameSettingsContext

export const GameSettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<IGame>({
    currentGame: null,
    opponentType: null,
    difficulty: null,
    playersName: [],
    playerSymbol: 'X',
  })

  useEffect(() => {
    const stored = localStorage.getItem('GameSettings')
    if (stored) {
      try {
        setGameState(JSON.parse(stored))
      } catch (error) {
        console.warn('Failed to parse game settings:', error)
      }
    }
  }, [])

  function selectGame(selectedGame: TGames) {
    setGameState((prev) => ({ ...prev, currentGame: selectedGame }))
  }
  function setOpponentType(opponentType: TOpponentType) {
    setGameState((prev) => ({ ...prev, opponentType: opponentType }))
  }
  function setDifficulty(difficulty: TDifficulty) {
    setGameState((prev) => ({ ...prev, difficulty: difficulty }))
  }
  function setPlayersName(playersName: string[]) {
    setGameState((prev) => ({ ...prev, playersName: playersName }))
  }

  function setPlayerSymbol(selectedSymbol: 'X' | 'O') {
    setGameState((prev) => ({ ...prev, playerSymbol: selectedSymbol }))
  }

  function isGameSettingsReady() {
    if (gameState.opponentType === 'computer') {
      return !!gameState.currentGame && !!gameState.difficulty
    } else if (gameState.opponentType === 'friend') {
      return !!gameState.currentGame && gameState.playersName.every((name) => name.trim() !== '')
    }

    return false
  }

  function saveFinalGameSettingState() {
    if (isGameSettingsReady()) {
      localStorage.setItem('GameSettings', JSON.stringify(gameState))
    }
  }

  function resetGameState() {
    const stored = localStorage.getItem('GameSettings')
    if (stored) {
      localStorage.removeItem('GameSettings')
    }
    setGameState({
      currentGame: null,
      opponentType: null,
      difficulty: null,
      playersName: ['You', 'Computer'],
      playerSymbol: 'X',
    })
  }

  const value = useMemo(
    () => ({
      gameState,
      selectGame,
      setOpponentType,
      setDifficulty,
      setPlayersName,
      setPlayerSymbol,
      isGameSettingsReady,
      saveFinalGameSettingState,
      resetGameState,
    }),
    [gameState],
  )

  return <GameSettingsContext value={value}>{children}</GameSettingsContext>
}

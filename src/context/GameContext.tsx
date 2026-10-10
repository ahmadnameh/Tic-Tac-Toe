import { ReactNode, createContext, useState, useMemo, useEffect } from 'react'
import {
  IGame,
  TDifficulty,
  TGames,
  TOpponentType,
  IGameSettings,
  TPlayerSymbol,
} from '@/types/types'

const GameSettingsContext = createContext<IGameSettings | null>(null)

export default GameSettingsContext

export const GameSettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<IGame>({
    currentGame: null,
    opponentType: null,
    difficulty: null,
    playersName: { X: '', O: '' },
    playerScore: { X: 0, O: 0 },
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
  function setPlayersName(playersName: { X: string; O: string }) {
    setGameState((prev) => ({ ...prev, playersName: playersName }))
  }
  function setPlayerScore(playerScore: { X: number; O: number }) {
    setGameState((prev) => ({ ...prev, playerScore }))
  }

  function isGameSettingsReady() {
    if (gameState.opponentType === 'computer') {
      return !!gameState.currentGame && !!gameState.difficulty
    } else if (gameState.opponentType === 'friend') {
      return (
        !!gameState.currentGame &&
        gameState.playersName.X.trim() !== '' &&
        gameState.playersName.O.trim() !== ''
      )
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
      playersName: { X: '', O: '' },
      playerScore: { X: 0, O: 0 },
    })
  }

  function getComputerSymbol(): TPlayerSymbol | null {
    if (gameState.opponentType !== 'computer') return null
    else return gameState.playersName.X === 'Computer' ? 'X' : 'O'
  }

  const value = useMemo(
    () => ({
      gameState,
      selectGame,
      setOpponentType,
      setDifficulty,
      setPlayersName,
      setPlayerScore,
      isGameReady: isGameSettingsReady(),
      getComputerSymbol,
      saveFinalGameSettingState,
      resetGameState,
    }),
    [gameState],
  )

  return <GameSettingsContext value={value}>{children}</GameSettingsContext>
}

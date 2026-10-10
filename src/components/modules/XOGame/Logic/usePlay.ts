import { useEffect, useState } from 'react'
import { XOBoard } from './XOClass'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { fireConfetti } from '@/lib/confetti'
import { TPlayerSymbol } from '@/types/types'

export default function usePlay() {
  const [boardState, setBoardState] = useState(() => {
    const XOGame = new XOBoard()
    return XOGame
  })

  const { gameState, setPlayerScore, getComputerSymbol } = useGameSettingsContext()

  const [computerTurn, setComputerTurn] = useState(false)

  function handlePlay(rowIndex: number, colIndex: number) {
    if (boardState.Winner) {
      return
    } else {
      setBoardState((prev) => prev.play(rowIndex, colIndex))
    }
  }

  function handleChangeScore(player: TPlayerSymbol) {
    if (!gameState?.playerScore) return
    if (player === 'X') {
      setPlayerScore({ X: gameState?.playerScore.X + 1, O: gameState?.playerScore.O })
    } else {
      setPlayerScore({ X: gameState?.playerScore.X, O: gameState?.playerScore.O + 1 })
    }
  }

  useEffect(() => {
    if (!boardState.getWinner()) return

    fireConfetti()
    handleChangeScore(boardState.getWinner() as TPlayerSymbol)
  }, [boardState.getWinner()])

  useEffect(() => {
    console.log('effect run')
    if (gameState?.opponentType === 'computer' && getComputerSymbol()) {
      if (boardState.currentPlayer === getComputerSymbol()) {
        setComputerTurn(() => true)
        //TODO computer plays with algorithms
      }
    }
  }, [boardState.currentPlayer, getComputerSymbol()])

  return {
    gameState,
    boardState,
    setBoardState,
    handlePlay,
    computerTurn,
  }
}

import { useEffect, useState } from 'react'
import { XOBoard } from '../Class/XOClass'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { fireConfetti } from '@/lib/confetti'
import { TPlayerSymbol } from '@/types/types'
import { getComputerMove } from '../Algorithms'

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

  const [showFinishedAlert, setShowFinishedAlert] = useState(false)

  useEffect(() => {
    const winner = boardState.getWinner()
    const isGameFinished = boardState.finishGame()

    if (!winner && !isGameFinished) return

    const alertTimer = setTimeout(() => {
      setShowFinishedAlert(true)
    }, 2000)

    let confettiTimer: ReturnType<typeof setTimeout> | undefined

    if (winner) {
      handleChangeScore(winner as TPlayerSymbol)

      const isComputerWinner =
        gameState?.opponentType === 'computer' && winner === getComputerSymbol()

      if (!isComputerWinner) {
        confettiTimer = setTimeout(() => {
          fireConfetti()
        }, 1000)
      }
    }

    return () => {
      clearTimeout(alertTimer)

      if (confettiTimer) {
        clearTimeout(confettiTimer)
      }
    }
  }, [boardState,gameState?.opponentType])

  function handleSetNewGame() {
    setBoardState((prev) => prev.newGame())
    setShowFinishedAlert(false)
  }

  function computerMoves(index: number | number[]) {
    if (index === -1) return
    else if (index instanceof Array) handlePlay(index[0], index[1])
  }

  useEffect(() => {
    const computerSymbol = getComputerSymbol()

    if (
      gameState?.opponentType !== 'computer' ||
      !computerSymbol ||
      boardState.currentPlayer !== computerSymbol
    ) {
      setComputerTurn(false)
      return
    }

    setComputerTurn(true)

    const timer = setTimeout(() => {
      const computerMove = getComputerMove(
        boardState.getBoard(),
        gameState.difficulty,
        computerSymbol as TPlayerSymbol,
      )

      computerMoves(computerMove)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [
    boardState.currentPlayer,
    boardState,
    gameState?.opponentType,
    gameState?.difficulty,
    getComputerSymbol,
    getComputerMove,
    computerMoves,
  ])
  return {
    gameState,
    boardState,
    setBoardState,
    handlePlay: computerTurn ? () => null : handlePlay,
    computerTurn,
    showFinishedAlert,
    handleSetNewGame,
    humanPlayerLose:
      gameState?.opponentType === 'computer' && boardState.getWinner() === getComputerSymbol(),
  }
}

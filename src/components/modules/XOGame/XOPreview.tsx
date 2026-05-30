'use client'

import { useEffect, useState } from 'react'
import XOGrid from './XOGrid/XOGrid'
import { TXOCellValue, TPlayerSymbol } from '@/types/types'

const INITIAL_BOARD: TXOCellValue[][] = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

export default function XOPreview() {
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [turn, setTurn] = useState<TPlayerSymbol>('X')

  function getEmptyCells(currentBoard: TXOCellValue[][]) {
    const cells: [number, number][] = []

    currentBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === '') {
          cells.push([rowIndex, colIndex])
        }
      })
    })

    return cells
  }

  function addRandomCell(player: TPlayerSymbol) {
    setBoard((prevBoard) => {
      const emptyCells = getEmptyCells(prevBoard)

      if (emptyCells.length === 0) {
        return prevBoard
      }

      const randomIndex = Math.floor(Math.random() * emptyCells.length)

      const [row, col] = emptyCells[randomIndex]

      return prevBoard.map((rowData, rowIndex) =>
        rowData.map((cell, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return player
          }

          return cell
        }),
      )
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      addRandomCell(turn)

      setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
    }, 1000)

    return () => clearTimeout(timer)
  }, [turn])

  return <XOGrid gridState={board} handleCellClick={() => null} />
}

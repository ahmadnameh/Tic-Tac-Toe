'use client'

import { useState } from 'react'
import XOPlayerCard from '@/components/modules/XOGame/XOGamePlayer/XOPlayerCard'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import XOGrid from '@/components/modules/XOGame/XOGrid/XOGrid'
import { TXOCellValue } from '@/types/types'

// The logic only for testing UI

export default function XOGameBoard() {
  const [boardState, setBoardState] = useState<TXOCellValue[][]>([
    ['', '', 'O'],
    ['X', '', 'X'],
    ['X', '', 'X'],
  ])

  function handleCellClick(rowIndex: number, colIndex: number) {
    if (boardState[rowIndex][colIndex] !== '') {
      return
    }
    const nboardState = [...boardState]
    nboardState[rowIndex][colIndex] = 'O'
    setBoardState(() => [...nboardState])
  }

  const { gameState } = useGameSettingsContext()

  return (
    <div className="w-full flex justify-between items-center lg:flex-row flex-col">
      <div className="w-full lg:order-2 order-1">
        <XOGrid gridState={boardState} handleCellClick={handleCellClick} />
      </div>
      <div className="w-full lg:order-1 order-2">
        <XOPlayerCard type="X" score={0} name="player1 " />
      </div>
      <div className="w-full lg:order-3 order-2">
        <XOPlayerCard type="O" score={0} name="player2" />
      </div>
    </div>
  )
}

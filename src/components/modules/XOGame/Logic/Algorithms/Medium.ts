import { TPlayerSymbol, TXOCellValue } from '@/types/types'
import { getEasyMove } from './Easy'

const winingCells = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
]

export function getMediumMove(board: TXOCellValue[][], player: TPlayerSymbol) {
  let enemy: TPlayerSymbol = player === 'X' ? 'O' : 'X'

  //1. try to win
  if (findWiningMove(board, player) !== -1) {
    return findWiningMove(board, player)
  }
  // 2. try to block enemy from win
  else if (findWiningMove(board, enemy) !== -1) {
    return findWiningMove(board, enemy)
  } else {
    return getEasyMove(board)
  }
}

function findWiningMove(board: TXOCellValue[][], player: TPlayerSymbol) {
  let WiningIndex = null

  let enemy = player === 'X' ? 'O' : 'X'

  for (let i = 0; i < 8; i++) {
    let winingDraw = winingCells[i]
    if (winingDraw.find((cell) => board[cell[0]][cell[1]] === enemy)) {
      continue
    }
    for (let j = 0; j < 3; j++) {
      if (board[winingDraw[j][0]][winingDraw[j][1]] === '') {
        if (!WiningIndex) {
          WiningIndex = winingDraw[j]
        } else {
          WiningIndex = null
          break
        }
      }
    }

    if (WiningIndex) return WiningIndex
  }

  return -1
}

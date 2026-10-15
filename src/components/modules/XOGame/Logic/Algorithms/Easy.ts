import { TXOCellValue } from '@/types/types'

export function getEasyMove(board: TXOCellValue[][]) {
  const priority = [
    [1, 1],
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ]

  for (let i = 0; i < 9; i++) {
    if (board[priority[i][0]][priority[i][1]] === '') {
      return priority[i]
    }
  }

  return -1
}

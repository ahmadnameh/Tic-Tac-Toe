import { TPlayerSymbol, TXOCellValue } from '@/types/types'

export function getHardMove(board: TXOCellValue[][], player: TPlayerSymbol): number[] | -1 {
  let bestScore = -Infinity
  let bestMove: number[] | -1 = -1

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '') continue

      board[i][j] = player

      const score = minMax(board, false, 1, player)

      board[i][j] = ''

      if (score > bestScore) {
        bestScore = score
        bestMove = [i, j]
      }
    }
  }

  return bestMove
}

function minMax(
  board: TXOCellValue[][],
  isMaximizing: boolean,
  depth: number,
  player: TPlayerSymbol,
): number {
  const enemy: TPlayerSymbol = player === 'X' ? 'O' : 'X'

  if (isPlayerWin(board, player)) return 10 - depth
  if (isPlayerWin(board, enemy)) return depth - 10
  if (isGameFinished(board)) return 0

  if (isMaximizing) {
    let bestScore = -Infinity

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] !== '') continue

        board[i][j] = player

        const score = minMax(board, false, depth + 1, player)

        board[i][j] = ''

        bestScore = Math.max(bestScore, score)
      }
    }

    return bestScore
  } else {
    let bestScore = Infinity

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] !== '') continue

        board[i][j] = enemy

        const score = minMax(board, true, depth + 1, player)

        board[i][j] = ''

        bestScore = Math.min(bestScore, score)
      }
    }

    return bestScore
  }
}

function isPlayerWin(board: TXOCellValue[][], player: TPlayerSymbol): boolean {
  // Rows
  for (const row of board) {
    if (row.every((cell) => cell === player)) return true
  }

  // Columns
  for (let col = 0; col < 3; col++) {
    if (board.every((row) => row[col] === player)) return true
  }

  // Main diagonal
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true
  }

  // Secondary diagonal
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true
  }

  return false
}

function isGameFinished(board: TXOCellValue[][]): boolean {
  return board.every((row) => row.every((cell) => cell !== ''))
}

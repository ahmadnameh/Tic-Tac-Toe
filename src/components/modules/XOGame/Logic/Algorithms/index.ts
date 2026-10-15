import { TDifficulty, TPlayerSymbol, TXOCellValue } from '@/types/types'
import { getEasyMove } from './Easy'
import { getMediumMove } from './Medium'
import { getHardMove } from './Hard'

export function getComputerMove(
  board: TXOCellValue[][],
  difficulty: TDifficulty | null,
  player: TPlayerSymbol,
): number | number[] {
  switch (difficulty) {
    case 'easy':
      return getEasyMove(board)

    case 'medium':
      return getMediumMove(board, player)

    case 'hard':
      return getHardMove(board, player)

    default:
      return getEasyMove(board)
  }
}

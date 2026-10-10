import { TXOCellValue, TPlayerSymbol } from '@/types/types'

export class XOBoard {
  private board: TXOCellValue[][]
  currentPlayer: TPlayerSymbol | null
  Winner: TPlayerSymbol | null

  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
    this.currentPlayer = 'X'
    this.Winner = null
  }

  reset() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
    this.currentPlayer = 'X'
    this.Winner = null
  }

  newGame() {
    const next = this.clone()

    next.reset()

    return next
  }

  startGame(starterPlayer: TPlayerSymbol) {
    this.currentPlayer = starterPlayer
  }

  swapGamer() {
    this.currentPlayer = this.currentPlayer === 'O' ? 'X' : 'O'
  }

  getBoard(): TXOCellValue[][] {
    return this.board
  }

  play(rowIndex: number, colIndex: number): XOBoard {
    const next = this.clone()

    if (!!next.Winner) {
      return next
    } else if (rowIndex > 2 || colIndex > 2 || next.board[rowIndex][colIndex] !== '') {
      next.checkWinner()
      return next
    }

    next.board[rowIndex][colIndex] = next.currentPlayer as TPlayerSymbol
    next.checkWinner()
    if (!next.Winner && !next.finishGame()) {
      next.swapGamer()
    }

    return next
  }

  clone() {
    const next = new XOBoard()

    next.board = this.board.map((row) => [...row])
    next.currentPlayer = this.currentPlayer
    next.Winner = this.Winner

    return next
  }

  checkWinner(): boolean {
    const player = this.currentPlayer

    // Rows
    for (const row of this.board) {
      if (row.every((cell) => cell === player)) {
        this.Winner = player
        return true
      }
    }

    // Columns
    for (let col = 0; col < 3; col++) {
      if (this.board.every((row) => row[col] === player)) {
        this.Winner = player
        return true
      }
    }

    // Main diagonal
    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
      this.Winner = player
      return true
    }

    // Secondary diagonal
    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
      this.Winner = player
      return true
    }

    return false
  }

  finishGame(): boolean {
    for (const row of this.board) {
      if (row.every((cell) => cell !== '')) {
        continue
      }
      return false
    }
    return true
  }

  getWinner(): TPlayerSymbol | null {
    return this.Winner
  }
}

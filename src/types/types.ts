export type TGames = 'XO'
export type TOpponentType = 'computer' | 'friend'
export type TDifficulty = 'easy' | 'medium' | 'hard'
export type TPlayerSymbol = 'X' | 'O'
export type TXOCellValue = 'X' | 'O' | ''

export interface IGame {
  currentGame: TGames | null
  opponentType: TOpponentType | null
  difficulty: TDifficulty | null
  playersName: { X: string; O: string }
  playerScore: { X: number; O: number }
}

export interface IGameSettings {
  gameState: IGame | null
  selectGame: (selectedGame: TGames) => void
  setOpponentType: (opponentType: TOpponentType) => void
  setDifficulty: (difficulty: TDifficulty) => void
  setPlayersName: (playersName: { X: string; O: string }) => void
  setPlayerScore: (playerScore: { X: number; O: number }) => void
  isGameReady: boolean
  getComputerSymbol(): TPlayerSymbol | null
  saveFinalGameSettingState: () => void
  resetGameState: () => void
}

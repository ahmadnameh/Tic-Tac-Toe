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
}

export interface IGameSettings {
  gameState: IGame | null
  selectGame: (selectedGame: TGames) => void
  setOpponentType: (opponentType: TOpponentType) => void
  setDifficulty: (difficulty: TDifficulty) => void
  setPlayersName: (playersName: { X: string; O: string }) => void
  isGameSettingsReady: () => boolean
  saveFinalGameSettingState: () => void
  resetGameState: () => void
}

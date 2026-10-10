'use client'

import XOPlayerCard from '@/components/modules/XOGame/XOGamePlayer/XOPlayerCard'
import XOGrid from '@/components/modules/XOGame/XOGrid/XOGrid'
import { FinishedGameAlert } from '../FinishedGameAlert'
import usePlay from '../Logic/usePlay'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function XOGameBoard() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const { boardState, setBoardState, handlePlay, gameState } = usePlay()

  if (!gameState || !boardState || !boardState.currentPlayer) return null

  return (
    <div className="w-full flex justify-between items-center lg:flex-row flex-col gap-y-[15px]">
      <div className="w-full lg:order-2 order-0">
        <XOGrid gridState={boardState.getBoard()} handleCellClick={handlePlay} />
      </div>
      {!isMobile ? (
        <>
          <div className="w-full lg:order-1 order-2">
            <XOPlayerCard
              type="X"
              score={gameState?.playerScore?.X ?? 0}
              name={gameState?.playersName.X}
              isWinner={boardState.Winner === 'X'}
              playerTurn={boardState.currentPlayer}
            />
          </div>
          <div className="w-full lg:order-3 order-2">
            <XOPlayerCard
              type="O"
              score={gameState?.playerScore?.O ?? 0}
              name={gameState?.playersName.O}
              isWinner={boardState.Winner === 'O'}
              playerTurn={boardState.currentPlayer}
            />
          </div>
        </>
      ) : (
        <div className="flex w-full flex-row gap-2 px-[10px]">
          <XOPlayerCard
            type="X"
            score={gameState?.playerScore?.X ?? 0}
            name={gameState?.playersName.X}
            isWinner={boardState.Winner === 'X'}
            playerTurn={boardState.currentPlayer}
          />
          <XOPlayerCard
            type="O"
            score={gameState?.playerScore?.O ?? 0}
            name={gameState?.playersName.O}
            isWinner={boardState.Winner === 'O'}
            playerTurn={boardState.currentPlayer}
          />
        </div>
      )}
      <FinishedGameAlert
        open={boardState.finishGame() || !!boardState.Winner}
        onPlayAgain={() => setBoardState((prev) => prev.newGame())}
      />
    </div>
  )
}

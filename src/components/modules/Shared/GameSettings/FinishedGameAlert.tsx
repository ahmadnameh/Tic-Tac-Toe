'use client'

import { Gamepad2Icon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'

type FinishedGameAlertProps = {
  open: boolean
  onPlayAgain: () => void
}

export function FinishedGameAlert({ open, onPlayAgain }: FinishedGameAlertProps) {
  const { resetGameState } = useGameSettingsContext()

  const handlePlayAgain = () => {
    onPlayAgain()
  }

  const handleBackToSelectGame = () => {
    resetGameState()
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent size="default" className="bg-[#0a0f1f]">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Gamepad2Icon />
          </AlertDialogMedia>

          <AlertDialogTitle className="text-white">Play again?</AlertDialogTitle>

          <AlertDialogDescription>
            Would you like to start a new game and play again?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-white shadow-none hover:bg-[#bdc1c1] cursor-pointer text-black"
            onClick={handleBackToSelectGame}
          >
            No, thanks
          </AlertDialogCancel>

          <AlertDialogAction onClick={handlePlayAgain} className="cursor-pointer">
            Play again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

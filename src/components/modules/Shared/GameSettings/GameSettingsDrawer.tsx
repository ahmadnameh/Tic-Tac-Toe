'use client'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { TGames } from '@/types/types'
import { ReactNode } from 'react'

export function GameSettingsDrawer({ children, game }: { children: ReactNode; game: TGames }) {
  const { selectGame, resetGameState } = useGameSettingsContext()

  return (
    <Drawer
      onOpenChange={(value) => {
        if (!value) resetGameState()
      }}
    >
      <DrawerTrigger asChild>
        <button
          className="
          relative h-[50px] w-[250px] mt-5 overflow-hidden rounded-[10px] border-2 border-[#7EA4FF]/50 cursor-pointer transition-all duration-500 ease-in-out shadow-[0px_0px_50px_rgba(126,164,255,0.5)]
          hover:shadow-[0.5px_0.5px_150px_#252525]
          
          before:content-['Start_the_journy'] before:absolute before:top-0 before:left-0 before:flex before:h-full before:w-full before:items-center before:justify-center before:text-[white] before:text-[1.2rem] before:font-semibold before:transition-all before:duration-500 before:ease-in-out before:scale-[1.2]
          hover:before:-translate-y-[50px] hover:before:scale-0 hover:before:rotate-[120deg]

          after:content-['LET\'S_GO!'] after:absolute after:top-0 after:left-0 after:flex after:h-full after:w-full after:items-center after:justify-center after:bg-gradient-to-r after:from-[#7EA4FF] after:to-[#4e84ff] after:text-white after:text-[1.2rem] after:font-semibold after:transition-all after:duration-500 after:ease-in-out after:translate-y-[50px]
          hover:after:translate-y-0 hover:after:scale-[1.2]
        "
          onClick={() => selectGame(game)}
        ></button>
      </DrawerTrigger>

      <DrawerContent className="bg-[#0A0F1F] border-t border-white/10">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="text-white text-2xl text-center">Game Settings</DrawerTitle>
            <DrawerDescription className="text-gray-400 text-center">
              Customize your match before starting.
            </DrawerDescription>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

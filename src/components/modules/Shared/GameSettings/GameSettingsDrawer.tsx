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
import { Gamepad2, SlidersHorizontal } from 'lucide-react'
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
          relative h-[50px] w-[250px] mt-5 overflow-hidden rounded-[10px] border-2 border-primary/50 cursor-pointer transition-all duration-500 ease-in-out  shadow-[0_0_50px_color-mix(in_srgb,var(--primary)_35%,transparent)]
          hover:shadow-[0_0_100px_color-mix(in_srgb,var(--primary)_55%,transparent)]
          
          before:content-['Start_the_journy'] before:absolute before:top-0 before:left-0 before:flex before:h-full before:w-full before:items-center before:justify-center before:text-[white] before:text-[1.2rem] before:font-semibold before:transition-all before:duration-500 before:ease-in-out before:scale-[1.2]
          hover:before:-translate-y-[50px] hover:before:scale-0 hover:before:rotate-[120deg]

          after:content-['LET\'S_GO!'] after:absolute after:top-0 after:left-0 after:flex after:h-full after:w-full after:items-center after:justify-center after:bg-primary after:text-white after:text-[1.2rem] after:font-semibold after:transition-all after:duration-500 after:ease-in-out after:translate-y-[50px]
          hover:after:translate-y-0 hover:after:scale-[1.2]
        "
          onClick={() => selectGame(game)}
        ></button>
      </DrawerTrigger>

      <DrawerContent className="overflow-hidden rounded-t-3xl border-t border-border/70 bg-card p-0 text-foreground shadow-2xl shadow-black/20">
        <div className="mx-auto w-full ">
          {/* Decorative handle */}
          <div className="flex justify-center pt-3">
            <div className="h-1.5 w-12 rounded-full bg-muted-foreground/25" />
          </div>

          {/* Header */}
          <DrawerHeader className="relative max-w-3xl mx-auto overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-card to-card px-6 pb-6 pt-5">
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative flex items-center gap-4">
              {/* Icon */}
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                <Gamepad2 className="size-7" />
              </div>

              {/* Title & description */}
              <div className="flex-1 text-start">
                <DrawerTitle className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  Game Settings
                </DrawerTitle>

                <DrawerDescription className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Customize your match and get ready to play.
                </DrawerDescription>
              </div>

              {/* Settings icon */}
              <div className="hidden rounded-xl border border-border/70 bg-background/60 p-2.5 text-muted-foreground sm:block">
                <SlidersHorizontal className="size-5" />
              </div>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </DrawerHeader>

          {/* Settings content */}
          <div className="max-h-[65dvh] overflow-y-auto px-5 sm:px-6">
            <div className="space-y-5">{children}</div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

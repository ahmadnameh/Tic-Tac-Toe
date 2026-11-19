'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { Check, Palette, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const themes = [
  {
    id: 'midnight',
    name: 'Midnight Blue',
    description: 'Elegant midnight blue',
    background: '#0A0F1F',
    card: '#111A30',
    primary: '#7EA4FF',
    border: '#263653',
  },
  {
    id: 'violet',
    name: 'Neon Violet',
    description: 'Futuristic violet',
    background: '#170A20',
    card: '#251132',
    primary: '#E879F9',
    border: '#4A285C',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    description: 'Calm and luxurious emerald',
    background: '#071C1A',
    card: '#0D2925',
    primary: '#2DD4BF',
    border: '#205348',
  },
  {
    id: 'ruby',
    name: 'Ruby Red',
    description: 'Bold ruby red',
    background: '#250D13',
    card: '#35131D',
    primary: '#FB7185',
    border: '#642638',
  },
  {
    id: 'amber',
    name: 'Amber Gold',
    description: 'Warm and luxurious gold',
    background: '#20140A',
    card: '#30200E',
    primary: '#FBBF24',
    border: '#62431F',
  },
  {
    id: 'arctic',
    name: 'Arctic Cyan',
    description: 'Icy and futuristic cyan',
    background: '#071B2A',
    card: '#0C293A',
    primary: '#22D3EE',
    border: '#205064',
  },
  {
    id: 'cosmic',
    name: 'Cosmic',
    description: 'Deep and mysterious cosmic tones',
    background: '#1E1028',
    card: '#2B1739',
    primary: '#C084FC',
    border: '#503265',
  },
  {
    id: 'rose',
    name: 'Rose Quartz',
    description: 'Modern crystal pink',
    background: '#201019',
    card: '#301624',
    primary: '#F472B6',
    border: '#60314D',
  },
] as const

type ThemeId = (typeof themes)[number]['id']

function isThemeId(value: string | undefined): value is ThemeId {
  return themes.some((theme) => theme.id === value)
}

export default function SelectThemeDrawer() {
  const [open, setOpen] = React.useState(false)
  const [selectedTheme, setSelectedTheme] =
    React.useState<ThemeId>('midnight')

  const { theme, setTheme } = useTheme()

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setSelectedTheme(isThemeId(theme) ? theme : 'midnight')
    }

    setOpen(nextOpen)
  }

  const handleConfirm =                     () => {
    const selected = themes.find((item) => item.id === selectedTheme)

    if (!selected) return

    setTheme(selected.id)
    setOpen(false)

    toast.success('Theme changed successfully', {
      description: selected.name,
    })
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange} direction="right">
      <DrawerTrigger asChild>
        <motion.button
          type="button"
          aria-label="Choose website colors"
          className="group relative flex size-11 items-center justify-center rounded-2xl border border-border bg-card/80 shadow-lg backdrop-blur-xl"
          whileHover={{ scale: 1.08, rotate: -5 }}
          whileTap={{ scale: 0.94 }}
        >
          <motion.img
            src="/assets/icon/paint-palette-icon.png"
            alt=""
            className="h-8 w-8 object-contain"
            animate={{
              rotate: [0, -8, 8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-primary" />
        </motion.button>
      </DrawerTrigger>

      <DrawerContent className="flex h-[90dvh] flex-col border-border bg-background text-foreground sm:h-full sm:max-w-md">
        <DrawerHeader className="shrink-0 px-5 pb-4 pt-6 text-start">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-card">
              <Palette className="size-6 text-primary" />
            </div>

            <div className="flex-1">
              <DrawerTitle className="text-xl font-bold">Customize Appearance</DrawerTitle>

              <DrawerDescription className="mt-1 text-muted">
                Choose the colors that express your style.
              </DrawerDescription>
            </div>

            <Sparkles className="size-5 text-primary" />
          </div>

          <div className="rounded-xl border border-border bg-card px-3 py-2">
            <p className="text-xs leading-6 text-muted">
              8 distinctive themes with harmonious colors for the website background and animated
              particles.
            </p>
          </div>
        </DrawerHeader>

        <div className="scroll-fade min-h-0 flex-1 overflow-y-auto px-5 pb-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Available Colors</h3>

            <span className="text-xs text-muted">{themes.length} themes</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((item) => {
              const active = selectedTheme === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedTheme(item.id)}
                  aria-pressed={active}
                  className={[
                    'group relative overflow-hidden rounded-2xl border p-3 text-start transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    active
                      ? 'border-primary ring-2 ring-primary/30'
                      : 'border-border hover:border-primary/60',
                  ].join(' ')}
                  style={{
                    backgroundColor: item.background,
                  }}
                >
                  <div
                    className="relative mb-3 h-[76px] overflow-hidden rounded-xl border p-2"
                    style={{
                      backgroundColor: item.card,
                      borderColor: item.border,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <span
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor: item.primary,
                          }}
                        />
                        <span
                          className="h-2 w-5 rounded-full opacity-40"
                          style={{
                            backgroundColor: item.primary,
                          }}
                        />
                      </div>

                      {active && (
                        <span
                          className="flex size-5 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: item.primary,
                          }}
                        >
                          <Check className="size-3" style={{ color: item.background }} />
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-end gap-1.5">
                      <div
                        className="h-5 w-1/3 rounded-md"
                        style={{
                          backgroundColor: item.primary,
                        }}
                      />

                      <div
                        className="h-3 w-1/4 rounded-md opacity-60"
                        style={{
                          backgroundColor: item.primary,
                        }}
                      />

                      <div
                        className="h-3 flex-1 rounded-md opacity-25"
                        style={{
                          backgroundColor: item.primary,
                        }}
                      />
                    </div>

                    <div
                      className="absolute -bottom-5 -right-4 size-16 rounded-full opacity-20 blur-xl"
                      style={{
                        backgroundColor: item.primary,
                      }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="size-3 shrink-0 rounded-full ring-2 ring-white/10"
                      style={{
                        backgroundColor: item.primary,
                      }}
                    />

                    <span className="truncate text-sm font-semibold text-white">{item.name}</span>
                  </div>

                  <p className="mt-1 truncate text-xs text-white/60">{item.description}</p>

                  <div className="mt-3 flex gap-1">
                    {[item.background, item.card, item.primary].map((color) => (
                      <span
                        key={color}
                        className="h-1.5 flex-1 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <DrawerFooter className="shrink-0 border-t border-border bg-background px-5 pb-6 pt-4">
          <Button
            onClick={handleConfirm}
            className="h-12 w-full gap-2 rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            <Check className="size-4" />
            Apply Theme
          </Button>

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="h-11 w-full rounded-xl border-border"
          >
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

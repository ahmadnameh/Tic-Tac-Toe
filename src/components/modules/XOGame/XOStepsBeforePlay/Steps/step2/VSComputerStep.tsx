import { AnimatePresence, motion } from 'motion/react'

import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormErrorAlert } from '@/components/modules/Shared/GameSettings/FormErrorMessage'
import NextButton from '@/components/modules/Shared/GameSettings/NextButton'
import { Button } from '@/components/ui/button'
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer'
import { Info } from 'lucide-react'

import { stages } from './helper/GameStages'
import type { TDifficulty, TPlayerSymbol } from '@/types/types'
import { cn } from '@/lib/utils'

const schema = z.object({
  difficulty: z.enum(['easy', 'medium', 'hard'], { message: 'please select an option' }),
  playerSymbol: z.enum(['X', 'O'], { message: 'please select an option' }),
})

export default function VSComputerStep({
  onFinishingSteps,
  onCancel,
}: {
  onFinishingSteps: (difficulty: TDifficulty, playerSymbol: TPlayerSymbol) => void
  onCancel: () => void
}) {
  const {
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { playerSymbol: 'X' },
  })

  function onSubmit(data: z.infer<typeof schema>) {
    onFinishingSteps(data.difficulty, data.playerSymbol)
  }
  const playerSymbol = watch('playerSymbol')
  const activeStage = stages.find((s) => s.title.toLowerCase() === watch('difficulty'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center gap-[22px]">
        <div className="relative flex p-1 bg-gray-100 rounded-2xl w-fit shadow-inner">
          <div
            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-transform duration-300 ease-out ${
              playerSymbol === 'O' ? 'translate-x-full' : 'translate-x-0'
            }`}
          />

          <button
            type="button"
            onClick={() => setValue('playerSymbol', 'X')}
            className={`relative z-10 px-10 py-1 text-2xl font-black rounded-xl transition-colors duration-300 ${
              playerSymbol === 'X' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            X
          </button>

          <button
            type="button"
            onClick={() => setValue('playerSymbol', 'O')}
            className={`relative z-10 px-10 py-1 text-2xl font-black rounded-xl transition-colors duration-300 ${
              playerSymbol === 'O' ? 'text-pink-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            O
          </button>
        </div>
        {errors.playerSymbol && <FormErrorAlert message={errors.playerSymbol.message} />}

        <div className="flex justify-center gap-4">
          {stages.map((item) => {
            const isActive = watch('difficulty') === item.title.toLowerCase()

            return (
              <motion.button
                type="button"
                key={item.title}
                onClick={() => setValue('difficulty', item.title.toLowerCase() as TDifficulty)}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1.2 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={cn(
                  'relative px-5 py-2 rounded-xl text-white font-semibold',
                  'flex items-center gap-2',
                  item.className,
                  'shadow-lg',
                  isActive && `ring-4 ring-white/60 ${item.glow}`,
                )}
              >
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-xl blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ background: 'inherit' }}
                  />
                )}

                <span className="relative z-10 flex gap-2 items-center">
                  {item.icon}
                  {item.title}
                </span>
              </motion.button>
            )
          })}
        </div>
        {errors.difficulty && <FormErrorAlert message={errors.difficulty.message} />}
        <AnimatePresence mode="wait">
          {activeStage && (
            <motion.div
              key={activeStage.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mx-auto max-w-[600px]"
            >
              <div className="flex gap-3 items-start border border-white/20 rounded-2xl p-5 text-white backdrop-blur-md bg-white/10">
                <Info className="mt-1 opacity-80" />
                <p className="leading-relaxed">{activeStage.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <DrawerFooter className="flex flex-row gap-3 justify-center p-6 flex-wrap-reverse">
        <DrawerClose asChild>
          <Button variant="outline" className="w-full sm:w-[180px] h-12" onClick={onCancel}>
            Cancel
          </Button>
        </DrawerClose>
        <NextButton label="Next" />
      </DrawerFooter>
    </form>
  )
}

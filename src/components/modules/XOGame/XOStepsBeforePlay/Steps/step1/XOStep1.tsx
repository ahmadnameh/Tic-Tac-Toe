import { Button } from '@/components/ui/button'
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer'
import { motion, AnimatePresence } from 'motion/react'
import { Check } from 'lucide-react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormErrorAlert } from '@/components/modules/common/GameSettings/FormErrorMessage'
import NextButton from '@/components/modules/common/GameSettings/NextButton'
import useGameSettingsContext from '@/hooks/useGameSettingsContext'
import { rollInAnimation, hoverEffect } from './helper/animateEffect'
import { TOpponentType } from '@/types/types'

const oponentTypeSchema = z.object({
  opponentType: z.enum(['computer', 'friend'], { message: 'Please select an option' }),
})

export default function XOStep1({onChangeStep}:{onChangeStep:(val:1|2)=>void}) {
  const { setOpponentType, resetGameState } = useGameSettingsContext()

  const onSubmit = (data: z.infer<typeof oponentTypeSchema>) => {
    setOpponentType(data.opponentType)
    onChangeStep(2)
  }

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(oponentTypeSchema),
  })

  function handleCancel () {
    resetGameState()
    onChangeStep(1)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center gap-6">
          <AnimatePresence>
            {[
              { label: 'Vs Computer', value: 'computer' as TOpponentType, dir: 'right' as const },
              { label: 'Vs Friend', value: 'friend' as TOpponentType, dir: 'left' as const },
            ].map(({ label, value, dir }) => {
              const isSelected = watch('opponentType') === value

              return (
                <motion.button
                  key={label}
                  variants={rollInAnimation(dir)}
                  type="button"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={hoverEffect}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setValue('opponentType', value)}
                  className="group relative w-80 p-6 rounded-2xl bg-transparent border border-white text-white overflow-hidden"
                >
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}

                  {isSelected && (
                    <motion.div
                      className="absolute top-2 right-4 text-green-400"
                      initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                    >
                      <Check size={22} />
                    </motion.div>
                  )}

                  <motion.span
                    className="relative z-10 block sm:text-xl font-semibold text-base"
                    animate={{
                      scale: isSelected ? 1.08 : 1,
                      letterSpacing: isSelected ? '0.08em' : '0.02em',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {label}
                  </motion.span>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
        {errors.opponentType && (
          <FormErrorAlert message={errors.opponentType.message} className="mt-4" />
        )}
        <DrawerFooter className="flex flex-row gap-3 justify-center p-6 flex-wrap-reverse">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full sm:w-[180px] h-12" onClick={handleCancel}>
              Cancel
            </Button>
          </DrawerClose>
          <NextButton label="Next" />
        </DrawerFooter>
      </form>
    </>
  )
}

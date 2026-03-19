import { motion } from 'motion/react'
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer'
import NextButton from '@/components/modules/common/GameSettings/NextButton'
import { Button } from '@/components/ui/button'

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { draw, shape } from '../../../XOGrid/XOCell'
import { FormErrorAlert } from '@/components/modules/common/GameSettings/FormErrorMessage'

export default function VSFriendStep({
  onFinishingSteps,
  onCancel,
}: {
  onFinishingSteps: (playersName: string[]) => void
  onCancel: () => void
}) {
  const schema = z.object({
    firstPlayerName: z.string().min(1, { message: 'player name is required' }),
    secondPlayerName: z.string().min(1, { message: 'player name is required' }),
  })

  const { register, formState, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstPlayerName: 'player 1',
      secondPlayerName: 'player 2',
    },
  })

  function onSubmit(data: z.infer<typeof schema>) {
    onFinishingSteps([data.firstPlayerName, data.secondPlayerName])
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-[10px] text-white max-w-lg mx-auto">
        <div className="grid gap-5 relative md:mt-0 mt-[25px]">
          <motion.svg
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
            className="md:w-[200px] md:h-[200px] w-[55px] h-[55px] absolute md:top-0 md:-left-60 md:translate-x-0 -top-13 left-1/2 -translate-x-1/2"
          >
            <motion.circle
              className="circle-path"
              cx="100"
              cy="100"
              r="80"
              stroke="#ff0088"
              variants={draw}
              custom={1}
              style={shape}
            />
          </motion.svg>
          <p className="text-center mb-3 h-1">{watch('firstPlayerName')} </p>
          <div>
            <InputGroup>
              <InputGroupInput placeholder="player name" {...register('firstPlayerName')} />
              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>
            {formState.errors.firstPlayerName && (
              <FormErrorAlert message={formState.errors.firstPlayerName.message} className="mt-4" />
            )}
          </div>
        </div>
        <hr className="w-[1px] h-[120px] bg-white" />
        <div className="grid gap-5 relative md:mt-0 mt-[25px]">
          <motion.svg
            viewBox="-10 -10 200 200"
            initial="hidden"
            animate="visible"
            className="md:w-[200px] md:h-[200px] w-[55px] h-[55px] absolute md:top-0 md:-right-60 md:translate-x-0 -top-13 right-1/2 translate-x-1/2"
          >
            <motion.line
              x1="0"
              y1="0"
              x2="140"
              y2="140"
              stroke="#0d63f8"
              variants={draw}
              custom={2}
              style={shape}
            />
            <motion.line
              x1="140"
              y1="0"
              x2="0"
              y2="140"
              stroke="#0d63f8"
              variants={draw}
              custom={2.5}
              style={shape}
            />
          </motion.svg>
          <p className="text-center mb-3 h-1">{watch('secondPlayerName')}</p>
          <div>
            <InputGroup
              className={
                formState.errors.secondPlayerName
                  ? 'border-destructive focus-visible:border-destructive'
                  : ''
              }
            >
              <InputGroupInput placeholder="player name" {...register('secondPlayerName')} />
              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>
            {formState.errors.secondPlayerName && (
              <FormErrorAlert
                message={formState.errors.secondPlayerName.message}
                className="mt-4"
              />
            )}
          </div>
        </div>
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

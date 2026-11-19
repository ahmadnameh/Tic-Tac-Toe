import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircleIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

type Props = {
  message?: string
  className?: string
}

export function FormErrorAlert({ message, className }: Props) {
  return (
    <AnimatePresence mode="wait">
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className={cn('flex justify-center', className)}
        >
          <Alert
            className={cn(
              'flex max-w-md items-center gap-3 rounded-xl',
              'border border-red-500/30 bg-red-500/10 px-4 py-3',
              'text-foreground shadow-[0_0_24px_rgba(239,68,68,0.08)]',
            )}
          >
            <motion.div
              animate={{ x: [0, -3, 3, -3, 3, 0] }}
              transition={{ duration: 0.4 }}
              className="shrink-0"
            >
              <AlertCircleIcon className="size-5 text-red-500" />
            </motion.div>

            <AlertTitle className="mb-0 font-medium leading-relaxed text-red-500">
              {message}
            </AlertTitle>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

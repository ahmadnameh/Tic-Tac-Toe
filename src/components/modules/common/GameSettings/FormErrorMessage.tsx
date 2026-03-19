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
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className={cn('flex justify-center', className)}
        >
          <Alert className="max-w-md px-4 py-3 rounded-xl border border-red-300 bg-red-50 shadow-md flex items-center gap-3">
            <motion.div animate={{ x: [0, -3, 3, -3, 3, 0] }} transition={{ duration: 0.4 }}>
              <AlertCircleIcon className="text-red-600 w-5 h-5" />
            </motion.div>

            <AlertTitle className="text-red-700 font-medium">{message}</AlertTitle>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

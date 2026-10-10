'use client'
import { motion, Variants } from 'framer-motion'

export default function XOCell({ type }: { type: 'X' | 'O' | '' }) {
  return (
    <div
      className={`
        w-full
        aspect-square
        max-w-[90px]
        sm:max-w-[110px]
        md:max-w-[130px]
        lg:max-w-[150px]
        rounded-2xl
        p-2 sm:p-3
        backdrop-blur-md
        bg-white/5
        border border-white/10
        ${type === '' ? 'cursor-pointer' : 'cursor-default'}
      `}
    >
      {type === 'X' ? (
        <motion.svg className="w-full h-full p-1 sm:p-2">
          <motion.line
            x1="8"
            y1="8"
            x2="90%"
            y2="90%"
            stroke="#0d63f8"
            variants={draw}
            custom={2}
            style={shape}
            initial="hidden"
            animate="visible"
          />
          <motion.line
            x1="8"
            y1="90%"
            x2="90%"
            y2="8"
            stroke="#0d63f8"
            variants={draw}
            custom={2.5}
            style={shape}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      ) : type === 'O' ? (
        <motion.svg className="w-full h-full">
          <motion.circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke="#ff0088"
            variants={draw}
            custom={1}
            style={shape}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      ) : null}
    </div>
  )
}

export const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    // const delay = i * 0.5

    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          // delay,
          type: 'spring',
          duration: 1.5,
          bounce: 0,
        },
        opacity: {
          // delay,
          duration: 0.01,
        },
      },
    }
  },
}

export const shape: React.CSSProperties = {
  strokeWidth: 8,
  strokeLinecap: 'round',
  fill: 'transparent',
}

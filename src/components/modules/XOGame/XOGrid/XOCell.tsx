'use client'

import { motion, Variants } from 'motion/react'
import { useState } from 'react'

export default function XOCell() {
  return <div></div>
}

export const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export const shape: React.CSSProperties = {
  strokeWidth: 10,
  strokeLinecap: 'round',
  fill: 'transparent',
}


import { Variants, TargetAndTransition } from 'motion/react'

export const rollInAnimation = (direction: 'right' | 'left'): Variants => {
  const rolling = direction === 'right' ? { x: -200, rotate: -90 } : { x: 200, rotate: 90 }

  return {
    hidden: {
      x: rolling.x,
      rotate: rolling.rotate,
      opacity: 0,
      scale: 0.85,
    },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 90, damping: 12 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.35, ease: 'easeInOut' },
    },
  }
}

export const hoverEffect: TargetAndTransition = {
  scale: 1.05,
  y: -6,
  rotate: 1.5,
  boxShadow: '0 25px 40px rgba(0,0,0,0.18)',
  transition: { type: 'spring', stiffness: 300, damping: 18 },
}

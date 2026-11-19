'use client'

import XOGameSteps from './XOStepsBeforePlay/XOGameSteps'
import { GameSettingsDrawer } from '../Shared/GameSettings/GameSettingsDrawer'
import { motion } from 'motion/react'

export default function XOGameOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: 'spring',
        bounce: 0.35,
      }}
      className="flex items-center justify-center md:px-0 px-6"
    >
      <div className="max-w-3xl text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl md:p-10 p-5 shadow-2xl">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:text-7xl text-5xl font-bold tracking-wide"
        >
          <span className="text-[#0d63f8] drop-shadow-lg">X</span>
          <span className="text-[#ff0088] drop-shadow-lg">O</span>
          <span className="text-white ml-3">Game</span>
        </motion.h1>

        <p className="text-gray-300 md:text-xl text-lg mt-6 leading-relaxed">
          Challenge the computer with powerful AI algorithms across multiple levels
          <span className="text-white font-semibold"> (Easy – Medium – Hard)</span>
          <br />
          or play locally with your friend.
        </p>

        <div className="w-24 h-[2px] bg-gradient-to-r from-[#0d63f8] to-[#ff0088] mx-auto my-8 rounded-full" />

        <div className="flex justify-center">
          <GameSettingsDrawer game="XO">
            <div className="p-6 pb-0 min-h-[150px]">
              <XOGameSteps />
            </div>
          </GameSettingsDrawer>
        </div>
      </div>
    </motion.div>
  )
}

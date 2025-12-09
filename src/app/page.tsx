'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Gamepad2 } from 'lucide-react'

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.p
        className="font-bold text-5xl text-white drop-shadow-[0_0_25px_#7EA4FF]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        Welcome
      </motion.p>

      <motion.p
        className="max-w-[500px] my-7 text-center text-2xl text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: 0.3,
        }}
      >
        Get ready for an exciting adventure! Challenge another player or test your skills against
        advanced AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          type: 'spring',
          bounce: 0.4,
        }}
      >
        <Link href="/game">
          <motion.button
            whileHover={{ scale: 1.15, boxShadow: '0px 0px 20px #7EA4FF' }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-2 text-white bg-[#5167a5] rounded-lg w-[300px] text-xl font-bold flex justify-center items-center gap-3"
          >
            Play Now <Gamepad2 />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

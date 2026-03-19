'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import Lottie from 'lottie-react'
import gamingAnimationIcon from '../../public/assets/lotties/Animate Gaming Console.json'

export default function Page() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.h1
          className="font-black text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400/50 drop-shadow-[0_10px_30px_rgba(126,164,255,0.4)]"
          initial={{ opacity: 0, scale: 0.9, letterSpacing: '-10px' }}
          animate={{ opacity: 1, scale: 1, letterSpacing: '4px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          WELCOME
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#7EA4FF] to-transparent my-6 shadow-[0_0_20px_#7EA4FF]"
        />

        <motion.p
          className="max-w-[600px] text-center text-xl md:text-2xl text-blue-100/70 leading-relaxed font-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Get ready for an <span className="text-white font-bold">exciting adventure</span>.
          Challenge friends or test your skills against our{' '}
          <span className="text-[#7EA4FF] font-bold underline underline-offset-4">advanced AI</span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Link href="/game">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center gap-4 bg-white text-[#050816] px-9 py-2 rounded-2xl text-2xl font-black transition-all shadow-[0px_0px_50px_rgba(126,164,255,0.5)]"
            >
              <span className="relative z-10">PLAY NOW</span>

              <div className="relative z-10 w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Lottie animationData={gamingAnimationIcon} loop={true} />
              </div>

              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-white/30 text-[10px] tracking-[0.5em] uppercase font-bold"
      >
        Enterprise Gaming Experience
      </motion.div>
    </div>
  )
}

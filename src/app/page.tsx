'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import Lottie from 'lottie-react'
import { ArrowRight, Sparkles, Gamepad2, Zap, Trophy } from 'lucide-react'

import gamingAnimationIcon from '../../public/assets/lotties/Animate Gaming Console.json'

const floatingItems = [
  { Icon: Gamepad2, className: 'left-[8%] top-[24%]', delay: 0 },
  { Icon: Trophy, className: 'right-[9%] top-[32%]', delay: 0.8 },
  { Icon: Zap, className: 'left-[16%] bottom-[22%]', delay: 1.3 },
  { Icon: Sparkles, className: 'right-[17%] bottom-[23%]', delay: 0.5 },
]

export default function Page() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 py-16 text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,var(--primary)_0%,transparent_45%)] opacity-[0.10]" />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.12, 0.22, 0.12],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-[36%] aspect-square w-[min(85vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>

      {floatingItems.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden rounded-2xl border border-primary/20 bg-card/40 p-4 text-primary shadow-[0_0_35px_var(--border)] backdrop-blur-md lg:block ${className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.4, 0.85, 0.4],
            y: reduceMotion ? 0 : [0, -14, 0],
            rotate: reduceMotion ? 0 : [0, 5, -5, 0],
            scale: 1,
          }}
          transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary shadow-lg backdrop-blur-xl sm:text-sm"
        >
          <Sparkles size={15} />
          <span>YOUR NEXT LEVEL STARTS HERE</span>
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.92,
            filter: 'blur(12px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative text-6xl font-black leading-[0.95] tracking-[-0.065em] sm:text-8xl md:text-9xl"
        >
          <span className="absolute inset-0 -z-10 bg-primary/25 opacity-70 blur-3xl" />

          <span className="bg-gradient-to-b from-white via-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_35px_var(--border)]">
            WELCOME
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 150, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-7 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_var(--primary)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-2xl text-base font-light leading-8 text-muted sm:text-xl sm:leading-9"
        >
          Get ready for an{' '}
          <span className="font-bold text-foreground">extraordinary adventure.</span>
          <br className="hidden sm:block" />
          Challenge your friends or face our{' '}
          <span className="font-bold text-primary [text-shadow:0_0_20px_var(--border)]">
            advanced AI
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/game"
            aria-label="Start playing now"
            className="group relative inline-flex rounded-2xl p-[1.5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span className="absolute -inset-2 rounded-3xl bg-primary/30 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative inline-flex min-h-[68px] items-center gap-4 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-primary via-primary to-primary-hover px-6 text-lg font-black text-primary-foreground shadow-[0_12px_50px_-12px_var(--primary)] transition-transform duration-300 group-hover:-translate-y-1 sm:px-10 sm:text-xl">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10 flex size-10 items-center justify-center rounded-xl bg-black/10">
                <Lottie
                  animationData={gamingAnimationIcon}
                  loop={!reduceMotion}
                  autoplay={!reduceMotion}
                />
              </span>

              <span className="relative z-10 tracking-wide">PLAY NOW</span>

              <ArrowRight
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                size={22}
              />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-muted sm:gap-x-9 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            Challenge Friends
          </span>

          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            Smart AI Opponent
          </span>

          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            Endless Fun
          </span>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 px-4 text-center"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50 sm:w-16" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted/70 sm:text-[10px] sm:tracking-[0.45em]">
          Enterprise Gaming Experience
        </span>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50 sm:w-16" />
      </motion.footer>
    </main>
  )
}

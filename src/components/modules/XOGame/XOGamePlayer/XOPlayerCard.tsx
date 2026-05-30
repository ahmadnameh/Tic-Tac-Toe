import { TPlayerSymbol } from '@/types/types'
import { User, LaptopMinimal } from 'lucide-react'
import { useState } from 'react'

export default function XOPlayerCard({
  type,
  name = 'Player 1',
  score = 0,
}: {
  type: TPlayerSymbol
  name: string
  score: number
}) {
  const isX = type === 'X'

  const config = {
    X: {
      gradient: 'from-[#0d63f8] to-[#2af5ff]',
      text: 'text-[#82b1ff]',
      glow: 'shadow-[0_0_30px_rgba(13,99,248,0.3)]',
      hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(13,99,248,0.5)]',
      Icon: LaptopMinimal,
    },
    O: {
      gradient: 'from-[#ff0088] to-[#ff8acc]',
      text: 'text-[#ff80bf]',
      glow: 'shadow-[0_0_30px_rgba(255,0,136,0.3)]',
      hoverGlow: 'group-hover:shadow-[0_0_50px_rgba(255,0,136,0.5)]',
      Icon: User,
    },
  }[type]

  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [shinePos, setShinePos] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return

    const card = e.currentTarget
    const box = card.getBoundingClientRect()

    const x = e.clientX - box.left
    const y = e.clientY - box.top

    const centerX = box.width / 2
    const centerY = box.height / 2

    const rotateX = (centerY - y) / 14
    const rotateY = (x - centerX) / 14

    setRotate({ x: rotateX, y: rotateY })

    setShinePos({
      x: `${(x / box.width) * 100}%`,
      y: `${(y / box.height) * 100}%`,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      className="
        perspective
        w-full
        max-w-[210px]
        md:max-w-[280px]
        lg:max-w-[320px]
        aspect-[7/10]
        mx-auto
      "
    >
      <div
        className={`
          group relative w-full h-full
          p-4 sm:p-5 md:p-6
          flex flex-col items-center justify-between
          backdrop-blur-xl bg-gray-950/40
          border border-white/10
          rounded-[1.5rem] sm:rounded-[2rem]
          transition-all duration-150 ease-linear
          preserve-3d overflow-hidden
          ${config.glow} ${config.hoverGlow}
          cursor-pointer
        `}
        style={{
          transform:
            window.innerWidth >= 768
              ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
              : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine */}
        <div
          className="absolute w-[150%] h-[150%] bg-white/20 blur-3xl pointer-events-none rounded-full"
          style={{
            left: shinePos.x,
            top: shinePos.y,
          }}
        />

        {/* Background Symbol */}
        <div
          className={`
            absolute -top-6 -left-4
            text-[110px] sm:text-[140px] md:text-[180px]
            font-black ${config.text}
            opacity-5 select-none
            transition-opacity group-hover:opacity-10
          `}
        >
          {type}
        </div>

        {/* Bottom Glow */}
        <div
          className={`
            absolute bottom-0 left-0 right-0
            h-1 bg-gradient-to-r ${config.gradient}
            blur-sm opacity-50
          `}
        />

        {/* Main Symbol */}
        <div className="transform-style-preserve-3d" style={{ transform: 'translateZ(50px)' }}>
          <span
            className={`
              font-extrabold
              text-6xl sm:text-7xl md:text-9xl
              bg-gradient-to-b ${config.gradient}
              bg-clip-text text-transparent
              drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
            `}
          >
            {type}
          </span>
        </div>

        {/* Avatar */}
        <div
          className="transform-style-preserve-3d -mt-2 sm:mt-[-20px]"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div
            className={`
              relative
              w-20 h-20 sm:w-24 sm:h-24
              rounded-full p-[2px]
              bg-gradient-to-b ${config.gradient}
              ${config.glow}
            `}
          >
            <div className="w-full h-full rounded-full bg-gray-950 flex justify-center items-center overflow-hidden border border-white/10">
              <div
                className={`
                  absolute inset-0
                  bg-gradient-to-r ${config.gradient}
                  opacity-20 blur-xl animate-pulse
                `}
              />

              <config.Icon className="w-9 h-9 sm:w-12 sm:h-12 text-white relative z-10 transition-transform group-hover:scale-110" />
            </div>

            <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#22c55e] border-[3px] sm:border-4 border-gray-950 rounded-full shadow-[0_0_10px_#22c55e]" />
          </div>
        </div>

        {/* Name & Score */}
        <div
          className="text-center transform-style-preserve-3d mt-1 sm:mt-2 px-2"
          style={{ transform: 'translateZ(20px)' }}
        >
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight break-words">
            {name}
          </p>

          <p
            className={`
              ${config.text}
              text-xs sm:text-sm
              mt-1 uppercase tracking-[0.25em]
            `}
          >
            Score: {score}
          </p>
        </div>

        {/* Footer */}
        <div
          className={`
            transform-style-preserve-3d
            px-4 sm:px-6
            py-1.5
            rounded-full
            bg-gray-950 border border-white/10
            ${config.glow}
          `}
        >
          <span
            className={`
              font-black
              text-sm sm:text-base md:text-xl
              tracking-tight
              bg-gradient-to-r ${config.gradient}
              bg-clip-text text-transparent
              whitespace-nowrap
            `}
          >
            {isX ? 'CPU' : 'USER'} PLAYER
          </span>
        </div>
      </div>
    </div>
  )
}

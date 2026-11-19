'use client'

import { useCallback, useMemo, useRef } from 'react'
import { Particles } from 'react-tsparticles'
import { useTheme } from 'next-themes'
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

const MAX_PARTICLES = 200
const INITIAL_PARTICLES = 120

const particleThemes = {
  midnight: {
    background: '#0A0F1F',
    particle: '#7EA4FF',
    link: '#65759A',
  },
  violet: {
    background: '#170A20',
    particle: '#E879F9',
    link: '#A855C7',
  },
  emerald: {
    background: '#071C1A',
    particle: '#2DD4BF',
    link: '#3B9F8D',
  },
  ruby: {
    background: '#250D13',
    particle: '#FB7185',
    link: '#BE526B',
  },
  amber: {
    background: '#20140A',
    particle: '#FBBF24',
    link: '#B8863B',
  },
  arctic: {
    background: '#071B2A',
    particle: '#22D3EE',
    link: '#318BA5',
  },
  cosmic: {
    background: '#1E1028',
    particle: '#C084FC',
    link: '#8B5AB5',
  },
  rose: {
    background: '#201019',
    particle: '#F472B6',
    link: '#B85B91',
  },
} as const

type ThemeName = keyof typeof particleThemes

export default function ParticlesBackground() {
  const containerRef = useRef<Container | undefined>(undefined)
  const { theme } = useTheme()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      containerRef.current = container
    }
  }, [])

  const colors =
    particleThemes[(theme as ThemeName) in particleThemes ? (theme as ThemeName) : 'midnight']

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: { value: colors.background },
      },

      fpsLimit: 60,

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },

        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },

      particles: {
        color: { value: colors.particle },

        links: {
          color: colors.link,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },

        move: {
          enable: true,
          speed: 2,
          outModes: {
            default: 'bounce',
          },
          random: false,
          straight: false,
        },

        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: INITIAL_PARTICLES,
          limit: MAX_PARTICLES,
        },

        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },

      detectRetina: true,
    }),
    [colors],
  )

  return (
    <Particles
      key={theme}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  )
}

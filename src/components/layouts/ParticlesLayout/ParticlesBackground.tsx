'use client'

import { useCallback, useRef } from 'react'

import { Particles } from 'react-tsparticles'

import type { Container, Engine, ISourceOptions } from 'tsparticles-engine'

import { loadFull } from 'tsparticles'

const MAX_PARTICLES = 200
const INITIAL_PARTICLES = 120

export default function ParticlesBackground() {
  const containerRef = useRef<Container | undefined>(undefined)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      containerRef.current = container
    }
  }, [])

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: { value: '#0A0F1F' },
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
      color: { value: '#7EA4FF' },

      links: {
        color: '#65759a',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },

      move: {
        direction: undefined,
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 2,
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
  }

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
  )
}

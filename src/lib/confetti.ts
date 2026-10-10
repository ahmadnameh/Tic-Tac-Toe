import confetti from 'canvas-confetti'

export function fireConfetti() {
  const scalar = 2

  const triangle = confetti.shapeFromPath({
    path: 'M0 10 L5 0 L10 10z',
  })

  const square = confetti.shapeFromPath({
    path: 'M0 0 L10 0 L10 10 L0 10 Z',
  })

  const coin = confetti.shapeFromPath({
    path: 'M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z',
  })

  const defaults = {
    spread: 360,
    ticks: 80,
    gravity: 0.15,
    decay: 0.96,
    startVelocity: 28,
    origin: { y: 1 },
    scalar,
    shapes: [triangle, square, coin],
  }

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
    })
  }

  shoot()

  setTimeout(shoot, 150)
  setTimeout(shoot, 300)
}

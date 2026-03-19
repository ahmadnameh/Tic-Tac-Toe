import { Flame, Zap, Skull } from 'lucide-react'

export interface IGameStage {
  title: string
  description: string
  className: string
  icon: React.ReactNode
  glow: string
}

export const stages: IGameStage[] = [
  {
    title: 'Easy',
    description: 'Relaxed gameplay with simple algorithms.',
    className: 'bg-green-500',
    glow: 'shadow-green-400/50',
    icon: <Zap size={20} />,
  },
  {
    title: 'Medium',
    description: 'Balanced challenge with smarter logic.',
    className: 'bg-orange-500',
    glow: 'shadow-orange-400/50',
    icon: <Flame size={20} />,
  },
  {
    title: 'Hard',
    description: 'Only for legends. Complex and unforgiving.',
    className: 'bg-red-500',
    glow: 'shadow-red-400/50',
    icon: <Skull size={20} />,
  },
]

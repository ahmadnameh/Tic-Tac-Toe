import { ComponentType } from 'react'

import XOGameOverview from '../XOGame/XOGameOverview'
import XOPreview from '../XOGame/XOPreview'

type GameItem = {
  name: string
  previewComponent: ComponentType
  overViewComponent: ComponentType
}

export const Games: GameItem[] = [
  {
    name: 'XO',
    previewComponent: XOPreview,
    overViewComponent: XOGameOverview,
  },
  {
    name: 'XO',
    previewComponent: () => <div>test</div>,
    overViewComponent: () => <p className="text-red-800 text-8xl font-bold">over View Component</p>,
  },
]

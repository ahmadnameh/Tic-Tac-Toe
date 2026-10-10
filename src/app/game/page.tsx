'use client'

import SelectGameCarousel from '@/components/modules/SelectGameCarousel/SelectGameCarousel'
import { useState } from 'react'
import { Games } from '@/components/modules/SelectGameCarousel/games'

export default function Page() {
  const [currentPlay, setCurrentPlay] = useState(0)

  const OverviewComponent = Games[currentPlay].overViewComponent

  return (
    <div className="grid xl:grid-cols-2 items-center gap-x-10 gap-y-3 h-full">
      <OverviewComponent />
      <SelectGameCarousel onNextPlay={setCurrentPlay} />
    </div>
  )
}

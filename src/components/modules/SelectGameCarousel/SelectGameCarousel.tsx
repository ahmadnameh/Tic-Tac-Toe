'use client'

import { useEffect, useRef, useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

import { Games } from './games'

import useGameSettingsContext from '@/hooks/useGameSettingsContext'

export default function SelectGameCarousel({
  onNextPlay,
}: {
  onNextPlay: (index: number) => void
}) {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
    }),
  )

  const [api, setApi] = useState<CarouselApi>()

  const { gameState } = useGameSettingsContext()

  useEffect(() => {
    if (!!gameState?.currentGame) {
      autoplay.current.stop()
    }
  }, [gameState?.currentGame])

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap()

      onNextPlay(currentIndex)
    }

    onSelect()

    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api, onNextPlay])

  return (
    <div className="w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <Carousel setApi={setApi} plugins={[autoplay.current]}>
        <CarouselContent>
          {Games.map((play, index) => {
            const PreviewComponent = play.previewComponent

            return (
              <CarouselItem key={index}>
                <PreviewComponent />
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <CarouselPrevious variant="link" />
        <CarouselNext variant="link" />
      </Carousel>
    </div>
  )
}

'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import PathDrawing from '../XOGame/XOGrid/XOGrid'
import Autoplay from 'embla-carousel-autoplay'

export default function SelectGameCarousel() {
  return (
    <div className="w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <PathDrawing />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious variant="link" />
        <CarouselNext variant="link" />
      </Carousel>
    </div>
  )
}

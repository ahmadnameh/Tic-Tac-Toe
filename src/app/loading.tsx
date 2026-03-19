'use client'

import Lottie from 'lottie-react'
import gaminAnimationIcon from '../../public/assets/lotties/gaming.json'

export default function Loading() {
  return (
    <div className="w-full h-full text-white flex justify-center items-center">
      <div className="w-[500px] h-[500px]">
        <Lottie animationData={gaminAnimationIcon} loop={true} />
      </div>
    </div>
  )
}

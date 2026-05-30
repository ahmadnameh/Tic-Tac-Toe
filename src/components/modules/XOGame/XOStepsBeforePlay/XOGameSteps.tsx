'use client'

import { useState } from 'react'
import XOStep1 from './Steps/step1/XOStep1'
import XOStep2 from './Steps/step2/XOStep2'

export default function XOGameSteps() {
  const [currentStep, setCurentStep] = useState<1 | 2>(1)

  return currentStep === 1 ? (
    <XOStep1 onChangeStep={setCurentStep} />
  ) : (
    <XOStep2 onChangeStep={setCurentStep} />
  )
}

import { useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

import { UseIconAnimationType } from '@/types/hooksTypes'

export default function useIconAnimation({
  startAnimation,
  mainAnimation,
}: UseIconAnimationPropsType): UseIconAnimationType {
  const iconControl = useAnimationControls()

  useEffect(() => {
    animateIcon()
  }, [])

  const animateIcon = async (): Promise<void> => {
    await iconControl.start({
      opacity: [0, 0, 0.5, 1],
      transition: { duration: 2, ease: 'linear' },
      ...startAnimation,
    })
    iconControl.start({
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      ...mainAnimation,
    })
  }
  return { iconControl }
}

type UseIconAnimationPropsType = {
  startAnimation: AnimationHorientationType
  mainAnimation: AnimationHorientationType
}

type AnimationHorientationType = {
  top?: string[]
  bottom?: string[]
  left?: string[]
  right?: string[]
}

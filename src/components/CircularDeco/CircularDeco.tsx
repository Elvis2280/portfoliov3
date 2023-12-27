import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import React, { ReactElement } from 'react'

type Props = {
  size: string
  rotate: number
  delay?: number
}
const CustomBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})
export default function CircularDeco({
  size,
  rotate,
  delay = 0,
}: Props): ReactElement {
  return (
    <CustomBox
      animate={{
        scale: [1, 0.8, 1],
      }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      transition={{
        duration: 15,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: delay,
      }}
      transform={`rotate(${rotate}turn)`}
      w={size}
      height={size}
      rounded='full'
      bgGradient={
        'linear(to-b, rgba(0, 216, 255, 0.3), rgba(19, 75, 78, 0.75) 85%  )'
      }
    ></CustomBox>
  )
}

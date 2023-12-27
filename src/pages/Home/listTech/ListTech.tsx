import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

const ChakraFramerUl = chakra(motion.ul, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function ListTech(): ReactElement {
  const ref = useRef<HTMLUListElement | null>(null)
  const [navWidth, setNavWidth] = useState<number | undefined>(0)
  useEffect(() => {
    if (ref.current) {
      setNavWidth(ref?.current?.offsetWidth)
    }
  }, [ref])
  const variant = {
    techAnima: {
      transform: [`translateX(-${navWidth}px)`, `translateX(${navWidth}px)`],
      transition: {
        repeat: Infinity,
        duration: 35,
        ease: 'linear',
      },
    },
  }

  return (
    <ChakraFramerUl
      minW={'max-content'}
      listStyleType={'none'}
      display='flex'
      fontWeight={'bold'}
      color='brand.600'
      fontSize={['lg', '2xl', '3xl']}
      py='4'
      columnGap={[4, 4, 12]}
      justifyContent='center'
      position={'relative'}
      ref={ref}
    >
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        Typescript
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        React
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        React Native
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        NextJs
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        Redux
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        NodeJs
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        MongoDB
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        Postgresql
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        Tailwind
      </chakra.li>
      <chakra.li as={motion.li} variants={variant} animate={'techAnima'}>
        Chakra UI
      </chakra.li>
    </ChakraFramerUl>
  )
}

import React, { ReactElement, useEffect, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { Box, chakra, Flex } from '@chakra-ui/react'
import { motion, useAnimationControls } from 'framer-motion'

import CircularDeco from '../CircularDeco/CircularDeco'
type Props = {
  children: ReactElement
}

export default function MobileMenu({ children }: Props): ReactElement {
  const [bool, setBool] = useState<boolean>()
  const linksControl = useAnimationControls()
  const menuControl = useAnimationControls()

  useEffect(() => {
    if (bool) {
      menuControl.start({
        left: ['-100vw', '0vw'],
        borderTopRightRadius: ['2000%', '0%'],
        borderBottomRightRadius: ['2000%', '0%'],
        transition: { ease: 'easeInOut', duration: 1 },
      })
      linksControl.start({
        rowGap: ['100px', '30px'],
        opacity: [0, 1],
        transition: { duration: 2 },
      })
    } else if (!bool && bool !== undefined) {
      menuControl.start({
        left: ['0vw', '-100vw'],
        borderTopRightRadius: ['0%', '2000%'],
        borderBottomRightRadius: ['0%', '2000%'],
        transition: { ease: 'easeInOut', duration: 0.5 },
      })
      linksControl.start({
        rowGap: ['30px', '100px'],
        opacity: [1, 0],
        transition: { duration: 2 },
      })
    }
  }, [bool, linksControl])
  return (
    <>
      <Box display={['block', 'none', 'none']} zIndex={20}>
        <Hamburger
          color={bool ? '#15B7B9' : '#134B4E'}
          onToggle={b => setBool(b)}
          toggled={bool}
          direction='right'
        />
      </Box>
      <Box
        display={['block', 'none', 'none']}
        zIndex={10}
        as={motion.div}
        animate={menuControl}
        initial={{
          left: '-100vw',
        }}
        backgroundColor='brand.900'
        position={'absolute'}
        left={'-100vw'}
        top={0}
        minH='100vh'
        width={'80%'}
        overflow='hidden'
      >
        <chakra.nav left={0} top={0} pt='20' px={4}>
          <Flex
            as={motion.div}
            display={'flex'}
            textColor={'brand.50'}
            fontWeight='medium'
            fontSize={'xl'}
            flexDir={'column'}
            animate={linksControl}
            onClick={() => {
              setBool(!bool)
            }}
          >
            {children}
          </Flex>

          <Box position={'absolute'} bottom='10' left={'2'}>
            <CircularDeco size='40' rotate={0.4} />
          </Box>
          <Box position={'absolute'} top='2' right={'2'}>
            {' '}
            <CircularDeco size={'24'} rotate={0.1} />
          </Box>
        </chakra.nav>
      </Box>
    </>
  )
}

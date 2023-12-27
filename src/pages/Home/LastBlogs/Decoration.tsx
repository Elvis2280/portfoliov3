import { Flex, chakra, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import React, { ReactElement } from 'react'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})
export default function Decoration(): ReactElement {
  return (
    <Flex>
      <ChakraBox
        h={['48', '56', '64']}
        w={['16', '20', '24']}
        bg='brand.900'
        roundedTop={'full'}
        roundedBottom='full'
      ></ChakraBox>
      <ChakraBox
        animate={{
          transform: [
            'translateX(-30px)',
            'translateX(-20px)',
            'translateX(-30px)',
          ],
        }}
        // @ts-expect-error no problem in operation, although type error appears.
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        h={['48', '56', '64']}
        w={['16', '20', '24']}
        bg='brand.600'
        roundedTop={'full'}
        roundedBottom='full'
        transform={'translateX(-30px)'}
      ></ChakraBox>
      <ChakraBox
        animate={{
          transform: [
            'translateX(-50px)',
            'translateX(-30px)',
            'translateX(-50px)',
          ],
        }}
        // @ts-expect-error no problem in operation, although type error appears.
        transition={{
          duration: 4,
          delay: 0.2,
          repeat: Infinity,
        }}
        h={['48', '56', '64']}
        w={['16', '20', '24']}
        bg='brand.400'
        roundedTop={'full'}
        roundedBottom='full'
        transform={'translateX(-50px)'}
      ></ChakraBox>
    </Flex>
  )
}

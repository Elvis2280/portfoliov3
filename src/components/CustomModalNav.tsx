import { Box, chakra, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

type Props = {
  barPorcent: string
  nextHandler?: React.MouseEventHandler
  backHandler?: React.MouseEventHandler
}

export default function CustomModalNav({
  barPorcent,
  nextHandler,
  backHandler,
}: Props): ReactElement {
  return (
    <Box>
      <Flex alignItems={'center'} columnGap='4'>
        <chakra.button
          w={[10, 10, 12]}
          h={[10, 10, 12]}
          rounded={'full'}
          display='flex'
          backgroundColor={'brand.100'}
          boxShadow={
            '0.3px 0.5px 0.7px hsl(175deg 34% 56% / 0.34), 0.4px 0.8px 1px -1.2px hsl(175deg 34% 56% / 0.34), 1px 2px 2.5px -2.5px hsl(175deg 34% 56% / 0.34)'
          }
          justifyContent={'center'}
          alignItems='center'
          color='brand.700'
          onClick={backHandler}
        >
          <motion.div
            animate={{
              transform: [
                'translateX(0px)',
                'translateX(-2px)',
                'translateX(0px)',
              ],
            }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              repeat: Infinity,
            }}
          >
            <MdOutlineKeyboardArrowLeft size={36} />
          </motion.div>
        </chakra.button>
        <Box flex='1' h='2' bg='brand.400' rounded='md'>
          <Box w={barPorcent} bg='brand.900' h='full' rounded={'md'}></Box>
        </Box>
        <chakra.button
          w={[10, 10, 12]}
          h={[10, 10, 12]}
          backgroundColor={'brand.100'}
          boxShadow={
            '0.3px 0.5px 0.7px hsl(175deg 34% 56% / 0.34), 0.4px 0.8px 1px -1.2px hsl(175deg 34% 56% / 0.34), 1px 2px 2.5px -2.5px hsl(175deg 34% 56% / 0.34)'
          }
          rounded={'full'}
          display='flex'
          justifyContent={'center'}
          alignItems='center'
          onClick={nextHandler}
          color='brand.700'
        >
          <motion.div
            animate={{
              transform: [
                'translateX(0px)',
                'translateX(2px)',
                'translateX(0px)',
              ],
            }}
            transition={{
              duration: 4,
              ease: 'easeOut',
              repeat: Infinity,
            }}
          >
            <MdOutlineKeyboardArrowRight size={36} />
          </motion.div>
        </chakra.button>
      </Flex>
    </Box>
  )
}

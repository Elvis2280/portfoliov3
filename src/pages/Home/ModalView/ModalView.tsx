import {
  shouldForwardProp,
  chakra,
  Image,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  pictureLink: string
  title: string
  description: string
  techStack?: React.ReactElement[]
}
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})
export default function ModalView({
  pictureLink,
  title,
  description,
  techStack,
}: Props): ReactElement {
  return (
    <Link href={`/projects/${title.replaceAll(' ', '-')}`}>
      <Flex
        flexDir={['column', 'column', 'row']}
        alignItems={['center', 'center', 'center']}
        justifyContent='center'
        gap='8'
        width={'100%'}
      >
        <ChakraBox width={'max-content'} position='relative'>
          <motion.div
            animate={{
              opacity: [0, 1],
              transform: ['translateX(-100vw)', 'translateX(0vw)'],
              transition: {
                duration: 1,
              },
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
          >
            <Image
              boxSize={['250px', '250px', '300px']}
              objectFit='cover'
              rounded={'full'}
              src={pictureLink}
              alt='anubis website picture'
            />
            <ChakraBox
              w={'100%'}
              h='100%'
              rounded={'full'}
              border='4px solid'
              borderColor='brand.700'
              position='absolute'
              top='50%'
              left={'50%'}
              transform='translate(-50%, -50%)'
            ></ChakraBox>
            <ChakraBox
              animate={{
                opacity: ['0%', '100%', '0%'],
              }}
              // @ts-expect-error no problem in operation, although type error appears.
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
              w={'105%'}
              h='105%'
              rounded={'full'}
              border='3px solid'
              borderColor='brand.500'
              position='absolute'
              top='50%'
              left={'50%'}
              transform='translate(-50%, -50%)'
            ></ChakraBox>
            <ChakraBox
              animate={{
                opacity: ['0%', '100%', '0%'],
              }}
              // @ts-expect-error no problem in operation, although type error appears.
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: 'linear',
              }}
              w={'110%'}
              h='110%'
              rounded={'full'}
              border='2px solid'
              borderColor='brand.300'
              position='absolute'
              top='50%'
              left={'50%'}
              transform='translate(-50%, -50%)'
            ></ChakraBox>
            <ChakraBox
              animate={{
                opacity: ['0%', '100%', '0%'],
              }}
              // @ts-expect-error no problem in operation, although type error appears.
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
              }}
              w={'115%'}
              h='115%'
              rounded={'full'}
              border='1px solid'
              borderColor='brand.100'
              position='absolute'
              top='50%'
              left={'50%'}
              transform='translate(-50%, -50%)'
            ></ChakraBox>
          </motion.div>
        </ChakraBox>
        <Flex
          width={'100%'}
          maxW='400px'
          flexDir={'column'}
          rowGap={[2, 2, 4]}
          alignItems={'center'}
        >
          <Box width={'100%'}>
            <motion.div
              animate={{
                opacity: [0, 1],
                transform: ['translateX(100vw)', 'translateX(0vw)'],
                transition: {
                  duration: 1,
                  type: 'spring',
                },
              }}
              transition={{
                duration: 0.5,
                ease: 'linear',
              }}
            >
              <chakra.h3
                fontWeight={'bold'}
                color='brand.900'
                fontSize={['xl', '2xl', '3xl']}
                textAlign={['center', 'center', 'start']}
              >
                {title}
              </chakra.h3>

              <Text
                mt={['1', '1', '2']}
                fontSize={['initial', 'lg', 'lg']}
                textAlign={'initial'}
              >
                {description}
              </Text>
              <Flex
                mt={['2', '2', '6']}
                columnGap={'2'}
                rowGap='1'
                flexFlow='wrap'
              >
                {techStack}
              </Flex>
            </motion.div>
          </Box>
        </Flex>
      </Flex>
    </Link>
  )
}

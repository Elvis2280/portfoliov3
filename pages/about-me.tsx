import { Box, Image, chakra, Text, Container, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'

import MainLayout from '@/layouts/MainLayout'

function AboutMe(): ReactElement {
  return (
    <Container maxW={'container.xl'} overflowX={'hidden'} py={[4, 8, 12]}>
      <Flex
        flexDir={['column', 'column', 'row']}
        alignItems='center'
        rowGap='8'
      >
        <Flex w='full' flexDir={['column', 'column', 'column']} rowGap='4'>
          <chakra.h2
            as={motion.h2}
            initial={{
              opacity: 0,
              translateX: '-10vw',
            }}
            whileInView={{
              opacity: 1,
              translateX: '0vw',
              transition: {
                duration: 1,
                delay: 0.2,
              },
            }}
            mb={[4, 8]}
            color='brand.900'
            fontSize={['3xl', '3xl', '4xl']}
            fontWeight='bold'
          >
            Let me tell you a little bit about me
          </chakra.h2>

          <Flex
            rowGap={'6'}
            flexDir={['column', 'column', 'column', 'row-reverse']}
            w='full'
            position={'relative'}
          >
            <Container>
              <Image
                as={motion.img}
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.2,
                  },
                }}
                mx='auto'
                src='/about-me/Aboutme_picture.png'
                alt={'Elvis picture'}
              />
            </Container>
            <Box alignSelf={['', '', '', 'flex-end']}>
              <Box
                as={motion.div}
                initial={{
                  opacity: 0,
                  translateX: '-100px',
                }}
                whileInView={{
                  opacity: 1,
                  translateX: '0px',
                  transition: {
                    duration: 1,
                    delay: 0.2,
                  },
                }}
                h='10'
                w={['44', '56']}
                bgColor='brand.400'
              ></Box>
              <Box
                as={motion.div}
                initial={{
                  opacity: 0,
                  translateX: '-100px',
                }}
                whileInView={{
                  opacity: 1,
                  translateX: '0px',
                  transition: {
                    duration: 1,
                    delay: 0.3,
                  },
                }}
                h='10'
                w={['32', '44']}
                bgColor='brand.500'
              ></Box>
              <Box
                as={motion.div}
                initial={{
                  opacity: 0,
                  translateX: '-50px',
                }}
                whileInView={{
                  opacity: 1,
                  translateX: '0px',
                  transition: {
                    duration: 1,
                    delay: 0.4,
                  },
                }}
                h='10'
                w={['20', '32']}
                bgColor='brand.600'
              ></Box>
            </Box>
          </Flex>
        </Flex>

        <Container>
          <Flex flexDir={'column'} rowGap='6'>
            <Box
              as={motion.div}
              initial={{
                opacity: 0,
                translateX: '20vw',
              }}
              whileInView={{
                opacity: 1,
                translateX: '0vw',
                transition: {
                  duration: 1,
                  delay: 0.2,
                },
              }}
              rounded={'base'}
              bgColor={'brand.100'}
              p='2'
            >
              <Text
                as={motion.div}
                initial={{
                  opacity: 0,
                  translateX: '20vw',
                }}
                whileInView={{
                  opacity: 1,
                  translateX: '0vw',
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                  },
                }}
                lineHeight={'170%'}
                letterSpacing='wide'
                color='brand.900'
                fontSize={['initial', 'initial', 'lg']}
              >
                I am currently situated in Japan, bringing with me valuable
                experience from both local and international companies. My
                professional background includes roles as a Frontend and
                Fullstack Developer in various organizations.
              </Text>
            </Box>

            <Box
              color='brand.900'
              as={motion.div}
              initial={{
                opacity: 0,
                translateX: '20vw',
              }}
              whileInView={{
                opacity: 1,
                translateX: '0vw',
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              rounded={'base'}
              bgColor={'brand.100'}
              p='2'
            >
              <Text
                fontSize={['initial', 'initial', 'lg']}
                lineHeight={'170%'}
                letterSpacing='wide'
              >
                Since I was a child, I have always played and explored
                technology. When I tried programming for the first time, I fell
                in love and knew that this is what I want to pursue in my
                professional life. I am always looking for new challenges and
                opportunities to learn. That&apos;s why I consistently create
                new projects to gain knowledge, not only in coding but also in
                architecture, design, business logic, etc. In every project, I
                try to learn something new, whether it&apos;s a new language,
                framework, library, or something else.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Container>
  )
}

AboutMe.getLayout = (page: ReactElement): ReactElement => {
  return <MainLayout>{page}</MainLayout>
}

export default AboutMe

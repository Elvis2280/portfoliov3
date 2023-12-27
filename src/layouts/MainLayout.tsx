import React from 'react'
import {
  chakra,
  Container,
  Text,
  Box,
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ReactElement, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaSkull,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import Link from 'next/link'

import MobileMenu from '@/components/MobileMenu/MobileMenu'
import ContactForm from '@/components/ContactForm/ContactForm'
import CircularDeco from '@/components/CircularDeco/CircularDeco'
import SpotifyCard from '@/components/SpotifyCard/SpotifyCard'

type Props = {
  children?: React.ReactNode
}

const CustomLink = chakra(Link)

const MainLayout = ({ children }: Props): ReactElement => {
  const ref = useRef(null)
  const contactCard = useRef<null | HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <Flex position={'relative'} flexDir={'column'} minH='100vh'>
      <chakra.header
        zIndex={15}
        bg={'brand.50'}
        position={'sticky'}
        top='0'
        py={'2'}
      >
        <Container
          display={'flex'}
          alignItems='center'
          justifyContent={'space-between'}
          flexDir={['row', 'row-reverse']}
          maxW='container.lg'
          columnGap={'4'}
        >
          <chakra.nav maxW={'600px'} flex='1' display={['none', 'block']}>
            <List py='4' display={'flex'} justifyContent='space-between'>
              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                <Link href='/'>Home</Link>
              </ListItem>
              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                <Link href='/projects'>Projects</Link>
              </ListItem>

              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                <Link href='/about-me'>About Me</Link>
              </ListItem>
              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                {' '}
                <chakra.button
                  fontSize={'lg'}
                  fontWeight='bold'
                  color={'brand.900'}
                  onClick={() =>
                    contactCard?.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                    })
                  }
                >
                  Contact Me
                </chakra.button>
              </ListItem>
            </List>
          </chakra.nav>
          <MobileMenu>
            <>
              <CustomLink href={'/'}>Home</CustomLink>
              <CustomLink href={'/projects'}>Projects</CustomLink>

              <CustomLink href={'/about-me'}>About Me</CustomLink>
              <chakra.button
                textAlign={'left'}
                fontWeight='medium'
                onClick={() =>
                  contactCard?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                  })
                }
              >
                Contact me
              </chakra.button>
            </>
          </MobileMenu>

          <CustomLink href='/'>
            <Text
              display={['block', 'none', 'block']}
              as={motion.p}
              animate={{
                opacity: [0, 1],
              }}
              transition='linear 1.5s'
              fontSize={['lg', 'xl', '2xl']}
              textColor={'brand.900'}
              fontWeight={'black'}
              textAlign={'center'}
            >
              {' '}
              ELVISDEV
            </Text>
          </CustomLink>
        </Container>
      </chakra.header>
      <main>{children}</main>
      <Box overflow={'hidden'} position={'relative'} mt='4'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#134B4E'
            fillOpacity='1'
            d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,96C672,64,768,64,864,90.7C960,117,1056,171,1152,165.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </Box>
      <chakra.footer
        ref={ref}
        overflow={'hidden'}
        mt='auto'
        position={'relative'}
        bg='brand.900'
      >
        <Container ref={contactCard} maxW='container.lg' mt='28' mb='6'>
          <Box position={'relative'}>
            <Box position={'absolute'} bottom='80%' left={'-10%'}>
              <CircularDeco size='40' rotate={0.1} />
            </Box>
            <Box position={'absolute'} bottom='-10%' right={'10%'}>
              <CircularDeco delay={5} size='40' rotate={90} />
            </Box>
            <Box
              display={['none', 'none', 'block']}
              position={'absolute'}
              bottom='90%'
              right={'10%'}
            >
              <CircularDeco delay={10} size='40' rotate={0.1} />
            </Box>
            <Box
              as={motion.div}
              initial={{ translateY: '100vh', opacity: 0 }}
              animate={'card'}
              variants={{
                card: {
                  translateY: inView ? 0 : '100vh',
                  opacity: inView ? 1 : 0,
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: 'easeIn',
                  },
                },
              }}
              position={'relative'}
            >
              <ContactForm />
            </Box>
            <Box
              mt='10'
              as={motion.div}
              initial={{ translateY: '100vh', opacity: 0 }}
              animate={'card'}
              variants={{
                card: {
                  translateY: inView ? 0 : '100vh',
                  opacity: inView ? 1 : 0,
                  transition: {
                    delay: 0.3,
                    duration: 2,
                    ease: 'easeIn',
                  },
                },
              }}
            >
              <SpotifyCard />
            </Box>

            <Box
              as={motion.div}
              initial={{ translateY: '100vh', opacity: 0 }}
              animate={'card'}
              variants={{
                card: {
                  translateY: inView ? 0 : '100vh',
                  opacity: inView ? 1 : 0,
                  transition: {
                    delay: 0.6,
                    duration: 2,
                    ease: 'easeIn',
                  },
                },
              }}
              position={'relative'}
              mt='10'
            >
              <chakra.h3
                fontSize={['2xl', '2xl', '3xl']}
                fontWeight='bold'
                color={'brand.50'}
                textAlign='center'
              >
                Find{' '}
                <span
                  style={{
                    color: '#2ED3D2',
                  }}
                >
                  Me
                </span>
              </chakra.h3>
              <List
                display={'flex'}
                justifyContent='center'
                columnGap={3}
                transition='all 1s'
              >
                <ListItem
                  transition='all 0.5s'
                  color={'brand.400'}
                  _hover={{
                    color: 'brand.200',
                  }}
                >
                  <Link href={'https://github.com/Elvis2280'} target='_blank'>
                    <FaGithub size={30} />
                  </Link>
                </ListItem>
                <ListItem
                  transition='all 0.5s'
                  color={'brand.400'}
                  _hover={{
                    color: 'brand.200',
                  }}
                >
                  <Link
                    href={'https://www.linkedin.com/in/elvisdev2280/'}
                    target='_blank'
                  >
                    <FaLinkedin size={30} />
                  </Link>
                </ListItem>
                <ListItem
                  transition='all 0.5s'
                  color={'brand.400'}
                  _hover={{
                    color: 'brand.200',
                  }}
                >
                  <Link
                    href={
                      'https://instagram.com/elvisdev.pa?igshid=Zjc2ZTc4Nzk='
                    }
                    target='_blank'
                  >
                    <FaInstagramSquare size={30} />
                  </Link>
                </ListItem>
                <ListItem
                  transition='all 0.5s'
                  color={'brand.400'}
                  _hover={{
                    color: 'brand.200',
                  }}
                >
                  <Link href={'mailto: elvisdev2280@gmail.com'} target='_blank'>
                    <MdMail size={30} />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box
            as={motion.div}
            initial={{ translateY: '100vh', opacity: 0 }}
            animate={'card'}
            variants={{
              card: {
                translateY: inView ? 0 : '100vh',
                opacity: inView ? 1 : 0,
                transition: {
                  delay: 0.8,
                  duration: 2,
                  ease: 'easeIn',
                },
              },
            }}
            position={'relative'}
            mt='10'
          >
            <Text
              display={'flex'}
              columnGap='2'
              color={'brand.600'}
              textAlign={'center'}
              alignItems='center'
              justifyContent={'center'}
              flexFlow='wrap'
            >
              Developed by Elvis Miranda{' '}
              <span>
                <FaSkull />
              </span>{' '}
              2022
            </Text>
          </Box>
        </Container>
      </chakra.footer>
    </Flex>
  )
}

export default MainLayout

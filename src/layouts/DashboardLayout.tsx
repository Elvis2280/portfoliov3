import {
  Flex,
  chakra,
  Container,
  Box,
  List,
  ListItem,
  Text,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaSkull,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'

import CircularDeco from '@/components/CircularDeco/CircularDeco'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import SpotifyCard from '@/components/SpotifyCard/SpotifyCard'
import LoadingPage from '@/components/LoadingPage/LoadingPage'
import { useUser } from '@auth0/nextjs-auth0/client'

type Props = {
  children: ReactElement
}
const CustomLink = chakra(Link)

function DashboardLayout({ children }: Props): ReactElement {
  const { user, isLoading, error } = useUser()
  const router = useRouter()
  if (isLoading) {
    return <LoadingPage />
  }
  if (error || !user) {
    router.push('/admin/dashboard')
  }

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
          maxW='container.lg'
          flexDirection={['row', 'row', 'row-reverse']}
          columnGap='8'
        >
          <chakra.nav
            alignItems={'center'}
            flex='1'
            display={['none', 'block']}
          >
            <List
              py='4'
              display={'flex'}
              alignItems='center'
              justifyContent={'space-around'}
            >
              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                <Link href='/'>Home</Link>
              </ListItem>
              <ListItem fontSize={'lg'} fontWeight='bold' color={'brand.900'}>
                <Link href='/admin/dashboard/panel/projects'>
                  Create Project
                </Link>
              </ListItem>

              <Button variant='outline' colorScheme={'teal'}>
                <Link href={'/api/auth/logout'}>Log out</Link>
              </Button>
            </List>
          </chakra.nav>
          <MobileMenu>
            <>
              <CustomLink href={'/'}>Home</CustomLink>
              <CustomLink href={'/admin/dashboard/panel/projects'}>
                Proyectos
              </CustomLink>
              <CustomLink href={'/admin/dashboard/panel/blogs'}>
                Blogs
              </CustomLink>
              <Button variant='outline'>
                <Link href='/api/auth/logout'>Log out</Link>
              </Button>
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
      <Box mt={'auto'}>
        <Box width={'100%'} position={'relative'} mt='4'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#134B4E'
              fillOpacity='1'
              d='M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,96C672,64,768,64,864,90.7C960,117,1056,171,1152,165.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            ></path>
          </svg>
        </Box>
        <chakra.footer overflow={'hidden'} position={'relative'} bg='brand.900'>
          <Container mt='28' mb='6'>
            <Box position={'relative'}>
              <Box position={'absolute'} bottom='80%' left={'-10%'}>
                <CircularDeco size='40' rotate={0.1} />
              </Box>
              <Box position={'absolute'} bottom='-10%' right={'10%'}>
                <CircularDeco size='40' rotate={0.1} />
              </Box>
              <Box
                display={['none', 'none', 'block']}
                position={'absolute'}
                bottom='90%'
                right={'10%'}
              >
                <CircularDeco size='40' rotate={0.1} />
              </Box>

              <Box mt='10' position={'relative'} zIndex='1'>
                <SpotifyCard />
              </Box>

              <Box position={'relative'} mt='10'>
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
                    <FaGithub size={30} />
                  </ListItem>
                  <ListItem
                    transition='all 0.5s'
                    color={'brand.400'}
                    _hover={{
                      color: 'brand.200',
                    }}
                  >
                    <FaLinkedin size={30} />
                  </ListItem>
                  <ListItem
                    transition='all 0.5s'
                    color={'brand.400'}
                    _hover={{
                      color: 'brand.200',
                    }}
                  >
                    <FaInstagramSquare size={30} />
                  </ListItem>
                  <ListItem
                    transition='all 0.5s'
                    color={'brand.400'}
                    _hover={{
                      color: 'brand.200',
                    }}
                  >
                    <MdMail size={30} />
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box position={'relative'} mt='10'>
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
      </Box>
    </Flex>
  )
}

export default DashboardLayout

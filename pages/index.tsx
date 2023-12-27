import {
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import Head from 'next/head'

import HomeProjects from '@/pages/Home/HomeProjects/HomeProjects'
import IntroPic from '@/pages/Home/IntroPic/IntroPic'
import ListTech from '@/pages/Home/listTech/ListTech'
import ProjectModal from '@/pages/Home/ProjectModal/ProjectModal'
import Decoration from '@/pages/Home/LastBlogs/Decoration'
import MainLayout from '@/layouts/MainLayout'
import LastBoxContainer from '@/pages/Home/LastBlogs/LastBoxContainer'
import backend from '@/utils/axiosDefault'
import { projectDataResponse } from '@/types/response/projectDataResponse'

function Index(props: projectDataResponse): ReactElement {
  return (
    <>
      <Head>
        <title>Elvis Miranda portfolio</title>
        <meta name='Home page' content='Elvis Miranda portfolio' />
        <meta
          name='keywords'
          content='developer, portfolio, programmer, fullstack, frontend'
        />
      </Head>
      <Box pt='3'>
        <Container
          pb={['0', '0', '20']}
          maxW='container.lg'
          display={'flex'}
          flexDir={['column', 'column', 'row-reverse']}
          alignItems={['center', 'center', 'center']}
          justifyContent={['initial', 'initial', 'space-around']}
          columnGap='10'
        >
          <Box maxW={'container.lg'} position={'relative'} mt='4'>
            <IntroPic />
          </Box>

          <Box flex={1} mt='10'>
            <Box
              sx={{
                span: {
                  minH: '50px',
                },
              }}
            >
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString(
                      '<span class="animateintro"><span style="color: #134B4E;">Hi, I’m </span><span style="color: #0E8F93;">Elvis Miranda</span></span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span class="animateintro"><span style="color: #134B4E;">A Fullstack</span> <span style="color: #0E8F93;">Developer</span><span/>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span class="animateintro"><span style="color: #134B4E; ">Hi, I’m </span><span style="color: #0E8F93;">Elvis Miranda</span> </span>'
                    )
                    .pauseFor(2500)
                    .start()
                }}
              />
            </Box>
            <chakra.h2
              mt={[0, 0, 2]}
              fontSize={['initial', 'xl', '2xl']}
              fontWeight={'light'}
              color='brand.700'
            >
              Fullstack Developer
            </chakra.h2>
            <Text
              maxW={'400px'}
              mt={[1]}
              fontSize={['sm', 'lg', 'xl']}
              color={'brand.900'}
            >
              Experience working in tech companies & freelance projects,
              developing full-stack apps and web design.
            </Text>
            <Box mt={['8']}>
              <chakra.a
                href='/home/Elvis-Miranda-CV-English.pdf'
                target={'_blank'}
                // size={['md', 'md', 'lg']}
                // variant={'outline'}
                // colorScheme="teal"
                fontSize={['md', 'md', 'lg']}
                border='1px solid'
                borderColor={'brand.700'}
                color='brand.700'
                rounded={'base'}
                px='4'
                py='2'
                fontWeight={'semibold'}
                _hover={{
                  bg: 'brand.100',
                }}
                transition='all 400ms'
              >
                Download CV
              </chakra.a>
            </Box>
          </Box>
        </Container>

        <Box mt='10' bg={'brand.800'} position={'relative'} overflowX='hidden'>
          <ListTech />
        </Box>

        <Container
          maxW='container.lg'
          position='relative'
          mt={'8'}
          overflowX='hidden'
        >
          <chakra.h2
            as={motion.h2}
            initial={{
              translateX: '-10vw',
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.2,
              },
            }}
            fontSize={['2xl', '2xl', '3xl']}
            fontWeight={'bold'}
            color={'brand.900'}
          >
            MY LAST <chakra.span color={'brand.600'}>PROJECTS</chakra.span>
          </chakra.h2>
          <Box position={'absolute'} right='2' top='5'>
            <Image
              as={motion.img}
              whileInView={{
                translateY: [5, -5, 5],
                transition: {
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                },
              }}
              w={[14, 16, 20]}
              src='/home/espacio_dino.svg'
              alt='Space Dino Image'
            />
          </Box>

          <Flex mt='6' flexDir={'column'} rowGap='6'>
            <ProjectModal
              listProyect={props?.data.map(project => {
                return <HomeProjects key={project.id} project={project} />
              })}
            />
          </Flex>
        </Container>

        <Container
          maxW='container.lg'
          position='relative'
          mt={'8'}
          overflowX='hidden'
        >
          <Image
            h={[14, 16, 20]}
            w={[14, 16, 20]}
            src='/home/dino-writer.svg'
            alt='dino space'
            as={motion.img}
            whileInView={{
              translateY: [5, -5, 5],
              transition: {
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              },
            }}
          />
          <chakra.h2
            fontWeight={'bold'}
            fontSize={['2xl', '2xl', '3xl']}
            color={'brand.900'}
            mb='4'
            as={motion.h2}
            initial={{
              translateX: '-10vw',
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.2,
              },
            }}
          >
            My <chakra.span color={'brand.600'}>Experience</chakra.span>
          </chakra.h2>

          <Grid templateColumns='repeat(6, 1fr)'>
            <GridItem
              rowStart={1}
              rowEnd={2}
              colStart={1}
              colEnd={4}
              zIndex={-1}
            >
              <Decoration />
            </GridItem>
            <GridItem
              rowStart={1}
              rowEnd={2}
              colStart={[2, 3, 3]}
              colEnd={[-1, -1]}
            >
              <LastBoxContainer />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export async function getStaticProps(): Promise<getStaticPropsReturnType> {
  // Call an external API endpoint to get posts
  const getProjects: projectDataResponse = await backend.get(
    'projects/last_projects',
    {
      params: {
        // eslint-disable-next-line camelcase
        user_id: 4,
      },
    }
  )

  return {
    props: {
      data: getProjects.data,
    },
  }
}

Index.getLayout = (page: ReactElement): ReactElement => {
  return <MainLayout>{page}</MainLayout>
}

export default Index

type getStaticPropsReturnType = {
  props: projectDataResponse
}

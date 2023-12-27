import {
  Container,
  chakra,
  Flex,
  Text,
  Box,
  Image,
  Grid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'

import ProjectCard from '@/components/ProjectCards/ProjectCard'
import MainLayout from '@/layouts/MainLayout'
import backend from '@/utils/axiosDefault'
import { projectDataResponse } from '@/types/response/projectDataResponse'

function Index(prop: projectDataResponse): ReactElement {
  return (
    <Box pt='8' overflow={'hidden'}>
      <Container maxW={'container.lg'}>
        <Flex mb='14' flexDir={['column', 'column', 'row', 'row']} rowGap='8'>
          <Box mx={['auto']} maxW={['', '400px', '45q0px']}>
            <chakra.h2
              as={motion.h2}
              initial={{
                translateX: '-50px',
                opacity: 0,
              }}
              whileInView={{
                translateX: '0px',
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                },
              }}
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight='bold'
              color='brand.900'
            >
              Short tour in my projects
            </chakra.h2>
            <Text
              as={motion.p}
              initial={{
                translateX: '-50px',
                opacity: 0,
              }}
              whileInView={{
                translateX: '0px',
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }}
              mt='2'
              fontSize={['initial', 'md', 'lg']}
              color='brand.900'
            >
              Here are some of my projects, but I’m sure when you’re checking
              this I may be working on others.
            </Text>
          </Box>

          <Box mx='auto' maxW={'max-content'} position={'relative'}>
            <Image src='/projects/proyectos.png' alt='Proyect picture' />
            <Box
              as={motion.div}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              position={'absolute'}
              top='0'
              right={'0'}
              w={['12', '16']}
              h={['12', '16']}
              bgGradient='linear(to-r, brand.100, brand.500)'
              rounded='full'
            ></Box>
            <Box
              as={motion.div}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              position={'absolute'}
              bottom='0'
              right={'4'}
              w={['14', '28', '20', '28']}
              h={['14', '28', '20', '28']}
              bgGradient='linear(to-r, brand.300, brand.700)'
              rounded='full'
            ></Box>
            <Box
              as={motion.div}
              initial={{
                scale: 0.8,
                opacity: 0,
                rotate: '40deg',
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.4,
                },
              }}
              display={'block'}
              position={'absolute'}
              bottom={['40%', '50%']}
              right={'0'}
              w={['8', '16', '12']}
              h={['8', '16', '12']}
              bgGradient='linear(to-r, brand.300, brand.600)'
              clipPath={'polygon(50% 0%, 0% 100%, 100% 100%)'}
              transform={'transform(40%, 0)'}
            ></Box>
            <Box
              as={motion.div}
              initial={{
                scale: 0.8,
                opacity: 0,
                rotate: '70deg',
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              display={'block'}
              position={'absolute'}
              top='0'
              right={['50px', '100px']}
              w={['4', '8']}
              h={['4', '8']}
              bgGradient='linear(to-r, brand.300, brand.600)'
              clipPath={'polygon(50% 0%, 0% 100%, 100% 100%)'}
              transform={'transform(40%, 0) '}
            ></Box>
          </Box>
        </Flex>
        <Flex justifyContent={'center'}>
          {prop?.data ? (
            <Grid
              templateColumns={[
                'repeat(1, minmax(250px, 350px))',
                'repeat(2, minmax(0, 1fr))',
                'repeat(2, minmax(0, 1fr))',
                'repeat(3, minmax(0, 1fr))',
              ]}
              autoRows={['minmax(min-content, max-content)']}
              gap='6'
              py='8'
            >
              {prop?.data.map(project => {
                return (
                  <ProjectCard
                    key={project.id}
                    isEdit={false}
                    project={project}
                    tags={project.tags}
                  />
                )
              })}
            </Grid>
          ) : (
            <Text>Ocurrio un problema al cargar los proyectos</Text>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export async function getStaticProps(): Promise<getStaticPropsReturnType> {
  // Call an external API endpoint to get posts
  const { data }: requestProjectsSchema = await backend.get('projects', {
    params: {
      owner: process.env.OWNER_EMAIL,
    },
  })

  return {
    props: { data: data.data.reverse() },
  }
}

Index.getLayout = (page: ReactElement): ReactElement => {
  return <MainLayout>{page}</MainLayout>
}

export default Index

type getStaticPropsReturnType = {
  props: projectDataResponse
}

type requestProjectsSchema = {
  data: projectDataResponse
}

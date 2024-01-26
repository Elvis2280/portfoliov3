import React, { ReactElement } from 'react'
import { Box, chakra, Container, Image, Text } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'

import MainLayout from '@/layouts/MainLayout'
import backend from '@/utils/axiosDefault'
import { projectDataResponse } from '@/types/response/projectDataResponse'

function Title({
  title,
  description,
  content,
  imagePortada,
  projectLink,
}: Props): ReactElement {
  return (
    <Box pt='4'>
      <Container maxW={'container.lg'}>
        <chakra.h1
          as={motion.h1}
          initial={{
            translateX: '-20px',
            opacity: 0,
          }}
          whileInView={{
            translateX: '0px',
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          }}
          fontSize={['2xl', '3xl', '3xl']}
          fontWeight='bold'
          color='brand.900'
        >
          {title}
        </chakra.h1>
        <Text
          as={motion.p}
          initial={{
            translateX: '-20px',
            opacity: 0,
          }}
          whileInView={{
            translateX: '0px',
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.4,
            },
          }}
          my='2'
          color='brand.900'
          fontSize={['initial', 'md', 'lg']}
        >
          {description}
        </Text>

        <chakra.a
          fontSize={['initial', 'md', 'lg']}
          color='brand.700'
          _hover={{ color: 'brand.900' }}
          transition='all 500ms'
          href={projectLink}
          target='_blank'
        >
          Project Link
        </chakra.a>
        <Box display={'flex'} justifyContent={'center'} mt='6'>
          <Image src={imagePortada} alt={title + ' image'} />
        </Box>

        <Prose>{parse(content)}</Prose>
      </Container>
    </Box>
  )
}

export async function getStaticPaths(): Promise<getStaticPathsType> {
  const getProjects: projectdataSchema = await backend.get('projects', {
    params: {
      owner: process.env.OWNER_EMAIL,
    },
  })

  const pathList = getProjects.data.data.map(project => {
    return { params: { title: project.title } }
  })
  return {
    paths: pathList,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: {
  params: { title: string }
}): Promise<{ props: unknown }> {
  const getProjectData = await backend.get('/projects/by_title', {
    params: {
      title: context.params.title,
    },
  })

  return {
    // Passed to the page component as props
    props: {
      imagePortada: getProjectData.data.img_portada,
      projectLink: getProjectData.data.project_link,
      ...getProjectData.data,
    },
  }
}

Title.getLayout = (page: ReactElement): ReactElement => {
  return <MainLayout>{page}</MainLayout>
}

export default Title

type Props = {
  title: string
  description: string
  content: string
  imagePortada: string
  projectLink: string
}

type projectdataSchema = {
  data: projectDataResponse
}

type getStaticPathsType = {
  paths: { params: { title: string } }[]
  fallback: boolean
}

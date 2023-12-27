import {
  Badge,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  chakra,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { ReactElement } from 'react'

import { projectType, tagType } from '../../types/projectType'

interface Props {
  isEdit?: boolean
  project: projectType
  tags: tagType[]
}

export default function ProjectCard({
  isEdit = false,
  project,
}: Props): ReactElement {
  return (
    <Link
      href={
        isEdit
          ? `/admin/dashboard/panel/projects/${project.title}`
          : `/projects/${project.title}`
      }
    >
      <Grid
        h={'full'}
        templateRows={'repeat(2, minmax(min-content, max-content))'}
        templateColumns={'repeat(1, 100%)'}
        rounded='base'
        boxShadow={
          '0.3px 0.5px 0.7px hsl(185deg 26% 60% / 0.36),0.8px 1.6px 2px -0.8px hsl(185deg 26% 60% / 0.36),2.1px 4.1px 5.2px -1.7px hsl(185deg 26% 60% / 0.36),5px 10px 12.6px -2.5px hsl(185deg 26% 60% / 0.36)'
        }
        p='4'
        as={motion.div}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
      >
        <GridItem
          overflow={'hidden'}
          position={'relative'}
          w='full'
          h='full'
          maxH={'200px'}
          gridRow={'1/2'}
        >
          <Image
            height={'100%'}
            width='100%'
            objectFit={'contain'}
            src={project.img_portada}
            alt={project.title + ' cover image'}
          />
        </GridItem>

        <GridItem pt='2' w='full' h='full' gridRow={'2/3'}>
          <chakra.h4 fontSize={'xl'} fontWeight='bold' color='brand.900'>
            {project.title}
          </chakra.h4>
          <Text>{project.description}</Text>
          <Flex mt='2' gap={'2'} wrap={'wrap'}>
            {project.tags.map(tag => {
              return (
                <Badge key={tag.id} colorScheme='green'>
                  {tag.name}
                </Badge>
              )
            })}
          </Flex>
        </GridItem>
      </Grid>
    </Link>
  )
}

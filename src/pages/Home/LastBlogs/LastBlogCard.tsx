import { Box, chakra, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

type Props = {
  title: string
  description: string
}

export default function LastBlogCard({
  title,
  description,
}: Props): ReactElement {
  return (
    <Box
      zIndex={'10'}
      bg='brand.50'
      p={[3, 4, 6]}
      rounded='base'
      boxShadow={
        '0.3px 0.5px 0.7px hsl(185deg 26% 60% / 0.36),0.8px 1.6px 2px -0.8px hsl(185deg 26% 60% / 0.36),2.1px 4.1px 5.2px -1.7px hsl(185deg 26% 60% / 0.36),5px 10px 12.6px -2.5px hsl(185deg 26% 60% / 0.36)'
      }
      maxW={['', '450px', '550px']}
    >
      <chakra.h3
        fontSize={['lg', 'xl', '2xl']}
        fontWeight='bold'
        color='brand.900'
      >
        {title}
      </chakra.h3>
      <Text fontSize={['sm', 'initial', 'lg']}>{description}</Text>
    </Box>
  )
}

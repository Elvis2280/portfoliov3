import { Flex, Spinner } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

export default function LoadingPage(): ReactElement {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} h='100vh' w='100vw'>
      <Spinner
        size='xl'
        emptyColor='teal.200'
        colorScheme='teal'
        color='teal.700'
      />
    </Flex>
  )
}

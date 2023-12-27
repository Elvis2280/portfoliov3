import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  chakra,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'

import useTags from '@/hooks/useTags'

export default function TagPopover(): ReactElement {
  const { error, data, loading, form } = useTags()

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={'outline'} colorScheme='teal'>
          Añadir tag
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Ingrese el tag a crear</PopoverHeader>
        <PopoverBody>
          <form onSubmit={form.handleSubmit(form.onSubmit)}>
            <Flex flexDir={'column'}>
              <chakra.label>Nombre</chakra.label>
              <Input {...form.register('nombre', { required: true })} />
            </Flex>
            {error !== false && (
              <Text textAlign='center' fontSize={'sm'} color='red.500'>
                {error}
              </Text>
            )}
            {data?.sucess && error === false && (
              <Text fontSize={'sm'} textAlign='center'>
                {data.sucess}
              </Text>
            )}
            <Button
              mt='4'
              isLoading={loading}
              colorScheme={'teal'}
              variant='outline'
              type='submit'
            >
              Guardar tag
            </Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

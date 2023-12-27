import { Button, chakra, Flex, Input, Textarea } from '@chakra-ui/react'
import React, { LegacyRef, ReactElement } from 'react'
import { useForm } from 'react-hook-form'

import useMessage from '@/hooks/useMessage'
import { contactInputType } from '@/types/inputType'

type Props = {
  contactRef?: LegacyRef<HTMLFormElement> | null
}

export default function ContactForm({ contactRef }: Props): ReactElement {
  const { loading, sendMessage } = useMessage()
  const { register, handleSubmit } = useForm<contactInputType>()

  const onSubmit = (data: contactInputType): void => {
    sendMessage({
      name: data.nombre,
      email: data.email,
      message: data.message,
    })
  }
  return (
    <chakra.form
      bg='brand.700'
      p={'4'}
      border={'4px solid'}
      borderColor='brand.500'
      rounded={'lg'}
      maxW='container.sm'
      mx='auto'
      onSubmit={handleSubmit(onSubmit)}
      ref={contactRef}
    >
      <chakra.h3 color='brand.50' fontWeight={'bold'} fontSize='xl'>
        Contact Me
      </chakra.h3>
      <Flex columnGap={'8'} my='6'>
        <Input
          _placeholder={{ color: 'brand.50' }}
          px={'1'}
          color={'brand.50'}
          focusBorderColor='brand.500'
          flex={1}
          variant='flushed'
          placeholder='Name'
          borderColor={'brand.500'}
          borderBottom='2px'
          {...register('nombre')}
        />
        <Input
          _placeholder={{ color: 'brand.50' }}
          px={'1'}
          color={'brand.50'}
          focusBorderColor='brand.500'
          flex={1}
          variant='flushed'
          placeholder='Email'
          borderColor={'brand.500'}
          borderBottom='2px'
          {...register('email')}
        />
      </Flex>
      <Textarea
        _placeholder={{ color: 'brand.50' }}
        px={'1'}
        color={'brand.50'}
        focusBorderColor='brand.500'
        variant='flushed'
        placeholder='Message'
        borderColor={'brand.500'}
        borderBottom='2px'
        {...register('message')}
      />

      <Flex mt='8' justifyContent={'center'}>
        <Button
          onClick={() => {
            handleSubmit(onSubmit)()
          }}
          color={'brand.50'}
          borderColor='brand.500'
          variant={'outline'}
          _hover={{
            color: 'brand.500',
          }}
          isLoading={loading}
        >
          Send Message
        </Button>
      </Flex>
    </chakra.form>
  )
}

import {
  Container,
  Flex,
  chakra,
  Input,
  Textarea,
  Box,
  Button,
} from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'
import { MultiValue } from 'react-select'

import DashboardLayout from '@layouts/DashboardLayout'
import Editor from '@components/editor/Editor'
import TagPopover from '@/pages/Dashboard/addTagPopover/TagPopover'
import TagOptions from '@/pages/Dashboard/TagOptions/TagOptions'
import { createProjectInputType, tagOptionsType } from '@/types/inputType'
import useProject from '@/hooks/useProjects'
import { useUser } from '@auth0/nextjs-auth0/client'

function CrearProyecto(): ReactElement {
  const [richTextValue, setRichTextValue] = useState<string>('')
  const [options, setOptions] = useState<Array<number>>()
  const { sendProyect, loading } = useProject()
  const { user } = useUser()

  const { register, handleSubmit } = useForm<createProjectInputType>() // react hook form

  const handlerSetRichText = (text: string): void => {
    setRichTextValue(text)
  } // set content text

  const handlerSetOptions = (options: MultiValue<tagOptionsType>): void => {
    const listIdTag = options.map(tag => {
      return tag.value
    })
    setOptions(listIdTag) // set tags options
  }

  const submitValues: SubmitHandler<createProjectInputType> = data => {
    sendProyect({
      owner: user?.email || '',
      title: data.titulo,
      projectLink: data.url,
      description: data.descripcion,
      imagePortada: data.imagen,
      tags: options,
      content: richTextValue,
    })
  } // submit handler

  return (
    <Container maxW={'container.lg'}>
      <Button variant={'outline'} colorScheme='teal'>
        <Link href='/admin/dashboard/panel'>Back</Link>
      </Button>
      <chakra.form
        encType='multipart/form-data'
        onSubmit={handleSubmit(submitValues)}
        mt='6'
      >
        <Flex flexDir={'column'} rowGap='4'>
          <Flex flexDir={'column'}>
            <chakra.label mb='2'>Title</chakra.label>
            <Input focusBorderColor='brand.700' {...register('titulo')} />
          </Flex>
          <Flex flexDir={'column'}>
            <chakra.label mb='2'>Project URL</chakra.label>
            <Input focusBorderColor='brand.700' {...register('url')} />
          </Flex>
          <Flex flexDir={'column'}>
            <chakra.label mb='2'>Description</chakra.label>
            <Textarea
              focusBorderColor='brand.700'
              {...register('descripcion')}
              size={'sm'}
              resize={'none'}
            />
          </Flex>
          <Flex flexDir={'column'}>
            <chakra.label mb='2'>Project Image</chakra.label>

            <chakra.input
              p={'2'}
              border='1px solid'
              borderColor={'gray.200'}
              rounded='base'
              accept='image/*'
              type={'file'}
              {...register('imagen')}
            />
          </Flex>

          <Flex flexDir={'column'}>
            <chakra.label mb='2'>Content</chakra.label>
          </Flex>
        </Flex>
        <Box position={'relative'} pb={10}>
          <Editor value={richTextValue} handlerText={handlerSetRichText} />
        </Box>
      </chakra.form>
      <Flex columnGap={'2'} mt='4' w='50%'>
        <Box flex='1' position={'relative'} zIndex='5'>
          <TagOptions handlerOptions={handlerSetOptions} />
        </Box>
        <TagPopover />
      </Flex>
      <Box>
        <Button
          onClick={() => {
            handleSubmit(submitValues)()
          }}
          colorScheme={'teal'}
          variant='outline'
          mt='8'
          isLoading={loading}
        >
          Save this project
        </Button>
      </Box>
    </Container>
  )
}

CrearProyecto.getLayout = (page: ReactElement): ReactElement => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default CrearProyecto

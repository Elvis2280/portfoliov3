import { MdDelete } from 'react-icons/md'
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  chakra,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { MultiValue } from 'react-select'

import Editor from '@/components/editor/Editor'
import DashboardLayout from '@/layouts/DashboardLayout'
import TagOptions from '@/pages/Dashboard/TagOptions/TagOptions'
import TagPopover from '@/pages/Dashboard/addTagPopover/TagPopover'
import { createProjectInputType, tagOptionsType } from '@/types/inputType'
import backend from '@/utils/axiosDefault'
import useProject from '@/hooks/useProjects'
import { useUser } from '@auth0/nextjs-auth0/client'
import { projectDataResponse } from '@/types/response/projectDataResponse'

export default function EditProject({
  title,
  description,
  content,
  projectLink,
  tags,
  id,
}: Props): ReactElement {
  const [richTextValue, setRichTextValue] = useState<string>(content)
  const [options, setOptions] = useState<Array<number>>()
  const { sendProyect, loading } = useProject()
  const { user } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { deleteProject } = useProject()
  const router = useRouter()

  const { register, handleSubmit } = useForm<createProjectInputType>({
    defaultValues: {
      titulo: title,
      descripcion: description,
      imagen: undefined,
      url: projectLink,
    },
  }) // react hook form

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
    sendProyect(
      {
        owner: user?.email || '',
        title: data.titulo,
        projectLink: data.url,
        description: data.descripcion,
        imagePortada: data.imagen,
        tags: options,
        content: richTextValue,
      },
      true,
      id
    )
  } // submit handler

  const initialTags = tags.map(tag => {
    return { value: tag.id, label: tag.name }
  })

  return (
    <Container maxW={'container.lg'}>
      <Flex justifyContent={'space-between'} alignContent={'center'}>
        <Button variant={'outline'} colorScheme='teal'>
          <Link href='/admin/dashboard/panel'>Back</Link>
        </Button>
        <Button onClick={onOpen} leftIcon={<MdDelete />} colorScheme='red'>
          Delete
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete this project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to delete this project?</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                onClick={() =>
                  deleteProject(id, () => {
                    onClose()
                    router.push('/admin/dashboard/panel')
                  })
                }
                colorScheme='red'
                variant='ghost'
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
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
      <Flex columnGap={'2'} mt='4'>
        <Box flex='1' position={'relative'} zIndex='5' maxW={'2/4'}>
          <TagOptions
            initialOptions={initialTags}
            handlerOptions={handlerSetOptions}
          />
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

export async function getStaticPaths(): Promise<getStaticPathsType> {
  const getProjects: projectdataSchema = await backend.get('projects', {
    params: {
      owner: process.env.OWNER_EMAIL,
    },
  })

  const pathList = getProjects.data.data.map(project => {
    return { params: { title: project.title.replaceAll(' ', '-') } }
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

EditProject.getLayout = (page: React.ReactElement): ReactElement => {
  return <DashboardLayout>{page}</DashboardLayout>
}

type projectdataSchema = {
  data: projectDataResponse
}

type getStaticPathsType = {
  paths: { params: { title: string } }[]
  fallback: boolean
}

type Props = {
  title: string
  description: string
  content: string
  imagePortada: string
  projectLink: string
  tags: { id: number; name: string }[]
  id: number
}

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'

import { createTagInputType } from '@/types/inputType'
import { UseTagType } from '@/types/hooksTypes'

import backend from '../utils/axiosDefault'

type optionData = {
  sucess?: string
  tags?: Array<{ id: number; name: string }>
}

export default function useTags(): UseTagType {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<optionData>()
  const [error, setError] = useState<boolean | string>(false)
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createTagInputType>({
    defaultValues: {
      nombre: '',
    },
  })

  const onSubmit: SubmitHandler<createTagInputType> = data =>
    addTag(data.nombre.toUpperCase())

  const addTag = async (nombre: string): Promise<void> => {
    try {
      setLoading(true)
      const createTag = await backend.post('tags/add_tag', {
        name: nombre,
      })

      setLoading(false)
      setError(false)
      setData(createTag.data)
      toast({
        title: 'Tag created!',
        description: 'The tag was created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      reset()
    } catch (error: AxiosError | unknown) {
      setLoading(false)
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message)
      }
      toast({
        title: 'something went wrong, try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const getAllTags = async (): Promise<void> => {
    try {
      setLoading(true)
      const getTags = await backend.get('tags')
      setLoading(false)
      setError(false)
      setData(getTags.data)
    } catch (error: AxiosError | unknown) {
      setLoading(false)
      if (error instanceof AxiosError) {
        setError(error?.response?.data?.message)
      }
    }
  }
  return {
    addTag,
    getAllTags,
    error,
    data,
    loading,
    form: { register, handleSubmit, errors, onSubmit },
  }
}

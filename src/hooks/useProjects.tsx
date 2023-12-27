import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { uploadProjectType } from '@/types/response/projectDataResponse'
import { projectType } from '@/types/projectType'
import { UseProjectType } from '@/types/hooksTypes'

import backend from '../utils/axiosDefault'

export default function useProject(): UseProjectType {
  const [loading, setLoading] = useState(false)
  const [projectData, setProjectData] = useState<projectType[] | null | []>(
    null
  )
  const [updateProjectData, setUpdateProjectData] =
    useState<projectType | null>(null)
  const toast = useToast()
  const router = useRouter()

  const getAllProjects = async (): Promise<void> => {
    try {
      setLoading(true)
      const projects = await backend.get('projects')
      setProjectData(projects.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const sendProyect = async (
    inputs: uploadProjectType,
    isEdit?: boolean,
    id?: number
  ): Promise<void> => {
    const formData = new FormData()
    formData.append('owner', inputs.owner)
    formData.append('title', inputs.title)
    formData.append('description', inputs.description)
    formData.append('content', inputs.content)
    formData.append('img_portada', inputs?.imagePortada[0])
    formData.append('project_link', inputs.projectLink)
    formData.append('tags', JSON.stringify(inputs.tags))
    try {
      setLoading(true)
      let rproyect = null

      if (isEdit) {
        rproyect = await backend.patch('projects/update_project', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          params: {
            id,
          },
        })
      } else {
        rproyect = await backend.post('projects/add_project', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
      setUpdateProjectData(rproyect.data)
      setLoading(false)
      toast({
        title: 'Proyecto creado!',
        description: 'El proyecto fue guardado exitosamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push('/admin/dashboard/panel')
    } catch (error: Error | unknown) {
      setUpdateProjectData(null)
      setLoading(false)
      toast({
        title: 'Ocurrió un problema',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const deleteProject = async (
    id: number,
    callback?: () => void
  ): Promise<void> => {
    try {
      setLoading(true)
      await backend.delete(`projects/delete_project`, {
        params: {
          id,
        },
      })
      setLoading(false)
      toast({
        title: 'Project deleted!',
        description: 'El proyecto fue eliminado exitosamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      callback && callback()
    } catch (error) {
      setLoading(false)
      toast({
        title: 'Ocurrió un problema',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return {
    getAllProjects,
    projectData,
    sendProyect,
    loading,
    deleteProject,
    updateProjectData,
  }
}

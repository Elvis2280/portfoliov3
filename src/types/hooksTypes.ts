import { AnimationControls } from 'framer-motion'
import { ReactElement } from 'react'
import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

import { projectType } from './projectType'
import { uploadProjectType } from './response/projectDataResponse'
import { createTagInputType } from './inputType'

// useProject
export type UseProjectType = {
  getAllProjects: () => void
  projectData: projectType[] | null | []
  sendProyect: (
    inputs: uploadProjectType,
    isEdit?: boolean,
    id?: number
  ) => void
  loading: boolean
  deleteProject: (id: number, callback?: () => void) => void
  updateProjectData: projectType | null
}

// useIconAnimation
export type UseIconAnimationType = {
  iconControl: AnimationControls
}

// useMessage
export type UseMessageType = {
  sendMessage: (messageData: {
    name: string
    email: string
    message: string
  }) => void
  loading: boolean
}

// useProjectNav
export type UseProjectNavType = {
  nextTab: (projects: ReactElement[]) => void
  backTab: (projects: ReactElement[]) => void
  currentTab: number
}

// useSpotify
export type UseSpotifyType = {
  spotifyData: spotifydata | null
  loading: boolean
  error: boolean
}

// useTag
export type UseTagType = {
  addTag: (nombre: string) => void
  getAllTags: () => void
  error: boolean | string
  data: optionData | undefined
  loading: boolean
  form: {
    register: UseFormRegister<{ nombre: string }>
    handleSubmit: UseFormHandleSubmit<{ nombre: string }>
    errors: Partial<
      FieldErrorsImpl<{
        nombre: string
      }>
    >
    onSubmit: SubmitHandler<createTagInputType>
  }
}

// useToggle
export type UseToggleType = {
  toggle: boolean
  handleToggle: () => void
  handleSetToggle: (value: boolean) => void
}

// generals
type spotifydata = {
  is_playing: boolean
  item: {
    album: {
      images: Array<{ url: string }>
    }
    artists: Array<{ name: string }>
    name: string
  }
}

type optionData = {
  sucess?: string
  tags?: Array<{ id: number; name: string }>
}

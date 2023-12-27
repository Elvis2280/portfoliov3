import { projectType } from '../projectType'

export type projectDataResponse = {
  data: projectType[]
}

export type uploadProjectType = {
  owner: string
  title: string
  projectLink: string
  description: string
  imagePortada: File[]
  tags?: Array<number>
  content: string
}

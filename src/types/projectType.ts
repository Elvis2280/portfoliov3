export type projectType = {
  content: string
  description: string
  id: number
  img_portada: string
  project_link: string
  tags: tagType[]
  title: string
}

export type tagType = {
  name: string
  id: number
}

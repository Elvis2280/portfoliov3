export type loginInputType = {
  email: string
  password: string
}

export type tagOptionsType = {
  value: number
  label: string
}

export type createBlogInputType = {
  titulo: string
  descripcion: string
}

export type createProjectInputType = {
  owner: string
  titulo: string
  url: string
  descripcion: string
  imagen: File[]
}

export type contactInputType = {
  nombre: string
  email: string
  message: string
}

export type createTagInputType = {
  nombre: string
}

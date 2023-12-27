import React, { ReactElement } from 'react'
import { Badge } from '@chakra-ui/react'

import { projectType } from '@/types/projectType'

import ModalView from '../ModalView/ModalView'

type Props = {
  project: projectType
}

export default function HomeProjects({ project }: Props): ReactElement {
  const techStackComponents = project?.tags.map((tech, i) => {
    return (
      <Badge
        key={i}
        ml='1'
        fontSize={['0.8em', '0.9em', '1em']}
        colorScheme='green'
      >
        {tech.name}
      </Badge>
    )
  })
  return (
    <ModalView
      pictureLink={project?.img_portada}
      title={project?.title}
      description={project?.description}
      techStack={techStackComponents}
    />
  )
}

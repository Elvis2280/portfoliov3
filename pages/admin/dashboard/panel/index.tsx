import { Container, Flex, Grid, Text, chakra } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

import DashboardLayout from '@/layouts/DashboardLayout'
import backend from '@/utils/axiosDefault'
import { projectDataResponse } from '@/types/response/projectDataResponse'
import ProjectCard from '@/components/ProjectCards/ProjectCard'
import { projectType } from '@/types/projectType'

type requestProjectsSchema = {
  data: projectDataResponse
}

function Panel(prop: projectDataResponse): ReactElement {
  return (
    <Container maxW={'container.lg'}>
      <chakra.h2 fontSize={'xl'} fontWeight='bold' color='brand.900'>
        All projects
      </chakra.h2>

      <Flex justifyContent={'center'}>
        {prop?.data ? (
          <Grid
            templateColumns={[
              'repeat(1, minmax(250px, 350px))',
              'repeat(2, minmax(0, 1fr))',
              'repeat(2, minmax(0, 1fr))',
              'repeat(3, minmax(0, 1fr))',
            ]}
            autoRows={['minmax(min-content, max-content)']}
            gap='6'
            py='8'
          >
            {prop?.data.map(project => {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  tags={project.tags}
                  isEdit={true}
                />
              )
            })}
          </Grid>
        ) : (
          <Text>Ocurrio un problema al cargar los proyectos</Text>
        )}
      </Flex>
    </Container>
  )
}

export async function getServerSideProps(): Promise<{
  props: {
    data: projectType[]
  }
}> {
  const { data }: requestProjectsSchema = await backend.get('projects', {
    params: {
      owner: process.env.OWNER_EMAIL,
    },
  })

  return {
    props: { data: data.data.reverse() },
  }
}

Panel.getLayout = (page: ReactElement): ReactElement => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Panel

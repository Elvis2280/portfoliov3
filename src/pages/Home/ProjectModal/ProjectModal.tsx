import { Box, Flex } from '@chakra-ui/react'
import React, { ReactElement, useEffect, useState } from 'react'

import CustomModalNav from '@/components/CustomModalNav'
import useProjectNav from '@/hooks/useProjectNav'

type Props = {
  listProyect: ReactElement[]
}

export default function ProjectModal({ listProyect }: Props): ReactElement {
  const [porcentTab, setPorcenTab] = useState('0%')
  const { nextTab, currentTab, backTab } = useProjectNav()

  useEffect(() => {
    const progressBar =
      Number(((currentTab + 1) / listProyect.length).toFixed(4)) * 100
    setPorcenTab(`${progressBar}%`)
  }, [currentTab, listProyect])
  return (
    <Flex
      justifyContent={'center'}
      flexDir='column'
      alignItems={'center'}
      rowGap='4'
      py={[0, 0, 12]}
    >
      {listProyect[currentTab]}
      <Box py='2' mt={[2, 2, 16]} w={['70%', '60%', '50%']}>
        <CustomModalNav
          backHandler={() => {
            backTab(listProyect)
          }}
          nextHandler={() => {
            nextTab(listProyect)
          }}
          barPorcent={porcentTab}
        />
      </Box>
    </Flex>
  )
}

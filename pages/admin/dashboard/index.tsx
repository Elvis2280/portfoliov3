import { Box, Container, chakra, Text, Button, Flex } from '@chakra-ui/react'
import React, { ReactElement, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import MainLayout from '@/layouts/MainLayout'
import { useUser } from '@auth0/nextjs-auth0/client'

function Index(): ReactElement {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/admin/dashboard/panel')
    }
  }, [user])

  return (
    <Container
      minH={'100vh'}
      display='flex'
      justifyContent={'center'}
      alignItems='center'
    >
      <Box>
        <Text
          textAlign={'center'}
          fontWeight='bold'
          fontSize={['2xl', '3xl', '4xl']}
          color='brand.700'
        >
          ELVISDEV
        </Text>
        <chakra.h2
          textAlign={'center'}
          mt='2'
          fontSize={['lg', 'lg', 'xl']}
          color='brand.900'
        >
          Good to see you again!
        </chakra.h2>
        <Text
          textAlign={'center'}
          fontSize={['sm', 'sm', 'lg']}
          color={'gray.400'}
        >
          Please login to your account.
        </Text>

        <Box>
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            gap={4}
            justifyContent={'center'}
            mt='8'
            color={'gray.500'}
          >
            <Button
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}
              variant={'outline'}
              colorScheme='teal'
              size={['md', 'md', 'lg']}
            >
              <Link href='/api/auth/login?returnTo=/admin/dashboard/panel'>
                Login
              </Link>
            </Button>
          </Flex>
          {/* </form> */}
        </Box>
      </Box>
    </Container>
  )
}

Index.getLayout = (page: ReactElement): ReactElement => {
  return <MainLayout>{page}</MainLayout>
}

export default Index

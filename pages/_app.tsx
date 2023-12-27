import React from 'react'
import type { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import theme from '@/utils/chakraTheme'
import PortfolioContext from '@/store/PortfolioContext'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactElement {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement): ReactElement => page)
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <PortfolioContext>
          {getLayout(<Component {...pageProps} />)}
        </PortfolioContext>
      </ChakraProvider>
    </UserProvider>
  )
}

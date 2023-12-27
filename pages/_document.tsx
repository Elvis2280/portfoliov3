import React, { ReactElement } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document(): ReactElement {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'true'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/public/icon.png' />
      </Head>
      <body
        style={{
          backgroundColor: '#F0FDFC',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import React, { ReactElement } from 'react'
import { Box, chakra, Image, shouldForwardProp } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

import useIconAnimation from '@/hooks/useIconAnimation'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
})
export default function IntroPic(): ReactElement {
  const { iconControl: reactControl } = useIconAnimation({
    startAnimation: { top: ['80%', '50%'], right: ['50%', '1%'] },
    mainAnimation: { top: ['50%', '55%', '50%'] },
  })

  const { iconControl: awsControl } = useIconAnimation({
    startAnimation: { top: ['80%', '10%'], left: ['50%', '30%'] },
    mainAnimation: { top: ['10%', '5%', '10%'] },
  }) // custom hook start and handle animation settings
  const { iconControl: nodejsControl } = useIconAnimation({
    startAnimation: { top: ['80%', '10%'], right: ['50%', '15%'] },
    mainAnimation: { top: ['10%', '5%', '10%'] },
  })
  const { iconControl: cssControl } = useIconAnimation({
    startAnimation: { top: ['80%', '50%'], left: ['50%', '18%'] },
    mainAnimation: { top: ['50%', '55%', '50%'] },
  })
  const { iconControl: htmlControl } = useIconAnimation({
    startAnimation: { top: ['80%', '90%'], right: ['50%', '1%'] },
    mainAnimation: { top: ['90%', '95%', '90%'] },
  })

  const { iconControl: javascriptControl } = useIconAnimation({
    startAnimation: { top: ['80%', '98%'], right: ['50%', '45%'] },
    mainAnimation: { top: ['98%', '103%', '98%'] },
  })

  const { iconControl: typescriptControl } = useIconAnimation({
    startAnimation: { top: ['80%', '90%'], left: ['50%', '20%'] },
    mainAnimation: { top: ['90%', '95%', '90%'] },
  })

  return (
    <Box px={12} position={'relative'} mx={'auto'}>
      <Image
        zIndex={5}
        mx={'auto'}
        h={'80'}
        src='/Home/introPic.svg'
        alt='Elvis Picture'
      />
      <ChakraBox
        animate={reactControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'-80%'}
        transform='translate(-1%, -80%)'
      >
        <Image w='10' src='/Home/logos_react.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={awsControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'30%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='10' src='/Home/logos_aws.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={nodejsControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'30%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='10' src='/Home/logos_nodejs.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={cssControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'10%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='8' src='/Home/logos_css-3.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={htmlControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'30%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='8' src='/Home/logos_html-5.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={javascriptControl}
        zIndex={-1}
        position={'absolute'}
        top={'80%'}
        right={'30%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='9' src='/Home/logos_javascript.svg' alt='React Icon' />
      </ChakraBox>
      <ChakraBox
        animate={typescriptControl}
        zIndex={-1}
        position={'absolute'}
        top={'-10%'}
        right={'30%'}
        transform='translate(-30%, -10%)'
      >
        <Image w='9' src='/Home/logos_typescript.svg' alt='React Icon' />
      </ChakraBox>
    </Box>
  )
}

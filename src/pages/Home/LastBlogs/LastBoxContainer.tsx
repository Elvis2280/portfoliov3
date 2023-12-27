import { Box, Flex } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import React, { ReactElement, useRef } from 'react'

import LastBlogCard from './LastBlogCard'

export default function LastBoxContainer(): ReactElement {
  const ref = useRef(null)
  const inView = useInView(ref)

  const variant = {
    animationArticle1: {
      translateX: inView ? '0vw' : '100vw',
      opacity: inView ? 1 : 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    animationArticle2: {
      translateX: inView ? '0vw' : '100vw',
      opacity: inView ? 1 : 0,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
    animationArticle3: {
      translateX: inView ? '0vw' : '100vw',
      opacity: inView ? 1 : 0,
      transition: {
        delay: 1.5,
        duration: 0.5,
      },
    },
  }

  return (
    <Flex
      ref={ref}
      as={motion.div}
      display='flex'
      flexDir={'column'}
      rowGap='4'
      py={10}
    >
      <Box
        as={motion.div}
        initial={{ translateX: '100vw', opacity: 0 }}
        animate='animationArticle1'
        variants={variant}
      >
        <LastBlogCard
          title='Frontend'
          description='I have experience developing many different websites, manipulating data and displaying them in a correct way, caring about responsive design, and implementing different ways to generate it for example SSG, SSR or ISR.'
        />
      </Box>
      <Box
        as={motion.div}
        initial={{ translateX: '100vw', opacity: 0 }}
        animate='animationArticle2'
        variants={variant}
      >
        <LastBlogCard
          title='Backend'
          description='Working building APIs, middleware, user sessions, saving data in the database or sending it to a media storage service, and more. Also, setup Linux servers with Nginx, generate SSL, Firewall, and domains configuration.'
        />
      </Box>
      <Box
        as={motion.div}
        initial={{ translateX: '100vw', opacity: 0 }}
        animate='animationArticle3'
        variants={variant}
      >
        <LastBlogCard
          title='Web Design'
          description="Is another of my passions, for me a comprehensive and clean website where we don't have to think so much about how to use it is a key in web design, I learn UX and UI concepts to be able to offer a better design quality."
        />
      </Box>
    </Flex>
  )
}

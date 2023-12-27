import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useAnimationControls } from 'framer-motion'
import React, { ReactElement, useEffect } from 'react'
import { FaSpotify } from 'react-icons/fa'

import useSpotify from '@/hooks/useSpotify'

export default function SpotifyCard(): ReactElement {
  const { spotifyData } = useSpotify()
  const controls = useAnimationControls()

  useEffect(() => {
    if (spotifyData?.is_playing) {
      controls.start({
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 5,
        },
      })
    } else {
      controls.stop()
    }
  }, [spotifyData])

  useEffect(() => {})

  return (
    <Container
      style={{
        boxShadow: '0px 0px 10px 3px #15B7B9',
      }}
      rounded={'lg'}
      bg={'brand.700'}
      p='4'
      maxW={'300px'}
      position='relative'
      zIndex={5}
      as={motion.div}
    >
      <Flex alignItems={'center'} columnGap='4'>
        {spotifyData?.is_playing ? (
          <>
            <Box flex={1} w={14}>
              <Image
                as={motion.img}
                rounded={'base'}
                w={'100%'}
                height='100px'
                objectFit='cover'
                src={spotifyData.item.album.images[1].url}
                alt='dino music'
                animate={controls}
              />
            </Box>
            <Box flex={1}>
              <Text
                textAlign={'start'}
                color={'brand.200'}
                fontWeight='medium'
                fontSize='md'
              >
                {spotifyData.item.name}
              </Text>
              <Text textAlign={'start'} color={'brand.300'} fontSize='xs'>
                {spotifyData.item.artists
                  .map((artist: { name: string }) => artist.name)
                  .join(', ')}
              </Text>
            </Box>
            <Box color={'brand.900'} alignSelf={'start'}>
              <FaSpotify size={30} />
            </Box>
          </>
        ) : (
          <>
            {' '}
            <Box w={14}>
              <Image
                w={24}
                h={24}
                src='/Home/dino_music.svg'
                alt='dino music'
              />
            </Box>
            <Box flex={'1'}>
              <Text textAlign={'center'} color={'brand.300'} fontSize='lg'>
                Now not listening Music
              </Text>
            </Box>
            <Box color={'brand.900'} alignSelf={'start'}>
              <FaSpotify size={30} />
            </Box>
          </>
        )}
      </Flex>
    </Container>
  )
}

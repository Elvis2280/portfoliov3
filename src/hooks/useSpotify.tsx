import axios from 'axios'
import { useEffect, useState } from 'react'

import { UseSpotifyType } from '@/types/hooksTypes'

export default function useSpotify(): UseSpotifyType {
  const [spotifyData, setSpotifyData] = useState<spotifydata | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    getSpotifyData()
  }, [])

  const getSpotifyData = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(false)
      const currentListening = await axios.get(
        `${window.location.origin}/api/spotify`
      )
      setLoading(false)
      setSpotifyData(currentListening.data)
    } catch (error: unknown) {
      setLoading(false)
      setError(true)
    }
  }
  return { spotifyData, loading, error }
}

type spotifydata = {
  is_playing: boolean
  item: {
    album: {
      images: Array<{ url: string }>
    }
    artists: Array<{ name: string }>
    name: string
  }
}

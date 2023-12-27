/* eslint-disable camelcase */
import querystring from 'querystring'

import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const clientId = process.env.SPOTIFY_ID
const clientSecret = process.env.SPOTIFY_SECRET
const refreshToken = process.env.SPOTIFY_TOKEN

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async (): Promise<{
  access_token: string
}> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',

      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { access_token } = await getAccessToken()
    const spotifyData = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          market: 'ES',
        },
      }
    )
    res.status(200).json(spotifyData.data)
  } catch (error: unknown) {
    res.status(500).json({ error })
  }
}

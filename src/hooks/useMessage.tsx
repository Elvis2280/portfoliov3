import { useToast } from '@chakra-ui/react'
import { useState } from 'react'

import { UseMessageType } from '@/types/hooksTypes'

import backend from '../utils/axiosDefault'

export default function useMessage(): UseMessageType {
  const [loading, setLoading] = useState(false)

  const toast = useToast()
  const sendMessage = async (messageData: messageSchema): Promise<void> => {
    try {
      setLoading(true)
      await backend.post('message/send', {
        ...messageData,
      })
      setLoading(false)
      toast({
        title: 'Message sended!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error: unknown) {
      toast({
        title: 'something went wrong, try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setLoading(false)
    }
  }
  return { sendMessage, loading }
}

type messageSchema = {
  name: string
  email: string
  message: string
}

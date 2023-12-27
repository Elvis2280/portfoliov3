import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Box } from '@chakra-ui/react'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

type EditorProps = {
  value?: string
  handlerText: (value: string) => void
}

const Editor = ({ handlerText, value }: EditorProps): ReactElement => {
  const handleChange = (value: string): void => {
    handlerText(value)
  }

  return (
    <Box display={'block'} position={'relative'} height={'400px'}>
      <ReactQuill
        value={value}
        onChange={handleChange}
        theme='snow'
        style={{ height: '400px' }}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
          ],
        }}
      />
    </Box>
  )
}

export default Editor

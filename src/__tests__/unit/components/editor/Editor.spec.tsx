import React from 'react'
import { render } from '@testing-library/react'
import Editor from '@/components/editor/Editor'

describe('Editor', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Editor handlerText={() => {}} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

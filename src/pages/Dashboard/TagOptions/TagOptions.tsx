import React, { ReactElement, useEffect, useState } from 'react'
import Select, { MultiValue } from 'react-select'

import useTags from '@/hooks/useTags'

export default function TagOptions({
  handlerOptions,
  initialOptions = [],
}: props): ReactElement {
  const [options, setOptions] = useState<Array<tagOptionsType>>(initialOptions)
  const { getAllTags, loading, data } = useTags()
  useEffect(() => {
    if (data?.tags) {
      const dataOpt = data.tags
      const listOpt = dataOpt.map(tag => {
        return { value: tag.id, label: tag.name }
      })
      setOptions(listOpt)
    }
  }, [data])

  return (
    <Select
      onFocus={getAllTags}
      isLoading={loading}
      closeMenuOnSelect={false}
      isMulti
      options={options}
      onChange={value => handlerOptions(value)}
      defaultValue={initialOptions}
    />
  )
}

type props = {
  handlerOptions: (value: MultiValue<tagOptionsType>) => void
  initialOptions?: tagOptionsType[]
}

type tagOptionsType = {
  value: number
  label: string
}

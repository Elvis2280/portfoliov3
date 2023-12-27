import { useState } from 'react'

import { UseToggleType } from '@/types/hooksTypes'

type Props = {
  initialToggle: boolean
}

export default function useToggle({
  initialToggle = false,
}: Props): UseToggleType {
  const [toggle, setToggle] = useState(initialToggle)
  const handleToggle = (): void => setToggle(!toggle)
  const handleSetToggle = (value: boolean): void => setToggle(value)

  return { toggle, handleToggle, handleSetToggle }
}

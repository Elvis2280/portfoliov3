import { ReactElement, useState } from 'react'

import { UseProjectNavType } from '@/types/hooksTypes'

export default function useProjectNav(): UseProjectNavType {
  const [currentTab, setCurrentTab] = useState(0)

  const nextTab = (projects: Array<ReactElement>): void => {
    const limitTab = projects.length - 1
    if (currentTab >= limitTab) {
      setCurrentTab(0)
    } else {
      setCurrentTab(lastTab => lastTab + 1)
    }
  }

  const backTab = (projects: Array<ReactElement>): void => {
    const limitTab = projects.length - 1
    if (currentTab === 0) {
      setCurrentTab(limitTab)
    } else {
      setCurrentTab(lastTab => lastTab - 1)
    }
  }
  return { nextTab, backTab, currentTab }
}

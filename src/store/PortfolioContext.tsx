import React, { ReactElement, createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}
type contextInterface = {
  contactRef: HTMLElement | null
  handlerSetContactRef: (ref: HTMLElement) => void
}
export const MainContext = createContext<contextInterface>({
  contactRef: null,
  handlerSetContactRef: () => {},
})
export default function PortfolioContext({ children }: Props): ReactElement {
  const [contactRef, setContactRef] = useState<HTMLElement | null>(null)

  const handlerSetContactRef = (ref: HTMLElement | null): void => {
    setContactRef(ref)
  }

  return (
    <MainContext.Provider value={{ contactRef, handlerSetContactRef }}>
      {children}
    </MainContext.Provider>
  )
}

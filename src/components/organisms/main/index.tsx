import { PropsWithChildren } from 'react'

export const Main: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="grid grid-cols-auto gap-2 px-3">
    { children }
  </main>
)

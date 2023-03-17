import { PropsWithChildren } from 'react'

export const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <section className="container mx-auto p-2">
    { children }
  </section>
)

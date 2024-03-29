import type { AppProps } from 'next/app'

import { Header } from 'components/organisms'

import 'styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component { ...pageProps } />
    </>
  )
}

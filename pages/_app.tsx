import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Landing from '../src/layouts/landingLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Landing>
      <Component {...pageProps} />
    </Landing>
  )
}

export default MyApp

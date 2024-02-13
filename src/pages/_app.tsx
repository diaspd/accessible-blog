import { useEffect } from 'react';
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}

import { useEffect } from 'react';
import '../styles/globals.css'
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}

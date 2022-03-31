import Head from 'next/head'
import normalize from 'normalize.css'
import 'modern-normalize/modern-normalize.css'
import './index.css'
import './landing.css'
import './travel.css'
import './rsvp.css';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps}  />
  </>
  )
}

export default MyApp

import Head from 'next/head'
import normalize from 'normalize.css'
import 'modern-normalize/modern-normalize.css'
import './index.css'
import './landing.css'
import './travel.css'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Jaclyn + Cody</title>
      <meta name="descritpion" content="Jaclyn + Cody wedding website" />
      <meta name="keywords" content="Jaclyn + Cody wedding website" />
      <meta name="author" content="Jaclyn + Cody wedding website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,400&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps}  />
  </>
  )
}

export default MyApp

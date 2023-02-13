import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Stats preview card component</title>
        <link rel="shortcut icon" href="favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

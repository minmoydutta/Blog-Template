import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  const { basePath } = useRouter()
  
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href={`${basePath}/feed.xml`}
        />
        <link
          rel="preload"
          href={`${basePath}/fonts/Inter-roman.latin.var.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

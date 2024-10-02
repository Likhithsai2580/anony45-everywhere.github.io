import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
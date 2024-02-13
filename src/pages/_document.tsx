import Document, { Head, Html, Main, NextScript} from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-Br">
        <Head>
          <link rel="shortcut icon" href="../../public/logo.svg" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
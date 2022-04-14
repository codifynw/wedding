import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
        />
        <title>Jaclyn + Cody</title>
        <meta name="descritpion" content="Jaclyn + Cody wedding website" />
        <meta name="keywords" content="Jaclyn + Cody wedding website" />
        <meta name="author" content="Jaclyn + Cody wedding website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lustria&display=swap"
          rel="stylesheet"
        ></link>

        <link
          rel="preload"
          href="/fonts/AmalfiCoast.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

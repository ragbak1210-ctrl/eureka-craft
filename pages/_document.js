import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-primary bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

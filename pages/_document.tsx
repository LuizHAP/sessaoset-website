import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

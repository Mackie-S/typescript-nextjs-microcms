import { Html, Head, Main, NextScript } from "next/document";
import { type } from "os";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon_io_Mackie_logo/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { TajawalFont } from "@/libs/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="rtl">
      <Head />
      <body className={"antialiased" + TajawalFont.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

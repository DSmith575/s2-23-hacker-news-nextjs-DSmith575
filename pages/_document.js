/**
 * @description NextJS document component
 * @file  _document.js
 *
 * @author Deacon Smith
 *
 * @return {JSX.Element} - Document component
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

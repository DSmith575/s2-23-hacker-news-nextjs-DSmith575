/**
 * @file NextJS document component for SSR
 * @author Deacon Smith
 *
 * @description Custom document
 *
 * @component
 *
 * @return {JSX.Element} - Document component
 *
 * @created 27-08-2023
 * @updated 28-08-2023
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

/**
 * @description Applies global styles, loads fonts, wraps entire app in a layout
 * @file _app.js
 *
 * @author Deacon Smith
 *
 * @const {Font} roboto - Font with custom styling
 *
 * @return {JSX.Element} Main App component
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import '@/styles/globals.css';
import { Roboto_Mono } from '@next/font/google';
import Layout from '@/components/layout/layout.jsx';

const roboto = Roboto_Mono({
  weight: '200',
  subsets: ['greek'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

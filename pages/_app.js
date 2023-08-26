import '@/styles/globals.css';
import { Roboto_Mono } from 'next/font/google';
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

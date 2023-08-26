import '@/styles/globals.css';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: '200',
  subsets: ['greek'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

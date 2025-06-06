import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      
    </>
  );
}

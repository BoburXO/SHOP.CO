import Comments from '@/components/Comments/Comments';
import Header from '@/components/Header/Header';
import Logos from '@/components/Logos/Logos';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHOP.CO | Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Logos />
      <Comments />
    </>
  );
}

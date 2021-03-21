import '../css/style.css';
import '../css/form.css';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ASCENT PYRAMID</title>
      </Head>

      <div className='top-bar'>
        <div className='nav'>
          <Link href='/'>
            <a>ASCENT</a>
          </Link>
          <Link href='/newClimb'>
            <a>Add Climb</a>
          </Link>
        </div>
      </div>
      <div className='grid wrapper'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

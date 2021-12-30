import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props: any) => {
  console.log(props?.data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Crypto tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': process.env["X-CMC_PRO_API_KEY"] || ''
    }
  })

  const latestPrices = await res.json();

  // console.log(latestPrices.data[0]?.quote)

  return {
    props: {
      data: latestPrices,
    },
  }
}

export default Home

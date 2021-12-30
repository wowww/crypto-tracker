import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BubbleChart from '../components/BubbleChart'
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

      <main className={styles.main}>
        <section className={styles.bubblechart__wrapper}>
          <h1>Bubble Chart</h1>
          <BubbleChart />
        </section>
      </main>
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

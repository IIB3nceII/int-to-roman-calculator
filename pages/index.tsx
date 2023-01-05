import Head from 'next/head'
import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>🚀 Let's get this party started!</h1>
    </div>
  )
}

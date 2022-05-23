import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Aboutus: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>About Us</h1>
        <footer className={styles.footer}>
 
        </footer>
      </div>
    )
  }
  
  export default Aboutus
  
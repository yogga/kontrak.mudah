import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Signin: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sign In</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Sign In</h1>
        <footer className={styles.footer}>

        </footer>
      </div>
    )
  }
  
  export default Signin
  
  
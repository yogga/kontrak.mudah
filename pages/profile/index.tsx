import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Profile: NextPage = () => {
    return (
      <div className={styles.container}>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Profile</h1>
        <footer className={styles.footer}>
 
        </footer>
      </div>
    )
  }
  
  export default Profile
  
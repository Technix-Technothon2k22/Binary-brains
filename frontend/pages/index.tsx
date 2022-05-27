import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../layout/landing/Footer'
import Header from '../layout/landing/Header'
import Main from '../layout/landing/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header/>
        <Main/>
      <Footer/>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Arrow from '@/components/Arrow'
import ToggleMenu from '@/components/ToggleMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />

      </Head>


      <main className={styles.main}>
        <ToggleMenu />
        <Navbar />

        <div className={styles.container}>
          <header>
            <h1 className={styles.heading}>An investment in <br></br>knowledge pays the best <br></br>interest.</h1>
          </header>
          <hr className={styles.breakLine}></hr>
          <p class={styles.text}>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          <div className={styles.action_buttons}>
            <a href='/about'><button className={styles.buttons}>More About Us</button></a>
            <a href='/contact'><button className={styles.buttons}>Contact Us</button></a>
          </div>
        </div>
        <Arrow page="Home" />

      </main>
    </>
  )
}

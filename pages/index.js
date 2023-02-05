import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

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
        <nav className={styles.navbar}>
          <img class={styles.navbar_icon} src={'icons/menu-icon.png'} ></img>
          <img class={styles.navbar_icon} src={'icons/graduation-hat.png'} ></img>
        </nav>
        <header>

          <h1 className={styles.heading}>An investment in <br></br>knowledge pays the best <br></br>interest.</h1>
        </header>
        <hr className={styles.breakLine}></hr>
        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
        <a href='/about'><button>More About Us</button></a>
        <a href='/contact'><button>Contact Us</button></a>
        <a><span><img src={'icons/downwardArrow.png'} /></span></a>
      </main>
    </>
  )
}

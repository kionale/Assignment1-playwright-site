import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Arrow from '@/components/Arrow'

export default function About() {
    return (
        <>
            <head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109"></meta>
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
            </head>

            <main className={styles.body}>
                <Navbar />
                <header>
                    <div className={styles.heading_section}>
                        <hr className={styles.dividing_lines}></hr>
                        <h1 className={styles.heading}>About Us</h1>
                        <hr className={styles.dividing_lines}></hr>
                    </div>
                    <div><h1></h1></div>
                </header>
                <div className={styles.content}>
                    <div><p className={styles.paragraph}>We are proud to deliver an education that goes beyond textbooks and classrooms.</p></div>
                    <div><p className={styles.paragraph}>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p></div>
                    <div><p className={styles.paragraph}>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p></div>
                    <div><h2 className={styles.paragraph}>Information Sessions</h2></div>
                    <div><p className={styles.paragraph}>Information sessions are a simple way to figure out the next step along your career path</p></div>
                    <div><h2 className={styles.paragraph}>Big Info</h2></div>
                    <div><p className={styles.paragraph}>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.</p></div>
                    <div><p className={styles.paragraph}>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023</p></div>
                    <div><h2 className={styles.paragraph}>Campus Tours</h2></div>
                    <div><p className={styles.paragraph}>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p></div>
                </div>

                <div id="carouselImage">
                    <img className={styles.image_slide} src={"/carousel-images/0.jpg"} />
                    {/* <img src={"/carousel-images/1.jpg"} />
                    <img src={"/carousel-images/2.jpg"} />
                    <img src={"/carousel-images/3.jpg"} />
                    <img src={"/carousel-images/4.jpg"} />
                    <img src={"/carousel-images/5.jpg"} /> */}
                </div>

                <div id="testOnImageHere"></div>


                <div>
                    <ul>
                        <li>Applied & Natural Sciences</li>
                        <li>Business & Media</li>
                        <li>Computing & IT</li>
                        <li>Engineering</li>
                        <li>Health Sciences</li>
                        <li>Trades & Apprenticeships</li>
                    </ul>
                </div>

                <Arrow page="About" />


            </main>


        </>
    )
}
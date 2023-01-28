import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109"></meta>
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:title" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
            </head>

            <main>
                <header>
                    <div><h1></h1></div>
                    <div><h1></h1></div>
                </header>
                <paragraph>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                </paragraph>
                <div><h2></h2></div>
                <div><h2></h2></div>
                <div><h3></h3></div>

                <div class="Carousel-area">
                <img src={'/icons/leftArrow.png'} />
                    <img src={'/icons/rightArrow.png'} />
                </div>
                {/* <carouselImage height="200px" background-repeat: "no-repeat"></carouselImage> */}

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

                <a><span><img src={'icons/upwardArrow.png'} /></span></a>
                <a><span><img src={'icons/downwardArrow.png'} /></span></a>


            </main>


        </>
    )
}
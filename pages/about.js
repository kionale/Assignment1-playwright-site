import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Link from 'next/link'

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

            <main>
                <header>
                    <div><h1></h1></div>
                    <div><h1></h1></div>
                </header>
                <p>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                    <div><p></p></div>
                </p>
                <div><h2></h2></div>
                <div><h2></h2></div>
                <div><h3></h3></div>


                <div id="carouselImage">
                    <img src={"/carousel-images/0.jpg"} />
                    <img src={"/carousel-images/1.jpg"} />
                    <img src={"/carousel-images/2.jpg"} />
                    <img src={"/carousel-images/3.jpg"} />
                    <img src={"/carousel-images/4.jpg"} />
                    <img src={"/carousel-images/5.jpg"} />
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

                <a><span><img src={'icons/upwardArrow.png'} /></span></a>
                <a><span><img src={'icons/downwardArrow.png'} /></span></a>


            </main>


        </>
    )
}
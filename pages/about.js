import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Arrow from '@/components/Arrow'
import ToggleMenu from '@/components/ToggleMenu'
import { useState, useEffect } from 'react'
import data from '../data/words.json'
import next from 'next'
import Slider from '@/components/Slider/Slider'


export default function About() {

    const [count, setCount] = useState(0);
    const [info, setInfo] = useState([...data])
    const [caption, setCaption] = useState('')
    let imageSrc = `/carousel-images/${count}.jpg`




    useEffect(() => {
        // info here is the array of caption, text is an object of info
        info && info.map((text, index) => {
            console.log(count);
            if (text.id == count) {
                setCaption(text.value)
                imageSrc = `/carousel-images/${count}.jpg`
            }
        }
        )
    }, [count])

    const prevSlide = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
        else if (count === 0) {
            setCount(data.length - 1)
        }
    }

    const nextSlide = () => {
        if (count !== data.length - 1) {
            setCount(count + 1)
        }
        else if (count === data.length - 1) {
            setCount(0)
        }
    }

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
                <ToggleMenu />
                <Navbar />
                <header>
                    <div className={styles.heading_section}>
                        <hr className={styles.dividing_lines}></hr>
                        <h1 className={styles.heading}>About Us</h1>
                        <hr className={styles.dividing_lines}></hr>

                    </div>

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
                    <div><h3 className={styles.paragraph}>Campus Tours</h3></div>
                    <div><p className={styles.paragraph}>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p></div>
                </div>

                <div id="carouselImage" className={styles.carouselImage}>
                    <img id="image" className={styles.image} src={imageSrc} />

                    <div className={styles.image_slide}>
                        <img className={styles.arrows} onClick={() => prevSlide()} src='icons/leftArrow.png'></img>
                        <div id="testOnImageHere" className={styles.testOnImageHere}>{caption}</div>
                        <img className={styles.arrows} onClick={() => nextSlide()} src='icons/rightArrow.png'></img>
                    </div>
                    {/* <Slider /> */}
                </div>

                <div className={styles.departments}>
                    <hr className={styles.dividing_lines}></hr>
                    <h1 className={styles.department_title}>departments</h1>
                    <hr className={styles.dividing_lines}></hr>
                    <ul className={styles.departments_name} >
                        <li >Applied & Natural Sciences</li>
                        <li >Business & Media</li>
                        <li >Computing & IT</li>
                        <li>Engineering</li>
                        <li>Health Sciences</li>
                        <li>Trades & Apprenticeships</li>
                    </ul>
                </div>

                <Arrow page="About" />
                <div className={styles.scroller}></div>


            </main>


        </>
    )
}
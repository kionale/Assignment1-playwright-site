import { React, useState } from 'react'
import data from '../../data/words.json'
import styles from './Slider.module.css'
import BtnSlider from './BtnSlider'

export default function Slider() {
    const [info, setInfo] = useState([...data])
    const [slideIndex, setSlideIndex] = useState(0)
    const nextSlide = () => {
        if (slideIndex !== data.length - 1) {
            setSlideIndex(prev => prev +1)
        }
        setSlideIndex(0)        
    }
    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(prev => prev -1)
        }
        setSlideIndex(data.length -1)
    }

    return (
        <div className={styles.container_slider}>
            {
                info && info.map((obj, index) => {
                    if (obj.id == slideIndex) {
                        return (
                            <div key={index} className={styles.slide}>
                                <img className={styles.image}
                                    src={`/carousel-images/${slideIndex}.jpg`} />
                                <p>{obj.value}</p>
                            </div>
                        )
                    }
                    })
            }
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </div>
    )
}

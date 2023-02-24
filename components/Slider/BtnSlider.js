import React from 'react'
import styles from './Slider.module.css'
import leftArrow from '../../public/icons/leftArrow.png'
import rightArrow from '../../public/icons/rightArrow.png'

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction,moveSlide)
  return (
      <div>
          <button className={direction === 'next'? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide}>
              <img src={direction === 'next' ? rightArrow : leftArrow} width={200} height={200} />
         </button>
    </div>
  )
}

import React from 'react'
import styles from './StoriesHero.module.css'
import appalacia from '../assets/stories/desktop/moon-of-appalacia.jpg'
import { Link } from "react-router-dom";
import rightArrowWhite from '../assets/shared/desktop/right-arrow-white.svg'

const StoriesHero = () => {
  return (
    <div className={styles.storiesHeroContainer}>
        <img src={appalacia} width='1440' height='650' className={styles.image} />
        <div className={styles.textbox}>
            <h4 className='h4 marginBottom24px'>LAST MONTH’S FEATURED STORY</h4>
            <h1 className={`marginBottom16px ${styles.heading}`}>HAZY FULL <br /> MOON OF <br /> APPALACHIA</h1>
            <p className='p2 marginBottom24px'><span className='opacity60pct'>March 2nd 2020 </span>by John Appleseed</p>
            <p className='p opacity60pct marginBottom24px'>
            The dissected plateau area, while not actually made up of geological mountains,
            is popularly called "mountains," especially in eastern Kentucky and West Virginia,
            and while the ridges are not high, the terrain is extremely rugged.
            </p>
            <Link to='../comingsoon' className='h4 link2 linkWithArrow'>
                <p className='marginRight18px'>Read the story</p>
                <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
            </Link>
        </div>
    </div>
  )
}

export default StoriesHero

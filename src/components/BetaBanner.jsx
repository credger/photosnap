import React from 'react'
import styles from './BetaBanner.module.css'
import image from '../assets/shared/desktop/bg-beta.jpg'
import rightArrowWhite from '../assets/shared/desktop/right-arrow-white.svg'
import { Link } from "react-router-dom";

const BetaBanner = () => {
  return (
    <div className={styles.betaBanner}>
        <img src={image} alt='bg-beta' width='1440' height='280' className={styles.image}/>
            <div className={styles.textbox}>
                <h1 className={`${styles.heading} ${styles.marginBottom24px}`}>We're in Beta.<br />Get your invite<br />Today!</h1>
                <Link to='../comingsoon' className='h4 link2 linkWithArrow'>
                        <p className='marginRight18px'>Get an invite</p>
                        <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
                </Link>  
            </div>

      
    </div>
  )
}

export default BetaBanner

import React from 'react'
import styles from './BetaBanner.module.css'
import image from '../assets/shared/desktop/bg-beta.jpg'
import rightArrowWhite from '../assets/right-arrow-white.svg'
import { Outlet, Link } from "react-router-dom";

const BetaBanner = () => {
  return (
    <div className={styles.betaBanner}>
        <img src={image} alt='bg-beta' width='1440' height='280' className={styles.image}/>
            <div className={styles.textbox}>
                <h1 className={`${styles.heading} ${styles.marginBottom24px}`}>We're in Beta.<br />Get your invite<br />Today!</h1>
                <Link className={`h4 link2 ${styles.link}`}>
                        <p className={styles.linkText}>Get an invite</p>
                        <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
                </Link>  
            </div>

      
    </div>
  )
}

export default BetaBanner

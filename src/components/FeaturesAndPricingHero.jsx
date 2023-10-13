import React from 'react'
import styles from './FeaturesAndPricingHero.module.css'

const FeaturesAndPricingHero = (props) => {
  return (
    <div className={styles.featuresHeroContainer}>
        <div className={styles.rectangle}>
            <div className={styles.textbox}>
                <h1 className={`${styles.heading} ${styles.marginBottom21px}`}>{props.heading}</h1>
                <p className='p opacity60pct'>
                    {props.text}
                </p>
            </div>

        </div>
        <img src={props.image} alt='hero.jpg' width='830' height='490' className={styles.image} style={{objectPosition: props.objectPosition}}/>
      
    </div>
  )
}

export default FeaturesAndPricingHero
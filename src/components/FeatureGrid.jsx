import React from 'react'
import styles from './FeatureGrid.module.css'

const FeatureGrid = (props) => {
    
    let key=1000
    const featureGrid = props.features.map(feature =>

        <div className={styles.feature} key={key++}>
            <div className={styles.imageContainer}>
                <img src={feature.image} alt={feature.title} className={styles.image} width={feature.imageWidth} height={feature.imageHeight}/>
            </div>
            <h3 className={`h3 ${styles.title}`}>{feature.title}</h3>
            <p className={`p ${styles.text}`}>{feature.text}</p>
        </div> 
        
    )

  return (
    <div className={styles.featuresContainer}>
        <div className={styles.grid}>
            {featureGrid}
        </div>
    </div>
  )
}

export default FeatureGrid

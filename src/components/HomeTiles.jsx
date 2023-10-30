import React from 'react'
import styles from './HomeTiles.module.css'
import createAndShare from '../assets/home/desktop/create-and-share.jpg'
import beautifulStories from '../assets/home/desktop/beautiful-stories.jpg'
import designedForEveryone from '../assets/home/desktop/designed-for-everyone.jpg'
import rightArrowWhite from '../assets/shared/desktop/right-arrow-white.svg'
import rightArrowBlack from '../assets/shared/desktop/right-arrow-black.svg'
import { Link } from "react-router-dom";

const HomeTiles = () => {
  return (
    <div className={styles.homeTilesContainer}>
        <div className={`${styles.tileRow} ${styles.oddRow}`}>
            <div className={`${styles.blackRectangle} ${styles.rectangle}`}>
                <div className={styles.textBox}>
                    <h1 className={styles.heading}>Create and <br /> share your photo stories</h1>
                    <p className='p marginTop21px opacity60pct'>
                        Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, 
                        tell stories and connect with others.
                    </p>
                    <Link to='../comingsoon' className='h4 link2 linkWithArrow marginTop48px'>
                        <p className='marginRight18px'>Get an invite</p>
                        <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
                    </Link>
                </div>
            </div>
            <img src={createAndShare} alt='create-and-share.jpg' className={`${styles.image} ${styles.imageCreateAndShare}`} width='830' height='650' />
        </div>
        <div className={`${styles.tileRow} ${styles.evenRow}`}>
            <img src={beautifulStories} alt='create-and-share.jpg' className={`${styles.image} ${styles.imageBeautifulStories}`} width='830' height='650' />
            <div className={`${styles.whiteRectangle} ${styles.rectangle}`}>
                <div className={styles.textBox}>
                        <h1 className={styles.heading}>Beautiful <br /> stories <br /> every time</h1>
                        <p className='p marginTop21px opacity60pct'>
                            We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and 
                            media from other networks. Then share your story with everyone.
                        </p>
                        <Link to='../stories' className='h4 link1 linkWithArrow marginTop48px'>
                            <p className='marginRight18px'>View the Stories</p>
                            <img src={rightArrowBlack} alt='right-arrow' width='42' height='14' />
                        </Link>
                    </div>
                </div>
            </div>
        <div className={`${styles.tileRow} ${styles.oddRow}`}>
            <div className={`${styles.whiteRectangle} ${styles.rectangle}`}>
                <div className={styles.textBox}>
                    <h1 className={styles.heading}>Designed for <br /> everyone</h1>
                    <p className='p marginTop21px opacity60pct'>
                        Photosnap can help you create stories that resonate with your audience. 
                        Our tool is designed for photographers of all levels, brands, businesses 
                        you name it.
                    </p>
                    <Link to='../stories' className='h4 link1 linkWithArrow marginTop48px'>
                        <p className='marginRight18px'>View the Stories</p>
                        <img src={rightArrowBlack} alt='right-arrow' width='42' height='14' />
                    </Link>
                </div>
            </div>
            <img src={designedForEveryone} alt='create-and-share.jpg' className={`${styles.image} ${styles.imageDesignedForEveryone}`} width='830' height='650' />
        </div>

    </div>
  )
}

export default HomeTiles

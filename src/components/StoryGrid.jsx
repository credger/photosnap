import React from 'react'
import styles from './StoryGrid.module.css'
import { Link } from "react-router-dom";
import rightArrowWhite from '../assets/shared/desktop/right-arrow-white.svg'

const StoryGrid= (props) => {
  
  let key=0;

  const storyGrid = props.stories.map(story => 
    <div className={styles.story} key={key++}>
      <div className={styles.gradient}></div>
      <img src={story.image} alt={story.title} className={styles.image} width='360' height='500'/>
      <div className={styles.storyData}>
        <p className={`p2 ${styles.date}`}>{story.date}</p>
        <h3 className={`h3 ${styles.title}`}>{story.title}</h3>
        <p className={`p2 ${styles.author}`}>by {story.author}</p>
        <hr className={styles.dividerLine} />
        <Link to='../photosnap/comingsoon' className={`h4 link2 linkWithArrow`}>
          <p className='marginRight18px'>Read Story</p>
          <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
        </Link>
      </div>
    </div>
  )

  return (
    <div className={styles.storiesContainer}>
      {storyGrid}
    </div>
  )
}

export default StoryGrid
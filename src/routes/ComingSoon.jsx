import React from 'react'
import { Link } from "react-router-dom";
import styles from './ComingSoon.module.css'

const ComingSoon = () => {
  return (
    <div className='errorMessage'>
      <h1 className='textAlignCenter h1 marginBottom24px'>Coming Soon!</h1>

      <Link to={-1} className='link1'>
      <button className={`h4 button1 ${styles.button}`} >
        Go Back
      </button>
      </Link>
    </div>
  )
}

export default ComingSoon

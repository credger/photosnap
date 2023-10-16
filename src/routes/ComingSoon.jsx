import React from 'react'
import { Link } from "react-router-dom";


const ComingSoon = () => {
  return (
    <div className='errorMessage'>
      <h1 className='textAlignCenter h1 marginBottom24px'>Coming Soon!</h1>
      <Link to={-1} className='p link1'>
        Go Back
      </Link>
    </div>
  )
}

export default ComingSoon

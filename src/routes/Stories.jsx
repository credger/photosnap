import React from 'react'
import Navbar from '../components/Navbar';
import StoriesHero from '../components/StoriesHero';
import { stories } from '../gridData';
import StoryGrid from '../components/StoryGrid';
import Footer from '../components/Footer';

const Stories = () => {
  return (
    <div className='pageDimensions'>
      <Navbar />
      <StoriesHero />
      <StoryGrid stories={stories} />
      <Footer />
    </div>
  )
}

export default Stories

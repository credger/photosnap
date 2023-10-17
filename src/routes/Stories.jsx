import React from 'react'
import Navbar from '../components/Navbar';
import StoriesHero from '../components/StoriesHero';
import { stories } from '../gridData';
import StoryGrid from '../components/StoryGrid';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Stories = () => {
  return (
    <div className='pageDimensions'>
      <ScrollToTop />
      <Navbar />
      <StoriesHero />
      <StoryGrid stories={stories} />
      <Footer />
    </div>
  )
}

export default Stories

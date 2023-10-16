import React from 'react'
import heroImage from  '../assets/pricing/desktop/hero.jpg'
import Navbar from '../components/Navbar';
import FeaturesAndPricingHero from '../components/FeaturesAndPricingHero';
import BetaBanner from '../components/BetaBanner';
import Footer from '../components/Footer';
import Compare from '../components/Compare';
import SubscriptionPlans from '../components/SubscriptionPlans';

const Pricing = () => {



  const image = heroImage
  const objectPosition = '48% 50%'
  const heading = 'Pricing'
  const text = 'Create your stories. Photosnap is a platform for photographers \
    and visual storytellers. It’s the simple way to create and share your photos.'


  return (
    <div className='pageDimensions'>
      <Navbar />
      <FeaturesAndPricingHero image={image} heading={heading} text={text} objectPosition={objectPosition}/>
      <SubscriptionPlans />
      <Compare />
      <BetaBanner />
      <Footer />
    </div>
  )
}

export default Pricing

import React from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from './Features.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureGrid from '../components/FeatureGrid';
import { features } from '../gridData';
import FeaturesAndPricingHero from '../components/FeaturesAndPricingHero';
import heroImage from '../assets/features/desktop/hero.jpg'
import BetaBanner from '../components/BetaBanner';

const Features = () => {

  const image = heroImage
  const objectPosition = '32% 50%'
  const heading = 'Features'
  const text = 'We make sure all of our features are designed to be loved \
    by every aspiring and even professional photograpers who wanted to share their stories.'


  return (
    <div className={styles.featuresContainer}>
      <Navbar />
      <FeaturesAndPricingHero image={image} heading={heading} text={text} objectPosition={objectPosition} />
      <FeatureGrid features={features}/>
      <BetaBanner />
      <Footer />
    </div>
  )
}

export default Features

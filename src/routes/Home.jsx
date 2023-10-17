import Navbar from '../components/Navbar';
import HomeTiles from '../components/HomeTiles';
import { homeStories, homeFeatures } from '../gridData';
import StoryGrid from '../components/StoryGrid';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Home() {

  return (
    <div className='pageDimensions'>
      <ScrollToTop />
      <Navbar />
      <HomeTiles />
      <StoryGrid stories={homeStories} />
      <FeatureGrid features={homeFeatures}/>
      <Footer />
    </div>
  )
}

export default Home

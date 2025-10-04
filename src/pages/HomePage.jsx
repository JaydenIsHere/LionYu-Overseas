
import HeroPage from '../components/HomePage/HeroPage';
import Whysingapore from '../components/HomePage/whysingapore';
import Ourservices from '../components/HomePage/OurServices';
import Contact from '../components/HomePage/Contact';
import EducationHighlight from '../components/HomePage/EducationHighlight';
import WhoWeAre from '../components/HomePage/WhoWeAre';
import WhyChooseUs from '../components/HomePage/WhyChooseUs';
function HomePage() {
  return (
    <> {/* Wrap your app in BrowserRouter */}
      <HeroPage />
      <Whysingapore />
      <WhoWeAre />
      <EducationHighlight/>
      <Ourservices/>
      <WhyChooseUs/>
      <Contact/>
    </>
  );
}

export default HomePage;
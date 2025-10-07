import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LocalSchools from './pages/LocalSchools.jsx';    
import InternationalSchools from './pages/InternationalSchools.jsx'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateUniversities from './pages/PrivateUniversities.jsx'; 
import WhyChooseSingapore from './pages/WhyChooseSingapore.jsx'; 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />    
        <Route path="/local-schools" element={<LocalSchools />} />  
        <Route path="/international-schools" element={<InternationalSchools />} /> 
        <Route path="/private-universities" element={<PrivateUniversities />} /> 
        <Route path="/Why-Choose-Singapore" element={<WhyChooseSingapore />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

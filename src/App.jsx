import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LocalSchools from './pages/LocalSchools.jsx';    // Detail page for local schools
import InternationalSchools from './pages/InternationalSchools.jsx'; // Detail page for international schools
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateUniversities from './pages/PrivateUniversities.jsx'; // Detail page for private universities
import WhyChooseSingapore from './pages/WhyChooseSingapore.jsx'; // Detail page for private universities
function App() {
  return (
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <Navbar />

        <Routes>
        <Route path="/" element={<HomePage />} />                    {/* One long homepage */}
        <Route path="/local-schools" element={<LocalSchools />} />  {/* Separate detail page */}
        <Route path="/international-schools" element={<InternationalSchools />} /> {/* Detail page */}
        <Route path="/private-universities" element={<PrivateUniversities />} /> {/* Detail page */}
        <Route path="/Why-Choose-Singapore" element={<WhyChooseSingapore />} /> {/* Detail page */}
        {/* Add other detail routes here */}
      </Routes>

       <Footer />
    </BrowserRouter>
  );
}

export default App;
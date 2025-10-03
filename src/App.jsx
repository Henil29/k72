import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Projects from './pages/Projects';
import Navbar from './components/Navigation/Navbar';
import FullScreenNav from './components/Navigation/FullScreenNav';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

const AnimatedPage = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('fadeOut');
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      gsap.to('.page-wrapper', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setDisplayLocation(location);
          setTransitionStage('fadeIn');
        },
      });
    }
    if (transitionStage === 'fadeIn') {
      gsap.to('.page-wrapper', { opacity: 1, duration: 0.5 });
    }
  }, [transitionStage, location]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <div className="page-wrapper" style={{ opacity: 1 }}>
        <Routes location={displayLocation} key={displayLocation.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/agence" element={<AnimatedPage><Agence /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/blogs" element={<AnimatedPage><Blogs /></AnimatedPage>} />
          <Route path='/contact' element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

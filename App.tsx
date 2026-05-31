import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SampleInvites from './pages/SampleInvites';
import Footer from './components/Layout/Footer';
import BackgroundMusic from './components/BackgroundMusic';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />

      {/* 🎵 Soft Wedding Piano Autoplay */}
      <BackgroundMusic />

      <div className="min-h-screen flex flex-col font-sans antialiased text-brown-800 bg-ivory selection:bg-gold-400 selection:text-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/samples" element={<SampleInvites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;

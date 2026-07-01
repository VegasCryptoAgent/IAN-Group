import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consulting from './pages/Consulting';
import VentureStudio from './pages/VentureStudio';
import Accelerator from './pages/Accelerator';
import SixFrameStudio from './pages/SixFrameStudio';
import CaseStudies from './pages/CaseStudies';
import Pitch from './pages/Pitch';
import FreeAITools from './pages/FreeAITools';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen flex flex-col relative bg-obsidian text-white selection:bg-electric selection:text-obsidian">
        <div className="noise-overlay" />
        <div className="grid-bg fixed inset-0 pointer-events-none z-0" />
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/free-ai-tools" element={<FreeAITools />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/venture-studio" element={<VentureStudio />} />
            <Route path="/accelerator" element={<Accelerator />} />
            <Route path="/6frame-ai-studio" element={<SixFrameStudio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/pitch" element={<Pitch />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

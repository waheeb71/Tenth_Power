import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/chatbot/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MapWidget from './components/map/MapWidget';

import './index.css';

function App() {
  return (
   
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
               
              </Routes>
            </main>
             
            <Footer />
            <Chatbot />
            <MapWidget />

          </div>
        </Router>
      </LanguageProvider>
  
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Footer from './components/Footer';
import SeatSelection from './components/SeatSelection';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-16"> {/* Add padding to avoid overlap with fixed header */}
        <Routes>
          <Route path="/" element={<><Hero /><Speakers /><Schedule /><Partners /><About /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/schedule" element={<Schedule />} /> {/* Add this line for Schedule */}
          <Route path="/partners" element={<Partners />} /> {/* Add this line for Partners */}
          <Route path="/select-seats" element={<SeatSelection />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

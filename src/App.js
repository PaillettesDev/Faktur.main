//Dependencies
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

//Components
import Navbar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

//Pages
import Home from "./pages/Home/Home.js";
import Faction from "./pages/Faction/Faction.js";
import Recruitment from "./pages/Recruitment/Recruitment.js";
import Faq from "./pages/Faq/Faq.js";
import Achievement from "./pages/Achievement/Achievement.js";

function App() {

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 ? true : false
  )

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) setIsMobile(true)
    else setIsMobile(false)
  })

  const colors = {
    $background: '#14191E',
    $burger: '#fff',
    $text: '#ffffff',
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar colors={colors} />
      <Routes>
        <Route path="/" element={<Home colors={colors} isMobile={isMobile} />} />
        <Route path="/faction" element={<Faction colors={colors} isMobile={isMobile} />} />
        <Route path="/recruitment" element={<Recruitment colors={colors} isMobile={isMobile} />} />
        <Route path="/faq" element={<Faq colors={colors} isMobile={isMobile} />} />
        <Route path="/achievement" element={<Achievement colors={colors} isMobile={isMobile} />} />
      </Routes>
      <Footer colors={colors} />
    </div>
  );
}

export default App;

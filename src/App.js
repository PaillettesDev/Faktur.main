
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home/Home.js";
import {useState} from 'react';

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
        <Route path="/" element={<Home colors={colors} isMobile={isMobile}/>} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";

function App() {
  const colors = {
    $background: '#14191E',
    $burger: '#fff',
    $text: '#ffffff',
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar colors={colors}>
        <Routes>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;

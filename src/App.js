import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import ContactMe from './pages/Contact';
import Home from './pages/Home';
import MySkills from './pages/Skills';
import Navigation from "./Navigation";
import './pages/style.css';

function App() {
  return (
    <div className="mainDiv d-flex flex-column min-vh-100"> {/* Use flexbox to enable sticky footer */}
      <BrowserRouter>
        <Navigation />
        <div className="flex-grow-1"> {/* This div will take up the remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </BrowserRouter>

      <footer className="d-flex justify-content-center mt-4">
        <p>
          To have more latest updates, please follow me on   
          <a href="#"> Facebook</a> or check out my work on 
          <a href="#"> GitHub</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;



import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery";
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;

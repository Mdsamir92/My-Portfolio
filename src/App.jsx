import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Projects from "./component/Project";
import Experience from "./component/Experience";
import EducationSkills from "./component/Education";
import Contact from "./component/Contact";
import About from "./component/About";
import "./App.css";
import Footer from "./component/Footer";


function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <EducationSkills />
      <Contact/>
    </>
  );
}

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

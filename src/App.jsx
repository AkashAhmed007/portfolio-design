import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster />
      <div className="max-w-[1024px] mx-auto space-y-10">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-black text-white rounded-md"
        >
          <Navbar></Navbar>
        </motion.div>
        <div id="about" className="h-screen">
          <About></About>
        </div>
        <div id="skills" className="h-screen">
          <Skills></Skills>
        </div>
        <div id="projects" className="h-screen">
          <Projects></Projects>
        </div>
        <div id="contact" className="h-screen border rounded-md">
          <Contact></Contact>
        </div>
        <ScrollToTop></ScrollToTop>
        <div id="contact" className="h-40 mt-5">
         <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;

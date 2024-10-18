import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "./Components/ScrollToTop";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
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
          projects
        </div>
        <div id="contact" className="h-screen">
          contact
        </div>
        <ScrollToTop></ScrollToTop>
        <div id="contact" className="h-40 bg-black">
          Footer
        </div>
      </div>
    </>
  );
}

export default App;

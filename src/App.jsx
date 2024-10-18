import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto">
        <motion.div
        initial={{ y: '-100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-black text-white rounded-md">
          <Navbar></Navbar>
        </motion.div>
        <div>
          <About></About>
        </div>
      </div>
    </>
  );
}

export default App;

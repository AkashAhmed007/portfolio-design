import img from "../assets/image.png";
import { motion } from "framer-motion";
function About() {
  return (
    <div id="about" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-md">
        <img
          src={img}
          className=" lg:w-60 md:w-40 w-32 hover:transition transform"
        />
        <div className="border border-green-600 lg:h-96 h-36"></div>
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-xl font-bold"
          >
            Hi, I am Akash Ahmed
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl lg:text-3xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
              Font-End{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-600 to-green-400">
              Developer
            </span>
          </motion.h2>
          <p className="text-gray-600 pb-4">
            I am a junior Front-End Web developer.I can create dynamic and
            responsive Website and design as per Customer requirements.
          </p>
          <a
            href="#"
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Hire Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

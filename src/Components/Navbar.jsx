import logo from "../assets/1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm text-black"
          >
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#" id="#">
                Projects
              </a>
            </li>
            <li>
              <a href="#" id="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img src={logo} alt="logo" className="w-[50px] rounded-full" />
          <a href="https://github.com/AkashAhmed007" target="_blank">
            <FaGithub className="w-[20px] h-[20px]" />
          </a>
          <a href="https://www.linkedin.com/in/akash-ahmed007/" target="_blank">
            <FaLinkedin className="w-[20px] h-[20px] rounded-full" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 text-sm font-semibold">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a
           href="../../public/resume.pdf" download="My_Resume.pdf"
          className="relative rounded px-2 py-2 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Resume</span>
        </a>
        <a  href="../../public/resume.pdf" download="My_Resume.pdf">
          <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

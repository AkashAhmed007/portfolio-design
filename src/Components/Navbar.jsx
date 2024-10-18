import logo from "../assets/1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
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
              <a href="#" id="about">
                About
              </a>
            </li>
            <li>
              <a href="#" id="skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#" id="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#" id="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img src={logo} alt="logo" className="w-[50px] rounded-full" />
          <a href="http://">
            <FaGithub className="w-[20px] h-[20px]" />
          </a>
          <a href="http://">
            <FaLinkedin className="w-[20px] h-[20px] rounded-full" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 text-sm font-semibold">
          <li className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500">
            <a href="#" id="about">
              About
            </a>
          </li>
          <li className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500">
            <a href="#" id="skills">
              Skills
            </a>
          </li>
          <li className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500">
            <a href="#" id="projects">
              Projects
            </a>
          </li>
          <li className="hover:text-green-500 hover:bg-green-900 px-2 py-1 rounded-md shadow hover:shadow-xl transition duration-500">
            <a href="#" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a
          href="#"
          className="relative rounded px-2 py-2 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Resume</span>
        </a>
        <a href="#">
          <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

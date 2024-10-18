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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-sm"
          >
            <li>
              <a href="#" id="about">About</a>
            </li>
            <li>
              <a href="#" id="skills">Skills</a>
            </li>
            <li>
              <a href="#" id="projects">Projects</a>
            </li>
            <li>
              <a href="#" id="contact">Contact</a>
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
        <ul className="flex gap-3 text-sm text-slate-800 font-semibold">
          <li>
            <a href="#" id="about">About</a>
          </li>
          <li>
            <a href="#" id="skills">Skills</a>
          </li>
          <li>
            <a href="#" id="projects">Projects</a>
          </li>
          <li>
            <a href="#" id="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-bold">
        <h3>Resume</h3>
        <a href="#">
          <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

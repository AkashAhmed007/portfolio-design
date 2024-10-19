import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center">
        {/* Footer Tagline or Description */}
        <p className="mb-4 text-lg font-semibold">Lets connect and create something amazing together!</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-white">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Akash Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

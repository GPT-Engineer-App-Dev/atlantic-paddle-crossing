import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Atlantic Paddle</h3>
            <p>Crossing the Atlantic on a paddle board, one stroke at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
              <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
              <NavLink to="/blog" className="hover:text-gray-300">Blog</NavLink>
              <NavLink to="/gallery" className="hover:text-gray-300">Gallery</NavLink>
              <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
            </nav>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Crossing the Atlantic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
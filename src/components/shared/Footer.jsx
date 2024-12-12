import {  FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">日本語 Learn</h2>
            <p className="text-gray-400 mt-2">
              Expand your Japanese vocabulary with interactive lessons and tutorials.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Lessons
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-blue-400">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-400">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-blue-400">
                  Register
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="mailto:support@nihongo-learn.com" className="hover:text-blue-400">
                  support@tihan-learn.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/tazahmedcse/" className="hover:text-blue-400 text-[18px]">
                  <FaFacebookF/>
                </a>
                <a href="https://x.com/home" className="hover:text-blue-400 text-[18px]">
                <RiTwitterXLine />
                </a>
                <a href="https://www.linkedin.com/in/shaiktazuddin/" className="hover:text-blue-400 text-[18px]">
                <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          © {new Date().getFullYear()} 日本語 Learn. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
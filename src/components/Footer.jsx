import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="text-2xl font-bold text-white mb-6 md:mb-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>MW.</Link>
          </div>

          <div className="flex space-x-6">
             <Link to="home" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Home</Link>
             <Link to="about" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">About</Link>
             <Link to="projects" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Projects</Link>
             <Link to="contact" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm">
          <p className="mb-4 md:mb-0 text-slate-400 flex items-center">
            &copy; {new Date().getFullYear()} Melat Worku. Built with <Heart className="w-4 h-4 text-pink-500 mx-1 animate-pulse"/> By Melat.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/melorita" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/melat-worku-0a7685332/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors transform hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/melorita16/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

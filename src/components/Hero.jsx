import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Mail } from 'lucide-react';
import profilePic from '../assets/melat.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 w-full">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm md:text-base">Software Engineering Student</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight text-slate-900 dark:text-white">
            Hi, I'm <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Melat Worku</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I am a passionate software engineering student specializing in building clean, efficient, and user-centric web applications and software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center cursor-pointer group"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-100 rounded-full font-medium transition-all flex items-center justify-center cursor-pointer group"
            >
              Contact Me
              <Mail className="ml-2 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image/Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-[3rem] transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 flex items-center justify-center">
              <img 
                src={profilePic} 
                alt="Melat Worku" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

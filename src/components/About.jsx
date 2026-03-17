import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <p>
              Hi! I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Melat Worku</span>, a dedicated Software Engineering student with a strong passion for developing innovative and effective software solutions. I thrive on solving complex problems and transforming ideas into functional, clean, and scalable code.
            </p>
            <p>
              My journey in tech is driven by continuous learning. Whether it's crafting an intuitive user interface, optimizing a backend database, or structuring an entire system architecture, I love the whole process of building products that bring value to users.
            </p>
            <div>
              <a
                href="/cv-placeholder.pdf"
                className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group"
                download
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-400">
                BSc in Software Engineering<br />
                <span className="text-sm text-slate-500 dark:text-slate-500">Currently studying</span>
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Interests</h3>
              <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Web Development</li>
                <li>• UI/UX Design</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

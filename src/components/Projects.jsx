import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Ethio Events",
    description: "Ethio Events is a web-based platform that helps users discover and register for events happening across Ethiopia. It allows organizers to create and manage events while providing participants with clear details.",
    tech: ["React", "PHP"],
    github: "#",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Local Service Finder",
    description: "A dynamic web app that connects users with nearby service providers like plumbers, electricians, and cleaners.",
    tech: ["React", "Node.js", "Express.js"],
    github: "https://github.com/melorita/Local-Service-finder",
    image: "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Letters From The Past",
    description: "A digital time capsule where users can write letters to their future selves.",
    tech: ["React", "PHP"],
    github: "https://github.com/melorita/Letters-From-The-past",
    image: "https://plus.unsplash.com/premium_photo-1769010692771-09e6d2b8bd41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdCUyMGxldHRlcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "What To Do Now",
    description: "A smart task management app that prioritizes daily tasks based on user mood and urgency.",
    tech: ["JavaScript", "React", "Redux", "Tailwind CSS"],
    github: "https://github.com/melorita/What-Should-I-Do-Now",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 dark:bg-pink-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

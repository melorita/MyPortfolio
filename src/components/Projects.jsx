import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Event Management System",
    description: "A comprehensive platform to create, manage, and book events with seamless user registration and ticketing.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Local Service Finder",
    description: "A dynamic web app that connects users with nearby service providers like plumbers, electricians, and cleaners.",
    tech: ["React", "Firebase", "Tailwind CSS", "Google Maps API"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Letters From The Past",
    description: "A digital time capsule where users can write letters to their future selves or read public nostalgic stories.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Framer Motion"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1544837544-e5932a392ecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "What To Do Now",
    description: "A smart task management app that prioritizes daily tasks based on user behavior and urgency.",
    tech: ["JavaScript", "React", "Redux", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
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
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
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
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <a href={project.github} className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
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

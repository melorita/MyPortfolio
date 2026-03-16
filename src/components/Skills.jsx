import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Languages", items: ["Python", "JavaScript", "C++", "Java"] },
  { category: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "SQL / NoSQL"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Figma"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 font-mono text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 font-medium text-sm">{skill}</span>
                    </div>
                    {/* Progress Bar Alternative: using pill badges instead */}
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }} // Visual generic width
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="bg-blue-500 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

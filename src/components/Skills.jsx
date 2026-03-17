import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Cpu } from 'lucide-react';

const skillsData = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "JavaScript", level: "90%", icon: "🌐" },
      { name: "Python", level: "85%", icon: "🐍" },
      { name: "Java", level: "75%", icon: "☕" },
      { name: "C++", level: "70%", icon: "💻" },
      { name: "C#", level: "50%", icon: "🔷" }
    ] 
  },
  { 
    category: "Frontend", 
    icon: <Layout className="w-5 h-5" />,
    items: [
      { name: "React", level: "95%", icon: "⚛️" },
      { name: "Tailwind CSS", level: "88%", icon: "🎨" },
      { name: "HTML5", level: "99%", icon: "🏗️" },
      { name: "CSS3", level: "98%", icon: "✨" }
    ] 
  },
  { 
    category: "Backend", 
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "Node.js", level: "83%", icon: "🟢" },
      { name: "Express", level: "80%", icon: "📁" },
      { name: "MySQL", level: "90%", icon: "📊" }
    ] 
  },
  { 
    category: "Developer Tools", 
    icon: <Terminal className="w-5 h-5" />,
    items: [
      { name: "Git & GitHub", level: "89%", icon: "🛠️" },
      { name: "VS Code", level: "100%", icon: "⌨️" },
      { name: "Figma", level: "80%", icon: "🎨" }
    ] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Skills</h2>
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
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {skillGroup.icon}
                </span>
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="group/item">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm flex items-center">
                        <span className="mr-2 opacity-70 group-hover/item:opacity-100 transition-opacity">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
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

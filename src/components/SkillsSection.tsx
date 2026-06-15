"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Database, Layout, Server, Cpu } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  react: <Layout size={32} className="text-[#61DAFB]" />,
  python: <Code2 size={32} className="text-[#3776AB]" />,
  cpp: <Cpu size={32} className="text-[#00599C]" />,
  node: <Server size={32} className="text-[#339933]" />,
};

export default function SkillsSection() {
  const { main, tools } = portfolioData.skills;

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The primary technologies I use to build scalable systems and intuitive interfaces.
          </p>
        </motion.div>

        {/* Bento Grid for Main Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {main.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-colors group"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {iconMap[skill.icon] || <Database size={32} />}
              </div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Row for Tools */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-4 py-4"
          >
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <div 
                key={`${tool}-${index}`}
                className="px-6 py-3 rounded-full glass text-gray-300 font-medium border border-white/5 whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

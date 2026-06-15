"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {
  const { degree, institution, graduationYear, gpa, coursework } = portfolioData.education;

  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-gray-400">Academic background and relevant coursework.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass rounded-3xl p-8 relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="p-6 bg-white/5 rounded-2xl flex-shrink-0">
            <GraduationCap size={48} className="text-accent-cyan" />
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h3 className="text-2xl font-bold">{degree}</h3>
              <span className="text-accent-purple font-medium bg-accent-purple/10 px-3 py-1 rounded-full text-sm">
                Class of {graduationYear}
              </span>
            </div>
            <h4 className="text-xl text-gray-400 mb-6">{institution}</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Award className="text-gray-500 flex-shrink-0" size={20} />
                <div>
                  <h5 className="font-semibold mb-1">Academic Standing</h5>
                  <p className="text-gray-400 text-sm">Cumulative GPA: {gpa}</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <BookOpen className="text-gray-500 flex-shrink-0" size={20} />
                <div>
                  <h5 className="font-semibold mb-1">Key Coursework</h5>
                  <ul className="text-gray-400 text-sm list-disc list-inside">
                    {coursework.slice(0, 3).map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const { degree, institution, graduationYear, gpa, coursework } = portfolioData.education;

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Education</h2>
        <p className="text-gray-400 text-sm sm:text-base">Academic background and relevant coursework.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center">
          {/* Icon — smaller on mobile */}
          <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl flex-shrink-0">
            <GraduationCap size={36} className="text-accent-cyan sm:hidden" />
            <GraduationCap size={48} className="text-accent-cyan hidden sm:block" />
          </div>

          <div className="flex-grow min-w-0">
            {/* Degree + graduation year */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 sm:mb-2 gap-2">
              <h3 className="text-xl sm:text-2xl font-bold">{degree}</h3>
              <span className="text-accent-purple font-medium bg-accent-purple/10 px-3 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto whitespace-nowrap">
                Class of {graduationYear}
              </span>
            </div>
            <h4 className="text-base sm:text-xl text-gray-400 mb-5 sm:mb-6">{institution}</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* GPA */}
              {gpa && (
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-sm">GPA</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 text-sm sm:text-base">Academic Standing</h5>
                    <p className="text-gray-400 text-sm">Cumulative GPA: {gpa}</p>
                  </div>
                </div>
              )}

              {/* Coursework */}
              <div className="flex gap-3 items-start">
                <BookOpen className="text-gray-500 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-semibold mb-1 text-sm sm:text-base">Key Coursework</h5>
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-0.5">
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

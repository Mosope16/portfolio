"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Activity } from "lucide-react";

export default function CurrentlyBuilding() {
  const { name, progress, learning } = portfolioData.currentlyBuilding;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-accent-cyan/20 relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent-cyan/5 blur-3xl rounded-full pointer-events-none" />

        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
          </div>
          <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-400">
            Currently Building
          </h2>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">{name}</h3>

        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-sm mb-2 text-gray-400">
            <span>Development Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
            />
          </div>
        </div>

        <div className="bg-black/40 rounded-xl p-4 sm:p-6 border border-white/5 flex gap-3 sm:gap-4 items-start">
          <Activity className="text-accent-purple flex-shrink-0 mt-1" size={18} />
          <div>
            <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              What I&apos;m learning right now:
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{learning}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { headline, credibilityTag, valueProposition, ctaText } = portfolioData.hero;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#projects");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow — smaller on mobile so they don't bleed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent-cyan/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-accent-purple/10 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        {/* Credibility tag — allow wrapping on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 glass text-xs sm:text-sm font-medium text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0 animate-pulse" />
          <span className="leading-snug">{credibilityTag}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {valueProposition}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            onClick={handleCtaClick}
            className="group flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
          >
            {ctaText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 glass border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/5 transition-colors w-full sm:w-auto justify-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

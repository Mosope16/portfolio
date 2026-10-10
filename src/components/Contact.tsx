"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const { email, github, linkedin, twitter } = portfolioData.contact;
  const { availability } = portfolioData.about;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* Left column — text + socials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            {availability}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              together.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-lg mb-6 sm:mb-10 max-w-md"
          >
            Whether it&apos;s a full-time role, a freelance gig, or just a technical discussion, my inbox
            is open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 sm:gap-4"
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 sm:p-4 rounded-full glass hover:bg-white/10 transition-colors text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 sm:p-4 rounded-full glass hover:bg-white/10 transition-colors text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-3 sm:p-4 rounded-full glass hover:bg-white/10 transition-colors text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="p-3 sm:p-4 rounded-full glass hover:bg-white/10 transition-colors text-white"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right column — contact form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl"
        >
          <form className="flex flex-col gap-5 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                placeholder="How can we work together?"
              />
            </div>
            <button className="w-full py-3 sm:py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group text-sm sm:text-base">
              Send Message
              <Send
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

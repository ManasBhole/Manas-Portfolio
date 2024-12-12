"use client";

import { TypewriterEffect } from "../ui/typewriter-effect";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { ButtonLitLink } from "../ui/button-lit";
import { Particles } from "../ui/particles";
import ClientOnly from "../ClientOnly";
import { motion } from "framer-motion"; // Add framer-motion for animations

export default function Hero() {
  const words = [
    {
      text: "Hi",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "I'm",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "Manas",
      className: "text-blue-600 dark:text-blue-400 font-bold" // Added color highlight
    },
    {
      text: "Bhole",
      className: "text-blue-600 dark:text-blue-400 font-bold" // Added color highlight
    }
  ];

  const statsData = [
    { number: "20+", text: "Data Pipelines", icon: "📊" },
    { number: "100TB+", text: "Data Processed", icon: "💾" },
    { number: "99.9%", text: "Pipeline Reliability", icon: "🎯" }
  ];

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900">
      {/* Particles Background with reduced opacity */}
      <div className="absolute inset-0 opacity-50">
        <ClientOnly>
          <Particles quantity={100} ease={35} /> {/* Increased particles */}
        </ClientOnly>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full flex flex-col items-center justify-center pt-24 pb-12"
        >
          {/* Typewriter Effect */}
          <div className="hidden md:block mb-8">
            <TypewriterEffect words={words} className="text-5xl sm:text-6xl" />
          </div>
          <div className="md:hidden mt-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Manas Bhole</span>
            </h1>
          </div>
          
          {/* Introduction Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto text-center mt-6 text-lg leading-relaxed"
          >
            I architect digital symphonies where code meets purpose, transforming complex business challenges into elegant software solutions. With Spring Boot as my canvas and Kubernetes as my stage, I craft scalable applications that don't just function – they evolve.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 mt-10"
          >
            {[
              { href: "https://github.com/ManasBhole?tab=repositories", icon: BsGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/manas-bhole/", icon: BsLinkedin, label: "LinkedIn" },
              { href: "https://medium.com/@manasbhole2000", icon: FaMediumM, label: "Medium" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-neutral-700 dark:text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 mt-10"
          >
            <ButtonLitLink
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View Projects
            </ButtonLitLink>

            <ButtonLitLink
              href="/Manas_D_Bhole_Resume.pdf"
              className="flex items-center whitespace-nowrap bg-white dark:bg-neutral-800 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              download
            >
              <span className="inline-block">Resume</span>
              <HiOutlineDownload className="w-5 h-5 ml-2 inline-block" />
            </ButtonLitLink>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.text}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">{stat.number}</h2>
                <p className="text-sm text-neutral-600 dark:text-white/80">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
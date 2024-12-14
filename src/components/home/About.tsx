"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
          Software Engineer | Cloud Solutions | Big Data | Devops 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-neutral-700 dark:text-white/90 mb-4 text-center"> I craft software solutions that transform complex challenges into scalable, elegant systems. Using Spring Boot and Kubernetes, I build applications that not only perform but evolve. </p> <p className="text-neutral-700 dark:text-white/90 mb-6 text-center"> From manufacturing systems in India to legal and healthcare solutions in the USA, I specialize in full-stack development with Java, Spring Boot, Angular, and cloud-native microservices. </p> <p className="text-neutral-700 dark:text-white/90 mb-6 text-center"> Leveraging DevOps practices and cloud technologies, I deliver systems that scale, optimize performance, and automate deployments, creating seamless, impactful solutions. </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Stat label="Years Experience" value="3+" />
              <Stat label="Projects Completed" value="40+" />
              <Stat label="Technologies" value="20+" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-[#030712] p-6 rounded-xl
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-300 dark:hover:border-purple-500/50
        transition duration-300"
    >
      <div className="text-3xl font-bold text-neutral-900 dark:text-purple-400">
        {value}
      </div>
      <div className="text-sm text-neutral-600 dark:text-white/80 mt-1">
        {label}
      </div>
    </motion.div>
  );
}

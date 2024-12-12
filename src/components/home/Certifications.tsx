'use client';

import { motion } from 'framer-motion';
import { HoverExpandableCard } from '../ui/hover-expandable-card';

const certifications = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    subtitle: "Amazon AWS",
    description: "Demonstrates foundational knowledge in using Databricks for data engineering and data science, including data pipeline construction and optimization with Apache Spark.",
    date: "Oct 2024",
    issuer: "Amazon",
    link: "https://www.credly.com/badges/4eaee706-4b3f-4448-80ef-05d06bdd8720?source=linked_in_profile"
  },
  {
    title: " Additional Details Introduction to Packet Tracer",
    subtitle: "Cisco",
    description: "focuses on preparing candidates to design and implement various data storage solutions on Azure, essential for the Azure Data Engineer Associate certification.",
    date: "Oct 2024",
    issuer: "Cisco",
    link: "https://www.credly.com/earner/earned/badge/8098e64c-ccac-4e22-a77f-ad6076b942cb"
  },
  {
    title: "Cybersecurity Essentials",
    subtitle: "Cybersecurity Essentials",
    description: "Covers effective strategies and techniques for managing projects using Basecamp, a popular project management tool. This includes organizing tasks, collaborating with teams, setting timelines, and ensuring project milestones are met efficiently.",
    date: "Oct 2024",
    issuer: "Cisco",
    link: "https://www.credly.com/earner/earned/badge/d2af2835-ecf3-499b-a3e4-0ed66484df1a"
  },
  {
    title: "CCNA: Introduction to Networks",
    subtitle: "Networks",
    description: "Covers the basic concepts, architecture, and functionalities of data warehouses, including how to design, build, and use them for effective data integration, analysis, and reporting.",
    date: "Oct 2024",
    issuer: "Cisco",
    link: "https://www.youracclaim.com/badges/65e98361-2ff2-4c4e-bd77-3cbfc1173ce3?source=linked_in_profile"
  },
  {
    title: " Engineering: Masters Virtual Internship Platform",
    subtitle: "Fundamentals",
    description: "Discusses methods and approaches for identifying, analyzing, and resolving common and complex data-related issues faced in data engineering, including performance optimization, data integration, and maintaining data quality and consistency.",
    date: "Oct 2024",
    issuer: "Microsoft",
    link: "http://insidesherpa.com/module-badges/cXcwAdQ9MJttAn3Kg/Ne4ZdX2YjJCMWQHAt/7ZdGbzhzJXbdMnfmS/Engineering%3A%20Undergraduate%20%26%20Masters%20Virtual%20Internship%20Platform/Manas"
  },
  {
    title: "Databases and SQL for Data Science",
    subtitle: "Databases and SQL for Data Science",
    description: "An interactive assessment tool used by J.P. Morgan to evaluate potential software engineering candidates. It simulates real-world problems that software engineers at the firm might face, testing their coding skills, problem-solving abilities, and how they handle project management tasks under conditions that mimic the actual work environment.",
    date: "Feb 2024",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/certificate/9WGEQDHUKRB5"
  }
];

export default function Certifications() {
  // Group certifications into pairs for the grid
  const certificationRows = certifications.reduce((rows, cert, index) => {
    if (index % 2 === 0) {
      rows.push([cert]);
    } else {
      rows[rows.length - 1].push(cert);
    }
    return rows;
  }, [] as typeof certifications[]);

  return (
    <section id="certifications" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificationRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HoverExpandableCard {...cert} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

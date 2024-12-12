'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingSkill } from '../ui/floating-skill';
import { 
  SiPython, SiScala, SiJavascript, SiCplusplus, SiR,
  SiApachespark, SiApachekafka, SiApachehadoop,
  SiApacheflink, SiApachecassandra, SiApacheairflow,
  SiAmazon, SiAmazons3,
  SiGooglecloud, SiMysql, SiPostgresql,
  SiOracle, SiSnowflake,
  SiMongodb, SiRedis, SiDocker, SiKubernetes,
  SiJenkins, SiGit, SiGrafana,
  SiAnsible, SiTensorflow,
  SiPytorch, SiScikitlearn,
  SiFlask, SiDjango, SiExpress, SiSpringboot,
  SiTableau, SiDbt
} from 'react-icons/si';
import { 
  FaJava, FaTerminal, FaServer
} from 'react-icons/fa';
import { DiNginx } from 'react-icons/di';

// Organize skills into rows for pyramid layout
const skillRows = [
  // First row - 12 skills
  [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Scala', icon: SiScala, color: '#DC322F' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  ],
  // Second row - 11 skills
  [
    { name: 'Spark', icon: SiApachespark, color: '#E25A1C' },
    { name: 'Kafka', icon: SiApachekafka, color: '#D22128' },
    { name: 'Hadoop', icon: SiApachehadoop, color: '#FF652F' },
    { name: 'Flink', icon: SiApacheflink, color: '#E6526F' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Flask', icon: SiFlask, color: '#3775A9' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Express', icon: SiExpress, color: '#68A063' },
  ],
  // Third row - 10 skills
  [
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'R', icon: SiR, color: '#276DC3' },
    { name: 'Shell', icon: FaTerminal, color: '#4EAA25' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
    { name: 'Nginx', icon: DiNginx, color: '#009639' },
    { name: 'Spring', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Airflow', icon: SiApacheairflow, color: '#017CEE' },
  ],
  // Fourth row - 9 skills
  [
    { name: 'NiFi', icon: FaServer, color: '#728E9B' },
    { name: 'Cassandra', icon: SiApachecassandra, color: '#1287B1' },
    { name: 'S3', icon: SiAmazons3, color: '#569A31' },
    { name: 'Oracle', icon: SiOracle, color: '#F80000' },
    { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
    { name: 'Tableau', icon: SiTableau, color: '#E97627' },
    { name: 'dbt', icon: SiDbt, color: '#FF694B' },
  ],
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            My Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Hover over the skills to explore my technical proficiencies
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              className={`
                flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4
                w-[98%] sm:w-[96%] lg:w-[94%]
                ${rowIndex === 1 && 'w-[96%] sm:w-[92%] lg:w-[88%]'}
                ${rowIndex === 2 && 'w-[94%] sm:w-[88%] lg:w-[82%]'}
                ${rowIndex === 3 && 'w-[92%] sm:w-[84%] lg:w-[76%]'}
              `}
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.05
                  }}
                >
                  <FloatingSkill
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

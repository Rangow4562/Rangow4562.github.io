"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "AI Engineer",
    company: "Analytical Intelligence International",
    period: "Jan 2025 - Present",
    description:
      "Lead the development of computer vision solutions for autonomous systems. Designed and implemented deep learning models that improved object detection accuracy by 35%. Managed a team of 4 engineers and collaborated with cross-functional teams to deliver projects on time.",
    technologies: ["PyTorch", "TensorFlow", "LLM", "Azure", "DevOps", "MLflow"],
  },
  {
    title: "ML Data Engineer",
    company: "Shodh AI",
    period: "June 2024 - Jan 2025",
    description:
      "As a Data Engineer at Shodh AI, I design and implement data pipelines and frameworks to support the development of cutting-edge AI solutions for LLM and Data Foundry. I work closely with data scientists and machine learning engineers to ensure the availability and quality of data for training and evaluation of models.",
    technologies: ["PyTorch", "TensorFlow", "LLM", "SLM", "AWS", "GCP", "DevOps", "MLflow"],
  },
  {
    title: "Data Engineer",
    company: "PRAVAIG PVT LTD",
    period: "Jan 2023 - June 2024",
    description:
      "Develop data connection agents for various data sources - structured and un-structured. Build Autonomus Driving System data pipelines and ADAS systems with Ingreate LLM framework. Collaborate with data scientists to ensure data quality and availability for model training. Implemented a data validation framework that reduced data errors by 30%.",
    technologies: ["Python", "NLP", "HuggingFace", "Spark", "Azure", "DevOps", "AWS", "LLM"],
  },
  {
    title: "Big Data Engineer",
    company: "TATA CONSULTANCY SERVICES (TCS).",
    period: "Apr 2022 - Oct 2022",
    description:
      "Offered friendly and efficient service to customers, handled challenging situations with ease.Led projects and analyzed data to identify opportunities for improvement. Developed and maintained data pipelines for large-scale data processing. Collaborated with cross-functional teams to deliver high-quality solutions.",
    technologies: ["R", "Python", "SQL", "Tableau", "Statistical Modeling"],
  },
  {
    title: "Research Assistant",
    company: "Menmozhi Techonologies.",
    period: "Feb 2022 - May 2022",
    description:
      "Experience in the space of Software Development in Computer Vision utilizing a mix of customary Image Processing based and current Machine Learning/Deep Learning-based methods. Worked on the development of a computer vision-based solution for real-time object detection and tracking. Collaborated with a team of researchers to publish findings in a peer-reviewed journal.",
    technologies: ["TensorFlow", "Reinforcement Learning", "Research Methods"],
  },
]

export default function WorkExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-green-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            My professional journey in the field of artificial intelligence and data science.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full hidden md:block"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 relative"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2"></div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center z-10">
                    <Briefcase className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="md:hidden mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                      <Briefcase className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-green-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-300 border border-green-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


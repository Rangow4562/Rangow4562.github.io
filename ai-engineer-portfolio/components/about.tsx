"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", proficiency: 85 },
      { name: "R", proficiency: 85 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Linux", proficiency: 85 },
    ],
  },
  {
    category: "Big Data Tools",
    items: [
      { name: "Hadoop", proficiency: 80 },
      { name: "Spark", proficiency: 80 },
      { name: "Scala", proficiency: 80 },
      { name: "Hive", proficiency: 80 },
      { name: "NoSQL", proficiency: 80 },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "ML Algorithms", proficiency: 80 },
      { name: "Deep Learning", proficiency: 80 },
    ],
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "LLM", proficiency: 80 },
      { name: "NMT", proficiency: 80 },
      { name: "HuggingFace", proficiency: 80 },
    ],
  },
  {
    category: "Business Intelligence",
    items: [
      { name: "Google Data Studio", proficiency: 80 },
      { name: "Microsoft Power BI", proficiency: 80 },
      { name: "Tableau", proficiency: 80 },
    ],
  },
  {
    category: "Design & Prototyping",
    items: [
      { name: "Adobe Illustrator", proficiency: 90 },
      { name: "Adobe Photoshop", proficiency: 90 },
      { name: "Adobe Express", proficiency: 90 },
    ],
  },
  {
    category: "ML & DL Frameworks",
    items: [
      { name: "TensorFlow", proficiency: 70 },
      { name: "PyTorch", proficiency: 70 },
      { name: "Keras", proficiency: 70 },
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { name: "AWS", proficiency: 80 },
      { name: "Azure", proficiency: 80 },
      { name: "Google Cloud Platform", proficiency: 80 },
    ],
  },
]

export default function About() {
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
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I'm a passionate AI Engineer with expertise in developing intelligent systems that solve complex problems.
            With a strong background in machine learning and deep learning, I create innovative solutions that drive
            business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">My Journey</h3>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in AI and machine learning, I've worked on projects ranging from computer
              vision applications to natural language processing systems. My passion for AI began during my graduate
              studies, where I focused on developing algorithms for pattern recognition.
            </p>
            <p className="text-gray-300">
              I've collaborated with cross-functional teams to deliver AI solutions that address real-world challenges
              across industries including healthcare, finance, and e-commerce. My approach combines technical expertise
              with a deep understanding of business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">Education & Certifications</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex flex-col">
                <span className="font-semibold">Master of Science in Big Data Analytics, AI Specialization</span>
                <span className="text-gray-400">St. Joseph’s College (Autonomous) - Bengaluru, Karnataka, India, Jun 2020 - Jul 2022</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">Bachelor of Computer Applications</span>
                <span className="text-gray-400">Seshadri-Puram Institution of Management and Science – Seshadri-Puram, Bengaluru, Karnataka, India, Jun 2016 - Jul 2019</span>
              </li>
              {/* <li className="flex flex-col">
                <span className="font-semibold">TensorFlow Developer Certification</span>
                <span className="text-gray-400">Google, 2021</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold">AWS Machine Learning Specialty</span>
                <span className="text-gray-400">Amazon Web Services, 2022</span>
              </li> */}
            </ul>
          </motion.div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          My <span className="text-green-500">Skills</span>
        </h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300"
            >
              <h4 className="text-xl font-bold mb-4 text-green-400">{skillGroup.category}</h4>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


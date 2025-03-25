"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Neural Image Synthesis",
    description:
      "A GAN-based system for generating photorealistic images from text descriptions, utilizing transformer architectures for improved coherence.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Computer Vision", "GANs", "PyTorch", "Transformers"],
    github: "#",
    demo: "#",
  },
  {
    title: "Product-Photography-with-generative-A.I",
    description:
      "The script is designed for background change tasks and can be useful in creative applications or image editing workflows.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Recommendation Systems", "Deep Learning", "TensorFlow", "AWS"],
    github: "https://github.com/Rangow4562/Generative_ai?tab=readme-ov-file",
    demo: "#",
  },
  {
    title: "Math Solver with Retrieval-Augmented Generation (RAG)",
    description:
      "The Math Problem Solver with Retrieval-Augmented Generation (RAG) is a Python-based project designed to automate the solving of mathematical problems using state-of-the-art natural language processing (NLP) techniques. It leverages the power of Transformers models, fine-tuned on mathematical datasets, to provide accurate solutions to algebraic and linear equations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["NLP", "Transformers", "LLM", "Python", "FastAPI"],
    github: "https://github.com/Rangow4562/math_fine_tuned_pythia",
    demo: "#",
  },
  {
    title: "Dog_emotion_identification_system",
    description:
      "We follow the ICML's official training, validation, and test sets while training on our dataset (FER2013 dataset reference). Our dataset contains 5954 pictures of four main emotions: anger, fear, happiness, and sadness.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Anomaly Detection", "Deep Learning", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/Rangow4562/Dog_emotion_identification_system",
    demo: "#",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore my portfolio of AI and machine learning projects that demonstrate my expertise in developing
            innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 group"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          className="text-white hover:text-green-400 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          className="text-white hover:text-green-400 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-300 border border-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-green-900/20 to-transparent opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-green-400 mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Ranjith Kumar K.N.</span>
          </h1>
          <div className="text-xl md:text-3xl font-medium text-gray-300 h-16">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1000,
                "Machine Learning Expert",
                1000,
                "Deep Learning Researcher",
                1000,
                "Computer Vision Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Building intelligent systems that solve real-world problems through innovative AI solutions and cutting-edge
          research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-medium text-white shadow-lg hover:shadow-green-500/20 transition-all"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="px-8 py-3 border border-green-500 rounded-full font-medium text-white hover:bg-green-500/10 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDown className="text-green-400 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out to me using the
            form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-900/30 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-400">ranjith.kumar.kn26@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-900/30 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-400">Bengaluru, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-900/30 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+91 9008769944</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com/Rangow4562"
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/in/ranjith-kumar-58a676191"
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                {/* <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </motion.a> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900/30 border border-green-700 text-green-300 rounded-lg p-4 mb-6"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


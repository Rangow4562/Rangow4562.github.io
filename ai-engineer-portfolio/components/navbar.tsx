"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X, ArrowUp } from "lucide-react"

// Update the navItems array to include the Experience section
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold">
            <span className="text-green-500">AI</span>Engineer
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-green-500 transition-colors block py-2"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: "smooth",
                        })
                        setIsOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Return to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Return to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  )
}


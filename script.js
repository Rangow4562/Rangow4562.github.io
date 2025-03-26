// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Typed.js initialization
  const typed = new Typed("#typing-text", {
    strings: ["AI Engineer", "Machine Learning Expert", "Deep Learning Researcher", "Computer Vision Specialist"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  })

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  const returnToTopBtn = document.getElementById("return-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    if (window.scrollY > 500) {
      returnToTopBtn.classList.add("visible")
    } else {
      returnToTopBtn.classList.remove("visible")
    }
  })

  // Return to top button
  returnToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.innerHTML = navMenu.classList.contains("active")
      ? '<i class="bx bx-x"></i>'
      : '<i class="bx bx-menu"></i>'
  })

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.innerHTML = '<i class="bx bx-menu"></i>'
    })
  })

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress")

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      bar.style.width = width + "%"
    })
  }

  // Intersection Observer for skill bars
  const skillsSection = document.querySelector(".skills-grid")

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(skillsSection)
  }

  // Form submission
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const submitBtn = contactForm.querySelector(".submit-btn")
      submitBtn.classList.add("loading")
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        contactForm.reset()
        submitBtn.classList.remove("loading")
        submitBtn.disabled = false
        formSuccess.style.display = "block"

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.style.display = "none"
        }, 5000)
      }, 1500)
    })
  }

  // Add fade-in animation to elements when they come into view
  const fadeElements = document.querySelectorAll(
    ".about-card, .skills-card, .project-card, .contact-form-container, .contact-info",
  )

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 1s forwards"
          fadeObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  fadeElements.forEach((element) => {
    element.style.opacity = "0"
    fadeObserver.observe(element)
  })

  // Add parallax effect to background elements
  const parallaxElements = document.querySelectorAll(".bg-circle-1, .bg-circle-2")

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || 20
      const moveX = (x - 0.5) * speed
      const moveY = (y - 0.5) * speed

      element.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".project-overlay").style.opacity = "1"
    })

    card.addEventListener("mouseleave", function () {
      this.querySelector(".project-overlay").style.opacity = "0"
    })
  })

  // Add tilt effect to cards
  const tiltElements = document.querySelectorAll(".about-card, .skills-card, .project-card, .contact-form-container")

  tiltElements.forEach((element) => {
    element.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const xPercent = x / rect.width
      const yPercent = y / rect.height

      const rotateX = (0.5 - yPercent) * 10
      const rotateY = (xPercent - 0.5) * 10

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    })

    element.addEventListener("mouseleave", function () {
      this.style.transform = ""
    })
  })

  // Add particles to hero section
  const heroSection = document.querySelector(".hero")

  if (heroSection) {
    const particlesContainer = document.createElement("div")
    particlesContainer.className = "particles-container"
    heroSection.appendChild(particlesContainer)

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      const size = Math.random() * 5 + 1
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const delay = Math.random() * 5
      const duration = Math.random() * 10 + 10

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`
      particle.style.animationDelay = `${delay}s`
      particle.style.animationDuration = `${duration}s`

      particlesContainer.appendChild(particle)
    }
  }
})


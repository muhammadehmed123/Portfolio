import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';

const certifications = [
  {
    title: 'AWS Cloud Technical Essentials',
    image: '/AWS%20cloud%20technical%20essentials.png',
    description: 'AWS Cloud Technical Essentials Certificate.'
  },
  {
    title: 'Git',
    image: '/git.png',
    description: 'Git Certificate.'
  },
  {
    title: 'CKAD',
    image: '/ckad.png',
    description: 'Certified Kubernetes Application Developer Certificate.'
  },
  {
    title: 'AWS Bootcamp',
    image: '/awsboot.png',
    description: 'AWS Bootcamp Certificate.'
  }
];

const education = {
  school: 'Sir Syed University of Engineering and Technology',
  degree: "Bachelors in Computer Engineering"
};

const EducationCertifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play carousel (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Education Section */}
      <section id="education-certifications" className="relative py-12 sm:py-20 md:py-28 px-4 bg-[#18181b] overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-700/30 via-green-400/10 to-transparent rounded-full blur-3xl z-0 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[28px] font-poppins uppercase mb-10 sm:mb-16 md:mb-20 text-center tracking-tight drop-shadow-lg px-2">
              Education
            </h2>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center"
          >
            <div className="bg-[#23272f] rounded-2xl shadow-xl px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12 w-full max-w-3xl flex flex-col items-center text-center">
              <span className="text-blue-400 font-semibold text-base sm:text-lg mb-3 font-poppins tracking-wide uppercase">Education</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-white mb-3 leading-tight drop-shadow">
                {education.school}
              </h3>
              <p className="text-blue-300 text-lg sm:text-xl mb-2 font-medium font-poppins leading-relaxed">{education.degree}</p>
              <p className="text-gray-400 text-base sm:text-lg font-normal font-poppins">2022 - 2026</p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-400/20 via-blue-400/10 to-transparent rounded-full blur-2xl z-0 animate-pulse-slow" />
      </section>

      {/* Certifications Section with Carousel */}
      <section id="certifications" className="relative py-12 sm:py-20 md:py-28 px-4 overflow-hidden bg-[#0f0f11]">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f11] via-[#1a1a1f] to-[#0f0f11]"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 4c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM60 91c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM35 41c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 60c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-green-700/20 via-blue-400/10 to-transparent rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/15 via-green-400/10 to-transparent rounded-full blur-2xl z-0"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[28px] font-poppins uppercase mb-10 sm:mb-16 md:mb-20 text-center tracking-tight drop-shadow-lg px-2">
              Certifications
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div 
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1f]/90 via-[#23272f]/90 to-[#1a1a1f]/90 backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Subtle background pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              {/* Navigation Buttons */}
              <motion.button
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group shadow-lg border border-white/20"
                aria-label="Previous certificate"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 group shadow-lg border border-white/20"
                aria-label="Next certificate"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Carousel Slides */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center z-10">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                  >
                    <motion.div
                      variants={zoomIn(0.2, 0.8)}
                      className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] h-full max-h-[90%] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-blue-500/30 hover:scale-[1.02] border-2 border-transparent hover:border-blue-200/50"
                    >
                      <div className="w-full h-[70%] flex items-center justify-center mb-4 sm:mb-6 overflow-hidden">
                        <img
                          src={certifications[currentIndex].image}
                          alt={certifications[currentIndex].title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-center px-2">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-gray-800 mb-2 drop-shadow-lg leading-tight">
                          {certifications[currentIndex].title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-poppins font-normal leading-relaxed">
                          {certifications[currentIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 z-10 relative">
                {certifications.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 sm:w-10 h-3 sm:h-4 bg-blue-500 shadow-lg shadow-blue-500/50'
                        : 'w-3 sm:w-4 h-3 sm:h-4 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationCertifications;

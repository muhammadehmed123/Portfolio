import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { worldmap } from '../assets';

function Contact() {
  return (
    <section id="contact" className="relative py-14 sm:py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={worldmap}
          alt="World map background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#18181b] via-[#18181b]/95 to-[#18181b]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent"></div>
      </div>
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-blue-700/20 via-green-400/10 to-transparent rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-400/15 via-blue-400/10 to-transparent rounded-full blur-2xl z-0"
      />

      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] mb-10 sm:mb-12 md:mb-16 text-center font-poppins uppercase tracking-tight">
            Contact
          </h2>
        </motion.div>
        
        <motion.form
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          action="https://formspree.io/f/meolwkrn"
          method="POST"
          className="flex flex-col gap-6 sm:gap-7 bg-[#23272f]/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10"
        >
          <div className="flex flex-col gap-2.5">
            <label htmlFor="name" className="text-white text-[15px] sm:text-[16px] font-medium font-poppins mb-0.5 tracking-wide">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="p-3.5 sm:p-4 rounded-lg bg-[#1e1e23] text-white text-[15px] sm:text-[16px] font-normal font-poppins border border-[#3a3a3f] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-200 hover:border-[#4a4a4f]"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="email" className="text-white text-[15px] sm:text-[16px] font-medium font-poppins mb-0.5 tracking-wide">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="p-3.5 sm:p-4 rounded-lg bg-[#1e1e23] text-white text-[15px] sm:text-[16px] font-normal font-poppins border border-[#3a3a3f] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-200 hover:border-[#4a4a4f]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="message" className="text-white text-[15px] sm:text-[16px] font-medium font-poppins mb-0.5 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-3.5 sm:p-4 rounded-lg bg-[#1e1e23] text-white text-[15px] sm:text-[16px] font-normal font-poppins border border-[#3a3a3f] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all duration-200 resize-none hover:border-[#4a4a4f] leading-relaxed"
              placeholder="Enter your message"
              rows="5"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 sm:py-4 px-8 rounded-lg font-medium font-poppins shadow-lg hover:shadow-blue-500/50 transition-all duration-200 text-[15px] sm:text-[16px] tracking-wide"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default SectionWrapper(Contact, 'contact');

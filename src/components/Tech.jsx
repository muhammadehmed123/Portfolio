import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant, fadeIn, staggerContainer } from '../utils/motion';

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ 
        scale: 1.15,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="flex flex-col items-center w-20 sm:w-24 md:w-28 cursor-pointer group"
    >
      <motion.div
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-full shadow-lg mb-2 relative overflow-visible transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50"
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
        >
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </motion.div>
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
        whileHover={{ scale: 1.1, color: "#60a5fa" }}
        className="text-center text-white font-semibold text-xs sm:text-sm md:text-base mt-1 transition-colors duration-300"
      >
        {technology.name}
      </motion.span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        variants={textVariant()} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center relative z-10"
      >
        <motion.h2
          animate={{
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 30px rgba(147, 51, 234, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins uppercase mb-2"
        >
          My Skills
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", "spring", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-semibold text-white md:text-[44px] sm:text-[36px] xs:text-[30px] text-[24px] font-poppins"
        >
          Technologies.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-14 px-4 relative z-10"
      >
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, '');

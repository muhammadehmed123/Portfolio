import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <section id="skills">
      <motion.div variants={textVariant()} className="text-center">
        <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins uppercase mb-2">My Skills</h2>
        <h2 className="font-semibold text-white md:text-[44px] sm:text-[36px] xs:text-[30px] text-[24px] font-poppins">Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center w-28" key={technology.name}>
            <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full shadow mb-2">
              <img src={technology.icon} alt={technology.name} className="w-24 h-24 object-contain" />
            </div>
            <span className="text-center text-white font-semibold text-base mt-1">{technology.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, '');

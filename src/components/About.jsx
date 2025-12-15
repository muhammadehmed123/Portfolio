import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold font-poppins text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
  <p className="font-black text-eerieBlack text-[32px] sm:text-[44px] md:text-[56px] tracking-wider uppercase mb-2 text-center px-4 font-poppins">INTRODUCTION</p>
  <h2 className={styles.sectionHeadText + ' font-semibold font-poppins'}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[14px] sm:text-[16px] md:text-[18px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px] px-4 sm:px-0 font-poppins"
      >
        <span className="block font-bold text-[18px] sm:text-[20px] md:text-[22px] text-eerieBlack mb-2 font-poppins">DevOps Engineer</span>
        🚀 Passionate DevOps Engineer specializing in Kubernetes orchestration, containerization with Docker, and infrastructure automation using Ansible. Expert in building robust CI/CD pipelines with ArgoCD, delivering scalable cloud solutions that ensure high availability, security, and performance.<br /><br />
        💡 Transforming development workflows through modern DevOps practices - bridging development and operations to accelerate software delivery while maintaining reliability and security standards.
      </motion.p>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

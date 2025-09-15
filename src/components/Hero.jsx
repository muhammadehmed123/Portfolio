import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { styles } from '../styles';
// import { navLinks } from '../constants';
import { whiteabstract, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={whiteabstract}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full min-h-[700px] h-auto mx-auto sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[180px] top-[80px] lg:top-[100px] xl:top-[180px] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} font-poppins font-bold uppercase text-eerieBlack`}>
              Hi, I'm{' '}
              <span className="sm:text-[5rem] text-[3rem] font-bold uppercase ml-2">
                Muhammad Ahmed
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-500`}>
              As a DevOps enthusiast, <br className="sm:block hidden" />I strive
              to streamline software development and operations by leveraging
              automation, continuous integration, and deployment to deliver
              efficient and reliable solutions.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Hero;

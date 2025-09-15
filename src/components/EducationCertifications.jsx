import React from 'react';

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
  }
];

const education = {
  school: 'Sir Syed University of Engineering and Technology',
  degree: "Bachelors in Computer Engineering"
};

const EducationCertifications = () => (
  <section id="education-certifications" className="relative py-28 px-4 bg-[#18181b] overflow-hidden">
    {/* Soft background gradient blob */}
    <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-700/30 via-green-400/10 to-transparent rounded-full blur-3xl z-0 animate-pulse-slow" />
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins uppercase mb-20 text-center tracking-tight drop-shadow-lg">Education & Certifications</h2>
      <div className="relative flex flex-row items-start justify-center w-full mt-16">
        {/* Vertical timeline line */}
        <div className="hidden md:flex flex-col items-center mr-0 relative" style={{ width: '40px', minHeight: '420px' }}>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-green-400 rounded-full" />
        </div>
        {/* Education on the left */}
        <div className="flex-shrink-0 flex flex-col items-end w-full md:w-[380px] max-w-[380px] pr-0 md:pr-8 z-10">
          <div className="bg-[#23272f] rounded-2xl shadow-xl px-8 py-8 w-full flex flex-col items-start">
            <span className="text-blue-400 font-bold text-lg mb-2">Education</span>
            <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight drop-shadow">{education.school}</h3>
            <p className="text-blue-300 text-base mb-1 font-medium">{education.degree}</p>
            <p className="text-gray-400 text-sm">2022 - 2026</p>
          </div>
        </div>
        {/* Certificates on the right */}
        <div className="flex flex-row flex-wrap items-start gap-12 justify-start w-full pl-0 md:pl-8 z-10">
          {certifications.map((cert, idx) => (
            <div key={idx} className="relative group bg-[#23272f] rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400/40 w-full max-w-[520px] min-w-[320px]" style={{ minHeight: '380px' }}>
              <div className="w-[400px] h-[280px] flex items-center justify-center bg-white rounded-xl mb-6 overflow-hidden shadow-lg">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
              </div>
              <p className="text-white font-extrabold text-center text-2xl mb-1 drop-shadow-lg tracking-wide">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Extra background shape for depth */}
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-400/20 via-blue-400/10 to-transparent rounded-full blur-2xl z-0 animate-pulse-slow" />
  </section>
);

export default EducationCertifications;

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { azure, docker, kubernetes, terraform, grafana, aws, jenkins, ansible, prometheus, linux } from '../assets';

const projectsData = {
  'aks-deployment': {
    title: 'Scalable App Deployment on AKS using GitHub Actions CI/CD',
    image: '/akss.png',
    description: 'Designed and deployed a scalable application architecture on Azure Kubernetes Service (AKS) using GitHub Actions for CI/CD automation. The workflow includes building Docker images, infrastructure provisioning with Terraform (IaC), and deploying manifests via Helm. Integrated Azure Container Registry (ACR), Azure SQL Database, Key Vault, and observability using Azure Monitor, Grafana, and Application Insights.',
    skills: [
      { name: 'Azure DevOps', icon: azure },
      { name: 'Docker', icon: docker },
      { name: 'GitHub Actions', icon: '/gitactions.png' },
      { name: 'Terraform', icon: terraform },
      { name: 'Kubernetes', icon: kubernetes },
      { name: 'Grafana', icon: grafana },
    ],
    tools: ['Azure Kubernetes Service (AKS)', 'GitHub Actions', 'Terraform', 'Helm', 'Azure Container Registry (ACR)', 'Azure SQL Database', 'Azure Key Vault', 'Azure Monitor', 'Application Insights']
  },
  'aws-digitalocean-migration': {
    title: 'AWS to DigitalOcean Migration with CI/CD & Kubernetes',
    image: '/digital.png',
    description: 'Migrated applications from AWS (EC2, Lambda, S3) to DigitalOcean Kubernetes (DOKS) using Jenkins CI/CD, Docker, Terraform, and Ansible. Automated deployments, improved scalability, and integrated Prometheus & Grafana for real-time monitoring. Reduced deployment time by 80% with a fully automated, zero-downtime cloud migration pipeline.',
    skills: [
      { name: 'AWS', icon: aws },
      { name: 'Jenkins', icon: jenkins },
      { name: 'Kubernetes', icon: kubernetes },
      { name: 'Terraform', icon: terraform },
      { name: 'Ansible', icon: ansible },
      { name: 'Docker', icon: docker },
    ],
    tools: ['DigitalOcean Kubernetes (DOKS)', 'Jenkins', 'Docker', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'AWS EC2', 'AWS Lambda', 'AWS S3']
  },
  'aws-auto-scaling': {
    title: 'Scalable Web App Deployment on AWS with Auto Scaling',
    image: '/alb.png',
    description: 'Deploy a highly available and scalable web application on AWS using EC2 Auto Scaling, Load Balancers, and RDS. I\'ll design a secure VPC architecture with public/private subnets, NAT Gateway, and CloudFront for fast content delivery. This setup ensures performance, fault tolerance, and cost optimization for your production workloads.',
    skills: [
      { name: 'AWS', icon: aws },
      { name: 'Terraform', icon: terraform },
      { name: 'Linux', icon: linux },
      { name: 'Cloud Architecture', icon: aws },
      { name: 'Amazon RDS', icon: aws },
      { name: 'Cloud Security', icon: aws },
    ],
    tools: ['EC2 Auto Scaling', 'Application Load Balancer (ALB)', 'Amazon RDS', 'VPC', 'Public/Private Subnets', 'NAT Gateway', 'CloudFront', 'Security Groups', 'IAM']
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#18181b] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4 font-poppins">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-poppins hover:bg-blue-700 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#18181b] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-blue-700/20 via-green-400/10 to-transparent rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-400/15 via-blue-400/10 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Back Button */}
        <motion.button
          variants={fadeIn("right", "spring", 0.1, 0.8)}
          initial="hidden"
          animate="show"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="mb-6 sm:mb-8 flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-poppins group"
        >
          <motion.svg
            whileHover={{ x: -5 }}
            className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </motion.svg>
          <span className="text-base sm:text-lg font-medium">Back to Projects</span>
        </motion.button>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="space-y-8 sm:space-y-12"
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <h1 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] font-poppins uppercase mb-2 tracking-tight leading-tight">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mt-4"></div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
            <div className="bg-[#23272f]/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-400 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">Project Overview</h2>
              </div>
              <p className="text-gray-300 text-base sm:text-lg font-poppins leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* Skills and Tools */}
          <motion.div variants={fadeIn("up", "spring", 0.3, 1)} className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Skills */}
            <div className="bg-[#23272f]/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-400 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">Skills & Technologies</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center p-4 bg-[#1e1e23] rounded-xl hover:bg-[#26272b] transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-full mb-3 shadow-lg group-hover:shadow-blue-500/50 transition-shadow overflow-hidden p-1.5 sm:p-2"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-full h-full ${
                          skill.name === 'GitHub Actions' 
                            ? 'object-cover rounded-full' 
                            : 'object-contain'
                        }`}
                      />
                    </motion.div>
                    <span className="text-white text-sm sm:text-base font-medium font-poppins text-center group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Services */}
            <div className="bg-[#23272f]/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-400 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">Tools & Services</h2>
              </div>
              <ul className="space-y-3">
                {project.tools.map((tool, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 font-poppins group cursor-pointer"
                  >
                    <motion.svg
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                    <span className="text-base sm:text-lg group-hover:text-white transition-colors">{tool}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Diagram/Image */}
          <motion.div variants={fadeIn("up", "spring", 0.4, 1)}>
            <div className="bg-[#23272f]/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-400 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">Architecture Diagram</h2>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1e1e23] rounded-xl p-4 sm:p-6 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg object-contain shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;


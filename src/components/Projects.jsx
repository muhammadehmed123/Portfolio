import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { aws, docker, jenkins, kubernetes, ansible, azure, terraform, git, grafana, linux } from '../assets';

const projects = [
  {
    id: 'aks-deployment',
    title: 'Scalable App Deployment on AKS using GitHub Actions CI/CD',
    description: 'Designed and deployed a scalable application architecture on Azure Kubernetes Service (AKS) using GitHub Actions for CI/CD automation.',
    tools: [azure, docker, kubernetes, terraform, git, grafana],
    hasDetailPage: true,
  },
  {
    id: 'aws-digitalocean-migration',
    title: 'AWS to DigitalOcean Migration with CI/CD & Kubernetes',
    description: 'Migrated applications from AWS (EC2, Lambda, S3) to DigitalOcean Kubernetes (DOKS) using Jenkins CI/CD, Docker, Terraform, and Ansible.',
    tools: [aws, jenkins, kubernetes, terraform, ansible, grafana],
    hasDetailPage: true,
  },
  {
    id: 'aws-auto-scaling',
    title: 'Scalable Web App Deployment on AWS with Auto Scaling',
    description: 'Deploy a highly available and scalable web application on AWS using EC2 Auto Scaling, Load Balancers, and RDS.',
    tools: [aws, terraform, linux],
    hasDetailPage: true,
  },
  {
    title: 'Kubernetes Deployment',
    description: 'Deployed a client website on Kubernetes; created a cluster and used Ansible for infrastructure setup. Achieved scalability through Kubernetes orchestration.',
    tools: [kubernetes, ansible],
  },
  {
    title: 'Jenkins CI/CD Pipeline',
    description: 'Implemented a Jenkins-based CI/CD pipeline integrated with GitHub and deployed using Docker on AWS EC2.',
    tools: [jenkins, docker, aws],
  },
  {
    title: 'AWS Auto Scaling Infrastructure',
    description: 'Deployed a scalable web app using AWS EC2 Auto Scaling Groups, ALB, and custom VPC for high availability.',
    tools: [aws],
  },
  {
    title: 'Serverless Website Migration',
    description: 'Migrated a web application from EC2/Docker to a fully serverless architecture using AWS S3 for static site hosting and AWS Lambda for backend functions. Achieved reduced AWS costs, improved scalability, and simplified infrastructure management.',
    tools: [aws],
  },
  {
    title: 'Ansible & SonarQube Deployment',
    description: 'Used Ansible to automate infrastructure and deployed SonarQube with Docker Compose for continuous code quality analysis.',
    tools: [ansible, docker],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.hasDetailPage && project.id) {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[28px] font-poppins uppercase mb-8 sm:mb-10 text-center px-2">Projects</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              onClick={() => handleProjectClick(project)}
              className={`bg-[#23272f] rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col h-full border border-[#23272f] hover:border-blue-500 transition-all duration-300 ${
                project.hasDetailPage ? 'cursor-pointer hover:scale-[1.02] hover:shadow-xl' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl sm:text-2xl font-semibold font-poppins text-white flex-1">
                  {project.title}
                </h3>
                {project.hasDetailPage && (
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base font-poppins leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                {project.tools.map((tool, i) => (
                  <img key={i} src={tool} alt="tool" className="w-7 h-7 sm:w-8 sm:h-8 object-contain bg-white rounded-full p-1 border border-gray-300" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

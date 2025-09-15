import React from 'react';
import { aws, docker, jenkins, kubernetes, ansible } from '../assets';

const projects = [
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

const Projects = () => (
  <section id="projects" className="py-16 px-4 bg-[#18181b]">
    <div className="max-w-6xl mx-auto">
  <h2 className="font-black text-white md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins uppercase mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#23272f] rounded-2xl shadow-lg p-6 flex flex-col h-full border border-[#23272f] hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-base">{project.description}</p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tools.map((tool, i) => (
                <img key={i} src={tool} alt="tool" className="w-8 h-8 object-contain bg-white rounded-full p-1 border border-gray-300" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

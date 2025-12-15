import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  aws,
  kubernetes,
  linux,
  jenkins,
  grafana,
  prometheus,
  terraform,
  figma,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  graphql,
  rubyrails
} from "../assets";
import { FaAws, FaJenkins, FaLinux, FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import ansible from '../assets/tech/ansible.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work-experience',
    title: 'Work Experience',
  },
  {
    id: 'education-certifications',
    title: 'Education & Certifications',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Ansible',
    icon: ansible,
  },
  {
    name: 'Grafana',
    icon: grafana,
  },
  {
    name: 'Prometheus',
    icon: prometheus,
  },
  {
    name: 'Terraform',
    icon: terraform,
  },
];

const experiences = [
  {
    title: 'DevOps Engineer Freelance',
    company_name: 'Upwork',
    location: 'Remote',
    icon: coverhunt, // Using placeholder icon - you can add Upwork logo if available
    iconBg: '#14A800',
    date: '2024 – Present',
    points: [
      'Delivered DevOps solutions for multiple clients across various industries, focusing on cloud infrastructure and automation.',
      'Implemented CI/CD pipelines and containerization strategies to improve deployment efficiency.',
      'Provided consulting services on cloud architecture, infrastructure as code, and DevOps best practices.',
      'Managed and optimized cloud resources for clients, ensuring cost-effectiveness and high availability.'
    ]
  },
  {
    title: 'DevOps Engineer',
    company_name: 'Coventech',
    location: '',
    icon: coverhunt, // You can update this to a Coventech logo if available
    iconBg: '#333333',
    date: 'June 2025 – Present',
    points: [
      'Implemented CI/CD Pipelines: Built CI/CD pipelines using Jenkins and GitHub Actions to automate production deployments, reducing deployment time by 60% and minimizing manual errors.',
      'AWS Infrastructure Optimization: Optimized AWS infrastructure to reduce cloud costs by 45%, improving resource utilization and system performance.',
      'Docker Multi-Container Management: Managed and deployed multi-container applications using Docker Compose, streamlining microservices orchestration and improving scalability across environments.',
      'EC2 to Lambda Migration: Migrated application infrastructure from AWS EC2 to AWS Lambda with API Gateway, integrated S3 for asset storage, configured CloudFront for global content delivery, and transitioned database to Neon, improving scalability, reducing operational overhead, and lowering hosting costs.'
    ]
  }
];

const projects = [
  {
    id: "project-1",
    name: "AWS Academy Foundation Graduate ",
    description: "View my verified achievement from Amazon Web Services (AWS).",
    image: foundation,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  },
  {
    id: "project-2",
    name: "AWS Certified Cloud Practitioner",
    description:
      "AWS Academy Graduate issued by  Amazon Web Services Training and Certification.",
    image: practitioner,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf",
  },
  {
    id: "project-3",
    name: "Azure",
    description: "Create a virtual machine and deploy a Web Server",
    image: azure,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/Azure.pdf",
  },
  {
    id: "project-4",
    name: "Deloitte",
    description:
      "Technology Consulting Virtual Internship",
    image: deloitte,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/FqFtWwQzNxJ8Qsh5H_Deloitte_P9vz2x4Mcp37hehcd_completion_certificate.pdf",
  },
  {
    id: "project-5",
    name: "AWS Academy Foundation Graduate ",
    description: "View my verified achievement from Amazon Web Services (AWS).",
    image: foundation,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  },
];

export { services, technologies, experiences, projects };

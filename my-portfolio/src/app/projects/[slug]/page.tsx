"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { use } from "react";
import Image from 'next/image';

// Project data
const projects = {
  'my-ai-advisor': {
    title: 'My AI Advisor',
    image: '/aws.png',
    description: 'Best Use of AWS Winner at Clemson Hackathon. Built an AI-powered course scheduling system that revolutionizes how students generate personalized, conflict-free schedules using prerequisite/corequisite logic. The system leverages AWS Knowledge Base and Claude 3 Sonnet AI to provide intelligent course recommendations and automated schedule optimization.',
    technologies: ['Python', 'Flask', 'AWS Knowledge Base', 'Claude 3 Sonnet AI', 'HTML', 'CSS'],
    features: [
      'AI-powered course scheduling with conflict detection',
      'Prerequisite and corequisite logic validation',
      'Personalized schedule recommendations',
      'Real-time course availability checking',
      'Intelligent degree planning assistance',
      'AWS cloud integration for scalability'
    ],
    github: 'https://github.com/nimnay/my-ai-advisor'
  },
  'extended-checkers-game': {
    title: 'Extended Checkers Game',
    image: '/chess.png',
    description: 'A fully modular and scalable checkers game architected following the complete Software Development Lifecycle (SDLC). This project demonstrates comprehensive software engineering practices with exhaustive documentation including functional/non-functional requirements, method contracts, UML diagrams, and JavaDoc comments, ensuring crystal-clear software clarity and maintainability.',
    technologies: ['Java', 'JUnit', 'UML', 'SDLC', 'Interfaces', 'Object-Oriented Design'],
    features: [
      'Complete SDLC implementation from requirements to deployment',
      'Modular architecture with clear separation of concerns',
      'Comprehensive unit testing with JUnit',
      'Detailed UML diagrams and system documentation',
      'JavaDoc documentation for all methods and classes',
      'Extensible game engine supporting rule variations',
      'Clean code principles and design patterns',
      'Functional and non-functional requirements documentation'
    ],
    github: 'https://github.com/nimnay/extended-checkers-game'
  },
  'ai-nlp-terminal': {
    title: 'AI-powered NLP Terminal',
    image: '/terminal.png',
    description: 'An innovative AI-powered terminal that converts natural language into executable bash commands using locally-hosted Ollama models. This project bridges the gap between human language and command-line interfaces, making terminal operations more accessible and intuitive for users of all skill levels.',
    technologies: ['Python 3.10+', 'Ollama', 'LLaMA3', 'NLP', 'Bash', 'Terminal Interface'],
    features: [
      'Natural language to bash command conversion',
      'Self-hosted AI using Ollama models',
      'Command execution with built-in safety checks',
      'Command history tracking and management',
      'Colorized output for better readability',
      'Local AI processing for privacy and speed',
      'Support for complex command sequences',
      'Interactive command validation'
    ],
    github: 'https://github.com/nimnay/ai-nlp-terminal'
  },
  'clemson-event-ticketing': {
    title: 'Clemson Campus Event Ticketing System',
    image: '/react.png',
    description: 'A comprehensive full-stack web application developed for CPSC 3720 that extends a basic React + Node.js application into a complete campus event ticketing system. This semester-long team project demonstrates real-world software development practices including Agile methodologies, accessibility compliance, reliability engineering, and distributed systems integration.',
    technologies: ['React', 'Node.js', 'REST API', 'Agile/Scrum', 'Postman', 'ARIA', 'Error Handling', 'System Integration'],
    features: [
      'Complete Agile SDLC implementation with sprint planning and retrospectives',
      'Requirements engineering with stakeholder interviews',
      'User story development with acceptance criteria and story points',
      'Comprehensive API design and testing with Postman',
      'Accessibility compliance with ARIA labels and keyboard navigation',
      'Reliability engineering with error handling and failure simulation',
      'Distributed systems architecture with multiple service integration',
      'Ethics charter addressing privacy and data protection',
      'System-of-systems integration with mock campus services',
      'RESTful API endpoints for event listing and ticket booking'
    ],
    github: 'https://github.com/nimnay/clemson-event-ticketing'
  }
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-mono"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 
                  className="text-4xl md:text-5xl mb-6"
                  style={{ 
                    fontFamily: 'Times New Roman, serif',
                    fontStyle: 'italic',
                    fontWeight: 'condensed'
                  }}
                >
                  {project.title}
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  View Code
                </a>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

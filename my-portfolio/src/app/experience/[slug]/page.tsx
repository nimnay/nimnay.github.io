"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { use } from 'react';

// Experience data
const experiences = {
    'ai-engineer-intern': {
        title: 'AI Engineer Intern',
        company: 'TD Synnex',
        period: 'May 2025 - Aug 2025',
        location: 'Greenville, SC',
        image: '/tdsynnex.png',
        description: 'Designed and built a real-world AI solution leveraging NVIDIA technologies, including Blueprints, Nemo, and GPUs etc., to deliver an end-to-end product from brainstorming to deployment. This solution was presented at Annual Conference of TD Synnex, INSPIRE 2025 in front of the biggest Tech Companies of North America.',
        responsibilities: [
            'Improved and Built upon existing NVIDIA blueprints and frameworks to deliver an enterprise grade solution',
            'Developed and optimized end-to-end pipelines for training and deployment',
            'Collaborated with executives and top technology vendors on technical strategy',
            'Presented solutions to both technical and non-technical stakeholders',
            'Ensured scalability and performance by leveraging GPU acceleration'
        ],
        technologies: ['NVIDIA Suite', 'SQL', 'PostgreSQL', 'GPUs', 'Docker', 'Langchain', 'Python'],
        achievements: [
            'Delivered a complete AI solution from ideation to deployment',
            'Showcased innovation and business impact to executives and vendors',
            'Enhanced blueprint designs for improved scalability and performance'
        ]

    },
    'software-qa-engineer': {
        title: 'Software QA Engineer',
        company: 'Eleos Technologies',
        period: '2024 - 2025',
        location: 'Greenville, SC',
        image: '/eleos.png',
        description: 'Spearheaded end-to-end testing in an Agile environment, breaking applications before users could by executing rigorous test cases, exploratory testing, and meticulously documenting every bug.',

        responsibilities: [
            'Executing comprehensive test suites for functional and regression testing',
            'Performed exploratory testing to identify hidden defects and edge-case failures',
            'Collaborated with developers to isolate, reproduce, and resolve complex bugs',
            'Documented and tracked defects with detailed reports to ensure accountability',
            'Validated fixes and executed retesting to maintain product stability before release',
            'Participated in Agile ceremonies to align QA efforts with sprint goals and deliverables'
        ],

        technologies: ['Linear', 'Firebase', 'Git/Github', 'Airtable', 'Agile/Scrum'],

        achievements: [
            'Reduced post-release bugs by 30% through rigorous automation and manual testing',
            'Streamlined regression testing, cutting execution time by 40% with automation',
            'Expanded overall test coverage by implementing new automated test cases',
            'Delivered consistently high-quality releases meeting client acceptance criteria'
        ]

    },
    'ai-research-intern': {
        title: 'AI Research Intern',
        company: 'Watt Innovation Center',
        period: 'Spring 2025 - Present',
        location: 'Clemson, SC',
        image: '/watt.png',
        description: 'Led research project on multimodal video and text analysis, designing and deploying scalable pipelines on Clemson’s Palmetto HPC cluster. Directed the project as manager, integrating LLM and ML components for advanced video understanding, entity resolution, and user profiling, while coordinating workflows across the team and presenting results at Clemson HPC.',

        responsibilities: [
            'Built end-to-end pipelines for transcript extraction with speaker labeling',
            'Implemented LLM-based summarization and named entity standardization',
            'Developed user clustering using embeddings, KMeans, PCA, and t-SNE',
            'Deployed pipelines on Clemson’s Palmetto HPC cluster for scalability',
            'Managed project timelines and coordinated workflows across researchers',
            'Integrated multimodal ML and LLM components for unified video-text analysis',
            'Presented research outcomes and technical methods at Clemson HPC'
        ],

        technologies: ['Python', 'Transformers', 'spaCy', 'scikit-learn', 'PyTorch', 'Hugging Face', 'KMeans', 'PCA', 't-SNE', 'HPC (Palmetto)', 'LLMs'],

        achievements: [
            'Successfully delivered scalable pipelines for multimodal video and text analysis',
            'Improved accuracy of entity resolution with standardized NER processing',
            'Reduced clustering time by leveraging HPC parallelization and embeddings',
            'Recognized through presentation at Clemson HPC for research contributions'
        ]
    },

    'exec-swe-mentor': {
        title: 'Executive Member + SWE Mentor',
        company: 'Clemson Forge',
        period: 'Spring 2025 - Present',
        location: 'Clemson University, SC',
        image: '/forge.png',
        description: 'Mentored underclassmen through Clemson Forge (ACM program), guiding them in building real-world software projects, applying software engineering best practices, and integrating AI techniques into workflows. Supported professional development and promoted the program’s visibility through social media outreach.',

        responsibilities: [
            'Guided students in applying modern SWE principles to real-world projects',
            'Helped teams integrate AI methods into software workflows and pipelines',
            'Provided mentorship on version control, testing, deployment, and scalability',
            'Supported student professional development through project-based learning',
            'Collaborated with program leads to market Clemson Forge on LinkedIn, Instagram, and other platforms'
        ],

        technologies: ['Python', 'Java', 'Git', 'GitHub', 'CI/CD', 'Docker', 'AI tools', 'LLMs', 'Cloud Platforms', 'Social Media Marketing'],

        achievements: [
            'Enabled underclassmen to gain hands-on experience with end-to-end development',
            'Bridged SWE fundamentals with AI integration for practical project outcomes',
            'Enhanced Clemson Forge’s visibility and engagement through online presence',
            'Contributed to the growth of a supportive ACM mentorship community'
        ]
    },
    'undergraduate-research-assistant': {
        title: 'Undergraduate Research Assistant',
        company: 'Clemson Electrical and Computer Engineering Department',
        period: 'Fall 2024',
        location: 'Clemson University, SC',
        image: '/ece.png',
        description: 'Researched distributed deep learning using robotic neural networks, optimizing ResNet-56 training on CIFAR-10 with distributed GPU computing on Palmetto 2. Enhanced model accuracy and stability by applying gradient clipping techniques and documented findings in a 4-page IEEE-style report.',

responsibilities: [
  'Implemented ResNet-56 model training with distributed GPU parallelization',
  'Applied gradient clipping to improve model stability and convergence',
  'Conducted experiments on CIFAR-10 dataset using Palmetto 2 supercomputing resources',
  'Analyzed training performance, accuracy trends, and computational efficiency',
  'Authored a 4-page IEEE-style technical report detailing research methods and results'
],

technologies: ['Python', 'PyTorch', 'CUDA', 'Distributed Data Parallel (DDP)', 'NCCL', 'CIFAR-10', 'Palmetto 2 HPC'],
        achievements: [
            'Successfully leveraged Palmetto 2 supercomputing cluster for parallelized deep learning',
  'Validated the impact of gradient clipping on convergence and generalization',
  'Produced a peer-style IEEE report communicating research outcomes to technical audiences'
        ]
    }
};

export default function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const experience = experiences[slug as keyof typeof experiences];

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
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
                                    className="text-4xl md:text-5xl mb-4"
                                    style={{
                                        fontFamily: 'Times New Roman, serif',
                                        fontStyle: 'italic',
                                        fontWeight: 'condensed'
                                    }}
                                >
                                    {experience.title}
                                </h1>

                                <div className="mb-6">
                                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">{experience.company}</h2>
                                    <p className="text-lg text-gray-600 mb-1">{experience.period}</p>
                                    <p className="text-base text-gray-500">{experience.location}</p>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    {experience.description}
                                </p>
                            </div>

                            {/* Key Responsibilities */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
                                <ul className="space-y-3">
                                    {experience.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-600 mr-3 mt-1">•</span>
                                            <span className="text-gray-700">{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {experience.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Achievements */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                                <ul className="space-y-3">
                                    {experience.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-600 mr-3 mt-1">✓</span>
                                            <span className="text-gray-700">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Side - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:sticky lg:top-24"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

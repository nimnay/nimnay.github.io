"use client";

import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Draggable clips state
  const [clips, setClips] = useState([
    {
      id: 1,
      x: 850,
      y: 240,
      src: "/frog.png",
      alt: "Clip 1",
      rotation: -5,
      scale: 0.6
    },
    {
      id: 2,
      x: 800,
      y: 100,
      src: "/star.png", 
      alt: "Clip 2",
      rotation: 3,
      scale: 0.5
    },
    {
      id: 3,
      x: 990,
      y: 350,
      src: "/pc.png",
      alt: "Clip 3", 
      rotation: -2,
      scale: 0.4
    }
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye pupil position based on mouse
  const eyeSize = 40;
  const pupilSize = 16;
  const eyeCenterX = 60; // Left position + half eye size
  const eyeCenterY = 60; // Top position + half eye size
  
  const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
  const distance = Math.min(
    Math.sqrt((mousePosition.x - eyeCenterX) ** 2 + (mousePosition.y - eyeCenterY) ** 2),
    (eyeSize - pupilSize) / 2
  );
  
  const pupilX = Math.cos(angle) * distance;
  const pupilY = Math.sin(angle) * distance;

  const skills = [
  {
    category: "Programming Languages",
    technologies: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "PowerShell"]
  },
  {
    category: "Web & Frontend",
    technologies: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "UI/UX", "Responsive Design"]
  },
  {
    category: "Backend & Frameworks",
    technologies: ["Node.js", "FastAPI", "PyTorch", "JUnit", "API Design", "Microservices"]
  },
  {
    category: "AI / ML",
    technologies: ["Neural Networks", "Large Language Models (LLMs)", "RAG Architecture", "NVIDIA NeMo", "NVIDIA Blueprints", "Embeddings"]
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Vector Databases", "Database Design", "Query Optimization"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "CI/CD Pipelines", "Containerization", "Deployment", "Cloud Architecture", "HPC (Palmetto)"]
  },
  {
    category: "Software Engineering Practices",
    technologies: ["Git", "Version Control", "Agile/Scrum", "SDLC", "Testing Automation", "Exploratory Testing", "UML", "JavaDoc"]
  },
  {
    category: "Data Science & Analytics",
    technologies: ["Data Analysis", "Statistical Analysis", "End-to-End Pipelines", "Research Methods"]
  }
];


  const experience = [
    {
      title: "AI Engineer Intern",
      company: "TD Synnex",
      period: "May 2025 - Aug 2025",
      description: "Built enterprise AI solutions with NVIDIA tech stack",
      image: "/tdsynnex.png",
      slug: "ai-engineer-intern",
    },
    {
      title: "Software QA Engineer",
      company: "Eleos Technologies",
      period: "June 2024 - May 2025",
      description: "End-to-end regression testing in Agile environment",
      image: "/eleos.png",
      slug: "software-qa-engineer"
    },
    {
      title: "AI Research Intern", 
      company: "Watt Innovation Center",
      period: "Spring 2025 - Present",
      description: "Multimodal video analysis with HPC deployment",
      image: "/watt.png",
      slug: "ai-research-intern"
    },
    
    {
      title: "Exec + SWE Mentor",
      company: "Clemson Forge",
      period: "Spring 2025 - Present",
      description: "Mentoring students in software engineering practices",
      image: "/forge.png",
      slug: "exec-swe-mentor"
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Clemson University",
      period: "Aug 2024 - Dec 2024",
      description: "Distributed deep learning with robotic neural networks",
      image: "/ece.png",
      slug: "undergraduate-research-assistant"
    }
  ];

  return (
    <div className="min-h-screen text-gray-900 ">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Googly Eye - Enhanced with extracted CSS */}
      <div className="fixed top-7 left-7 z-30 pointer-events-none">
        {/* Eye white with CSS extracted styling */}
        <div 
          className="relative overflow-hidden"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '100%',
            border: '0.9px solid #d7d7d7',
            marginBottom: '7px',
            backgroundColor: 'hsla(0,0%,100%,.353)',
            boxShadow: '1px 1px 2px rgba(75,75,75,.9), inset 4px -5px 8px hsla(0,0%,55%,.4), inset 1px 4px 2px hsla(0,0%,88%,.6)'
          }}>
          
          {/* Eye pupil that follows mouse - enhanced with extracted CSS styles */}
          <div 
            className="absolute rounded-full transition-all duration-100 ease-out"
            style={{
              background: '#313030',
              border: '0.7px solid #878787',
              width: '62%',
              height: '62%',
              left: '25%',
              bottom: '25%',
              transformOrigin: 'bottom',
              transform: `translate(${pupilX}px, ${pupilY}px)`,
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)'
            }}
          />
          
          {/* Highlight effect from CSS */}
          <div 
            className="absolute"
            style={{
              height: '15px',
              width: '30px',
              background: '#fff',
              boxShadow: '0 0 3px 5px #fff',
              opacity: '50%',
              borderRadius: '80%',
              top: '15%'
            }}
          />
        </div>
      </div>

      {/* Social Links - Top Right */}
      <div className="fixed top-8 right-15 z-30 flex gap-4">
        <a
          href="https://github.com/nimnay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-mono pointer-events-auto"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nimranayyar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-mono pointer-events-auto"
        >
          LinkedIn
        </a>
      </div>
      
      {/* Draggable Image Clips */}
      {clips.map((clip) => (
        <motion.div
          key={clip.id}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          initial={{ 
            x: clip.x, 
            y: clip.y,
            rotate: clip.rotation,
            scale: clip.scale
          }}
          whileDrag={{ 
            scale: clip.scale + 0.1,
            rotate: clip.rotation + 2,
            zIndex: 40
          }}
          className="absolute cursor-grab active:cursor-grabbing z-10 select-none"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}
          onDrag={(event: any, info: any) => {
            // Update clip position in state
            setClips(prevClips => 
              prevClips.map(c => 
                c.id === clip.id 
                  ? { ...c, x: clip.x + info.offset.x, y: clip.y + info.offset.y }
                  : c
              )
            );
          }}
        >
          <Image
            src={clip.src}
            alt={clip.alt}
            width={192}
            height={192}
            className="w-48 h-auto object-contain pointer-events-none"
            draggable={false}
            priority={clip.id === 1}
          />
          
          {/* Clip tape effect */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-200 opacity-80"
               style={{
                 clipPath: 'polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)',
                 boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
               }}
          />
        </motion.div>
      ))}
      
      {/* Main Content Area - with left margin to clear sidebar */}
      <div className="ml-52 pr-6">
      
      {/* Hero Section */}
      <section id="about" className="flex items-center min-h-screen">
          <div className="max-w-2xl w-full text-left mx-15 my-45">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-5 font-mono"
          >
            <Image src="/name.png" alt="Your Name" width={800} height={160} className='w-100'/>
            <Image src="/name2.png" alt="Waving Hand" width={900} height={180} className='w-120 mt-3'/>
           
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-xs text-gray-500 mb-7 leading-relaxed tracking-wider font-sans"
          >
            Hi! I&#39;m a computer science student at Clemson University.
            At heart, I&#39;m a creator who loves both math and art. CS lets me live in both worlds 
            — the logic and precision of math paired with the creativity of design. 
            I&#39;m driven by the idea of building things that are both functional and beautiful.
          </motion.p>
          
        </div>
      </section>


      {/* Experience Section */}
      <section id="work" className="py-20">
        <div className="max-w-6xl w-full mx-auto text-left px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono uppercase tracking-[0.12em]"
          >
            Experience
          </motion.h2>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {experience.slice(0, 3).map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <Link href={`/experience/${job.slug}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                    <div className="aspect-[6/3] bg-gray-100 overflow-hidden">
                      <Image 
                        src={job.image} 
                        alt={job.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h3 
                        className="text-base mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2"
                        style={{ 
                          fontFamily: 'Times New Roman, serif',
                          fontStyle: 'italic',
                          fontWeight: 'condensed'
                        }}
                      >
                        {job.company}
                      </h3>
                      <p className="text-blue-600 font-medium text-xs">{job.description}</p>
                      
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {experience.slice(3, 5).map((job, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <Link href={`/experience/${job.slug}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                    <div className="aspect-[5/3] bg-gray-100 overflow-hidden">
                      <Image 
                        src={job.image} 
                        alt={job.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3">
                      <h3 
                        className="text-base mb-1 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2"
                        style={{ 
                          fontFamily: 'Times New Roman, serif',
                          fontStyle: 'italic',
                          fontWeight: 'condensed'
                        }}
                      >
                        {job.company}
                      </h3>
                      <p className="text-blue-600 font-medium text-xs">{job.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section  id="skills" className="py-20  bg-gray-50">
    <div className="max-w-4xl w-full mx-auto text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono uppercase tracking-[0.12em]"
          >
            Skills &amp; Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-5 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3 text-center">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="text-center py-2 px-3 bg-gray-100 rounded-lg text-xs"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl w-full mx-auto text-left px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono uppercase tracking-[0.12em]"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Project 1 - My AI Advisor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <Link href="/projects/my-ai-advisor">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                  <div className="aspect-[5/3] bg-gray-100 overflow-hidden">
                    <Image 
                      src="/aws.png" 
                      alt="My AI Advisor"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 
                      className="text-base group-hover:text-blue-600 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Times New Roman, serif',
                        fontStyle: 'italic',
                        fontWeight: 'condensed'
                      }}
                    >
                      My AI Advisor
                    </h3>
                    <p className="text-gray-500 text-[10px] line-clamp-2 mt-1 font-light leading-tight">Best Use of AWS Winner, Clemson Hackathon</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2 - Extended Checkers Game */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <Link href="/projects/extended-checkers-game">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                  <div className="aspect-[5/3] bg-gray-100 overflow-hidden">
                    <Image 
                      src="/chess.png" 
                      alt="Extended Checkers Game"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 
                      className="text-base group-hover:text-blue-600 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Times New Roman, serif',
                        fontStyle: 'italic',
                        fontWeight: 'condensed'
                      }}
                    >
                      Extended Checkers Game
                    </h3>
                    <p className="text-gray-500 text-[10px] line-clamp-2 mt-1 font-light leading-tight">Full SDLC Implementation in Java</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 3 - AI-powered NLP Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <Link href="/projects/ai-nlp-terminal">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                  <div className="aspect-[5/3] bg-gray-100 overflow-hidden">
                    <Image 
                      src="/terminal.png" 
                      alt="AI-powered NLP Terminal"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 
                      className="text-base group-hover:text-blue-600 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Times New Roman, serif',
                        fontStyle: 'italic',
                        fontWeight: 'condensed'
                      }}
                    >
                      AI-powered NLP Terminal
                    </h3>
                    <p className="text-gray-500 text-[10px] line-clamp-2 mt-1 font-light leading-tight">Natural language to bash command conversion</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {/* Project 4 - Clemson Campus Event Ticketing System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group cursor-pointer"
            >
              <Link href="/projects/clemson-event-ticketing">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform">
                  <div className="aspect-[5/3] bg-gray-100 overflow-hidden">
                    <Image 
                      src="/react.png" 
                      alt="Clemson Campus Event Ticketing System"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 
                      className="text-base group-hover:text-blue-600 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'Times New Roman, serif',
                        fontStyle: 'italic',
                        fontWeight: 'condensed'
                      }}
                    >
                      Campus Event Ticketing System
                    </h3>
                    <p className="text-gray-500 text-[10px] line-clamp-2 mt-1 font-light leading-tight">Full-stack React + Node.js with Agile SDLC</p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20">
    <div className="max-w-2xl w-full mx-auto text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-5 font-mono uppercase tracking-[0.12em]"
          >
            Let&#39;s Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            I&#39;m always excited to discuss new ideas, opportunities, and collaborations. 
            Whether you have a project in mind or just want to chat about technology, I&#39;d love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
           
            <a 
              href="https://linkedin.com/in/nimranayyar"
              className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/nimnay"
              className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/nimnay" className="text-gray-600 hover:text-black transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/nimranayyar" className="text-gray-600 hover:text-black transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      
      </div> {/* End of main content area */}
    </div>
  );
}

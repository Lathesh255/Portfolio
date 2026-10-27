import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Code2, 
  ExternalLink,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "MCA with High Academic Standing",
      description: "Completed MCA at Dayananda Sagar Academy of Technology and Management, Bengaluru with an 8.56 CGPA following an 8.6 CGPA in BCA.",
      icon: GraduationCap,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Hands-on Software Internship",
      description: "Contributed to Vibe Checker (AI-powered emotion and compatibility detection) at Edutainer (PAT Technologies Private Limited), implementing core application features.",
      icon: Briefcase,
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20"
    },
    {
      title: "IEEE Security Research",
      description: "Authored research paper on automated web security configuration assessment accepted at IEEE ICEMCSI 2026 under the mentorship of Dr. Chitra K.",
      icon: ShieldCheck,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Engineering & QA Discipline",
      description: "Strong command of OOP, Data Structures, Postman API testing, debugging, and Linux/Windows environments for delivering robust software solutions.",
      icon: Code2,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#070b13] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Professional Background & Foundations
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative & Profile Spotlight */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Visual Profile Spotlight Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-60 blur-xs"></div>
                <img
                  src={personalInfo.profileImagePath}
                  alt={personalInfo.name}
                  className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl object-cover object-top border border-slate-700 shadow-md"
                />
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {personalInfo.fullNameResume}
                  </h3>
                  <span className="text-xs font-medium text-blue-400 font-mono block">
                    {personalInfo.role} · MCA Graduate
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Dayananda Sagar Academy of Technology and Management, Bengaluru (8.56 CGPA).
                </p>

                {/* Direct GitHub & LinkedIn Badges */}
                <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>

            <p>
              I am an aspiring software engineer and MCA graduate from <strong className="text-white font-medium">Dayananda Sagar Academy of Technology and Management</strong>, Bengaluru. My technical foundation spans object-oriented programming, data structures, web application development, and software testing.
            </p>

            <p>
              During my Software Development Internship at <strong className="text-white font-medium">Edutainer (PAT Technologies Private Limited)</strong>, I gained practical hands-on experience building user-focused applications. I contributed directly to the development of <span className="text-blue-300 font-medium">Vibe Checker</span>, an AI-powered emotion and compatibility detection platform, assisting with modules like Aura Scanner, AI Response Generator, and Vibe Clash while sharpening my skills in API integration and debugging.
            </p>

            <p>
              Beyond development, I have a deep curiosity for system security and reliability. My research on <strong className="text-white font-medium">automated web security configuration assessment</strong> under Dr. Chitra K was accepted at IEEE ICEMCSI 2026, reflecting my proactive approach to vulnerability identification and structured remediation.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60">
                MCA: 8.56 CGPA
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60">
                BCA: 8.6 CGPA
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60">
                Bengaluru, India
              </span>
              <span className="px-3 py-1.5 rounded-md bg-blue-950/40 text-blue-300 border border-blue-800/40">
                Fresher SDE / QA Ready
              </span>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className={`p-5 rounded-xl bg-slate-900/60 border ${item.borderColor} hover:border-slate-600 transition-all duration-300 flex flex-col justify-between`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-4 ${item.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

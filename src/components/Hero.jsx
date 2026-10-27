import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-32 overflow-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & CTAs */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Profile Avatar & Status Badge */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-80 blur-xs group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={personalInfo.profileImagePath}
                  alt={personalInfo.name}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-[#080c14] shadow-xl"
                />
                <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#080c14]" title="Immediate Joiner"></span>
              </div>
              
              <div className="flex flex-col items-start space-y-1.5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Open to Opportunities · SDE | QA | Cyber
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Immediate Joiner · Bengaluru (Open to Relocate)
                </span>
              </div>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              {personalInfo.name}
            </h1>

            {/* Role subtitle */}
            <div className="inline-block mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                {personalInfo.role}
              </h2>
            </div>

            {/* Exact Required Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-900/20 hover:shadow-blue-900/40"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Lathesha_A_N_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 hover:text-white border border-slate-700 hover:border-slate-600 font-medium text-sm transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 w-full">
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                  title="Lathesha N on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                  title="Lathesha N on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  aria-label="Direct Email"
                  title={`Send email to ${personalInfo.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{personalInfo.locationShort}</span>
                </span>
                <span className="text-slate-700">|</span>
                <span className="flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>MCA · 8.56 CGPA</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Profile Card */}
          <motion.div 
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <InteractiveTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

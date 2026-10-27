import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Gamepad2, 
  Users, 
  SlidersHorizontal,
  Brain,
  Award
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import { MemoryGameVisual, EzyParkVisual, VibeCheckerVisual } from './ProjectCardVisuals';
import MemoryGameModal from './MemoryGameModal';
import EzyParkDemoModal from './EzyParkDemoModal';
import VibeCheckerDemoModal from './VibeCheckerDemoModal';

export default function Projects() {
  const [isMemoryGameOpen, setIsMemoryGameOpen] = useState(false);
  const [isEzyParkOpen, setIsEzyParkOpen] = useState(false);
  const [isVibeCheckerOpen, setIsVibeCheckerOpen] = useState(false);

  const getVisualHeader = (id) => {
    switch (id) {
      case 'memory-matching-game':
        return <MemoryGameVisual />;
      case 'ezypark-smart-parking':
        return <EzyParkVisual />;
      case 'vibe-checker':
        return <VibeCheckerVisual />;
      default:
        return null;
    }
  };

  const handleLaunchDemo = (id) => {
    if (id === 'memory-matching-game') {
      setIsMemoryGameOpen(true);
    } else if (id === 'ezypark-smart-parking') {
      setIsEzyParkOpen(true);
    } else if (id === 'vibe-checker') {
      setIsVibeCheckerOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Featured Projects & Implementations
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Real software systems demonstrating backend architecture, API engineering, AI feature integration, and interactive frontend development.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, index) => {
            const isInternship = project.isTeamWork;
            return (
              <motion.div
                key={project.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/40 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div>
                  {/* Visual illustration top header */}
                  {getVisualHeader(project.id)}

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                        isInternship 
                          ? 'bg-purple-950/40 text-purple-300 border-purple-800/50' 
                          : 'bg-blue-950/40 text-blue-300 border-blue-800/50'
                      }`}>
                        {project.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <span className="text-xs font-medium text-slate-400 block -mt-0.5 mb-1">
                        {project.subtitle}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Team/Internship distinction notice if applicable */}
                    {project.isTeamWork && (
                      <div className="mt-3 p-2.5 rounded-lg bg-purple-950/20 border border-purple-900/30 flex items-start space-x-2 text-[11px] text-purple-200">
                        <Users className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{project.attributionNote}</span>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="mt-5">
                      <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono flex items-center space-x-1.5">
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 5).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Tech Stack & Actions */}
                <div className="p-6 pt-4 border-t border-slate-800/80 bg-slate-950/40 mt-auto">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors group/link"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-slate-400 group-hover/link:text-white" />
                      <span>Code Repo</span>
                    </a>

                    {/* Interactive Demo Buttons tailored to each project */}
                    {project.id === 'memory-matching-game' && (
                      <button
                        onClick={() => handleLaunchDemo(project.id)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 text-xs font-semibold transition-all shadow-xs"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Play Mini-Game</span>
                      </button>
                    )}

                    {project.id === 'ezypark-smart-parking' && (
                      <button
                        onClick={() => handleLaunchDemo(project.id)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-500 text-xs font-semibold transition-all shadow-xs"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Simulate Pricing</span>
                      </button>
                    )}

                    {project.id === 'vibe-checker' && (
                      <div className="flex items-center space-x-2">
                        <a
                          href="/Lathesha_AN_Internship_Certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                          title="View Edutainer Internship Certificate"
                        >
                          <Award className="w-3.5 h-3.5 text-blue-400" />
                          <span>Certificate</span>
                        </a>
                        <button
                          onClick={() => handleLaunchDemo(project.id)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500 text-xs font-semibold transition-all shadow-xs"
                        >
                          <Brain className="w-3.5 h-3.5" />
                          <span>Test AI Demo</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modals for Live Interactive Demos */}
        <MemoryGameModal
          isOpen={isMemoryGameOpen}
          onClose={() => setIsMemoryGameOpen(false)}
        />

        <EzyParkDemoModal
          isOpen={isEzyParkOpen}
          onClose={() => setIsEzyParkOpen(false)}
        />

        <VibeCheckerDemoModal
          isOpen={isVibeCheckerOpen}
          onClose={() => setIsVibeCheckerOpen(false)}
        />

      </div>
    </section>
  );
}

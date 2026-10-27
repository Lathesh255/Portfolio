import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Table, 
  Database, 
  Cloud, 
  Wrench, 
  Boxes, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Bug, 
  Radio, 
  GitBranch, 
  Monitor, 
  Coffee, 
  FileCode, 
  Binary, 
  Palette, 
  Server, 
  Cpu, 
  BarChart3, 
  HardDrive, 
  Send, 
  PieChart, 
  LineChart, 
  Workflow,
  Search,
  X
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Coffee,
  FileCode,
  Binary,
  Globe,
  Palette,
  Server,
  Table,
  Cpu,
  BarChart3,
  Database,
  HardDrive,
  Cloud,
  Send,
  GitBranch,
  Github: GitBranch,
  PieChart,
  LineChart,
  Boxes,
  Workflow,
  CheckCircle2,
  Bug,
  Radio,
  Layers,
  Monitor,
  Terminal
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map(c => c.category)];

  // Filter skills by category AND search query
  const filteredCategoryGroups = skillsData
    .filter(c => selectedCategory === 'All' || c.category === selectedCategory)
    .map(group => {
      if (!searchQuery.trim()) return group;
      const matchingSkills = group.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      return {
        ...group,
        skills: matchingSkills
      };
    })
    .filter(group => group.skills.length > 0);

  const totalFilteredSkills = filteredCategoryGroups.reduce(
    (acc, g) => acc + g.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Skills & Core Tooling
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified technical competencies based directly on academic curriculum, project implementations, and internship experience.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, Postman, MongoDB, Node, AWS)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-[11px] font-mono text-slate-400 text-center mt-2">
              Found <span className="text-blue-400 font-bold">{totalFilteredSkills}</span> matching skills
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 border border-blue-500'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        {filteredCategoryGroups.length === 0 ? (
          <div className="text-center py-12 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm font-mono">
            No matching technical skills found for "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategoryGroups.map((categoryGroup, groupIdx) => (
              <motion.div
                key={categoryGroup.category}
                className="rounded-xl bg-slate-900/50 border border-slate-800/90 p-5 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                      {categoryGroup.skills.length} skills
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                    {categoryGroup.description}
                  </p>

                  <div className="space-y-2.5">
                    {categoryGroup.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800/60 hover:border-blue-500/30 hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="flex items-center space-x-2.5">
                            <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-slate-400 font-mono">Status: Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Verification Note for Recruiters */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Recruiter Note:</strong> Every listed skill is backed by real coursework, practical hands-on application development (Vibe Checker AI, EzyPark, Memory Game), or academic research. No unverified technologies or inflated proficiency levels are claimed.
          </p>
        </div>

      </div>
    </section>
  );
}

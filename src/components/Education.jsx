import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal computer applications degrees and academic records demonstrating strong algorithmic, analytical, and software foundations.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Education Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-slate-300 mb-2">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 flex items-center space-x-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </p>

                {/* Highlights */}
                {edu.highlights && (
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-4">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Grade Callout */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Score / Cumulative Record:</span>
                <span className="px-3 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300 font-mono font-semibold text-xs">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

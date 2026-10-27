import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Building2, Award, FileText, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#070b13] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>INTERNSHIP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Industry & Practical Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on internships focused on modern web engineering, AI application integration, and data analytics.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-slate-800">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              className="relative pl-12 sm:pl-16 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {/* Timeline Marker */}
              <div className="absolute left-3.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 group-hover:border-blue-400 transition-all duration-200">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full m-auto mt-0.5"></div>
              </div>

              {/* Experience Card */}
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-slate-300 font-medium text-sm mt-0.5">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-5">
                  {exp.highlights.map((point, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-950/70 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Verified Internship Credentials & Documentation */}
                {(exp.certificatePdf || exp.completionLetterPdf) && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                    {exp.certificatePdf && (
                      <a
                        href={exp.certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold transition-all shadow-xs group/btn"
                      >
                        <Award className="w-3.5 h-3.5 text-blue-400 group-hover/btn:text-white" />
                        <span>View Internship Certificate (PDF)</span>
                        <ExternalLink className="w-3 h-3 text-blue-400/80 group-hover/btn:text-white" />
                      </a>
                    )}

                    {exp.completionLetterPdf && (
                      <a
                        href={exp.completionLetterPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-medium transition-colors group/btn"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" />
                        <span>Completion Letter (PDF)</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover/btn:text-white" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

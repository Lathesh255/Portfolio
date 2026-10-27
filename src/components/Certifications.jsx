import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, Users, Layers, ExternalLink, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Users,
  Layers
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#070b13] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Certifications & Technical Workshops
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Industry recognized credentials in artificial intelligence, client communications, and modern web application development.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-1">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-blue-400 mb-3">
                    Issuer: {cert.issuer}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center space-x-1 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  {cert.pdfUrl ? (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-sans font-medium transition-colors"
                    >
                      <span>View PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{cert.issuer}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

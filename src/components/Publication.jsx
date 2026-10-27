import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  UserCheck, 
  Calendar, 
  BookmarkCheck, 
  Lock,
  ChevronDown,
  ChevronUp,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Award,
  X,
  ZoomIn,
  Download
} from 'lucide-react';
import { publicationData } from '../data/portfolioData';

export default function Publication() {
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const [showFrameworkDetails, setShowFrameworkDetails] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="publication" className="py-20 bg-[#070b13] relative border-t border-slate-800/80">
      {/* Subtle background glow for research highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>RESEARCH & PUBLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Academic Research & Web Security
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Peer-reviewed research presented at an international IEEE conference focusing on automated vulnerability mitigation.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        {/* Featured Publication Card */}
        <motion.div
          className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-[#0c121e] p-6 sm:p-10 shadow-2xl shadow-blue-950/20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Accents */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Publication: {publicationData.publication}</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{publicationData.year}</span>
              </span>
            </div>

            <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Conference Accepted & Presented</span>
            </span>
          </div>

          {/* Responsive Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
            
            {/* Left Column: Paper Details & Abstract */}
            <div className="lg:col-span-7 space-y-6">
              {/* Paper Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {publicationData.title}
              </h3>

              {/* Conference & Authorship Meta */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm space-y-3">
                <div>
                  <span className="text-slate-500 font-mono block text-[11px] uppercase tracking-wider mb-1">
                    Conference & Presentation Venue
                  </span>
                  <p className="text-slate-200 font-medium">
                    {publicationData.conference}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    Department of Research and Development, New Horizon College of Engineering, Bengaluru (17th & 18th June 2026)
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-slate-500 font-mono block text-[11px] uppercase tracking-wider mb-1">
                    Research Mentorship & Affiliation
                  </span>
                  <p className="text-slate-200 font-medium flex items-center space-x-1.5">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    <span>Research Guide: <strong className="text-white">{publicationData.researchGuide}</strong></span>
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {publicationData.institution}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase font-mono tracking-wider mb-2">
                  Research Focus & Abstract Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {publicationData.summary}
                </p>
              </div>

              {/* Research Areas */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-2.5">
                  Domain & Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {publicationData.researchAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-blue-950/30 text-blue-300 border border-blue-900/40 text-xs font-mono"
                    >
                      #{area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Certificate Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950/90 border border-blue-500/30 p-4 shadow-xl relative group">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-mono font-medium">
                    <Award className="w-4 h-4" />
                    <span>Official Presentation Certificate</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    IEEE Co-sponsored
                  </span>
                </div>

                {/* Clickable Certificate Preview with Hover Overlay */}
                <div 
                  onClick={() => setShowCertificateModal(true)}
                  className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-md group/img aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={publicationData.certificatePath}
                    alt="IEEE ICEMCSI 2026 Certificate - Lathesha A N"
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center">
                    <div className="p-3 rounded-full bg-blue-600/90 text-white mb-2 shadow-lg scale-90 group-hover/img:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-white text-xs font-semibold">Click to View Full Certificate</span>
                    <span className="text-slate-300 text-[11px] font-mono mt-1">Presented at ICEMCSI 2026</span>
                  </div>
                </div>

                {/* Card footer description */}
                <div className="mt-3 text-center">
                  <p className="text-[11px] text-slate-400 font-sans">
                    Awarded by New Horizon College of Engineering, technically sponsored by IEEE Bangalore Section.
                  </p>
                  <button
                    onClick={() => setShowCertificateModal(true)}
                    className="mt-2.5 w-full py-2 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-semibold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View High-Res Certificate</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Expandable Framework Architecture Breakdown */}
          <div className="mb-8">
            <button
              onClick={() => setShowFrameworkDetails(!showFrameworkDetails)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-between transition-colors"
            >
              <span className="flex items-center space-x-2">
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold">View Automated Security Framework Architecture & Pipeline</span>
              </span>
              {showFrameworkDetails ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <AnimatePresence>
              {showFrameworkDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-5 rounded-xl bg-slate-950/90 border border-slate-800/90 space-y-4 text-xs font-mono"
                >
                  <div className="text-slate-300 font-semibold text-xs uppercase tracking-wider text-blue-400">
                    Framework Workflow & Detection Modules:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold mb-1 flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>1. Proactive Scanning</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-normal">
                        Scans live HTTP response headers, CORS misconfigurations, missing Content-Security-Policy (CSP), and exposed cookies lacking SameSite/Secure flags.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-amber-400 font-bold mb-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>2. Risk Prioritization</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-normal">
                        Ranks security findings against standard CVSS scoring matrices to weed out false positives and isolate urgent exploitable drift.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-blue-400 font-bold mb-1 flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>3. Guided Remediation</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-normal">
                        Synthesizes drop-in server configuration snippets (Nginx, Apache, Express helmet) to rapidly remediate flaws before attack exposure.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Actions & Verification Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Direct PDF link to the research paper */}
              <a
                href={publicationData.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-blue-900/30"
              >
                <FileText className="w-4 h-4" />
                <span>Read Research Paper (PDF)</span>
              </a>

              {/* Official IEEE Conference Certificate Viewer */}
              <button
                onClick={() => setShowCertificateModal(true)}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>View Full Certificate</span>
              </button>

              {/* Official IEEE Link / Configurable button */}
              {publicationData.ieeeUrl ? (
                <a
                  href={publicationData.ieeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700"
                >
                  <span>IEEE Xplore Record</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => setShowConfigNotice(!showConfigNotice)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-700/80 transition-colors"
                >
                  <span>IEEE Xplore Status</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
              )}
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
              <Lock className="w-3 h-3 text-blue-400" />
              <span>Proactive Vulnerability Assessment</span>
            </div>
          </div>

          {/* Configuration Notice for Recruiter/User */}
          {showConfigNotice && (
            <motion.div
              className="mt-4 p-3.5 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <div className="font-semibold text-blue-300 mb-1">
                IEEE Xplore Indexing Note:
              </div>
              <p>
                The paper was presented at ICEMCSI 2026. The direct PDF copy is accessible above. When the official IEEE Xplore digital library URI is live, it can be updated directly in <code className="bg-slate-900 px-1 py-0.5 rounded text-blue-300">src/data/portfolioData.js</code> under <code className="bg-slate-900 px-1 py-0.5 rounded text-blue-300">publicationData.ieeeUrl</code>.
              </p>
            </motion.div>
          )}

        </motion.div>

        {/* Certificate Modal */}
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0b101b] border border-emerald-500/30 rounded-2xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Award className="w-5 h-5" />
                  <h4 className="text-base font-bold text-white">IEEE ICEMCSI 2026 Presentation Certificate</h4>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={publicationData.certificatePath}
                  alt="IEEE ICEMCSI 2026 Certificate - Lathesha A N"
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="pt-3 mt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span>Presented by Lathesha A N · Dayananda Sagar Academy of Technology & Management</span>
                <a
                  href={publicationData.certificatePath}
                  download="Lathesha_AN_IEEE_Certificate.jpg"
                  className="inline-flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res JPG</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

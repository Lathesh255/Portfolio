import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  MessageSquare,
  Zap,
  Clock
} from 'lucide-react';
import { Github, Linkedin, WhatsApp } from './Icons';
import { personalInfo } from '../data/portfolioData';

const ROLE_PRESETS = [
  "Opportunity: Associate Software Engineer (SDE)",
  "Opportunity: QA / Automation Testing Engineer",
  "Opportunity: Entry-level Cybersecurity Analyst",
  "Opportunity: Full-Stack Web Developer",
  "Discussion: Technical Interview Request"
];

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handlePresetSelect = (preset) => {
    setFormData((prev) => ({
      ...prev,
      subject: preset
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Recruiter'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Lathesha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentNotice(true);
  };

  const whatsappUrl = `https://wa.me/918310426364?text=${encodeURIComponent(
    "Hi Lathesha, I came across your portfolio and would like to discuss an opportunity."
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Contact & Hiring Inquiries
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Available for immediate discussions regarding Software Engineer, Developer, QA, and Cybersecurity fresher opportunities.
          </p>
          <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Quick Response Notice */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-semibold">Ready for Immediate Joining</span>
              </span>
              <span className="text-slate-400 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Response: &lt; 2 hrs</span>
              </span>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy Email"
                type="button"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-600/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs font-bold text-white hover:text-sky-400 transition-colors"
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy Phone Number"
                  type="button"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-500/50 hover:bg-emerald-950/40 transition-all flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsApp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase font-semibold">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                    Direct Message →
                  </span>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 transition-all flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-lg bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </span>
                <span className="text-[11px] text-slate-500 block font-mono">Open to Relocation</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-blue-600/20 text-slate-200 hover:text-blue-300 border border-slate-700 hover:border-blue-500/40 text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Resume Quick Access */}
            <div className="p-4 sm:p-5 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Offline Resume (PDF)
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Lathesha A N Resume · Verified
                </p>
              </div>
              <a
                href={personalInfo.resumePath}
                download="Lathesha_A_N_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center space-x-1.5 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Recruiter Message Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold text-white tracking-tight">
                    Send Direct Message / Interview Request
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Direct Mailto Delivery
                </span>
              </div>

              {/* Quick Subject / Role Preset Chips */}
              <div>
                <span className="block text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                  Quick Role Selector (Click to autofill subject):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ROLE_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors border ${
                        formData.subject === preset
                          ? 'bg-blue-600/30 text-blue-300 border-blue-500/60'
                          : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-850 hover:text-slate-200'
                      }`}
                    >
                      {preset.replace('Opportunity: ', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name / Recruiter Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Johnson"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject / Position Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g., Opportunity: Associate Software Engineer / Interview Request"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share job description, schedule discussion, or ask questions..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-blue-900/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>

                <span className="text-[11px] text-slate-400 text-center sm:text-right">
                  Addressed to <strong className="text-slate-300">{personalInfo.email}</strong>
                </span>
              </div>

              {sentNotice && (
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Email client prompted! If preferred, you can also mail directly to latheshaan@gmail.com.</span>
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

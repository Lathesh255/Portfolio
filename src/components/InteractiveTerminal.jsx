import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Copy, Check, ArrowRight, Play, CornerDownLeft } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'cli' | 'specs'
  const [copied, setCopied] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState([
    { type: 'system', text: 'Welcome to Lathesha N\'s Interactive Engineering Shell.' },
    { type: 'system', text: 'Type a command or click a quick action below:' }
  ]);

  const handleCopyCode = () => {
    const codeString = `const candidate = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  education: "MCA, DSATM Bengaluru (8.56 CGPA)",
  internship: "Edutainer (PAT Tech) - Vibe Checker AI",
  research: "IEEE ICEMCSI 2026 - Web Security",
  coreStack: ["Python", "Java", "Node.js", "JavaScript"],
  testing: ["Postman", "API Testing", "Debugging"],
  status: "Immediate Joiner | SDE / QA / Cyber"
};`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newLogs = [...cliLogs, { type: 'command', text: `$ ${cmdStr}` }];

    if (cmd === 'clear') {
      setCliLogs([]);
      return;
    } else if (cmd === 'help') {
      newLogs.push({
        type: 'response',
        text: 'Available commands:\n  • skills       - List verified technical competencies\n  • projects     - Showcase featured web & full-stack systems\n  • education    - View academic track record & CGPA\n  • research     - Details on IEEE ICEMCSI 2026 publication\n  • contact      - Reach out directly for opportunities\n  • clear        - Clear terminal screen'
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        type: 'response',
        text: 'Core Languages : Python, Java, JavaScript, C++\nBackend & Web  : Node.js, Express, HTML5, CSS3, REST APIs\nDatabases      : MySQL, MongoDB Atlas\nQuality & QA   : Postman, API Testing, Debugging, Linux\nAnalytics      : Pandas, NumPy, Matplotlib, Power BI'
      });
    } else if (cmd === 'projects') {
      newLogs.push({
        type: 'response',
        text: '1. Memory Matching Game   - Dynamic card game, responsive runtime\n2. EzyPark Smart Parking  - Full-stack IoT dynamic tariff & Stripe\n3. Vibe Checker AI        - Emotion aura detection at Edutainer'
      });
    } else if (cmd === 'education') {
      newLogs.push({
        type: 'response',
        text: '• MCA : Dayananda Sagar AT&M, Bengaluru (8.56 CGPA, 2024–2026)\n• BCA : Sri Bhuvanendra College (8.6 CGPA, 2021–2024)\n• PUC : ARS PU College (78.5%)\n• SSLC: Sri Sachchidananda Saraswathi HS (80.8%)'
      });
    } else if (cmd === 'research') {
      newLogs.push({
        type: 'response',
        text: 'Title: "An Automated Web Security Configuration Assessment Framework for Proactive Vulnerability Detection and Remediation"\nStatus: Accepted at IEEE ICEMCSI 2026 under Dr. Chitra K'
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'response',
        text: `Email   : ${personalInfo.email}\nPhone   : ${personalInfo.phoneDisplay}\nLinkedIn: linkedin.com/in/latheshn07\nGitHub  : github.com/Lathesh255`
      });
    } else {
      newLogs.push({
        type: 'response',
        text: `Command not recognized: "${cmdStr}". Type 'help' for valid commands.`
      });
    }

    setCliLogs(newLogs);
    setCliInput('');
  };

  const handleCliSubmit = (e) => {
    e.preventDefault();
    if (!cliInput.trim()) return;
    executeCommand(cliInput);
  };

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-[#0c121e]/95 shadow-2xl shadow-black/70 overflow-hidden">
      {/* Window Top Bar with Tabs */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090e18] border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'code'
                ? 'bg-slate-800 text-blue-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            candidate.js
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center space-x-1 ${
              activeTab === 'cli'
                ? 'bg-slate-800 text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>cli.sh</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
              activeTab === 'specs'
                ? 'bg-slate-800 text-purple-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            specs.json
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopyCode}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'code' && (
        <div className="p-5 font-mono text-xs sm:text-sm space-y-2">
          <div className="text-slate-400">
            <span className="text-blue-400 font-semibold">const</span> candidate = {'{'}
          </div>
          <div className="pl-4 space-y-1 text-slate-300">
            <div>
              <span className="text-slate-400">name:</span> <span className="text-emerald-400">"{personalInfo.name}"</span>,
            </div>
            <div>
              <span className="text-slate-400">education:</span> <span className="text-emerald-400">"MCA, DSATM Bengaluru"</span>,
            </div>
            <div>
              <span className="text-slate-400">academic_record:</span> <span className="text-amber-300">"8.56 CGPA"</span>,
            </div>
            <div>
              <span className="text-slate-400">internship:</span> <span className="text-sky-300">"Edutainer (PAT Tech)"</span>,
            </div>
            <div>
              <span className="text-slate-400">internship_app:</span> <span className="text-sky-300">"Vibe Checker AI"</span>,
            </div>
            <div>
              <span className="text-slate-400">research:</span> <span className="text-purple-300">"IEEE ICEMCSI 2026"</span>,
            </div>
            <div>
              <span className="text-slate-400">core_stack:</span> [
              <span className="text-blue-300">"Python"</span>, <span className="text-blue-300">"Java"</span>, <span className="text-blue-300">"Node.js"</span>, <span className="text-blue-300">"JS"</span>
              ],
            </div>
            <div>
              <span className="text-slate-400">testing:</span> [
              <span className="text-indigo-300">"Postman"</span>, <span className="text-indigo-300">"API Testing"</span>, <span className="text-indigo-300">"Debugging"</span>
              ],
            </div>
            <div>
              <span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready to deploy & contribute"</span>
            </div>
          </div>
          <div className="text-slate-400">{'}'};</div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center space-x-1.5 text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Resume Record</span>
            </span>
            <button
              onClick={() => setActiveTab('cli')}
              className="hover:text-blue-300 flex items-center space-x-1 transition-colors text-xs text-slate-300 font-mono"
            >
              <span>Try CLI Shell</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {activeTab === 'cli' && (
        <div className="p-4 sm:p-5 font-mono text-xs flex flex-col h-72">
          {/* Output log */}
          <div className="flex-grow overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {cliLogs.map((log, i) => (
              <div key={i}>
                {log.type === 'command' && (
                  <div className="text-emerald-400 font-semibold">{log.text}</div>
                )}
                {log.type === 'system' && (
                  <div className="text-slate-400">{log.text}</div>
                )}
                {log.type === 'response' && (
                  <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed bg-slate-950/40 p-2 rounded border border-slate-800/60 font-mono text-[11px]">
                    {log.text}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Quick Command Chips */}
          <div className="pt-2 pb-2 flex flex-wrap gap-1.5 border-t border-slate-800/60 mt-2">
            {['skills', 'projects', 'education', 'research', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-blue-600/30 hover:text-blue-300 text-slate-400 text-[10px] transition-colors border border-slate-700/60"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* CLI input */}
          <form onSubmit={handleCliSubmit} className="flex items-center space-x-2 pt-1 border-t border-slate-800">
            <span className="text-blue-400 font-bold">lathesha:~$</span>
            <input
              type="text"
              value={cliInput}
              onChange={(e) => setCliInput(e.target.value)}
              placeholder="type help, skills, contact..."
              className="flex-grow bg-transparent text-slate-200 focus:outline-none text-xs font-mono"
            />
            <button type="submit" className="text-slate-500 hover:text-blue-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {activeTab === 'specs' && (
        <div className="p-5 font-mono text-xs space-y-2.5">
          <div className="text-slate-400">
            <span className="text-purple-400 font-semibold">{'{'}</span>
          </div>
          <div className="pl-4 space-y-1.5 text-slate-300">
            <div>
              <span className="text-slate-400">"candidate"</span>: <span className="text-emerald-400">"Lathesha A N"</span>,
            </div>
            <div>
              <span className="text-slate-400">"highest_degree"</span>: <span className="text-sky-300">"MCA (8.56 CGPA)"</span>,
            </div>
            <div>
              <span className="text-slate-400">"bachelor_degree"</span>: <span className="text-sky-300">"BCA (8.6 CGPA)"</span>,
            </div>
            <div>
              <span className="text-slate-400">"location"</span>: <span className="text-amber-300">"Bengaluru, Karnataka, India"</span>,
            </div>
            <div>
              <span className="text-slate-400">"relocation"</span>: <span className="text-emerald-400">true</span>,
            </div>
            <div>
              <span className="text-slate-400">"notice_period"</span>: <span className="text-emerald-400">"Immediate"</span>,
            </div>
            <div>
              <span className="text-slate-400">"target_roles"</span>: [
              <span className="text-blue-300">"Software Engineer"</span>, <span className="text-blue-300">"QA Engineer"</span>, <span className="text-blue-300">"Developer"</span>
              ],
            </div>
            <div>
              <span className="text-slate-400">"ieee_publication"</span>: <span className="text-emerald-400">"Accepted ICEMCSI 2026"</span>
            </div>
          </div>
          <div className="text-purple-400">{'}'}</div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="text-slate-400 font-mono text-[11px]">JSON Schema Verified</span>
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
            >
              <span>Schedule Interview</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

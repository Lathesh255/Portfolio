import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Brain, HeartHandshake, Zap, ArrowRight, ShieldCheck, Smile } from 'lucide-react';

const PRESET_VIBES = [
  {
    text: "Refactored 500 lines of legacy code with zero regressions",
    title: "Quantum Flowmaster",
    aura: "Emerald Brilliance",
    auraColor: "from-emerald-500/30 to-teal-500/10 border-emerald-500/40 text-emerald-300",
    metrics: { focus: 96, confidence: 92, calm: 88 },
    aiResponse: "Your aura radiates clean logic and masterful precision. The codebase breathes a sigh of relief, and your focus frequency is peaking. Ride this algorithmic momentum!"
  },
  {
    text: "Preparing for an upcoming technical interview on system design",
    title: "Architect in Ascension",
    aura: "Azure Resonance",
    auraColor: "from-blue-500/30 to-indigo-500/10 border-blue-500/40 text-blue-300",
    metrics: { focus: 90, confidence: 85, calm: 78 },
    aiResponse: "High strategic clarity detected. Break down the requirements, prioritize scalability, and speak with confidence. Your architectural foundations are solid."
  },
  {
    text: "Investigating a tricky race condition in async web sockets",
    title: "Cyber Sleuth",
    aura: "Amethyst Insight",
    auraColor: "from-purple-500/30 to-pink-500/10 border-purple-500/40 text-purple-300",
    metrics: { focus: 98, confidence: 80, calm: 70 },
    aiResponse: "Deep investigative state active. Trace the execution timestamps and state locks methodically. The eureka moment is just around the corner."
  }
];

export default function VibeCheckerDemoModal({ isOpen, onClose }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeVibe, setActiveVibe] = useState(PRESET_VIBES[0]);

  const runAnalysis = (vibe) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setActiveVibe(vibe);
      setIsAnalyzing(false);
    }, 400);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const generatedVibe = {
      text: customInput,
      title: "Synthesized Mindset",
      aura: "Prismatic Radiance",
      auraColor: "from-sky-500/30 to-purple-500/10 border-sky-500/40 text-sky-300",
      metrics: { focus: 89, confidence: 91, calm: 85 },
      aiResponse: `Analysis complete: "${customInput}" reflects high cognitive energy and problem-solving drive. Empathy and technical synthesis are aligned.`
    };
    runAnalysis(generatedVibe);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0b101b] border border-purple-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Brain className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Vibe Checker AI — Interactive Feature Simulation
              </h3>
              <p className="text-xs text-slate-400">
                Aura Scanner & AI Response Generator (Edutainer Internship Module)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Selector */}
        <div className="my-4">
          <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
            Select a Scenario to Scan Aura:
          </label>
          <div className="grid grid-cols-1 gap-2">
            {PRESET_VIBES.map((pv, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedIdx(idx);
                  runAnalysis(pv);
                }}
                className={`text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${
                  selectedIdx === idx
                    ? 'bg-purple-950/40 border-purple-500/50 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span className="truncate pr-2">"{pv.text}"</span>
                <span className="text-[10px] font-mono text-purple-400 shrink-0">Scan →</span>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Input */}
        <form onSubmit={handleCustomSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Or enter your current engineering mindset..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="flex-grow px-3 py-2 text-xs rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 focus:outline-none focus:border-purple-500 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors shrink-0"
            >
              Analyze
            </button>
          </div>
        </form>

        {/* Scan Result Card */}
        <div className={`p-4 rounded-xl bg-gradient-to-br ${activeVibe.auraColor} border relative overflow-hidden transition-all duration-300 mb-4`}>
          {isAnalyzing ? (
            <div className="py-8 flex flex-col items-center justify-center space-y-2 text-purple-300">
              <Sparkles className="w-6 h-6 animate-spin" />
              <span className="text-xs font-mono">Running Emotion & Aura Inference Model...</span>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aura Scanner Result</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-[10px] font-mono font-bold text-white">
                  {activeVibe.aura}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {activeVibe.title}
              </h4>

              {/* Metrics Meters */}
              <div className="grid grid-cols-3 gap-2 my-3 text-center">
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <div className="text-[10px] text-slate-300 font-mono">Focus</div>
                  <div className="text-base font-extrabold text-emerald-400 font-mono">{activeVibe.metrics.focus}%</div>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <div className="text-[10px] text-slate-300 font-mono">Confidence</div>
                  <div className="text-base font-extrabold text-sky-400 font-mono">{activeVibe.metrics.confidence}%</div>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <div className="text-[10px] text-slate-300 font-mono">Calm</div>
                  <div className="text-base font-extrabold text-purple-400 font-mono">{activeVibe.metrics.calm}%</div>
                </div>
              </div>

              {/* AI Empathetic Response */}
              <div className="mt-3 p-3 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-200">
                <div className="text-[10px] font-mono text-purple-300 font-semibold mb-1 flex items-center space-x-1">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>AI Empathetic Generator Output:</span>
                </div>
                <p className="italic leading-relaxed">
                  "{activeVibe.aiResponse}"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Project Attribution Note */}
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start space-x-2">
          <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <span>
            Developed during the software development internship at <strong>Edutainer (PAT Technologies Private Limited)</strong>, integrating web clients with sentiment AI inference endpoints.
          </span>
        </div>

        {/* Footer */}
        <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono text-[11px]">
            Node.js · AI Integration · API Testing
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

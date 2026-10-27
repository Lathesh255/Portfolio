import React from 'react';

export function MemoryGameVisual() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-blue-950/60 via-slate-900/90 to-indigo-950/40 rounded-t-xl overflow-hidden border-b border-slate-800/80 flex items-center justify-center p-4">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Visual Cards Mockup */}
      <div className="relative flex items-center justify-center space-x-3 z-10 scale-95">
        {/* Card 1 */}
        <div className="w-14 h-18 rounded-lg bg-gradient-to-b from-blue-500/20 to-blue-600/10 border border-blue-500/40 shadow-lg shadow-blue-500/10 flex flex-col items-center justify-center transform -rotate-6 transition-transform group-hover:rotate-0">
          <span className="text-xl">🐍</span>
          <span className="text-[8px] font-mono text-blue-300 mt-1 font-semibold">Python</span>
        </div>

        {/* Card 2 (Matched Pair) */}
        <div className="w-16 h-20 rounded-lg bg-gradient-to-b from-emerald-500/30 to-emerald-600/10 border border-emerald-400/50 shadow-xl shadow-emerald-500/20 flex flex-col items-center justify-center transform scale-105 z-20 transition-transform group-hover:scale-110">
          <span className="text-2xl animate-pulse">⚡</span>
          <span className="text-[9px] font-mono text-emerald-300 mt-1 font-bold">MATCH!</span>
        </div>

        {/* Card 3 */}
        <div className="w-14 h-18 rounded-lg bg-gradient-to-b from-blue-500/20 to-blue-600/10 border border-blue-500/40 shadow-lg shadow-blue-500/10 flex flex-col items-center justify-center transform rotate-6 transition-transform group-hover:rotate-0">
          <span className="text-xl">⚡</span>
          <span className="text-[8px] font-mono text-blue-300 mt-1 font-semibold">Node.js</span>
        </div>
      </div>

      {/* Floating score tag */}
      <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-300 flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>Interactive Game</span>
      </div>
    </div>
  );
}

export function EzyParkVisual() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-cyan-950/60 via-slate-900/90 to-blue-950/40 rounded-t-xl overflow-hidden border-b border-slate-800/80 flex items-center justify-between p-5">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Left side: Parking Spot Status Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-1.5">
        <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono text-emerald-300">
          P1
        </div>
        <div className="w-8 h-8 rounded-md bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[10px] font-mono text-red-300">
          P2
        </div>
        <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono text-emerald-300">
          P3
        </div>
        <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono text-emerald-300">
          P4
        </div>
        <div className="w-8 h-8 rounded-md bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[10px] font-mono text-red-300">
          P5
        </div>
        <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono text-emerald-300">
          P6
        </div>
      </div>

      {/* Right side: Dynamic Pricing Indicator */}
      <div className="relative z-10 p-2.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 text-right space-y-1">
        <div className="flex items-center space-x-1.5 text-[10px] font-mono text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>LIVE TARIFF</span>
        </div>
        <div className="text-base font-extrabold text-white font-mono">
          ₹45 <span className="text-[10px] font-normal text-slate-400">/hr</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-400">
          Stripe + JWT Active
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-300 flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        <span>Cloud IoT & Billing</span>
      </div>
    </div>
  );
}

export function VibeCheckerVisual() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-purple-950/60 via-slate-900/90 to-pink-950/40 rounded-t-xl overflow-hidden border-b border-slate-800/80 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Visual AI Wave & Synergy Meter */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
        <div className="relative flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="w-20 h-20 rounded-full border border-purple-500/30 animate-ping absolute opacity-40"></div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-indigo-600/30 border border-purple-400/50 flex flex-col items-center justify-center shadow-lg shadow-purple-900/40">
            <span className="text-base font-extrabold text-white font-mono">88%</span>
            <span className="text-[8px] font-mono text-purple-200 uppercase">Synergy</span>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex items-center space-x-2 text-[9px] font-mono text-purple-300">
          <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/50">Aura Scanner</span>
          <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/50">AI Generator</span>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] font-mono text-slate-300 flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
        <span>Edutainer Internship</span>
      </div>
    </div>
  );
}

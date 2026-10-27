import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Car, DollarSign, Layers, ShieldCheck, Zap, ArrowRight, Database } from 'lucide-react';

export default function EzyParkDemoModal({ isOpen, onClose }) {
  const [occupancy, setOccupancy] = useState(75);
  const [isPeakHour, setIsPeakHour] = useState(true);
  const baseRate = 30; // 30 INR or USD base rate

  // Dynamic pricing algorithm simulation
  // If occupancy < 50%: base rate
  // If occupancy between 50% and 80%: base * 1.35
  // If occupancy > 80%: base * 1.85
  // Peak hour adds +25%
  const calculateRate = () => {
    let multiplier = 1.0;
    if (occupancy >= 85) {
      multiplier = 2.1;
    } else if (occupancy >= 65) {
      multiplier = 1.5;
    } else if (occupancy >= 40) {
      multiplier = 1.15;
    } else {
      multiplier = 0.9;
    }

    if (isPeakHour) {
      multiplier *= 1.25;
    }

    return Math.round(baseRate * multiplier);
  };

  const currentRate = calculateRate();
  const availableSlots = Math.round(150 * (1 - occupancy / 100));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0b101b] border border-blue-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Car className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                EzyPark Dynamic Pricing Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Interactive demonstration of the rule-based pricing engine & cloud architecture
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

        {/* Dynamic Pricing Interactive Playground */}
        <div className="my-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              1. Real-Time Lot Occupancy Simulation
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {occupancy}% Full ({availableSlots} / 150 Slots Open)
            </span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="5"
            max="98"
            value={occupancy}
            onChange={(e) => setOccupancy(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Low Demand (5%)</span>
            <span>Medium (50%)</span>
            <span>Surge / High Demand (98%)</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
            <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={isPeakHour}
                onChange={(e) => setIsPeakHour(e.target.checked)}
                className="rounded bg-slate-950 border-slate-700 text-blue-500 focus:ring-0"
              />
              <span>Peak Hours Multiplier (+25%)</span>
            </label>

            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-mono">Dynamic Hourly Rate</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono">
                ₹{currentRate} <span className="text-xs font-normal text-slate-400">/ hr</span>
              </span>
            </div>
          </div>
        </div>

        {/* Architecture & Engineering Highlights */}
        <div className="space-y-3 mb-5">
          <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            2. Full-Stack Cloud Architecture & Security
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-mono">
            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">JWT Auth & Protected Routes</strong>
                <span className="text-slate-400 text-[11px]">HMAC-SHA256 tokens guard bookings and admin endpoints.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start space-x-2">
              <DollarSign className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Stripe Payment Gateway</strong>
                <span className="text-slate-400 text-[11px]">Secure payment session creation and webhook confirmations.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start space-x-2">
              <Database className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">MongoDB Atlas Storage</strong>
                <span className="text-slate-400 text-[11px]">Optimized indexing for fast geo-slot lookup and reservation state.</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start space-x-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans">Dynamic Tariff Engine</strong>
                <span className="text-slate-400 text-[11px]">Automated surge and vacancy rate adjustments via server logic.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono text-[11px]">
            Node.js · Express · MongoDB · Stripe
          </span>
          <a
            href="https://github.com/Lathesh255"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all inline-flex items-center space-x-1.5"
          >
            <span>View Source on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

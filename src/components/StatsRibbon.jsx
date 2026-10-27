import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Zap, MapPin } from 'lucide-react';

export default function StatsRibbon() {
  const stats = [
    {
      label: "MCA Academic Record",
      value: "8.56",
      sub: "DSATM Bengaluru",
      icon: GraduationCap,
      color: "text-blue-400"
    },
    {
      label: "IEEE Publication",
      value: "1 Paper",
      sub: "ICEMCSI 2026 Accepted",
      icon: Award,
      color: "text-purple-400"
    },
    {
      label: "Internship Experience",
      value: "2 Roles",
      sub: "Edutainer & ICT Academy",
      icon: Briefcase,
      color: "text-sky-400"
    },
    {
      label: "Joining Availability",
      value: "Immediate",
      sub: "Fresher SDE / QA Ready",
      icon: Zap,
      color: "text-emerald-400"
    }
  ];

  return (
    <div className="relative border-y border-slate-800/80 bg-[#090d17]/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex items-center space-x-3.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-300 font-medium leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

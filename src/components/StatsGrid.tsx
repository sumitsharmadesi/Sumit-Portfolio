import React from 'react';
import { Zap, Clock, Layers, Award, ShieldAlert, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { STAT_HIGHLIGHTS } from '../data/portfolioData';

export const StatsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-emerald-400" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'award':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Award className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="impact" className="py-16 md:py-24 relative border-y border-slate-800/80 bg-slate-950/70">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-indigo-400 mb-3">
            <span>Key Accomplishments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Measurable Engineering Impact
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Proven track record of accelerating mobile release cadences, optimizing runtime footprints, and leading engineering squads to early delivery.
          </p>
        </div>

        {/* 4 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="glow-card group rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 flex flex-col justify-between hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Metric
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                  <div className="text-base font-semibold text-slate-100">
                    {item.label}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified Production Result</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supplementary Leadership Callout Strip */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/60 border border-indigo-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Team Leadership &amp; Engineering Governance
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Experienced in managing 5-6 developer squads, establishing CI/CD quality gates, and collaborating across US time zones.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-indigo-400 font-bold">100%</span> On-Time Releases
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-emerald-400 font-bold">&gt;99.8%</span> Crash-Free Rate
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-purple-400 font-bold">HIPAA</span> Security Standard
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

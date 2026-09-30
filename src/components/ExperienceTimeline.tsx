import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Award, 
  Building2, 
  Users, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  // First item open by default
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    flightcase: true,
    'infinite-uptime': true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    WORK_EXPERIENCES.forEach((w) => (allExpanded[w.id] = true));
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-xs font-medium text-indigo-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Work Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            12+ years of progressive software engineering journey from hands-on Android development to Associate Manager guiding multi-member mobile squads.
          </p>

          <div className="flex items-center gap-2 mt-4 text-xs">
            <button
              onClick={expandAll}
              className="text-indigo-400 hover:text-indigo-300 font-medium px-2 py-1 rounded hover:bg-slate-900 transition-colors"
            >
              Expand All
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              onClick={collapseAll}
              className="text-slate-400 hover:text-slate-200 font-medium px-2 py-1 rounded hover:bg-slate-900 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-900/60 ml-4 md:ml-32 space-y-10 pl-6 sm:pl-8">
          
          {WORK_EXPERIENCES.map((exp, index) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  exp.isCurrent
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/40'
                    : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-300'
                }`}>
                  <Building2 className="w-3.5 h-3.5" />
                </div>

                {/* Left Timestamp for desktop */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                  <span className={`text-xs font-mono font-medium block ${exp.isCurrent ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {exp.period.split('–')[1]?.trim() || ''}
                  </span>
                </div>

                {/* Main Experience Card */}
                <div className="glow-card rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/90 overflow-hidden transition-all duration-300 shadow-xl">
                  
                  {/* Card Header (Clickable for toggle) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-850/50 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Current Role
                          </span>
                        )}
                        <span className="text-xs text-indigo-400 font-semibold font-mono">
                          {exp.domain}
                        </span>
                        {exp.teamSize && (
                          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            <Users className="w-3 h-3 text-indigo-400" />
                            {exp.teamSize}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1">
                        <span className="font-semibold text-slate-200">{exp.company}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                        <span className="sm:hidden">&bull;</span>
                        <span className="sm:hidden flex items-center gap-1 font-mono text-indigo-400">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span className="hidden sm:inline text-xs text-slate-500 font-mono">
                        {exp.period}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content Area */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/60 space-y-5 animate-in fade-in duration-200">
                      
                      {/* Summary Narrative */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Responsibilities list */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 font-mono mb-2">
                          Core Responsibilities &amp; Leadership
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2"></span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                            <Award className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Key Accomplishments</span>
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                                <span className="leading-relaxed">{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies Pill Row */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

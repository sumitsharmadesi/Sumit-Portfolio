import React from 'react';
import { 
  GraduationCap, 
  Languages, 
  BookOpen, 
  Award, 
  Globe2, 
  ShieldCheck, 
  Users, 
  Clock, 
  Layers 
} from 'lucide-react';
import { EDUCATION_DATA, LANGUAGES_DATA, LEADERSHIP_PILLARS } from '../data/portfolioData';

export const EducationLanguages: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="education" className="py-20 md:py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Background &amp; Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education, Languages &amp; Leadership
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal computer science foundations, multilingual communications across global distributed teams, and engineering leadership principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Qualifications
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="glow-card rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 transition-all duration-300 hover:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                      {edu.icon === 'graduation-cap' ? (
                        <GraduationCap className="w-5 h-5 text-indigo-400" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-800/40">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {edu.location}
                  </p>

                  {edu.description && (
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Languages Section */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Languages &amp; Global Communication
                </h3>
              </div>

              <div className="glow-card rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 space-y-4">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-200">{lang.name}</span>
                      <span className="text-indigo-400 font-mono text-[11px]">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                        style={{ width: `${lang.levelPercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Leadership Pillars (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Leadership Tenets &amp; Governance
              </h3>
            </div>

            <div className="space-y-4">
              {LEADERSHIP_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glow-card rounded-2xl bg-slate-900/80 border border-slate-800/80 p-5 transition-all duration-300 hover:bg-slate-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick quote callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/80 border border-indigo-900/40">
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Great mobile engineering is not just about clean Kotlin syntax—it's about building resilient, low-latency architectures that empower teams and delight end users under tough constraints."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-white">Sumit Kumar</span>
                <span className="font-mono text-[11px] text-indigo-400">12+ Years Mobile Leadership</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

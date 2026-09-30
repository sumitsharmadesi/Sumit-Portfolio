import React, { useState } from 'react';
import { 
  Smartphone, 
  LayoutGrid, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Search, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface TechStackProps {
  onSelectTechFilter?: (tech: string) => void;
}

export const TechStack: React.FC<TechStackProps> = ({ onSelectTechFilter }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'layout-grid':
        return <LayoutGrid className="w-5 h-5 text-purple-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return false;
    }
    if (!searchQuery.trim()) {
      return true;
    }
    const query = searchQuery.toLowerCase();
    const matchesCategory = category.title.toLowerCase().includes(query);
    const matchesSkill = category.skills.some((s) => s.name.toLowerCase().includes(query));
    return matchesCategory || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-xs font-medium text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Competencies &amp; Tech Stack
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            12+ years of battle-tested engineering across native Android OS, low-level NDK, reactive concurrency, distributed IoT telemetry, and agile squad leadership.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Kotlin, NDK)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const visibleSkills = searchQuery.trim()
              ? category.skills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
              : category.skills;

            return (
              <div
                key={category.id}
                className="glow-card rounded-2xl bg-slate-900/80 border border-slate-800/80 p-6 flex flex-col justify-between hover:bg-slate-900 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {visibleSkills.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => onSelectTechFilter && onSelectTechFilter(skill.name)}
                        className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                          skill.featured
                            ? 'bg-slate-950/80 border-indigo-700/50 text-indigo-200 hover:border-indigo-400 hover:bg-indigo-950/50'
                            : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                        title={`Filter projects using ${skill.name}`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] text-slate-500 font-mono group-hover:text-indigo-400">
                          &bull; {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer hint */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{visibleSkills.length} skills</span>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

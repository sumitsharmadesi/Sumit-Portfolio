import React, { useState } from 'react';
import { 
  Project, 
  ProjectCategory 
} from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Layers, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Settings, 
  ShieldCheck, 
  ShoppingBag, 
  Building, 
  GraduationCap, 
  MessageSquare, 
  MapPin,
  HeartPulse,
  Smartphone,
  Sparkles,
  Filter
} from 'lucide-react';

interface ProjectsShowcaseProps {
  initialTagFilter?: string | null;
  onClearTagFilter?: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ 
  initialTagFilter,
  onClearTagFilter 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [tagFilter, setTagFilter] = useState<string | null>(initialTagFilter || null);

  const categories: ProjectCategory[] = [
    'All',
    'Healthcare',
    'IoT & Enterprise',
    'E-Commerce & Real Estate'
  ];

  const handleCategoryChange = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    if (tagFilter) {
      setTagFilter(null);
      if (onClearTagFilter) onClearTagFilter();
    }
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    // Category match
    if (selectedCategory !== 'All' && proj.category !== selectedCategory) {
      return false;
    }
    // Tag filter match
    if (tagFilter) {
      const hasTag = proj.techStack.some((t) => t.toLowerCase().includes(tagFilter.toLowerCase()));
      if (!hasTag) return false;
    }
    // Search query match
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      proj.title.toLowerCase().includes(query) ||
      proj.subtitle.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query) ||
      proj.techStack.some((t) => t.toLowerCase().includes(query))
    );
  });

  const renderCardIcon = (iconType: string) => {
    const className = "w-5 h-5 text-white";
    switch (iconType) {
      case 'heart-pulse':
      case 'activity':
        return <HeartPulse className={className} />;
      case 'cpu':
        return <Cpu className={className} />;
      case 'settings':
        return <Settings className={className} />;
      case 'shield-check':
        return <ShieldCheck className={className} />;
      case 'shopping-bag':
        return <ShoppingBag className={className} />;
      case 'building':
        return <Building className={className} />;
      case 'graduation-cap':
        return <GraduationCap className={className} />;
      case 'message-square':
        return <MessageSquare className={className} />;
      case 'map-pin':
        return <MapPin className={className} />;
      default:
        return <Smartphone className={className} />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-800/80">
      
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-purple-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Portfolio &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Enterprise Android &amp; IoT Deployments
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Engineered scalable architectures across healthcare mobility, industrial 4.0 sensor pipelines, native NDK security, and hyper-local commercial platforms.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800/90 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Active Tag Clear */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            {tagFilter && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/80 border border-indigo-700/60 text-xs text-indigo-300">
                <span>Filter: <strong>{tagFilter}</strong></span>
                <button
                  onClick={() => {
                    setTagFilter(null);
                    if (onClearTagFilter) onClearTagFilter();
                  }}
                  className="hover:text-white font-bold ml-1 text-slate-400"
                  title="Clear tag filter"
                >
                  &times;
                </button>
              </div>
            )}

            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name/stack..."
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

        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glow-card group rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/90 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/30 cursor-pointer"
            >
              <div>
                {/* Card Top: Icon & Category Label */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${project.accentColor} shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-transform`}>
                    {renderCardIcon(project.iconType)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-400/90 mt-1 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Brief description */}
                <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Impact Point */}
                <div className="mt-4 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/70 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-300 font-medium line-clamp-2">
                    {project.impactMetrics[0]}
                  </span>
                </div>
              </div>

              {/* Card Footer: Tech tags + Explore Link */}
              <div className="mt-5 pt-4 border-t border-slate-800/70">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-950 border border-slate-800">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Architecture &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 mt-6">
            <Smartphone className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">No applications found matching the filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setTagFilter(null);
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectTag={(tag) => {
          setTagFilter(tag);
        }}
      />
    </section>
  );
};

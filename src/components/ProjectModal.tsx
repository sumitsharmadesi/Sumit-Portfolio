import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Activity, 
  Settings, 
  HeartPulse, 
  ShoppingBag, 
  Building, 
  GraduationCap, 
  MessageSquare, 
  MapPin,
  ArrowRight,
  Sparkles,
  Wifi,
  Battery,
  Smartphone
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectTag?: (tag: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectTag }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'highlights'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderProjectIcon = () => {
    const className = "w-7 h-7 text-white";
    switch (project.iconType) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        
        {/* Simulated Android Device Status Bar */}
        <div className="bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Android OS 14</span>
            <span>&bull;</span>
            <span className="text-slate-400 truncate max-w-[200px]">{project.title}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1">
              <Wifi className="w-3.5 h-3.5 text-indigo-400" />
              <span>5G</span>
            </span>
            <span className="flex items-center gap-1">
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
              <span>100%</span>
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Banner Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${project.accentColor} shadow-lg shadow-indigo-600/30 shrink-0`}>
                {renderProjectIcon()}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-700/60">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Production Application</span>
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Close Button on Desktop */}
            <button
              onClick={onClose}
              className="hidden sm:flex p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-800/70 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Overview &amp; Impact
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'highlights'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Engineering Highlights
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* TAB 1: OVERVIEW & IMPACT */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                  Full Project Brief
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>The Engineering Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>The Technical Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Impact & Results */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 font-mono">
                  Measurable Production Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.impactMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-900/40 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-200 leading-snug">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & SYSTEM DESIGN */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                  Architectural Foundation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Interactive Architecture Flow Diagram */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-mono text-indigo-300">Data &amp; Concurrency Flowchart</span>
                  <span className="text-[11px] text-slate-500">Android Lifecycle Bound</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-indigo-400">Presentation Layer</span>
                    <span className="text-xs font-bold text-white mt-1">Activities &amp; UI</span>
                    <span className="text-[11px] text-slate-400 mt-2">Coroutines StateFlow</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-indigo-700/50 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-purple-400">State Management</span>
                    <span className="text-xs font-bold text-white mt-1">MVVM ViewModel</span>
                    <span className="text-[11px] text-slate-400 mt-2">Dagger 2 Injected</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-amber-400">Data Repository</span>
                    <span className="text-xs font-bold text-white mt-1">Domain Logic</span>
                    <span className="text-[11px] text-slate-400 mt-2">Offline Cache + Sync</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-emerald-400">Hardware / Cloud</span>
                    <span className="text-xs font-bold text-white mt-1">IoT / NDK / API</span>
                    <span className="text-[11px] text-slate-400 mt-2">Low-Latency Channel</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 text-center font-mono pt-1">
                  &bull; Clean separation ensuring 100% testability with Mockito &amp; JUnit &bull;
                </div>
              </div>

              {/* Technologies in this Architecture */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Stack Components
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      onClick={() => {
                        if (onSelectTag) {
                          onSelectTag(tech);
                          onClose();
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-indigo-300 hover:border-indigo-500 transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ENGINEERING HIGHLIGHTS */}
          {activeTab === 'highlights' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                Key Deliverables &amp; Engineering Decisions
              </h4>
              <div className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Led by Sumit Kumar ({PERSONAL_INFO.role})</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-600/30 hover:from-indigo-500 hover:to-purple-500 transition-all"
            >
              Inquire About Similar Architecture
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

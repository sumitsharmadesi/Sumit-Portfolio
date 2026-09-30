import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Code,
  Search,
  Linkedin,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { CERTIFICATIONS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');

  const issuers = ['All', ...Array.from(new Set(CERTIFICATIONS_DATA.map(c => c.issuer.split('/')[0].trim())))];

  const filteredCertifications = CERTIFICATIONS_DATA.filter(cert => {
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIssuer = selectedIssuer === 'All' || cert.issuer.includes(selectedIssuer);

    return matchesSearch && matchesIssuer;
  });

  const getIcon = (type?: string) => {
    switch (type) {
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'code':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      default:
        return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getGradient = (type?: string) => {
    switch (type) {
      case 'smartphone':
        return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400';
      case 'code':
        return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-400';
      case 'award':
        return 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400';
      case 'cloud':
        return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400';
      case 'cpu':
        return 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400';
      case 'shield-check':
        return 'from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-400';
      default:
        return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-400';
    }
  };

  return (
    <section id="certifications" className="py-20 relative scroll-mt-20">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FileCheck className="w-3.5 h-3.5" />
              Verified Credentials & Accreditations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl">
              Industry-accredited qualifications in native Android architecture, Kotlin coroutines, agile leadership, and mission-critical cloud integrations.
            </p>
          </div>

          {/* LinkedIn Profile Direct Link */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.linkedin.com/in/sumit-kumar-android/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>Verify on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by skill, title, or issuer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-950/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-thin">
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedIssuer === issuer
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert) => {
            const gradientStyle = getGradient(cert.iconType);

            return (
              <div
                key={cert.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-xl border bg-gradient-to-br ${gradientStyle} shrink-0`}>
                      {getIcon(cert.iconType)}
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[11px] font-medium text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="mt-1 text-xs font-medium text-indigo-400">
                    {cert.issuer}
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Credential Accreditation
                  </span>
                  <a
                    href={cert.credentialUrl || 'https://www.linkedin.com/in/sumit-kumar-android/details/certifications/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Award className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-medium">No certifications match your query.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for "Android", "Kotlin", or "Agile".</p>
          </div>
        )}

        {/* Notice for adding more certifications */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have specific certifications on your LinkedIn to include?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Share any exact certification titles, issuing organizations, or credential IDs, and they will be instantly updated in your portfolio.
              </p>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white shrink-0 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>Open Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
};

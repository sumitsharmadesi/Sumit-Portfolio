import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download, 
  ExternalLink,
  Award,
  CheckCircle2,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  STAT_HIGHLIGHTS, 
  SKILL_CATEGORIES, 
  WORK_EXPERIENCES, 
  EDUCATION_DATA, 
  LANGUAGES_DATA,
  PROJECTS
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Resume Card */}
      <div 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="resume-title"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200"
      >
        
        {/* Action Top Bar */}
        <div className="bg-slate-950 px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold text-white">Executive Curriculum Vitae</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">&bull; Sumit Kumar (12+ Yrs)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="space-y-1">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-indigo-400 print:text-indigo-800">
                {PERSONAL_INFO.role}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 print:text-gray-700">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shrink-0 shadow-md">
              <img
                src="/src/assets/images/sumit_kumar_avatar_1790755668027.jpg"
                alt="Sumit Kumar Portrait"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="border-b border-slate-800 pb-4 print:border-black">
            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                {PERSONAL_INFO.location}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                {PERSONAL_INFO.email}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                {PERSONAL_INFO.phone}
              </span>
              <span>&bull;</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-400 print:text-black underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/sumit-kumar-android
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Key Achievements Metrics */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-3">
              Executive Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STAT_HIGHLIGHTS.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-slate-950 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                  <div className="text-lg font-bold text-indigo-400 print:text-indigo-800">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-200 print:text-black">{s.label}</div>
                  <div className="text-[10px] text-slate-400 print:text-gray-600 mt-1 line-clamp-2">{s.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">{cat.title}:</span>
                  <span className="text-slate-400 print:text-gray-800">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-4">
              Work History
            </h2>
            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-indigo-600 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="text-sm font-bold text-white print:text-black">{exp.role}</span>
                      <span className="text-slate-400 print:text-gray-700 ml-2">&bull; {exp.company}, {exp.location}</span>
                    </div>
                    <span className="font-mono text-indigo-400 print:text-gray-700 text-[11px]">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-400 print:text-gray-700">{exp.summary}</p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-black">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>

                  {exp.achievements.length > 0 && (
                    <div className="text-xs text-emerald-400 print:text-emerald-800 pt-1">
                      <strong>Achievement:</strong> {exp.achievements[0]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Shipped Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-3">
              Selected Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-300">
                  <span className="font-bold text-white print:text-black">{p.title}</span>
                  <span className="text-[11px] text-indigo-400 block mb-1">{p.subtitle}</span>
                  <p className="text-[11px] text-slate-400 print:text-gray-700 line-clamp-2">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-2">
                Education
              </h2>
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="text-xs mb-2">
                  <div className="font-bold text-white print:text-black">{edu.degree}</div>
                  <div className="text-slate-400 print:text-gray-700">{edu.institution}, {edu.location}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black font-mono mb-2">
                Languages
              </h2>
              <div className="text-xs text-slate-300 print:text-black space-y-1">
                {LANGUAGES_DATA.map((l) => (
                  <div key={l.name}>
                    <span className="font-semibold text-white print:text-black">{l.name}:</span> {l.proficiency}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Sumit Kumar &bull; sumitsharma152@gmail.com</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

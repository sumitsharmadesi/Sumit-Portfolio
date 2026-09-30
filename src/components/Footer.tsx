import React from 'react';
import { 
  ArrowUp, 
  Smartphone, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-400">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <Smartphone className="w-4 h-4 text-indigo-100" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Associate Manager - Android &amp; Mobile Engineering Leader with 12+ years of experience delivering high-concurrency healthcare mobility and industrial IoT solutions.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email Sumit"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Call Sumit"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">About &amp; Overview</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-indigo-400 transition-colors">Key Accomplishments</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Core Competencies</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Production Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">Education &amp; Culture</a>
              </li>
            </ul>
          </div>

          {/* Direct Actions (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Resources &amp; Location
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Primary Phone: {PERSONAL_INFO.phone}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  View Executive Resume
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved. Built with modern React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

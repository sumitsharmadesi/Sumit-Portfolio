import React from 'react';
import { 
  Mail, 
  Phone,
  Linkedin,
  MapPin, 
  FileText, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Smartphone,
  Clock,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AVATAR_IMAGE } from '../assets/avatarData';
import avatarImg from '../assets/sumit_kumar_avatar_1790755668027.png';

interface ProfileSidebarCardProps {
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
  className?: string;
}

export const ProfileSidebarCard: React.FC<ProfileSidebarCardProps> = ({ 
  onOpenResume, 
  onCopyText,
  className = ''
}) => {
  return (
    <aside className={`w-full ${className}`} aria-label="Profile and Contact Card">
      <div className="glow-card rounded-3xl bg-slate-900/90 border border-slate-800/90 p-6 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col justify-between">
        
        {/* Top: Avatar & Status */}
        <div className="flex flex-col items-center text-center">
          
          {/* Avatar Container with glowing border */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-300"></div>
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-950 shadow-inner">
              <img
                src={AVATAR_IMAGE || avatarImg || '/avatar.jpg'}
                alt="Sumit Kumar - Associate Manager - Android"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/avatar.jpg') {
                    target.src = '/avatar.jpg';
                  }
                }}
              />
            </div>
            
            {/* Live Availability Badge */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/95 border border-emerald-500/40 text-[10px] font-semibold text-emerald-400 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Leadership</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mt-2 space-y-1">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-xs font-semibold text-indigo-400">
              {PERSONAL_INFO.role}
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 pt-0.5">
              <span>12+ Yrs Exp</span>
              <span>&bull;</span>
              <span>6+ Yrs Kotlin</span>
            </div>
          </div>

          {/* Intro statement */}
          <p className="mt-4 text-xs text-slate-300 leading-relaxed text-center sm:text-left bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Location & Timezone */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Middle: Connect & Contact Options */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold px-1">
            Direct Connect
          </div>

          {/* Email row */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-lg bg-indigo-950/80 text-indigo-400 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-500 leading-none">Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-medium text-slate-200 hover:text-indigo-400 truncate block transition-colors"
                  title={PERSONAL_INFO.email}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy email"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-1.5 rounded-lg text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/60 transition-colors"
                title="Compose email"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone row */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-500 leading-none">Phone</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-medium text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                  title={PERSONAL_INFO.phone}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy phone"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/60 transition-colors"
                title="Call phone"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn row */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-600/60 transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-950/80 text-blue-400 shrink-0">
                <Linkedin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 leading-none">Network</div>
                <span className="text-xs font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
          <a
            href="#contact"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Direct Message</span>
          </a>

          <button
            onClick={onOpenResume}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Executive Resume</span>
          </button>
        </div>

        {/* Quick summary metric row */}
        <div className="mt-5 pt-4 border-t border-slate-800/60 grid grid-cols-3 gap-1.5 text-center text-[10px]">
          <div className="p-1.5 rounded-lg bg-slate-950/60">
            <div className="font-bold text-white text-xs">12+</div>
            <div className="text-slate-500">Yrs Exp</div>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-950/60">
            <div className="font-bold text-indigo-400 text-xs">15+</div>
            <div className="text-slate-500">Apps</div>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-950/60">
            <div className="font-bold text-emerald-400 text-xs">100%</div>
            <div className="text-slate-500">Delivery</div>
          </div>
        </div>

      </div>
    </aside>
  );
};

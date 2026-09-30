import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  FileText, 
  ArrowRight, 
  Copy, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Code2, 
  Terminal,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onCopyText }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'architecture' | 'spec'>('architecture');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-pink-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-600/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal info & call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-medium shadow-sm shadow-indigo-900/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Associate Manager - Android &bull; 12+ Years Exp</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Robust Android</span> Systems at Scale.
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-200">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-sm sm:text-base font-medium text-indigo-400 tracking-wide mt-1">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Summary narrative */}
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                <span>Timezone: IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                <span className="text-emerald-400 font-medium">Open to Leadership Opportunities</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Executive CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Form</span>
              </a>
            </div>

            {/* Direct Connect Chips (Email, Phone, LinkedIn) */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 w-full max-w-xl">
              <button
                onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer group"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
                <Copy className="w-3 h-3 text-slate-500 group-hover:text-indigo-300 ml-1" />
              </button>

              <button
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer group"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
                <Copy className="w-3 h-3 text-slate-500 group-hover:text-emerald-300 ml-1" />
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-800/60 text-xs text-indigo-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Android Architecture Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative glow-card rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl p-5 sm:p-6 backdrop-blur-md">
              
              {/* Window Controls / Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">AndroidStack.kt</span>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setActiveCodeTab('architecture')}
                    className={`px-2 py-0.5 rounded font-medium transition-colors ${
                      activeCodeTab === 'architecture'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('spec')}
                    className={`px-2 py-0.5 rounded font-medium transition-colors ${
                      activeCodeTab === 'spec'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Lead Blueprint
                  </button>
                </div>
              </div>

              {/* Tab 1: Architecture Code View */}
              {activeCodeTab === 'architecture' && (
                <div className="pt-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-2">
                  <div className="text-slate-500">// Modern Scalable Android Architecture Blueprint</div>
                  <div>
                    <span className="text-purple-400">package</span> <span className="text-slate-300">com.sumit.architecture</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-indigo-400">@Singleton</span>
                  </div>
                  <div>
                    <span className="text-purple-400">class</span> <span className="text-amber-300 font-bold">AndroidEngine</span> @Inject <span className="text-purple-400">constructor</span>(
                  </div>
                  <div className="pl-4 text-slate-400 space-y-0.5">
                    <div><span className="text-indigo-300">val</span> cleanArchitecture: <span className="text-emerald-300">MVVM</span>,</div>
                    <div><span className="text-indigo-300">val</span> reactiveStreams: <span className="text-emerald-300">Coroutines &amp; Flow</span>,</div>
                    <div><span className="text-indigo-300">val</span> nativePerformance: <span className="text-emerald-300">Android NDK (C++)</span>,</div>
                    <div><span className="text-indigo-300">val</span> edgeTelemetry: <span className="text-emerald-300">IoT (MQTT &amp; BLE)</span>,</div>
                    <div><span className="text-indigo-300">val</span> voiceEngine: <span className="text-emerald-300">Amazon Polly</span></div>
                  </div>
                  <div>) &#123;</div>
                  <div className="pl-4 space-y-1 text-slate-400">
                    <div>
                      <span className="text-purple-400">fun</span> <span className="text-blue-400">deliverEnterpriseScale</span>(): <span className="text-emerald-300">Impact</span> &#123;
                    </div>
                    <div className="pl-4 text-emerald-400/90">
                      <span className="text-slate-400">return Impact(</span>
                      <div className="pl-2 text-slate-300">
                        perfBoost = <span className="text-amber-400">"40% Load Acceleration"</span>,
                      </div>
                      <div className="pl-2 text-slate-300">
                        crashRate = <span className="text-indigo-400">"&lt; 0.1% Sessions"</span>,
                      </div>
                      <div className="pl-2 text-slate-300">
                        hipaaReady = <span className="text-purple-400">true</span>,
                      </div>
                      <div className="pl-2 text-slate-300">
                        leadCapacity = <span className="text-emerald-400">"Cross-functional squads"</span>
                      </div>
                      <span className="text-slate-400">)</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                  <div>&#125;</div>
                </div>
              )}

              {/* Tab 2: Spec View */}
              {activeCodeTab === 'spec' && (
                <div className="pt-4 space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-indigo-400">
                        <Activity className="w-3.5 h-3.5" />
                        Healthcare Workflows
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">HIPAA Compliant</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Provider and Patient mobile architectures with biometric encryption, offline synchronization, and Amazon Polly TTS audio briefings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <Cpu className="w-3.5 h-3.5" />
                        Industrial IoT &amp; Telemetry
                      </span>
                      <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">Real-Time</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Continuous BLE sensor arrays, MQTT event brokers, and hardware-accelerated Canvas FFT vibration spectrum visualizations.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5 text-purple-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Engineering Leadership
                      </span>
                      <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">5-6 Member Squads</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Sprint governance, architectural design reviews, technical mentorship, and high-velocity deliverables 2 weeks ahead of deadlines.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Quick Metric strip */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-950/50">
                  <div className="text-base font-bold text-white">12+</div>
                  <div className="text-[10px] text-slate-400">Years SDLC</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/50">
                  <div className="text-base font-bold text-indigo-400">15+</div>
                  <div className="text-[10px] text-slate-400">Shipped Apps</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/50">
                  <div className="text-base font-bold text-emerald-400">6+ Yrs</div>
                  <div className="text-[10px] text-slate-400">Kotlin Expert</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

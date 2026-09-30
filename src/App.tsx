import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsGrid } from './components/StatsGrid';
import { TechStack } from './components/TechStack';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationLanguages } from './components/EducationLanguages';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  }, []);

  const handleCopyText = useCallback((text: string, label: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => {
          showToast(`${label} copied to clipboard!`);
        },
        () => {
          showToast(`Copied: ${text}`);
        }
      );
    } else {
      // Fallback
      showToast(`Copied: ${text}`);
    }
  }, [showToast]);

  const handleSelectTechFilter = useCallback((tech: string) => {
    setSelectedTechFilter(tech);
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Subtle Horizontal Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Pill Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Header & Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onCopyText={handleCopyText} 
        />

        {/* 2. Highlight Stats / Key Achievements Card Grid */}
        <StatsGrid />

        {/* 3. Core Competencies & Tech Stack Section */}
        <TechStack onSelectTechFilter={handleSelectTechFilter} />

        {/* 4. Projects Showcase (Interactive Cards with Tag Filters & Modal) */}
        <ProjectsShowcase 
          initialTagFilter={selectedTechFilter}
          onClearTagFilter={() => setSelectedTechFilter(null)}
        />

        {/* 5. Professional Work Experience (Interactive Timeline with Expandable points) */}
        <ExperienceTimeline />

        {/* 6. Education, Languages & Engineering Governance */}
        <EducationLanguages />

        {/* 7. Contact Section & Quick Copy Direct Connect */}
        <ContactSection onCopyText={handleCopyText} />

      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Executive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/95 text-white border border-indigo-500/40 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

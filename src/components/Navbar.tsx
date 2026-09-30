import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Smartphone, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'impact', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 max-w-5xl w-full border ${
            isScrolled
              ? 'bg-slate-900/90 backdrop-blur-md border-slate-700/80 shadow-2xl shadow-indigo-950/40'
              : 'bg-slate-900/60 backdrop-blur-sm border-slate-800/80 shadow-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-4 h-4 text-indigo-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium leading-none hidden sm:inline">
                Android Leader
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1 rounded-full border border-slate-800/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 hover:border-slate-600 transition-all hover:text-white cursor-pointer"
              title="View full executive resume"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white bg-slate-800/70 md:hidden border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800/70'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                View Executive Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

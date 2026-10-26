import React, { useState } from 'react';
import { Activity, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenRsvp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'initiatives', label: 'Initiatives' },
    { id: 'events', label: 'Events' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Dispatch / Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-[#3B5B8A]/15 transition-all">

      {/* Main Apple-style Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Brand Wordmark & Emblem */}
          <button
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5B8A] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#3B5B8A] flex items-center justify-center text-white shadow-sm border border-[#3B5B8A]/30 group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-5 h-5 text-[#D0E2F2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-[#3B5B8A] transition-colors">
                  Socioholics
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#D0E2F2]/60 text-[#3B5B8A] rounded font-medium">
                  PESU-ECC
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                Health-Tech & Medi-Awareness
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100/70 rounded-full border border-slate-200/60">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#3B5B8A] shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRsvp}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B5B8A]/40"
            >
              <span>BioHack RSVP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-[#3B5B8A]/10 text-[#3B5B8A] font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#3B5B8A] rounded-lg shadow-sm"
            >
              <span>Register for BioHack 2026</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

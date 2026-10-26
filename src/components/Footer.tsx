import React from 'react';
import { Activity, MapPin, Mail } from 'lucide-react';
import { CAMPUS_SPEC } from '../mockData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="w-full border-t border-[#3B5B8A]/15 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#3B5B8A] flex items-center justify-center text-white">
                <Activity className="w-4 h-4 text-[#D0E2F2]" />
              </div>
              <span className="text-base font-bold text-white">Socioholics</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The premier Health-Tech and Medi-Awareness student research cluster of PES University (Electronic City Campus).
            </p>
            <div>
              <div className="text-xs font-semibold text-slate-300">Division</div>
              <div className="text-slate-400">Health-Tech & Bio-Informatics</div>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">
              Index
            </div>
            <ul className="space-y-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'initiatives', label: 'Initiatives' },
                { id: 'events', label: 'Events' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left text-slate-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">
              Location
            </div>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-[#D0E2F2] shrink-0 mt-0.5" />
              <span>
                PES University (Electronic City Campus)<br />
                Hosur Road, 1km before Toll Plaza,<br />
                Bengaluru, Karnataka 560100
              </span>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-3">
              Contact
            </div>
            <div>
              <a
                href={`mailto:${CAMPUS_SPEC.dispatchEmail}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D0E2F2]" />
                <span>{CAMPUS_SPEC.dispatchEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

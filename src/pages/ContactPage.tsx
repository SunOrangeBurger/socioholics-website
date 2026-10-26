import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Compass, ArrowUpRight } from 'lucide-react';
import { CAMPUS_SPEC } from '../mockData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeCampusNode, setActiveCampusNode] = useState<string>('MRD_BLOCK');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const campusNodes = [
    {
      id: 'MRD_BLOCK',
      name: 'MRD Block (Ground Level)',
      role: 'Campus Health Center & Annual Blood Drive Concourse',
      desc: 'Coordinates campus-wide preventive screenings, hemoglobin profiling, and BLS CPR certifications.'
    },
    {
      id: 'PIXEL_BLOCK',
      name: 'Pixel Block (Server Bay 2)',
      role: 'Clinical AI & Distributed Edge Compute Cluster',
      desc: 'Hosts on-premises GPU instances for computer vision trauma triage and time-series model training.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0E2F2]/60 border border-[#3B5B8A]/20 text-[#3B5B8A] text-xs font-mono font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B5B8A]" />
          <span>COMMUNICATION & TELEMETRY DISPATCH // PESU-ECC</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Dispatch, Collaborate & Visit the Lab
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
          Reach the Socioholics club council for research sponsorships, Department Collaboration, Student Inquiries or Event inquiries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Apple-styled Interactive Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Contact Us
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Organization / PESU Branch
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Enquiry Classification (50 words max) <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.inquiryType}
                    onChange={(e) => {
                      const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                      if (words.length <= 50) {
                        setFormData({ ...formData, inquiryType: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-medium text-slate-700 mb-1">
                  Message / Technical Proposal <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] focus:outline-none text-sm leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-xl transition-colors shadow-sm flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Message Sent Successfully
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your message has been received. We usually respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    organization: '',
                    inquiryType: '',
                    message: ''
                  });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Send Another Dispatch
              </button>
            </div>
          )}
        </div>

        {/* Right: Location Dossier Card & Interactive Blueprint */}
        <div className="lg:col-span-5 space-y-6">
          {/* Geospatial Card */}
          <div className="corner-crosshair rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3B5B8A]">
                <Compass className="w-4 h-4" />
                <span>LOCATION DOSSIER // PESU-ECC</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 text-sm">
                PES University (Electronic City Campus)
              </div>
              <p className="text-slate-600 leading-relaxed">
                Hosur Main Road, 1km before Electronic City Toll Plaza, Konappana Agrahara, Bengaluru, Karnataka 560100
              </p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700 space-y-1">
                <div>COORDINATES: {CAMPUS_SPEC.coordinates}</div>
                <div>ELEVATION: {CAMPUS_SPEC.elevation}</div>
              </div>
            </div>

            {/* Interactive Campus Blueprint Nodes */}
            <div className="space-y-2 pt-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Campus Facilities & Labs:
              </div>
              <div className="space-y-1.5">
                {campusNodes.map((node) => {
                  const isSelected = activeCampusNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveCampusNode(node.id)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs transition-all border ${
                        isSelected
                          ? 'bg-[#D0E2F2]/30 border-[#3B5B8A]/40 text-slate-900 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 flex items-center justify-between">
                        <span>{node.name}</span>
                        {isSelected && <span className="text-[10px] font-mono text-[#3B5B8A]">SELECTED</span>}
                      </div>
                      <div className="text-[11px] text-[#3B5B8A] font-mono mt-0.5">{node.role}</div>
                      {isSelected && (
                        <p className="text-[11px] text-slate-600 mt-1.5 font-sans leading-relaxed">
                          {node.desc}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border border-dashed border-[#3B5B8A]/40 rounded-xl p-4 text-center text-xs font-mono text-slate-500 bg-[#D0E2F2]/10 space-y-1">
              <div className="text-[#3B5B8A] font-semibold">
                [MAP_OR_CAMPUS_SCHEMATIC_PLACEHOLDER]
              </div>
              <div className="text-[10px] text-slate-400">
                Vector Blueprint Layout · Electronic City Tech Corridor
              </div>
            </div>

            {/* Direct dispatch links */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <a
                href={`mailto:${CAMPUS_SPEC.dispatchEmail}`}
                className="text-[#3B5B8A] hover:underline font-mono font-medium flex items-center gap-1"
              >
                <span>{CAMPUS_SPEC.dispatchEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-400 font-mono text-[11px]">
                OFFICE HOURS: MON–SAT 09:00–17:30
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

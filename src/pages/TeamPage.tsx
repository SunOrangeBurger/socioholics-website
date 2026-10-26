import React, { useState } from 'react';
import { Mail, Linkedin, Github, User, Award, BookOpen, Send, Sparkles, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { TEAM_MEMBERS } from '../mockData';
import { TeamDivision, TeamMember } from '../types';

export const TeamPage: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('ALL');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [applySubmitted, setApplySubmitted] = useState<boolean>(false);

  const [applicationForm, setApplicationForm] = useState({
    name: '',
    srn: '',
    email: '',
    branch: 'B.Tech CSE',
    roleInterest: 'Hardware & Embedded Circuits Lead',
    statement: ''
  });

  const divisions = [
    { id: 'ALL', label: 'All Members' },
    { id: 'FACULTY', label: 'Faculty Advisory' },
    { id: 'CORE_COUNCIL', label: 'Core Council' },
    { id: 'TECHNICAL_LEADS', label: 'Technical Leads' },
    { id: 'SPECIALISTS', label: 'Domain Specialists' }
  ];

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (selectedDivision === 'ALL') return true;
    return m.division === selectedDivision;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0E2F2]/60 border border-[#3B5B8A]/20 text-[#3B5B8A] text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B5B8A]" />
            <span>PERSONNEL DOSSIER // INVESTIGATORS & MENTORS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Research Council & Technical Leads
          </h1>
          <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
            The interdisciplinary team of biomedical engineers, software architects, and clinicians steering Socioholics at PES University Electronic City Campus.
          </p>
        </div>

        <button
          onClick={() => setIsApplyModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-xl transition-colors shadow-sm self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4 text-[#D0E2F2]" />
          <span>Apply to Join Council</span>
        </button>
      </div>

      {/* Segmented Division Switcher */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 max-w-fit">
        {divisions.map((div) => (
          <button
            key={div.id}
            onClick={() => setSelectedDivision(div.id)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
              selectedDivision === div.id
                ? 'bg-white text-[#3B5B8A] shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {div.label}
          </button>
        ))}
      </div>

      {/* Members Grid Styled with Minimalist Blueprint Aesthetic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="corner-crosshair rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-[#3B5B8A]/30 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Member Avatar / Blueprint Portrait Container */}
              <div className="w-full aspect-square rounded-xl bg-slate-100 border border-slate-200/80 mb-4 overflow-hidden relative flex flex-col items-center justify-center text-slate-400 group">
                {/* Minimalist technical avatar graphic */}
                <div className="w-16 h-16 rounded-full bg-[#3B5B8A]/10 border border-[#3B5B8A]/30 flex items-center justify-center text-[#3B5B8A] font-mono text-lg font-bold mb-2">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <span className="font-mono text-[9px] text-slate-400">
                  [AVATAR_PLACEHOLDER: MEMBER_PORTRAIT_RATIO_1X1]
                </span>
                {/* Hairline overlay */}
                <div className="absolute inset-0 bg-lab-grid opacity-10 pointer-events-none" />
              </div>

              {/* Identity & Branch */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">
                    {member.division.replace('_', ' ')}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#3B5B8A]">{member.role}</div>
                <div className="text-[11px] font-mono text-slate-500">{member.batchBranch}</div>
              </div>

              {/* Focus area badge */}
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-mono mb-4">
                <span className="text-slate-400 text-[10px] block mb-0.5">RESEARCH FOCUS:</span>
                <span className="font-medium text-slate-800">{member.focusArea}</span>
              </div>
            </div>

            {/* Social / Email Links */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500">
              <span className="text-[10px] font-mono text-slate-400">
                {member.publicationsCount ? `${member.publicationsCount} PAPERS` : 'PESU-ECC'}
              </span>
              <div className="flex items-center gap-2">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className="p-1.5 hover:text-[#3B5B8A] hover:bg-slate-100 rounded transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Advisory Callout */}
      <section className="rounded-2xl bg-[#D0E2F2]/25 border border-[#3B5B8A]/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-mono font-bold text-[#3B5B8A] uppercase">
            PES UNIVERSITY INSTITUTIONAL OVERSIGHT
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Biomedical Instrumentation & Institutional Ethics Review (IRB)
          </h3>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            All clinical algorithms and wearable analog front-ends designed by Socioholics student teams undergo strict verification by faculty mentors from the Department of Biotechnology and Electronics & Communication Engineering.
          </p>
        </div>
        <div className="shrink-0 font-mono text-xs text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200">
          PESU-IRB-MED-2026-OK
        </div>
      </section>

      {/* Apply to Council Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Apply for Socioholics Council</h3>
                <p className="text-xs text-slate-500 font-mono">PESU EC Campus Research Cycle 2026</p>
              </div>
              <button
                onClick={() => {
                  setIsApplyModalOpen(false);
                  setApplySubmitted(false);
                }}
                className="p-1 text-slate-400 hover:text-slate-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!applySubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Varun K"
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">SRN Number</label>
                    <input
                      type="text"
                      required
                      placeholder="PES2UG24CS..."
                      value={applicationForm.srn}
                      onChange={(e) => setApplicationForm({ ...applicationForm, srn: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] text-sm uppercase font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Branch / Year</label>
                    <input
                      type="text"
                      required
                      placeholder="B.Tech ECE '27"
                      value={applicationForm.branch}
                      onChange={(e) => setApplicationForm({ ...applicationForm, branch: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Role / Domain Interest</label>
                  <select
                    value={applicationForm.roleInterest}
                    onChange={(e) => setApplicationForm({ ...applicationForm, roleInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                  >
                    <option value="Hardware & Embedded Circuits Lead">Hardware & Embedded Circuits Lead</option>
                    <option value="Clinical AI & Time-Series Lead">Clinical AI & Time-Series Lead</option>
                    <option value="Campus Health Outreach Organizer">Campus Health Outreach Organizer</option>
                    <option value="Biomedical 3D Prototyping Lead">Biomedical 3D Prototyping Lead</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Past Projects or Motivation (1-2 sentences)
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state your technical background in electronics, machine learning, or medical biology..."
                    value={applicationForm.statement}
                    onChange={(e) => setApplicationForm({ ...applicationForm, statement: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-lg shadow-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Application Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {applicationForm.name}. The Socioholics Core Council will review your submission and reach out via your PESU student email for an interview in Tech Park Room 304.
                </p>
                <button
                  onClick={() => {
                    setIsApplyModalOpen(false);
                    setApplySubmitted(false);
                  }}
                  className="mt-2 px-5 py-2 text-xs font-semibold text-white bg-[#3B5B8A] rounded-lg"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

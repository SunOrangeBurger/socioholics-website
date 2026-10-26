import React, { useState } from 'react';
import { Search, Filter, Cpu, ArrowUpRight, Activity, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../mockData';
import { ProjectBrief, ProjectDomain } from '../types';

interface InitiativesPageProps {
  onOpenProject: (project: ProjectBrief) => void;
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({ onOpenProject }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'ALL', label: 'All Projects (6)' },
    { id: 'HARDWARE', label: 'Biomedical Hardware' },
    { id: 'AI_INFORMATICS', label: 'Clinical Edge AI' },
    { id: 'PUBLIC_HEALTH', label: 'Emergency & Public Health' },
    { id: 'NEURO_TECH', label: 'Neuro-Engineering' }
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesDomain = selectedDomain === 'ALL' || project.domain === selectedDomain;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.codeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0E2F2]/60 border border-[#3B5B8A]/20 text-[#3B5B8A] text-xs font-mono font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B5B8A]" />
          <span>RESEARCH DOSSIER // CLINICAL R&D PIPELINE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Initiatives & Biomedical Engineering Builds
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
          Open-architecture medical hardware, distributed emergency dispatch grids, and non-invasive spectroscopic sensors engineered by student researchers at PES University Electronic City Campus.
        </p>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedDomain === tab.id
                    ? 'bg-white text-[#3B5B8A] shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by component, sensor, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A]"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenProject(project)}
            className="corner-crosshair cursor-pointer rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-[#3B5B8A]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Top spec tag & status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-[#3B5B8A] bg-[#D0E2F2]/50 px-2.5 py-0.5 rounded">
                  {project.codeName}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold border ${
                    project.status === 'DEPLOYED'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : project.status === 'CLINICAL_TRIAL'
                      ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                      : project.status === 'PEER_REVIEW'
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}
                >
                  {project.status.replace('_', ' ')}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-base font-bold text-slate-900 group-hover:text-[#3B5B8A] transition-colors leading-snug mb-2">
                {project.title}
              </h2>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {project.summary}
              </p>

              {/* Clinical Impact */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-4">
                <span className="font-semibold text-slate-800">Clinical Focus: </span>
                <span>{project.clinicalImpact}</span>
              </div>

              {/* Technical Specifications Specs row */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono bg-slate-50/60 p-2.5 rounded-lg border border-slate-100 mb-4">
                {project.specs.samplingRate && (
                  <div>
                    <span className="text-slate-400">RATE: </span>
                    <span className="font-semibold text-slate-800">{project.specs.samplingRate}</span>
                  </div>
                )}
                {project.specs.powerConsumption && (
                  <div>
                    <span className="text-slate-400">PWR: </span>
                    <span className="font-semibold text-slate-800">{project.specs.powerConsumption}</span>
                  </div>
                )}
                {project.specs.accuracy && (
                  <div className="col-span-2">
                    <span className="text-slate-400">BENCHMARK: </span>
                    <span className="font-semibold text-[#3B5B8A]">{project.specs.accuracy}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-1 mb-4 pt-2 border-t border-slate-100">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer action trigger */}
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 text-slate-500 font-mono">
                <span className="truncate max-w-[170px]">{project.leads[0]}</span>
                <span className="text-[#3B5B8A] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
          <p className="text-sm text-slate-500 font-mono">
            No clinical prototypes match the filter criteria "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSelectedDomain('ALL');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-[#3B5B8A] underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Explicit placeholder required by user instructions */}
      <div className="border border-dashed border-[#3B5B8A]/40 rounded-2xl p-8 text-center text-xs font-mono text-slate-500 bg-[#D0E2F2]/10 space-y-2">
        <div className="text-[#3B5B8A] font-semibold">
          [REPLACE_WITH_SPLINE_3D_DNA_OR_HEART_MODEL: CLINICAL_HARDWARE_SCHEMATIC]
        </div>
        <p className="text-[11px] text-slate-400 max-w-xl mx-auto">
          Interactive WebGL rendering pipeline connected to PESU EC Campus embedded simulation bench. Micro-circuit topologies rendered with real-time Spice netlists.
        </p>
      </div>
    </div>
  );
};

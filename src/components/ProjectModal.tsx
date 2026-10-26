import React from 'react';
import { X, Cpu, Activity, MapPin, Users, CheckCircle2, Download, FileText, ArrowRight } from 'lucide-react';
import { ProjectBrief } from '../types';

interface ProjectModalProps {
  project: ProjectBrief | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Top Spec Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#3B5B8A] text-[#D0E2F2] font-semibold">
              {project.codeName}
            </span>
            <span className="text-xs font-mono text-slate-400">
              STATUS: {project.status.replace('_', ' ')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Clinical Significance Callout */}
          <div className="p-4 rounded-xl bg-[#D0E2F2]/30 border border-[#3B5B8A]/20">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3B5B8A] mb-1">
              <Activity className="w-4 h-4" />
              <span>CLINICAL RATIONALE & IMPACT</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {project.clinicalImpact}
            </p>
          </div>

          {/* Engineering Specifications Grid */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Technical Benchmarks & Measurements
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.specs.samplingRate && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Sampling Rate</div>
                  <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
                    {project.specs.samplingRate}
                  </div>
                </div>
              )}
              {project.specs.powerConsumption && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Power Envelope</div>
                  <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
                    {project.specs.powerConsumption}
                  </div>
                </div>
              )}
              {project.specs.latency && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Processing Latency</div>
                  <div className="text-base font-bold font-mono text-slate-900 mt-0.5">
                    {project.specs.latency}
                  </div>
                </div>
              )}
              {project.specs.accuracy && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Clinical Accuracy</div>
                  <div className="text-base font-bold font-mono text-[#3B5B8A] mt-0.5">
                    {project.specs.accuracy}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hardware BOM or Stack */}
          {project.hardwareBOM && project.hardwareBOM.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#3B5B8A]" />
                Hardware Bill of Materials (BOM)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-mono">
                {project.hardwareBOM.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Software & Protocols */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Embedded Protocols & Tooling
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Lab & Leads info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div>
              <div className="flex items-center gap-1.5 text-slate-900 font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#3B5B8A]" />
                <span>Physical Testbay Location</span>
              </div>
              <p className="font-mono text-[11px] text-slate-500">{project.labLocation}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-slate-900 font-semibold mb-1">
                <Users className="w-3.5 h-3.5 text-[#3B5B8A]" />
                <span>Project Investigators</span>
              </div>
              <p className="font-mono text-[11px] text-slate-500">{project.leads.join(' · ')}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-500">
            DOI REF: {project.paperDoi || 'PESU-MED-2026-INLINE'}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                alert(`Clinical Spec Dossier for ${project.codeName} downloaded in PDF format.`);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Technical PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-lg transition-colors shadow-sm"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, ChevronRight, Activity, Sparkles } from 'lucide-react';
import { CLUB_METRICS, CORE_PILLARS, EVENTS } from '../mockData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenRsvp: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenRsvp }) => {
  const upcomingFlagship = EVENTS.find((e) => e.isFlagship) || EVENTS[0];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-10 sm:pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-lab-grid opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow & Headline Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D0E2F2]/60 border border-[#3B5B8A]/20 text-[#3B5B8A] text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B5B8A]" />
              <span>DIVISION: MED-TECH & BIO-INFORMATICS // PESU-ECC</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] text-balance">
              Where Engineering Meets <span className="text-[#3B5B8A]">Human Physiology</span>.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Socioholics is PES University Electronic City Campus’s premier research cluster bridging low-power biomedical embedded systems, clinical edge AI, and campus-wide preventive health awareness.
            </p>

            {/* Dual Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                onClick={() => setActiveTab('initiatives')}
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Explore Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className="px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>View Event Dossier</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Ribbon: Bento-Box / Lab Spec Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200/90 rounded-2xl bg-white shadow-sm overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {CLUB_METRICS.map((metric) => (
            <div key={metric.id} className="p-6 relative group hover:bg-slate-50/60 transition-colors">
              <div className="font-mono text-[11px] text-slate-400 tracking-wider mb-2 font-medium">
                {metric.label}
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-xs font-mono font-bold text-[#3B5B8A] uppercase">
                    {metric.unit}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 mb-2">{metric.subtext}</p>
              <div className="font-mono text-[10px] text-emerald-600 flex items-center gap-1">
                <span>↳</span>
                <span>{metric.change}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="font-mono text-xs text-[#3B5B8A] font-bold tracking-wider uppercase mb-1">
            CORE RESEARCH PILLARS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Engineered at PESU EC Campus. Tested in Real Clinical Workflows.
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-2">
            Our initiatives unify hardware design, algorithmic modeling, and grass-roots campus intervention into a coherent health-tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="corner-crosshair bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#3B5B8A] px-2 py-0.5 rounded bg-[#D0E2F2]/40">
                    PILLAR // {pillar.index}
                  </span>
                  <Activity className="w-4 h-4 text-slate-400" />
                </div>

                {pillar.image && (
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-5 border border-slate-100 bg-slate-100 relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {pillar.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] font-mono text-slate-600">
                      <span className="text-[#3B5B8A] font-bold">›</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Event Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#3B5B8A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#3B5B8A] text-[#D0E2F2] text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                FLAGSHIP 2026 SYMPOSIUM
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {upcomingFlagship.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {upcomingFlagship.summary}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span>DATE: {upcomingFlagship.date}</span>
                <span>·</span>
                <span>VENUE: {upcomingFlagship.roomSpec}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={onOpenRsvp}
                className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Reserve Seat & RSVP</span>
                <ArrowRight className="w-4 h-4 text-[#3B5B8A]" />
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 transition-colors text-center border border-slate-700"
              >
                View Full Agenda
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

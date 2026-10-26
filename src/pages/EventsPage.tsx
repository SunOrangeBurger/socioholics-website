import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Ticket, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { EVENTS } from '../mockData';
import { ClubEvent, EventCategory } from '../types';

interface EventsPageProps {
  onOpenRsvp: (eventTitle?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenRsvp }) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('ALL');

  // Countdown timer calculation to flagship BioHack event (Nov 14, 2026)
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 21, hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const targetDate = new Date('2026-11-14T09:00:00+05:30').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flagshipEvent = EVENTS.find((e) => e.isFlagship) || EVENTS[0];

  const filteredEvents = EVENTS.filter((evt) => {
    if (activeCategory === 'ALL') return true;
    return evt.category === activeCategory;
  });

  const archivedEvents = filteredEvents.filter((evt) => evt.status === 'ARCHIVED');
  const upcomingEvents = filteredEvents.filter((evt) => evt.status === 'UPCOMING');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0E2F2]/60 border border-[#3B5B8A]/20 text-[#3B5B8A] text-xs font-mono font-medium mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B5B8A]" />
          <span>SYMPOSIA & DISPATCH ARCHIVE // PESU-ECC</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Events, Symposia & Campus Drives
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
          From high-intensity 36-hour clinical hackathons to university-wide hemoglobin screening camps and neuro-technology symposiums.
        </p>

        {/* Dual-Filter Tab Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200/80">
          {[
            { id: 'ALL', label: 'ALL EVENTS' },
            { id: 'MEDI_TECH_HACKATHON', label: 'MEDI-TECH HACKATHONS' },
            { id: 'AWARENESS_DRIVE', label: 'AWARENESS DRIVES' },
            { id: 'RESEARCH_TALK', label: 'RESEARCH TALKS' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as EventCategory)}
              className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg transition-all ${
                activeCategory === tab.id
                  ? 'bg-white text-[#3B5B8A] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              [{tab.label}]
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Event Spotlight Card */}
      <section className="corner-crosshair rounded-2xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B5B8A]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded bg-[#3B5B8A] text-[#D0E2F2] font-bold">
                FLAGSHIP SPOTLIGHT // {flagshipEvent.code}
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Ticket className="w-3.5 h-3.5" />
                <span>SEATS ALLOCATED: {flagshipEvent.seatsAvailable} REMAINING</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {flagshipEvent.title}
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {flagshipEvent.summary}
            </p>

            {/* Spec Sheet Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-[#D0E2F2] shrink-0" />
                <span>{flagshipEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-[#D0E2F2] shrink-0" />
                <span>{flagshipEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 sm:col-span-2">
                <MapPin className="w-4 h-4 text-[#D0E2F2] shrink-0" />
                <span>{flagshipEvent.roomSpec}</span>
              </div>
            </div>

            {/* Mentors / Keynotes */}
            {flagshipEvent.speakers && (
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Clinical Keynotes & Jury:
                </div>
                {flagshipEvent.speakers.map((spk, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-mono">›</span>
                    <div>
                      <span className="font-semibold text-white">{spk.name}</span>
                      <span className="text-slate-400 text-[11px]"> — {spk.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Countdown Ticker & RSVP Action */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center space-y-6">
            <div className="w-full">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                COUNTDOWN TICKER TO SPRINT
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINUTES', value: timeLeft.minutes },
                  { label: 'SECONDS', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full space-y-2">
              <button
                onClick={() => onOpenRsvp(flagshipEvent.title)}
                className="w-full py-3 px-4 rounded-xl bg-[#3B5B8A] hover:bg-[#2E486E] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Register / RSVP for BioHack 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[10px] font-mono text-slate-400">
                Open to all PES University students (EC & RR Campuses)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Secondary Drives */}
      {upcomingEvents.filter((e) => !e.isFlagship).length > 0 && (
        <section className="space-y-4">
          <div className="font-mono text-xs text-[#3B5B8A] font-bold tracking-wider uppercase">
            UPCOMING CAMPUS AWARENESS DRIVES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents
              .filter((e) => !e.isFlagship)
              .map((evt) => (
                <div
                  key={evt.id}
                  className="corner-crosshair rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="font-bold text-[#3B5B8A] bg-[#D0E2F2]/50 px-2 py-0.5 rounded">
                        {evt.code}
                      </span>
                      <span className="text-emerald-600 font-semibold">
                        {evt.seatsAvailable} SLOTS OPEN
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{evt.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{evt.summary}</p>
                    <div className="space-y-1 text-xs font-mono text-slate-500 mb-4">
                      <div>DATE: {evt.date}</div>
                      <div>VENUE: {evt.roomSpec}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenRsvp(evt.title)}
                    className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-[#3B5B8A] hover:text-white transition-colors text-slate-800"
                  >
                    Register for Screening
                  </button>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Chronological Event Timeline / Archival Technical Logs */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="font-mono text-xs text-slate-500 font-bold tracking-wider uppercase">
            ARCHIVAL TECHNICAL LOGS & SYMPOSIA HISTORY
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            PESU-ECC CHRONO LOGS
          </div>
        </div>

        <div className="space-y-4">
          {archivedEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#3B5B8A]/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono mb-1">
                    <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {event.code}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{event.date}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600 font-medium">{event.roomSpec}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{event.title}</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-50 border border-slate-200 self-start">
                  ARCHIVED LOG
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">{event.summary}</p>

              {/* Key takeaways */}
              {event.takeaways && event.takeaways.length > 0 && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 font-bold">
                    Key Outcomes & Clinical Takeaways:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {event.takeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Explicit visual placeholder as requested */}
      <div className="border border-dashed border-[#3B5B8A]/40 rounded-2xl p-8 text-center text-xs font-mono text-slate-500 bg-[#D0E2F2]/10 space-y-2">
        <div className="text-[#3B5B8A] font-semibold">
          [IMAGE_PLACEHOLDER: EVENT_RECAP_GALLERY]
        </div>
        <p className="text-[11px] text-slate-400 max-w-lg mx-auto">
          High-resolution photography from BioHack 2025 and Campus Blood Screening Drive stored in the PESU EC Campus archive server.
        </p>
      </div>
    </div>
  );
};

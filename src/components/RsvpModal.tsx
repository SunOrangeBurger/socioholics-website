import React, { useState } from 'react';
import { X, CheckCircle2, Ticket, QrCode, Calendar, MapPin, Download, AlertCircle } from 'lucide-react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventTitle?: string;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  defaultEventTitle = 'BioHack PESU 2026: Clinical Edge-AI & Wearable Diagnostics'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    srn: '',
    branch: 'B.Tech CSE',
    year: '3rd Year (Class of 2026)',
    track: 'Hardware Biosensors & Embedded AFE',
    experience: 'Intermediate (Built microcontrollers/PyTorch models)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.srn) return;
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    setPassId(`PESU-BIOHACK-2026-${randomHex}`);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-[#D0E2F2]" />
            <span className="font-mono text-xs font-semibold text-[#D0E2F2]">
              CLINICAL SYMPOSIUM REGISTRATION PORTAL
            </span>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <div className="text-xs font-mono text-[#3B5B8A] font-semibold mb-1">
                TARGET PROTOCOL // FLAGSHIP EVENT
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {defaultEventTitle}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#3B5B8A]" />
                  NOV 14-15, 2026
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#3B5B8A]" />
                  PESU EC Campus Auditorium
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Shenoy"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    PESU University Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@pesu.pes.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Student Registration Number (SRN) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="PES2UG23CS001"
                    value={formData.srn}
                    onChange={(e) => setFormData({ ...formData, srn: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A] focus:border-transparent text-sm font-mono uppercase"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Branch / Department</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                  >
                    <option value="B.Tech CSE">B.Tech Computer Science & Engg</option>
                    <option value="B.Tech ECE">B.Tech Electronics & Comm Engg</option>
                    <option value="B.Tech AI & Data">B.Tech Artificial Intelligence & Data</option>
                    <option value="B.Tech Biotechnology">B.Tech Biotechnology / Bio-Informatics</option>
                    <option value="B.Tech Mechanical">B.Tech Mechanical / Robotics</option>
                    <option value="Other PES Department">Other PES Department</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Preferred Hackathon Specialization Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3B5B8A] text-sm"
                >
                  <option value="Hardware Biosensors & Embedded AFE">
                    Track 1: Hardware Biosensors, Analog Front-Ends & Wearable Circuits
                  </option>
                  <option value="Clinical Edge AI & Time-Series Models">
                    Track 2: Clinical Edge AI, Time-Series ECG/EMG & Computer Vision
                  </option>
                  <option value="Decentralized Emergency Dispatch & Public Health">
                    Track 3: Decentralized Emergency Dispatch, LoRa Telemetry & Public Health
                  </option>
                </select>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#3B5B8A] shrink-0 mt-0.5" />
                <span>
                  Hardware kits (ESP32-S3 + PPG AFE modules) will be checked out at the Tech Park registration desk upon physical entry.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-lg transition-colors shadow-sm"
              >
                Confirm RSVP & Generate Pass
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Registration Verified</h3>
                <p className="text-xs text-slate-500">Your clinical pass is authorized for admission.</p>
              </div>
            </div>

            {/* Visual Pass Card */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-[#3B5B8A]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B5B8A]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div>
                  <div className="font-mono text-[10px] text-[#D0E2F2] uppercase tracking-wider">
                    PES UNIVERSITY EC CAMPUS · SOCIOHOLICS
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    BioHack PESU 2026 // ADMISSION PASS
                  </div>
                </div>
                <div className="p-2 rounded bg-white text-slate-950">
                  <QrCode className="w-8 h-8" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-400 text-[10px]">ATTENDEE</div>
                  <div className="text-white font-semibold text-sm truncate">{formData.fullName}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">SRN NUMBER</div>
                  <div className="text-white font-semibold text-sm">{formData.srn}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">TRACK ENROLLED</div>
                  <div className="text-cyan-300 truncate">{formData.track.split(':')[0]}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px]">PASS ACCESS CODE</div>
                  <div className="text-[#D0E2F2] font-bold">{passId}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>VENUE: Tech Park Auditorium</span>
                <span className="text-emerald-400">ENTRY: ALLOCATED</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Pass ${passId} saved to your device.`);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Pass</span>
              </button>
              <button
                onClick={resetForm}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#3B5B8A] hover:bg-[#2E486E] rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

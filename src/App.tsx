import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { InitiativesPage } from './pages/InitiativesPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { RsvpModal } from './components/RsvpModal';
import { ProjectBrief } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedProject, setSelectedProject] = useState<ProjectBrief | null>(null);
  const [isRsvpOpen, setIsRsvpOpen] = useState<boolean>(false);
  const [rsvpEventTitle, setRsvpEventTitle] = useState<string>('BioHack PESU 2026: Clinical Edge-AI & Wearable Diagnostics');

  const handleOpenRsvp = (eventTitle?: string) => {
    if (eventTitle) setRsvpEventTitle(eventTitle);
    setIsRsvpOpen(true);
  };

  const handleOpenProject = (project: ProjectBrief) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  // Scroll to top on tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#3B5B8A]/20 selection:text-[#3B5B8A]">
      {/* Global Apple-style Glass Dock Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenRsvp={() => handleOpenRsvp()}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <HomePage
            setActiveTab={handleTabChange}
            onOpenRsvp={() => handleOpenRsvp()}
          />
        )}
        {activeTab === 'initiatives' && (
          <InitiativesPage onOpenProject={handleOpenProject} />
        )}
        {activeTab === 'events' && (
          <EventsPage onOpenRsvp={handleOpenRsvp} />
        )}
        {activeTab === 'team' && (
          <TeamPage />
        )}
        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Technical Lab Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        defaultEventTitle={rsvpEventTitle}
      />
    </div>
  );
}

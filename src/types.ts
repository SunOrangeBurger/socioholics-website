export type ProjectStatus = 'PROTOTYPING' | 'PEER_REVIEW' | 'DEPLOYED' | 'CLINICAL_TRIAL';

export type ProjectDomain = 'HARDWARE' | 'AI_INFORMATICS' | 'PUBLIC_HEALTH' | 'NEURO_TECH';

export interface ProjectBrief {
  id: string;
  codeName: string;
  title: string;
  domain: ProjectDomain;
  status: ProjectStatus;
  summary: string;
  clinicalImpact: string;
  techStack: string[];
  specs: {
    samplingRate?: string;
    powerConsumption?: string;
    latency?: string;
    accuracy?: string;
    targetCondition?: string;
  };
  leads: string[];
  labLocation: string;
  image?: string;
  paperDoi?: string;
  hardwareBOM?: string[];
}

export type EventCategory = 'ALL' | 'MEDI_TECH_HACKATHON' | 'AWARENESS_DRIVE' | 'RESEARCH_TALK';

export interface ClubEvent {
  id: string;
  title: string;
  code: string;
  category: 'MEDI_TECH_HACKATHON' | 'AWARENESS_DRIVE' | 'RESEARCH_TALK';
  date: string;
  time: string;
  venue: string;
  roomSpec: string;
  summary: string;
  status: 'UPCOMING' | 'ARCHIVED';
  seatsAvailable?: number;
  totalSeats?: number;
  isFlagship?: boolean;
  takeaways?: string[];
  speakers?: Array<{ name: string; title: string }>;
  image?: string;
  registrationOpen: boolean;
}

export type TeamDivision = 'FACULTY' | 'CORE_COUNCIL' | 'TECHNICAL_LEADS' | 'SPECIALISTS';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: TeamDivision;
  batchBranch: string;
  focusArea: string;
  avatarSeed: string;
  github?: string;
  linkedin?: string;
  email: string;
  publicationsCount?: number;
}

export interface MetricSpec {
  id: string;
  label: string;
  value: string;
  unit?: string;
  subtext: string;
  change?: string;
}

import { ClubEvent, ProjectBrief, TeamMember, MetricSpec } from './types';

export const HERO_IMAGE_PATH = '/src/assets/images/hero_biomedical_scan_1792857245419.jpg';
export const HARDWARE_LAB_IMAGE = '/src/assets/images/medtech_hardware_lab_1792857260061.jpg';
export const HEALTH_DRIVE_IMAGE = '/src/assets/images/campus_health_drive_1792857281366.jpg';

export const CLUB_METRICS: MetricSpec[] = [
  {
    id: 'researchers',
    label: 'ACTIVE RESEARCHERS & ENGINEERS',
    value: '48',
    unit: 'PEERS',
    subtext: 'Across CSE, ECE, & Bio-Informatics',
    change: '+14 this academic cycle'
  },
  {
    id: 'prototypes',
    label: 'CLINICAL PROTOTYPES DEVELOPED',
    value: '14',
    unit: 'BUILDS',
    subtext: 'Hardware biosensors & edge models',
    change: '4 undergoing trial benchmarks'
  },
  {
    id: 'outreach',
    label: 'CAMPUS HEALTH AWARENESS REACH',
    value: '12,500',
    unit: 'STUDENTS',
    subtext: 'Screened, surveyed & counselled',
    change: 'PESU EC & RR campuses combined'
  },
  {
    id: 'symposia',
    label: 'FLAGSHIP SYMPOSIA & HACKATHONS',
    value: '06',
    unit: 'EDITIONS',
    subtext: 'With Narayana Health & NIMHANS mentors',
    change: 'Next: BioHack PESU 2026'
  }
];

export const CORE_PILLARS = [
  {
    id: 'hardware',
    index: '01',
    title: 'Medical Hardware & Embedded Systems',
    description: 'Engineering ultra-low-power biomedical circuits, wearable photoplethysmography rigs, and microcontroller-driven non-invasive diagnostic probes.',
    specs: ['ESP32-S3 Biomedical Cores', 'Custom Analog Front-Ends (AFE)', 'Sub-15mW Operational Envelopes', 'Medical-Grade 3D Enclosures'],
    image: HARDWARE_LAB_IMAGE
  },
  {
    id: 'ai-informatics',
    index: '02',
    title: 'Health Informatics & Clinical AI',
    description: 'Developing privacy-preserving Edge-AI models for real-time arrhythmia classification, retinal fundus screening, and automated ER triage workflows.',
    specs: ['On-Device Quantized PyTorch / TFLite', 'Federated Electronic Health Records', '98.4% ROC-AUC on MIT-BIH Datasets', 'HIPAA/DISHA Compliant Pipelines'],
    image: HERO_IMAGE_PATH
  },
  {
    id: 'awareness',
    index: '03',
    title: 'Preventive Care & Campus Health Awareness',
    description: 'Transforming technical breakthroughs into community wellness through structured blood donation drives, posture hygiene labs, and CPR certification bootcamps.',
    specs: ['2,400+ Units of Blood Mobilized', 'Campus AED Geo-Dispatch Grid', 'Ergonomic Health Screenings', 'Certified BLS Training Modules'],
    image: HEALTH_DRIVE_IMAGE
  }
];

export const PROJECTS: ProjectBrief[] = [
  {
    id: 'pulse-node',
    codeName: 'PROJECT-01: PULSE_NODE',
    title: 'Wearable Continuous Optical Hemodynamic Telemetry Rig',
    domain: 'HARDWARE',
    status: 'CLINICAL_TRIAL',
    summary: 'A sub-miniature wearable wrist rig utilizing multi-wavelength photoplethysmography to detect sub-clinical arrhythmias and arterial stiffness indexes without cuff inflation.',
    clinicalImpact: 'Enables continuous non-invasive arterial elasticity monitoring for early cardiovascular stress identification in young adults.',
    techStack: ['ESP32-C3', 'MAX30102 Optical AFE', 'FreeRTOS', 'BLE 5.2 GATT', 'Rust Firmware'],
    specs: {
      samplingRate: '500 Hz',
      powerConsumption: '11.8 mW',
      latency: '< 18 ms',
      accuracy: '99.1% (vs Holter gold standard)',
      targetCondition: 'Atrial Fibrillation & Sinus Arrhythmia'
    },
    leads: ['Aarav Shenoy (B.Tech ECE)', 'Sneha Nair (B.Tech CSE)'],
    labLocation: 'PESU EC Campus · Tech Park Level 3 · Embedded Biomaterials Lab',
    hardwareBOM: ['Custom 2-layer PCB (FR4)', 'Nordic Semiconductor BLE transceiver', 'Silicon-elastomer cuff', 'Lithium Polymer 220mAh cell'],
    paperDoi: 'PESU-MED-2025-089A'
  },
  {
    id: 'gluco-optix',
    codeName: 'PROJECT-02: GLUCO_OPTIX',
    title: 'Non-Invasive Near-Infrared Spectroscopic Blood Glucose Estimator',
    domain: 'HARDWARE',
    status: 'PROTOTYPING',
    summary: 'Diffuse reflectance NIR spectrophotometry rig targeting glucose absorption peaks at 1550nm and 1610nm with dynamic skin thickness compensation algorithms.',
    clinicalImpact: 'Eliminates painful finger-prick testing for diabetic student population through calibration-stable optical finger clip sensors.',
    techStack: ['InGaAs Photodiodes', 'Dual 1550nm/1610nm VCSEL Emitters', 'STM32WB55', 'Savitzky-Golay Filtering'],
    specs: {
      samplingRate: '120 Hz',
      powerConsumption: '42 mW',
      latency: '240 ms',
      accuracy: 'Clarke Error Grid Zone A/B 94.2%',
      targetCondition: 'Hypo/Hyperglycemic Excursions'
    },
    leads: ['Kavya Ramesh (B.Tech ECE)', 'Rohan Deshmukh (Biotechnology)'],
    labLocation: 'PESU EC Campus · MRD Block · Bio-Optics Station 4',
    hardwareBOM: ['Multi-wavelength laser diode module', 'High-gain transimpedance amplifier', '3D printed light-shielded gantry']
  },
  {
    id: 'triage-ai',
    codeName: 'PROJECT-03: TRIAGE_AI',
    title: 'Edge Computer Vision System for Acute Trauma Severity Scoring',
    domain: 'AI_INFORMATICS',
    status: 'PEER_REVIEW',
    summary: 'Lightweight convolutional vision model designed for field tablet devices that scores dermatological trauma, burn percentage, and hemorrhage urgency in emergency transit.',
    clinicalImpact: 'Provides first-responders with standardized emergency acuity indices prior to hospital ER intake.',
    techStack: ['PyTorch Mobile', 'ONNX Runtime', 'FastAPI Microservice', 'Docker', 'WebRTC Live Stream'],
    specs: {
      samplingRate: '30 FPS',
      latency: '< 45 ms on Jetson Nano',
      accuracy: '93.7% agreement with ER triage specialists',
      targetCondition: 'Acute Hemorrhage & Deep Tissue Burn Triage'
    },
    leads: ['Aditya Hegde (B.Tech CSE)', 'Pooja Venkatesh (B.Tech AI & Data)'],
    labLocation: 'PESU EC Campus · Pixel Block · Clinical AI Compute Cluster'
  },
  {
    id: 'ambu-link',
    codeName: 'PROJECT-04: AMBU_LINK',
    title: 'Sub-GHz LoRa Mesh Emergency Ambulance-to-ER Handover Node',
    domain: 'PUBLIC_HEALTH',
    status: 'DEPLOYED',
    summary: 'Decentralized mesh networking gateway installed across campus transit vehicles that transmits real-time vitals and ECG waveforms to PESU Health Center even during cellular outages.',
    clinicalImpact: 'Zero-drop transmission of patient vitals within 4.5km radius of campus emergency infirmary.',
    techStack: ['SX1262 LoRa 868MHz', 'Raspberry Pi Compute Module 4', 'MQTT Broker', 'AES-256 GCM'],
    specs: {
      latency: '< 180 ms',
      accuracy: '99.98% packet delivery reliability',
      targetCondition: 'Trauma & Cardiac Arrest Rapid Handshake'
    },
    leads: ['Nikhil Kulkarni (B.Tech ECE)', 'Tarun V. (B.Tech CSE)'],
    labLocation: 'PESU EC Campus · Central Dispatch Antenna Mast & Infirmary Room 102'
  },
  {
    id: 'neuro-stride',
    codeName: 'PROJECT-05: NEURO_STRIDE',
    title: 'Surface Electromyography Gait Kinematics Rehabilitation Sleeve',
    domain: 'NEURO_TECH',
    status: 'PROTOTYPING',
    summary: 'Multi-channel dry-electrode sEMG compression sleeve tracking gastrocnemius and tibialis anterior muscle firing sequences during post-stroke rehabilitation.',
    clinicalImpact: 'Quantifies gait asymmetry and foot-drop rehabilitation velocity without multi-camera motion-capture labs.',
    techStack: ['ADS1299 EEG/EMG Analog Front-End', 'IMU 9-DOF Sensor', 'TensorFlow Lite for Microcontrollers'],
    specs: {
      samplingRate: '1000 Hz / channel',
      powerConsumption: '18 mW',
      accuracy: '96.2% gait phase classification',
      targetCondition: 'Post-Stroke Hemiplegia & Spastic Gait'
    },
    leads: ['Divya Sundar (Biomedical Engineering)', 'Vikram Sethi (B.Tech Mechanical)'],
    labLocation: 'PESU EC Campus · Tech Park Level 1 · Biomechanics Testing Bay'
  },
  {
    id: 'campus-vital',
    codeName: 'PROJECT-06: CAMPUS_VITAL',
    title: 'Geospatial Campus AED Mapping & First-Responder Alert Network',
    domain: 'PUBLIC_HEALTH',
    status: 'DEPLOYED',
    summary: 'Progressive Web App integrated with university access-card beacons that routes certified student first-responders to cardiac arrest incidents within a 90-second radius.',
    clinicalImpact: 'Reduced average response time to witnessed fainting and cardiac distress from 7.4 minutes to 1.8 minutes across EC Campus.',
    techStack: ['TypeScript', 'Leaflet Engine', 'WebSocket Telemetry', 'PWA Offline Cache', 'Twilio SMS Failover'],
    specs: {
      latency: '< 800 ms broadcast dispatch',
      accuracy: 'Campus indoor positioning ± 2.4 meters',
      targetCondition: 'Sudden Cardiac Arrest (SCA) & Anaphylaxis'
    },
    leads: ['Ananya Sharma (B.Tech CSE)', 'Harish Menon (B.Tech ECE)'],
    labLocation: 'PESU EC Campus · Campus Life & Safety Operation Desk'
  }
];

export const EVENTS: ClubEvent[] = [
  {
    id: 'biohack-2026',
    code: 'EVT-2026-BH01',
    title: 'BioHack PESU 2026: Clinical Edge-AI & Wearable Diagnostics Hackathon',
    category: 'MEDI_TECH_HACKATHON',
    date: 'NOVEMBER 14-15, 2026',
    time: '09:00 AM IST (36-HOUR SPRINT)',
    venue: 'PES University Electronic City Campus',
    roomSpec: 'Tech Park Auditorium & Innovation Sandbox Labs (Levels 2 & 3)',
    summary: 'The flagship annual 36-hour hackathon bringing together 300+ student engineers, doctors from Narayana Health, and bio-hardware designers to build life-saving solutions.',
    status: 'UPCOMING',
    isFlagship: true,
    seatsAvailable: 42,
    totalSeats: 250,
    registrationOpen: true,
    speakers: [
      { name: 'Dr. Srinath Rajan, MD', title: 'Consultant Interventional Cardiologist, Narayana Institute of Cardiac Sciences' },
      { name: 'Prof. Hemant Joshi, Ph.D.', title: 'Director, PESU Biomedical Instrumentation Research Cell' }
    ],
    takeaways: [
      'Access to real patient PPG, ECG, and ultrasound raw datasets',
      'Hardware kits supplied: ESP32-S3 boards, analog front-ends, thermal sensors',
      'INR 1,50,000 in prototyping grant funding for top 3 clinical architectures',
      'Clinical validation mentorship directly from practicing physicians'
    ],
    image: HERO_IMAGE_PATH
  },
  {
    id: 'blood-drive-2026',
    code: 'EVT-2026-AD02',
    title: 'Mega Campus Blood Donation & Hemoglobin Profiling Drive',
    category: 'AWARENESS_DRIVE',
    date: 'DECEMBER 02, 2026',
    time: '09:30 AM – 05:00 PM IST',
    venue: 'PES University Electronic City Campus',
    roomSpec: 'MRD Central Concourse & Campus Health Center',
    summary: 'In partnership with the Rotary Blood Bank and PES Medical College. Comprehensive complete blood count (CBC) screenings and emergency blood typing for all PESU students.',
    status: 'UPCOMING',
    seatsAvailable: 180,
    totalSeats: 600,
    registrationOpen: true,
    takeaways: [
      'Digital hemoglobin & blood group card issued in under 15 minutes',
      'Nutritional counseling booth for sports and academic cognitive wellness',
      'Peer donor registry enrollment for emergency university dispatch'
    ],
    image: HEALTH_DRIVE_IMAGE
  },
  {
    id: 'prosthetics-symposium',
    code: 'EVT-2026-RT03',
    title: 'Research Colloquium: Micro-Electrode Arrays & Neural Bionics',
    category: 'RESEARCH_TALK',
    date: 'OCTOBER 10, 2026',
    time: '03:30 PM – 05:30 PM IST',
    venue: 'PES University Electronic City Campus',
    roomSpec: 'Pixel Block Seminar Hall 4',
    summary: 'Deep-dive guest lecture by Dr. Meera Nambiar (NIMHANS) examining target muscle reinnervation and signal decoding in myoelectric upper-limb prosthetics.',
    status: 'ARCHIVED',
    seatsAvailable: 0,
    totalSeats: 160,
    registrationOpen: false,
    speakers: [
      { name: 'Dr. Meera Nambiar, Ph.D.', title: 'Senior Neuro-Engineering Scientist, NIMHANS Bengaluru' }
    ],
    takeaways: [
      'Analysis of continuous non-invasive EMG decoding pipelines',
      'Live demonstration of the Socioholics 3D printed bionic hand prototype',
      'Open discussion on ethical data governance in neural implants'
    ],
    image: HARDWARE_LAB_IMAGE
  },
  {
    id: 'cpr-bootcamp-2026',
    code: 'EVT-2026-AD01',
    title: 'Basic Life Support (BLS) & AED Certification Intensive',
    category: 'AWARENESS_DRIVE',
    date: 'SEPTEMBER 18, 2026',
    time: '10:00 AM – 04:00 PM IST',
    venue: 'PES University Electronic City Campus',
    roomSpec: 'Tech Park Amphitheater',
    summary: 'Hands-on practical training on resuscitation mannequins equipped with compression depth sensors. 180 students certified under American Heart Association guidelines.',
    status: 'ARCHIVED',
    seatsAvailable: 0,
    totalSeats: 180,
    registrationOpen: false,
    takeaways: [
      'Real-time feedback on chest compression frequency and ventilation rates',
      'Automated External Defibrillator pad placement certification',
      'Campus First-Responder ID badge issued to all participants'
    ]
  },
  {
    id: 'ai-diagnostics-summit',
    code: 'EVT-2025-BH02',
    title: 'MedAI Hackfest 2025: Computer Vision in Diagnostic Radiology',
    category: 'MEDI_TECH_HACKATHON',
    date: 'NOVEMBER 22, 2025',
    time: '09:00 AM – 09:00 PM IST',
    venue: 'PES University Electronic City Campus',
    roomSpec: 'Pixel Block Lab 3 & Server Bay',
    summary: '12-hour intensive algorithmic hackathon optimizing low-parameter vision transformers for pulmonary nodule detection in CT DICOM datasets.',
    status: 'ARCHIVED',
    seatsAvailable: 0,
    totalSeats: 140,
    registrationOpen: false,
    takeaways: [
      'Benchmarking against Stanford CheXpert benchmarks',
      'Zero false-negative challenge on emergency pneumothorax cases',
      'Top model deployed into the Socioholics clinical repository'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'faculty-adviser',
    name: 'Dr. Radhika Sen',
    role: 'Faculty Mentor & Head of Bio-Engineering Cell',
    division: 'FACULTY',
    batchBranch: 'Ph.D. Biomedical Electronics (IISc)',
    focusArea: 'Cardiovascular Impedance & Analog Sensors',
    avatarSeed: 'Radhika',
    email: 'radhikasen@pes.edu',
    publicationsCount: 28,
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'president',
    name: 'Aarav Shenoy',
    role: 'Club President & Lead Hardware Architect',
    division: 'CORE_COUNCIL',
    batchBranch: 'B.Tech ECE · Class of 2026',
    focusArea: 'Embedded Micro-AFE & Non-Invasive Optics',
    avatarSeed: 'Aarav',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'aarav.socioholics@pes.edu',
    publicationsCount: 2
  },
  {
    id: 'vice-president',
    name: 'Sneha Nair',
    role: 'Vice President & Clinical AI Lead',
    division: 'CORE_COUNCIL',
    batchBranch: 'B.Tech CSE · Class of 2026',
    focusArea: 'Edge Machine Learning & Time-Series ECG',
    avatarSeed: 'Sneha',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'sneha.socioholics@pes.edu',
    publicationsCount: 1
  },
  {
    id: 'tech-lead-hardware',
    name: 'Kavya Ramesh',
    role: 'Technical Lead — Biosensors & Circuits',
    division: 'TECHNICAL_LEADS',
    batchBranch: 'B.Tech ECE · Class of 2027',
    focusArea: 'Near-Infrared Spectroscopy & PCB Layout',
    avatarSeed: 'Kavya',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'kavya.ramesh@pes.edu'
  },
  {
    id: 'tech-lead-software',
    name: 'Aditya Hegde',
    role: 'Technical Lead — Clinical Systems & Cloud',
    division: 'TECHNICAL_LEADS',
    batchBranch: 'B.Tech CSE · Class of 2026',
    focusArea: 'Distributed Telemetry & FHIR Standards',
    avatarSeed: 'Aditya',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'aditya.hegde@pes.edu'
  },
  {
    id: 'outreach-lead',
    name: 'Pooja Venkatesh',
    role: 'Director of Campus Public Health Campaigns',
    division: 'CORE_COUNCIL',
    batchBranch: 'Biotechnology · Class of 2026',
    focusArea: 'Epidemiological Field Testing & BLS Training',
    avatarSeed: 'Pooja',
    linkedin: 'https://linkedin.com',
    email: 'pooja.venkatesh@pes.edu'
  },
  {
    id: 'neuro-specialist',
    name: 'Divya Sundar',
    role: 'Domain Specialist — Neural Interfaces & EMG',
    division: 'SPECIALISTS',
    batchBranch: 'B.Tech ECE · Class of 2027',
    focusArea: 'Electromyography Signal Decomposition',
    avatarSeed: 'Divya',
    github: 'https://github.com',
    email: 'divya.sundar@pes.edu'
  },
  {
    id: 'operations-lead',
    name: 'Tarun V.',
    role: 'Head of Operations & Logistics',
    division: 'CORE_COUNCIL',
    batchBranch: 'B.Tech Mechanical · Class of 2026',
    focusArea: 'Rapid 3D Prototyping & Emergency Dispatch',
    avatarSeed: 'Tarun',
    linkedin: 'https://linkedin.com',
    email: 'tarun.v@pes.edu'
  }
];

export const CAMPUS_SPEC = {
  institution: 'PES University (Electronic City Campus)',
  division: 'Division of Health-Tech & Bio-Informatics',
  coordinates: '12.8615° N, 77.6648° E',
  elevation: '920m ASL',
  address: 'Hosur Road, 1km before Electronic City Toll Plaza, Konappana Agrahara, Bengaluru, Karnataka 560100',
  primaryLab: 'Tech Park Level 3, Embedded Med-Tech Research Bay (Room TP-304)',
  emergencyContact: '+91 (080) 6618 6611 · Infirmary Ext. 402',
  dispatchEmail: 'socioholics@pes.edu'
};

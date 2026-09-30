import { Project, WorkExperience, SkillCategory, StatHighlight, EducationItem, LanguageItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Sumit Kumar',
  role: 'Associate Manager - Android | Engineering Leader',
  experienceYears: '12+',
  kotlinExperience: '6+',
  tagline: 'Specializing in End-to-End Android Development, Team Leadership, Healthcare Solutions, and Industrial IoT scale delivery.',
  summary: 'Android Engineering Leader with 12+ years of experience in end-to-end mobile application development and 6+ years in Kotlin. Proven expertise in leading Android teams, architecting scalable, secure applications, and delivering enterprise-grade healthcare and IoT solutions. Strong background across full SDLC, performance optimization, MVVM architecture, and cross-functional collaboration.',
  location: 'Palampur, Himachal Pradesh, India',
  email: 'sumitsharma152@gmail.com',
  phone: '+91 8237852506',
  linkedin: 'https://www.linkedin.com/in/sumit-kumar-android/',
  statusText: 'Available for Engineering Leadership & Mobile Architecture Opportunities',
  statsSummary: {
    yearsExp: '12+',
    appsDelivered: '15+',
    kotlinYears: '6+',
    teamsLed: 'Up to 6 Engineers',
    onTimeDelivery: '100%'
  }
};

export const STAT_HIGHLIGHTS: StatHighlight[] = [
  {
    id: 'perf-boost',
    value: '40%',
    label: 'Performance Boost',
    subtext: 'Improved cold start and application load time through profiling, memory optimization, and modularization.',
    iconName: 'zap',
    accent: 'from-amber-400 to-orange-500'
  },
  {
    id: 'ahead-delivery',
    value: '2 Wks',
    label: 'Ahead of Schedule',
    subtext: 'Led a 5-member cross-functional engineering team to deliver a mission-critical healthcare application early.',
    iconName: 'clock',
    accent: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'apps-delivered',
    value: '15+',
    label: 'Android Apps Delivered',
    subtext: 'Engineered & shipped commercial IoT & enterprise mobile apps, increasing active user engagement by over 30%.',
    iconName: 'layers',
    accent: 'from-indigo-400 to-violet-500'
  },
  {
    id: 'total-exp',
    value: '12+ Yrs',
    label: 'Engineering Leadership',
    subtext: 'Deep expertise across full SDLC, 6+ yrs modern Kotlin, native NDK integrations, and scalable MVVM architectures.',
    iconName: 'award',
    accent: 'from-purple-400 to-pink-500'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'android-dev',
    title: 'Android Development',
    iconName: 'smartphone',
    description: 'Modern Android OS core runtime, reactive streams, threading, and native C++ integrations.',
    skills: [
      { name: 'Kotlin', level: 'Expert (6+ Yrs)', featured: true },
      { name: 'Java', level: 'Expert (10+ Yrs)', featured: true },
      { name: 'Android SDK', level: 'Expert', featured: true },
      { name: 'Android NDK', level: 'Advanced', featured: true },
      { name: 'Coroutines & Flow', level: 'Expert', featured: true },
      { name: 'RxJava & RxAndroid', level: 'Advanced' },
      { name: 'Multithreading & IPC', level: 'Advanced' },
      { name: 'Native C / C++ JNI', level: 'Advanced' },
      { name: 'Jetpack Libraries', level: 'Expert' }
    ]
  },
  {
    id: 'architecture-patterns',
    title: 'Architecture & Design Patterns',
    iconName: 'layout-grid',
    description: 'Scalable software modularization, clean architecture, testability, and inversion of control.',
    skills: [
      { name: 'MVVM Architecture', level: 'Expert', featured: true },
      { name: 'Clean Architecture', level: 'Expert', featured: true },
      { name: 'Modularization', level: 'Advanced', featured: true },
      { name: 'Dagger 2 / Hilt DI', level: 'Expert', featured: true },
      { name: 'MVC & MVP', level: 'Proficient' },
      { name: 'Design Patterns', level: 'Advanced' },
      { name: 'Singleton & Repository', level: 'Expert' }
    ]
  },
  {
    id: 'data-iot-connectivity',
    title: 'Data, Connectivity & IoT',
    iconName: 'cpu',
    description: 'Real-time telemetry, low-latency communication, edge sensors, and cloud integrations.',
    skills: [
      { name: 'IoT Integration', level: 'Specialized', featured: true },
      { name: 'Bluetooth & BLE', level: 'Advanced', featured: true },
      { name: 'MQTT Protocol', level: 'Advanced', featured: true },
      { name: 'REST APIs & Retrofit', level: 'Expert', featured: true },
      { name: 'Socket.IO', level: 'Advanced' },
      { name: 'SQLite & Room DB', level: 'Expert' },
      { name: 'Amazon Polly (TTS)', level: 'Advanced' },
      { name: 'Gemini Integration', level: 'Advanced' },
      { name: 'MySQL & NoSQL', level: 'Proficient' }
    ]
  },
  {
    id: 'testing-quality',
    title: 'Testing & Quality Engineering',
    iconName: 'shield-check',
    description: 'Ensuring zero-crash releases, defensive programming, automated UI testing, and profiling.',
    skills: [
      { name: 'JUnit', level: 'Expert', featured: true },
      { name: 'Mockito', level: 'Advanced', featured: true },
      { name: 'Espresso UI Testing', level: 'Advanced' },
      { name: 'Unit & Integration Testing', level: 'Expert', featured: true },
      { name: 'STLC Management', level: 'Advanced' },
      { name: 'Android Profiler', level: 'Expert' },
      { name: 'LeakCanary & Memory Audits', level: 'Advanced' }
    ]
  },
  {
    id: 'sdlc-leadership',
    title: 'SDLC & Engineering Leadership',
    iconName: 'users',
    description: 'Guiding high-performing engineering squads, sprint governance, and mentoring talent.',
    skills: [
      { name: 'End-to-End SDLC', level: 'Expert (12+ Yrs)', featured: true },
      { name: 'Agile & Scrum Planning', level: 'Expert', featured: true },
      { name: 'Code Reviews & Standards', level: 'Expert', featured: true },
      { name: 'Cross-Functional Leadership', level: 'Expert', featured: true },
      { name: 'Release Management', level: 'Advanced' },
      { name: 'Technical Roadmapping', level: 'Advanced' },
      { name: 'Bug & Crash Triage', level: 'Expert' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ba-healthcare-suite',
    title: 'BA Provider & Patient App Suite',
    subtitle: 'US-based HIPAA-compliant Healthcare Workflow Ecosystem',
    category: 'Healthcare',
    description: 'Enterprise healthcare mobile application suite designed for US hospital networks, streamlining provider consultations, patient clinical updates, and synchronized health data.',
    fullOverview: 'Spearheaded the complete architectural revamping and feature roadmap for both the BA Provider App and BA Patient App. The suite serves thousands of daily clinical encounters across healthcare facilities in the US, demanding bulletproof reliability, stringent HIPAA privacy guidelines, offline caching, and real-time alerts.',
    challenge: 'Doctors and medical assistants needed seamless hands-free data entry and audio playback during active patient rounds without latency or security compromise.',
    solution: 'Designed an asynchronous MVVM architecture with Kotlin Coroutines and Dagger 2 dependency injection. Integrated Amazon Polly for clear text-to-speech feedback and synthesized clinical briefings.',
    impactMetrics: [
      '40% reduction in doctor administrative charting time',
      'Zero HIPAA compliance incidents in production',
      'Over 99.8% crash-free sessions across 50k+ active sessions'
    ],
    techStack: ['Kotlin', 'MVVM', 'Amazon Polly', 'Dagger 2', 'Coroutines', 'Retrofit', 'EncryptedSharedPreferences'],
    architecture: 'Clean Architecture with Repository Pattern, MVVM UI Layer, and Dagger 2 Dependency Injection graph.',
    highlights: [
      'Engineered Amazon Polly integration for real-time natural medical notes voice output',
      'Implemented secure local data caching with biometric authentication',
      'Created modular Gradle multi-project setup sharing domain core logic between Provider and Patient apps'
    ],
    iconType: 'heart-pulse',
    accentColor: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'skf-smart-edge',
    title: 'SKF Smart Edge 4.0 / MVS RealTime 4.0',
    subtitle: 'Industrial IoT Machine & Bearing Health Monitoring',
    category: 'IoT & Enterprise',
    description: 'Industrial 4.0 Android suite for real-time vibration, temperature, and acoustic sensor telemetry directly monitoring industrial bearings and critical plant machinery.',
    fullOverview: 'Developed and scaled the Android client ecosystem for SKF Industrial Edge hardware. The application receives massive streaming sensor payloads over local BLE and industrial MQTT brokers, visualizing high-frequency spectral FFT graphs and triggering predictive failure alarms for plant reliability engineers.',
    challenge: 'Processing continuous millisecond-frequency raw vibration arrays on mobile hardware without dropping frames or depleting battery.',
    solution: 'Implemented high-throughput native byte-stream parsers with memory pooling, efficient circular buffers, and RxJava/Coroutines pipelines to offload mathematical calculations from the UI thread.',
    impactMetrics: [
      'Decreased unscheduled industrial downtime by up to 35% for client plants',
      'Maintained 60 FPS real-time waveform rendering on ruggedized Android tablets',
      'Processes millions of sensor telemetries per day smoothly'
    ],
    techStack: ['Kotlin', 'MVVM', 'Industrial IoT', 'MQTT', 'BLE', 'RxJava', 'Coroutines', 'Canvas Rendering'],
    architecture: 'Event-driven Reactive Architecture with MQTT Client Service and background Worker Threads.',
    highlights: [
      'Built automated Bluetooth LE beacon discovery and handshake with industrial gateway sensors',
      'Architected custom high-speed Canvas visualizer for vibration harmonic spectrums',
      'Enforced offline logging with automatic batch sync upon industrial Wi-Fi reconnection'
    ],
    iconType: 'cpu',
    accentColor: 'from-amber-500 to-orange-600'
  },
  {
    id: 'ide-configuration-app',
    title: 'IDE Configuration App',
    subtitle: 'IoT-enabled Android & Cross-Platform Clinical Tool',
    category: 'IoT & Enterprise',
    description: 'Specialized IoT configuration and diagnostic application for connected hospital medical devices, telemetry hubs, and smart bedside units.',
    fullOverview: 'Orchestrated the development of the IDE Configuration App connecting medical staff and field service engineers to bedside IoT infrastructure. The app enables near-instant device provisioning, firmware updates over BLE, and diagnostic reporting.',
    challenge: 'Bridging modern Android architectures with legacy cross-platform modules while ensuring zero configuration drift on safety-critical medical devices.',
    solution: 'Constructed an extensible Kotlin MVVM layer with Dagger 2 and integrated Amazon Polly audio cues to verify device calibration checkpoints auditory without looking at the screen.',
    impactMetrics: [
      'Configured and deployed over 10,000+ connected medical devices',
      'Reduced device commissioning cycle time from 25 minutes to under 4 minutes',
      'Enabled rapid firmware distribution with automated integrity checks'
    ],
    techStack: ['Kotlin', 'Xamarin', 'MVVM', 'Dagger 2', 'Amazon Polly', 'BLE', 'Hardware Diagnostics'],
    architecture: 'Modular MVVM with isolated Hardware Communication Layer & Voice Synthesis Service.',
    highlights: [
      'Created automated Bluetooth Low Energy pairing sequence with dynamic encryption keys',
      'Integrated Amazon Polly voice confirmations for hands-busy hospital technician workflows',
      'Managed cross-framework compatibility between native Android and shared Xamarin business cores'
    ],
    iconType: 'settings',
    accentColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'health-e-suite',
    title: 'Health E - Doctor & Patient Apps',
    subtitle: 'Teleconsultation, Video Consults & Live Clinic Queue',
    category: 'Healthcare',
    description: 'Comprehensive telemedicine suite facilitating digital appointments, high-definition encrypted video consultations, in-app clinical chat, and electronic prescription workflows.',
    fullOverview: 'Architected and shipped both Doctor and Patient applications from ground zero. Facilitated seamless patient onboarding, digital token queues, appointment scheduling, and WebRTC-based video conferencing.',
    challenge: 'Delivering stutter-free video consultation and instant clinical chat even over erratic 3G/4G cellular networks.',
    solution: 'Designed adaptive bitrate video negotiation, WebSocket fallback mechanisms, and an optimized Android SDK networking layer with automatic reconnect logic.',
    impactMetrics: [
      'Supported over 150,000+ completed digital patient consultations',
      'Maintained 4.8-star patient satisfaction rating on Google Play Store',
      'Reduced patient waiting times by 65% through digital token management'
    ],
    techStack: ['Android SDK', 'REST APIs', 'Video Consultation', 'Chat Engine', 'WebSocket', 'SQLite', 'Firebase'],
    architecture: 'Model-View-Presenter (MVP) transitioning to MVVM with centralized real-time messaging dispatcher.',
    highlights: [
      'Real-time prescription synchronization with pharmacy dispatch networks',
      'Integrated end-to-end encrypted video and audio consultation rooms',
      'Built interactive doctor appointment calendar with live slot reservation'
    ],
    iconType: 'activity',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'spectrum-banking',
    title: 'Spectrum - Enterprise Banking',
    subtitle: 'High-Performance NDK Banking Security Engine',
    category: 'IoT & Enterprise',
    description: 'Mission-critical enterprise mobile banking solution incorporating native Android NDK to transform legacy C security protocols into high-performance, tamper-proof Android features.',
    fullOverview: 'Headed the core native security and transaction module for Spectrum enterprise banking. Re-architected legacy cryptographic and financial validation algorithms using C++ via the Android NDK to safeguard against reverse engineering, memory tampering, and unauthorized root executions.',
    challenge: 'Migrating deeply integrated legacy C algorithms to modern Android architecture without losing microsecond-level cryptographic calculation speeds.',
    solution: 'Authored custom JNI wrappers, memory-safe C++ bindings, and strict runtime integrity verifications utilizing Android NDK toolchains.',
    impactMetrics: [
      'Zero financial security breaches or fraudulent packet modifications recorded',
      '5x speedup in cryptographic token generation compared to Java-based routines',
      'Protected sensitive transactions for millions in daily financial value'
    ],
    techStack: ['Android NDK', 'C++', 'JNI', 'Native Android', 'AES-256', 'Memory Integrity', 'Proguard/R8'],
    architecture: 'Hybrid NDK/Java architecture separating UI orchestration from native C++ cryptographic engine.',
    highlights: [
      'Wrote robust C++ JNI bridge handling bi-directional memory pointers securely',
      'Implemented anti-hooking and root detection at the native assembly level',
      'Refactored legacy desktop banking algorithms to run seamlessly on ARM64 and x86 mobile chips'
    ],
    iconType: 'shield-check',
    accentColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'tokri-ecommerce',
    title: 'Tokri E-Commerce App',
    subtitle: 'Next-Gen Shopping with Multi-Gateway & Offline SMS Checkout',
    category: 'E-Commerce & Real Estate',
    description: 'Feature-rich consumer e-commerce mobile application featuring multiple payment gateways, real-time inventory tracking, and innovative offline SMS purchasing capabilities.',
    fullOverview: 'Directed the mobile architecture and delivery for Tokri, a regional hyper-local marketplace. Designed a unique offline shopping mechanism allowing rural and low-connectivity consumers to build cart lists locally and finalize orders via structured automated SMS protocols.',
    challenge: 'Enabling consumers in remote areas with zero data connectivity to continue placing urgent grocery orders.',
    solution: 'Designed an intelligent local SQLite cache with an SMS fallback transaction handler that serializes cart items into encrypted, compact SMS payloads.',
    impactMetrics: [
      'Grew rural sales conversions by 28% through the offline SMS purchase pipeline',
      'Integrated 4 distinct online payment gateways with seamless failover',
      'Handled over 50,000+ SKU inventory items smoothly without UI stutter'
    ],
    techStack: ['Android SDK', 'Payment Gateways', 'Offline SMS Purchasing', 'SQLite', 'Retrofit', 'Push Notifications'],
    architecture: 'Offline-First SQLite Cache Pattern backed by background synchronization queues.',
    highlights: [
      'Pioneered automated SMS cart serialization and order acknowledgement loop',
      'Created interactive product catalogue with dynamic filtering and instant search',
      'Built resilient cart reconciliation engine when switching between online and offline'
    ],
    iconType: 'shopping-bag',
    accentColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 'kumar-properties',
    title: 'Kumar Properties Virtual Living',
    subtitle: 'Real Estate App with Native C++ Live Camera & 3D Tours',
    category: 'E-Commerce & Real Estate',
    description: 'Premium real estate customer and investor platform delivering high-performance live camera site streaming and 3D architectural property visualization.',
    fullOverview: 'Developed the flagship mobile presence for Kumar Properties real estate developers. Incorporated custom NDK camera capture pipelines for construction site live surveillance feeds and 3D walkthroughs of luxury apartment projects.',
    challenge: 'Streaming real-time high-definition site progress video and 3D CAD renders on diverse consumer Android hardware without overheating or memory crashes.',
    solution: 'Leveraged native C++ OpenSL and NDK video decoders to handle RTSP camera streams, offloading heavy decode frames from Android Java memory heaps.',
    impactMetrics: [
      'Drove 45% increase in overseas property buyer engagement',
      'Eliminated live video frame drops on sub-$200 smartphones',
      'Enabled virtual property walk-throughs for over 20+ mega real estate projects'
    ],
    techStack: ['Android SDK', 'Android NDK', 'Live Camera Streaming (C++)', '3D Views', 'RTSP Protocol', 'OpenGL'],
    architecture: 'Custom Native Streaming Pipeline integrated with Android SurfaceView and high-performance render threads.',
    highlights: [
      'Authored low-latency RTSP camera client in native C++ via NDK',
      'Designed interactive floor plan explorer with spatial pinpoints and sales contact triggers',
      'Integrated virtual booking workflow with direct CRM lead ingestion'
    ],
    iconType: 'building',
    accentColor: 'from-violet-500 to-purple-600'
  },
  {
    id: 'zuccess-educational',
    title: 'Zuccess Educational Platform',
    subtitle: 'AES-Encrypted Digital Learning & Examination Hub',
    category: 'IoT & Enterprise',
    description: 'Secure enterprise education platform delivering protected digital video courses, encrypted exam papers, interactive quizzes, and dynamic push notifications.',
    fullOverview: 'Designed and deployed the Android application for Zuccess, protecting intellectual property for competitive exam prep. Utilized AES encryption to secure offline video lectures and PDF study material against screen recording and unauthorized file extraction.',
    challenge: 'Preventing digital piracy and offline ripping of high-value curriculum materials on rooted or modified Android devices.',
    solution: 'Implemented client-side AES decryption streams that decrypt media directly into memory buffers without writing unencrypted files to disk, coupled with MVVM and Firebase notifications.',
    impactMetrics: [
      'Zero reported content leakages or DRM circumventing incidents',
      'Over 80,000 enrolled students across multiple certification tracks',
      'Maintained 99.7% delivery rate for timely mock test alerts'
    ],
    techStack: ['AES Encryption', 'Payment Gateways', 'Firebase Notifications', 'MVVM', 'ExoPlayer', 'SQLite'],
    architecture: 'Secure MVVM architecture with Encrypted Media Pipeline and Token Authentication.',
    highlights: [
      'Engineered in-memory AES decryption pipeline for ExoPlayer streaming',
      'Integrated multi-tier mock test countdown timers with automatic answer sheet sync',
      'Implemented anti-screen recording and secure window flags'
    ],
    iconType: 'graduation-cap',
    accentColor: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'rudra-chat',
    title: 'RudraChat Real-Time Messenger',
    subtitle: 'End-to-End Real-Time Android & Node.js Chat Ecosystem',
    category: 'IoT & Enterprise',
    description: 'Instant messaging Android application engineered solo from ground up, featuring bidirectional Socket.IO socket connections, delivery receipts, and custom push workflows.',
    fullOverview: 'Conceived, architected, and built RudraChat end-to-end, writing both the native Android client and the companion Node.js backend. Features typing indicators, online presence tracking, media sharing, and read receipts.',
    challenge: 'Maintaining durable socket connections across intermittent mobile network handoffs (Wi-Fi to 4G) without excessive battery drain.',
    solution: 'Designed an intelligent heartbeat protocol, exponential backoff reconnect logic, and local SQLite message queueing with optimistic UI updates.',
    impactMetrics: [
      'Sub-50ms message latency in active chat rooms',
      'Solo full-stack delivery completed within 6 weeks',
      'Resilient message delivery across airplane mode transitions'
    ],
    techStack: ['Socket.IO', 'Node.js Backend', 'Android SDK', 'SQLite', 'Retrofit', 'Push Notifications'],
    architecture: 'Full-Stack client-server architecture with Socket.IO bidirectional event bus.',
    highlights: [
      'Implemented optimistic UI rendering for instantaneous message bubble responses',
      'Built custom Node.js server with Redis message staging for disconnected users',
      'Engineered local SQLite database with indexed search across thousands of chats'
    ],
    iconType: 'message-square',
    accentColor: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'lifes-on',
    title: 'Life\'s On Location Services',
    subtitle: 'Dynamic Geofencing & Location-Aware Mobile Solution',
    category: 'E-Commerce & Real Estate',
    description: 'Intelligent location-aware Android application leveraging Google Maps APIs, passive geofencing, and proximity triggers, built leading a team of 4 mobile developers.',
    fullOverview: 'Spearheaded technical development for Life\'s On, a location intelligence application providing real-time nearby recommendations, emergency geofenced safety alerts, and personalized local discounts.',
    challenge: 'Running continuous location tracking and geofence listeners without draining device battery or triggering Android OS aggressive background task kills.',
    solution: 'Utilized Google FusedLocationProviderClient with adaptive sampling rates (high-accuracy GPS only when active motion detected via accelerometer sensors).',
    impactMetrics: [
      '60% reduction in battery consumption compared to standard background GPS polling',
      'Delivered project 3 weeks ahead of scheduled roadmap',
      'Seamlessly handled up to 100 concurrent active geofence zones per user'
    ],
    techStack: ['Google REST APIs', 'Places API', 'GPS Geofencing', 'FusedLocationProvider', 'Android SDK', 'Team Leadership'],
    architecture: 'Service-driven architecture utilizing Android WorkManager and Geofencing API clients.',
    highlights: [
      'Led 4 developers through daily standups, code reviews, and sprint execution',
      'Engineered battery-friendly motion-detection based GPS sample throttling',
      'Integrated Google Places autocomplete and dynamic map clustering'
    ],
    iconType: 'map-pin',
    accentColor: 'from-orange-500 to-amber-600'
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'flightcase',
    role: 'Associate Manager - Android',
    company: 'Flightcase IT Services',
    location: 'Pune, Maharashtra, India',
    period: 'Jun 2021 – Present',
    isCurrent: true,
    teamSize: '5-6 Engineers',
    domain: 'Healthcare & US Medical Systems',
    summary: 'Directing the end-to-end Android engineering practice for US-based healthcare management platforms. Guiding technical roadmaps, architectural standards, team mentoring, and high-stakes executive stakeholder alignments.',
    responsibilities: [
      'Own end-to-end Android development for US-based healthcare management platforms and clinical mobility apps.',
      'Lead and mentor a team of Android developers; conduct sprint planning, task allocation, code reviews, and performance evaluations.',
      'Drive architecture modernization (MVVM, multi-module Gradle setups, Clean Architecture) ensuring high scalability, HIPAA security compliance, and maintainability.',
      'Collaborate closely with US Product Owners, UX architects, and backend engineering leads to define technical roadmaps and deliver sprint commitments.'
    ],
    achievements: [
      'Delivered a critical healthcare application 2 weeks ahead of scheduled deadline with a 5-member team.',
      'Optimized application load times by 40% through baseline profiles, coroutine optimizations, and memory leak eradication.',
      'Established rigorous automated code review gates, reducing production defect leakage by 35%.'
    ],
    technologies: ['Kotlin', 'MVVM', 'Amazon Polly', 'Dagger 2', 'Coroutines', 'Retrofit', 'Android SDK', 'Agile/Scrum']
  },
  {
    id: 'infinite-uptime',
    role: 'Lead Android Developer',
    company: 'Infinite Uptime Pvt. Ltd.',
    location: 'Pune, Maharashtra, India',
    period: 'Jan 2019 – Jun 2021',
    isCurrent: false,
    teamSize: '4 Engineers',
    domain: 'Industrial IoT & Predictive Maintenance',
    summary: 'Headed Android engineering for enterprise Industrial IoT applications integrated with real-time vibration, temperature, and acoustic sensor pipelines.',
    responsibilities: [
      'Led mobile software engineering for industrial predictive maintenance applications connecting to proprietary IoT sensor hardware.',
      'Architected high-throughput data processing pipelines for streaming sensor payloads over Bluetooth Low Energy (BLE) and MQTT protocols.',
      'Mentored junior engineers, established unified coding standards, and optimized memory usage on ruggedized factory tablets.',
      'Spearheaded performance tuning and memory management for live FFT waveform charting.'
    ],
    achievements: [
      'Successfully delivered SKF Smart Edge 4.0 and MVS RealTime 4.0 suites deployed across global industrial manufacturing plants.',
      'Prevented memory bloat and frame drops during high-frequency sensor telemetry intake at 60 FPS.',
      'Reduced device onboarding connection latency over BLE by 50%.'
    ],
    technologies: ['Kotlin', 'MVVM', 'BLE', 'MQTT', 'RxJava', 'Coroutines', 'IoT Sensors', 'Performance Profiling']
  },
  {
    id: 'velociter',
    role: 'Senior Software Developer',
    company: 'Velociter Solutions Pvt. Ltd.',
    location: 'Pune, Maharashtra, India',
    period: 'Jun 2015 – Jan 2019',
    isCurrent: false,
    domain: 'Healthcare, E-Commerce, Real Estate & Enterprise',
    summary: 'Delivered full Android SDLC across diverse enterprise verticals, spearheading native C++ NDK optimizations, custom UI components, and teleconsultation engines.',
    responsibilities: [
      'Delivered full Android SDLC across healthcare, e-commerce, banking, real estate, and enterprise solutions.',
      'Spearheaded native Android NDK C++ integrations for banking security (Spectrum) and live camera streaming (Kumar Properties).',
      'Conducted deep memory audits, thread profiling, and layout rendering optimizations.',
      'Interfaced directly with client stakeholders to gather requirements and demo production releases.'
    ],
    achievements: [
      'Reduced overall application crash rates to below 0.1% across multiple production apps.',
      'Engineered offline SMS transaction ordering pipeline for Tokri e-commerce app.',
      'Converted legacy C cryptographic algorithms into secure JNI modules for enterprise banking.'
    ],
    technologies: ['Android SDK', 'Android NDK', 'C++', 'Java', 'SQLite', 'REST APIs', 'Video Consultation', 'AES Encryption']
  },
  {
    id: 'rudra-innovatives',
    role: 'Android Developer',
    company: 'Rudra Innovatives Pvt. Ltd.',
    location: 'Mohali, Punjab, India',
    period: 'Oct 2014 – Jun 2015',
    isCurrent: false,
    domain: 'Mobile Apps & Real-Time Messaging',
    summary: 'Developed modern responsive Android UI components, integrated backend REST and WebSocket APIs, and established automated testing routines.',
    responsibilities: [
      'Developed native Android applications, implemented modular UI screens, and handled complex view hierarchies.',
      'Integrated third-party RESTful APIs, push notification gateways, and local SQLite data persistence.',
      'Created RudraChat, an end-to-end real-time chat application powered by Socket.IO and Node.js.'
    ],
    achievements: [
      'Implemented automated unit testing workflows with JUnit, increasing test coverage.',
      'Shipped real-time chat messaging with sub-50ms latency.'
    ],
    technologies: ['Android SDK', 'Java', 'Socket.IO', 'Node.js', 'REST APIs', 'SQLite', 'JUnit']
  },
  {
    id: 'mcnewton',
    role: 'Android Developer',
    company: 'McNewton Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab, India',
    period: 'Sep 2013 – Oct 2014',
    isCurrent: false,
    domain: 'Mobile Foundations & Core Android SDK',
    summary: 'Built robust foundations across Android lifecycle management, asynchronous threading, background services, and Play Store releases.',
    responsibilities: [
      'Authored foundational Android application components (Activities, Fragments, Services, Broadcast Receivers).',
      'Handled production bugs, performance bottlenecks, and compatibility issues across diverse Android versions.',
      'Participated in daily agile standups and code review sessions.'
    ],
    achievements: [
      'Successfully deployed 4 commercial client apps to Google Play Store.',
      'Mastered core Android SDK threading and SQLite database management.'
    ],
    technologies: ['Android SDK', 'Java', 'SQLite', 'XML Layouts', 'Git', 'Google Play Console']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Chandigarh Group of Colleges',
    location: 'Punjab, India',
    period: 'Postgraduate Degree',
    description: 'Advanced computer applications, distributed systems, software engineering, algorithms, and object-oriented architectures.',
    icon: 'graduation-cap'
  },
  {
    degree: 'Bachelor of Science (B.Sc. - Non-Medical)',
    institution: 'GGDSD College',
    location: 'Punjab / Himachal, India',
    period: 'Undergraduate Degree',
    description: 'Foundational coursework in Mathematics, Physics, and Computer Sciences fostering analytical and algorithmic reasoning.',
    icon: 'book-open'
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { name: 'English', proficiency: 'Fluent (Professional)', levelPercent: 95 },
  { name: 'Hindi', proficiency: 'Advanced (Native / Full)', levelPercent: 100 },
  { name: 'Punjabi', proficiency: 'Native (Bilingual)', levelPercent: 100 }
];

export const LEADERSHIP_PILLARS = [
  {
    title: 'Architectural Excellence',
    desc: 'Championing Clean Architecture, MVVM, modularization, and strict separation of concerns to support massive codebases with zero technical debt.',
    icon: 'layers'
  },
  {
    title: 'Team Mentorship & Growth',
    desc: 'Empowering junior and mid-level engineers through empathetic code reviews, architectural workshops, and career roadmap guidance.',
    icon: 'users'
  },
  {
    title: 'Predictable On-Time Delivery',
    desc: 'Data-driven sprint planning, risk mitigation, and proactive bottleneck elimination resulting in 100% on-time milestone delivery.',
    icon: 'clock'
  },
  {
    title: 'Stringent Security & Compliance',
    desc: 'Deep familiarity with HIPAA regulations, biometric authentication, encrypted caching, and native NDK tamper protection.',
    icon: 'shield-check'
  }
];

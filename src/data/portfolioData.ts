import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Yusuf',
  tagline: 'Full-Stack & Mobile Developer',
  education: 'Rekayasa Perangkat Lunak • SMK NURUL ISLAM Jakarta',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Informatics engineering undergraduate focused on building end-to-end web platforms and mobile applications with resilient architecture, clean code, and Linux-driven workflows.',
  experienceStart: 'Active Developer',
  avatarUrl: '/yusuf.jpeg',
  interests: [
    'Web Architecture',
    'Mobile Systems',
    'Linux Ecosystem',
    'Software Reliability',
    'Reactive Interfaces'
  ],
  contact: {
    email: 'hahayusuf692@gmail.com',
    github: 'https://github.com/Ysuffl',
    linkedin: 'https://linkedin.com/in/muhammad-yusuffl',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across full-stack applications and component props',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Component-driven UI, state management, custom hooks, and interactive flows',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Next.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'nextdotjs',
    color: '#0f172a',
    roleTag: 'App Framework',
    usageContext: 'Server-side rendering, static generation, and edge routing',
    projectLinks: ['cimart']
  },
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Native Mobile',
    usageContext: 'Cross-platform native mobile apps for iOS and Android with 60fps reactive UI',
    projectLinks: ['villanakey']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Modern utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and asynchronous event loops',
    projectLinks: ['cimart']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust REST APIs, Inertia backend routing, authentication, and transaction handling',
    projectLinks: ['cimart']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'High-throughput microservices, real-time WebSockets, and build automation tooling',
    projectLinks: ['kalorin-ai']
  },

  // database and cloud persistence layer
  {
    name: 'PostgreSQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'postgresql',
    color: '#2563eb',
    roleTag: 'Relational Core',
    usageContext: 'Relational data modeling, complex queries, indexing, and transactional integrity',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, and auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'E-commerce relational database schemas, ACID transactions, and optimized indexing',
    projectLinks: ['cimart']
  },
  {
    name: 'Firebase',
    category: 'backend',
    layer: 'database',
    iconKey: 'firebase',
    color: '#f59e0b',
    roleTag: 'NoSQL & Real-Time Sync',
    usageContext: 'Cloud Firestore real-time calendar syncing, FCM push notifications, and Auth',
    projectLinks: ['villanakey', 'cimart']
  },
  {
    name: 'Prisma ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'prisma',
    color: '#6366f1',
    roleTag: 'Type-Safe ORM',
    usageContext: 'Type-safe database migrations, declarative schema modeling, and optimized queries',
    projectLinks: ['kalorin-ai']
  },

  // infrastructure and devops layer
  {
    name: 'Linux',
    category: 'tools',
    layer: 'devops',
    iconKey: 'linux',
    color: '#eab308',
    roleTag: 'System OS',
    usageContext: 'Primary Unix environment, Bash scripting, system service management, and workflow',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized deployment, multi-stage builds, and consistent staging environments',
    projectLinks: ['cimart']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching workflows, code reviews, and CI/CD pipelines',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Edge deployment, continuous integration, and global CDN delivery for web apps',
    projectLinks: ['kalorin-ai']
  }
];

export const projectsData: Project[] = [
  {
    id: 'pkl',
    title: 'PKL (Administrasi PKL)',
    subtitle: 'Administrasi PKL SMK Nurul Islam Jakarta',
    category: 'fullstack',
    summary: 'Platform administrasi PKL SMK Nurul Islam Jakarta',
    description: 'Proyek yang di kembangkan untuk memudahkan seluruh administrasi PKL SMK Nurul Islam Jakarta mulai dari penempatan PKL, surat menyurat, absensi, hingga laporan PKL.',
    architecture: [
      'Menggunakan Laravel sebagai backbone utama dengan Vue.js untuk frontend',
      'Firebase Cloud Messaging (FCM) untuk push notification otomatis',
      'Integrasi Leaflet / OpenStreetMap untuk pemetaan titik lokasi PKL',
      'Menggunakan Laravel Blade untuk mempermudah deployment dan maintenance',
      'Containerisasi Docker untuk memastikan reliabilitas deployment antar server'
    ],
    stack: [
      'Laravel',
      'Vue.js',
      'PostgreSQL',
      'Tailwind CSS',
      'Docker',
      'Firebase Cloud Messaging (FCM)',
      'Leaflet / OpenStreetMap',
    ],
    highlights: [
      'Inisiatif resmi atas penugasan Wakil Dunia Usaha dan Hubungan Industri',
      'Mendukung kebutuhan administrasi PKL di SMK Nurul Islam Jakarta',
      'Sistem administrasi PKL yang terintegrasi untuk memudahkan seluruh administrasi PKL'
    ],
    challenges: 'Dikerjakan dan diarsiteki secara mandiri dari nol hingga tahap produksi karena keterbatasan anggota tim.',
    role: 'Full-Stack Engineer',
    demoUrl: 'https://pkl.smknurisjkt.org',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat karena hak cipta institusi & kerahasiaan data',
    imageUrl: '/projects/pkl.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Engineering', value: 'Full-Stack Developer' },
      { label: 'Architecture', value: 'Laravel Blade' },
      { label: 'User', value: '300+' }
    ]
  },
  {
    id: 'kasis',
    title: 'Kasis',
    subtitle: 'Aplikasi Mobile pencatatan Manajemen Kas & Pelanggaran siswa',
    category: 'mobile',
    summary: 'Aplikasi mobile untuk mendukung osis dalam mencatat keuangan dan pelanggaran siswa dengan sinkronisasi data real-time.',
    description: 'Dikembangkan sebagai solusi untuk osis dalam mendigitalisasi pencatatan manajemen kas dan pelanggaran siswa, serta mempermudah dalam membuat laporan bulanan.',
    architecture: [
      'Aplikasi mobile multi-platform dibangun dengan Flutter dan Dart SDK',
      'Firebase Authentication untuk otentikasi aman pengelola dan anggota osis',
      'Cloud Firestore NoSQL real-time database untuk sinkronisasi instan data kas dan pelanggaran',
    ],
    stack: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Mobile Architecture'
    ],
    highlights: [
      'Digunakan langsung sebagai platform OSIS SMK NURUL ISLAM Jakarta.',
      'Sinkronisasi data real-time',
      'Mempermudah dalam membuat laporan bulanan'
    ],
    challenges: 'Proyek aplikasi mobile pertama; mempelajari Flutter dan reaktif state management dari nol.',
    role: 'Mobile Developer & Technical Lead',
    githubUrl: '',
    isMobileApp: true,
    demoStatusLabel: 'Aplikasi Mobile',
    imageUrl: '/projects/kasis.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Mobile Engine', value: 'Flutter & Dart' },
      { label: 'Database Sync', value: 'Real-Time' },
      { label: 'State & Cloud', value: 'Firebase' }
    ]
  },
  {
    id: 'ho-reporting',
    title: 'HoReporting',
    subtitle: 'Platform Web Laporan Masalah di berbagai cabang.',
    category: 'fullstack',
    summary: 'Platform laporan masalah untuk berbagai cabang yang di lengkapi dengan sistem notifikasi real-time untuk mempermudah dalam melaporkan masalah dan menindak lanjutinya.',
    description: 'Dikembangkan sebagai solusi untuk memudahkan pelaporan masalah di berbagai cabang dengan dilengkapi sistem notifikasi real-time untuk mempermudah dalam melaporkan masalah dan menindak lanjutinya.',
    architecture: [
      'Client web modern menggunakan Laravel Blade dan Tailwind CSS v4',
      'Database dan layer data menggunakan PostgreSQL',
      'Sistem otentikasi aman menggunakan Laravel Auth',
      'Sistem notifikasi real-time untuk mempermudah dalam melaporkan masalah dan menindak lanjutinya.',
    ],
    stack: [
      'Laravel',
      'Blade',
      'Tailwind CSS',
      'PostgreSQL',
      'Vue.js',
      'Vite',
      'SMTP',
    ],
    highlights: [
      'Project perusahaan (PT. Exotic Group Concept).',
      'Sistem informasi manajemen.',
      'Sistem notifikasi real-time.'
    ],
    challenges: 'Menggarap seluruh arsitektur web dan integrasi API secara mandiri.',
    role: 'Full-Stack Developer',
    githubUrl: '',
    demoUrl: '',
    imageUrl: '/projects/HO-Reporting.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Engineering', value: 'Fullstack Developer' },
      { label: 'Architecture', value: 'Laravel' },
      { label: 'Frontend', value: 'Laravel Blade' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'SMK Nurul Islam Jakarta',
    period: '2023 - Sekarang',
    role: 'Rekayasa Perangkat Lunak',
    organization: 'SMK Nurul Islam Jakarta (Angkatan 2023 - 2027)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi rekayasa perangkat lunak dengan pendalaman fundamental ilmu komputer, struktur data, algoritma, rekayasa perangkat lunak, dan mengambil penjurusan spesialisasi Database / Data Analyst.',
    highlights: [
      'Pemrograman Berorientasi Objek',
      'Pemodelan Data Relasional & Optimasi Query SQL',
      'Fundamental Rekayasa Perangkat Lunak & Algoritma'
    ],
    tech: ['Database Systems', 'Data Analysis', 'SQL', 'Algorithms', 'Software Engineering', 'System Design']
  },
  {
    id: 'exp-multiraksa-ft',
    period: 'Agustus 2024 - Juli 2026',
    role: 'Frontend Developer',
    organization: 'PT. Multiraksa Tribrata',
    badge: 'Corporate Training',
    category: 'bootcamp',
    description:
      'Program Teaching Factory di SMK Nurul Islam Jakarta bekerjasama dengan PT. Multiraksa dengan fokus pada pengembangan web modern menggunakan React, TypeScript, dan integrasi REST API. Dilengkapi juga dengan pembelajaran state management, otentikasi data, dan kolaborasi tim dalam project client.',
    highlights: [
      'Peserta program teaching factory',
      'Pengembangan web modern menggunakan React, TypeScript dan integrasi REST API',
      'Project bersama tim dengan pendekatan Agile Development'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API']
  },
  {
    id: 'exp-exotic-pkl',
    period: 'Jul 2026 - Sekarang',
    role: 'Full-Stack Developer',
    organization: 'PT. Exotic Group Concept (PKL)',
    badge: 'Praktik Kerja Lapangan (PKL)',
    category: 'project',
    description:
      'Project PKL resmi dari PT. Exotic Group Concept dengan fokus pada pengembangan sistem informasi manajemen.',
    highlights: [
      'Project PKL resmi dari PT. Exotic Group Concept',
      'Pengembangan sistem informasi manajemen',
      'Integrasi dengan sistem inventory perusahaan'
    ],
    tech: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'WebSockets', 'REST API']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];

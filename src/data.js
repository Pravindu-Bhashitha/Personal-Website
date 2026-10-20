// ─────────────────────────────────────────────────────────────
//  Edit everything about you in this one file.
// ─────────────────────────────────────────────────────────────
import photo from './assets/profile.jpg'
import cv from './assets/Pravindu_Bhashitha_CV.pdf'

export const profile = {
  name: 'Pravindu Bhashitha',
  firstName: 'Pravindu',
  initials: 'PB',
  role: 'Software Engineer',
  tagline:
    'I build scalable, efficient full-stack web applications with React, Node.js, Firebase and AWS — turning real business workflows into reliable products.',
  summary: [
    "I'm a passionate, dedicated and self-driven Software Engineer with hands-on experience in web development and full-stack applications. Over the past two years at Ariso Technologies I grew from intern to Software Engineer, building and maintaining a suite of production platforms used to run a multi-branch restaurant business.",
    'I enjoy analysing requirements, designing clean solutions and solving hard problems — from front-end interfaces to cloud-based, distributed back-ends. I work well in teams, have led projects to success, and am always keen to learn and take on new challenges.',
  ],
  location: 'Sri Lanka',
  email: 'pravindubh@gmail.com',
  github: 'https://github.com/Pravindu-Bhashitha',
  linkedin: 'https://www.linkedin.com/in/pravindu-bhashitha',
  photo,
  cv,
  openToWork: true,
}

export const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '4', label: 'Production platforms' },
  { value: '6', label: 'Certifications' },
  { value: 'BSc', label: 'Information Technology' },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Ariso Technologies',
    period: 'Sep 2025 — Apr 2026',
    points: [
      'Analysed customer requirements and contributed to the design and development of high-quality software aligned with industry best practices.',
      'Debugged and resolved production issues, and provided technical support to internal teams to keep systems stable.',
      'Full-stack development with Node.js, React.js, Firebase and the AWS cloud services stack.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Ariso Technologies',
    period: 'Aug 2024 — Aug 2025',
    points: [
      'Developed, tested and maintained application features across front-end and back-end components.',
      'Took on technically challenging tasks involving problem-solving, critical analysis and integration with cloud-based, distributed systems.',
    ],
  },
  {
    role: 'Intern Software Engineer',
    company: 'Ariso Technologies',
    period: 'Feb 2024 — Aug 2024',
    points: [
      'Built the initial requirements of the CurryKing Admin site.',
      'Full-stack development with Node.js, React.js, Firebase and AWS.',
    ],
  },
]

// Set live / repo to a URL to show a link on the card.
export const projects = [
  {
    name: 'CurryKing Super Admin',
    period: 'Jun 2024 — Apr 2026',
    role: 'Frontend Developer',
    description:
      'Centralised super-admin platform managing restaurants, users, delivery operations, reports, configuration and system-wide monitoring across multiple branches and services.',
    tech: ['React', 'Node.js', 'Firebase'],
    live: null,
    repo: null,
  },
  {
    name: 'CurryKing Admin',
    period: 'Apr 2024 — Apr 2026',
    role: 'Frontend Developer',
    description:
      'Admin platform for managing orders, sales, menus, restaurant operations, delivery coordination and daily business workflows.',
    tech: ['React', 'Node.js', 'Firebase'],
    live: null,
    repo: null,
  },
  {
    name: 'CurryKing Customer Web',
    period: 'Dec 2024 — Apr 2026',
    role: 'Frontend Developer',
    description:
      'Customer platform for online food ordering, account management, meal scheduling and order tracking — a smooth, efficient food delivery experience.',
    tech: ['React', 'Node.js', 'Firebase'],
    live: null,
    repo: null,
  },
  {
    name: 'CurryKing Task Manager',
    period: 'Jan 2025 — Apr 2025',
    role: 'Full-Stack Developer',
    description:
      'Workflow management system automating restaurant operations, letting supervisors manage task assignments, food-preparation workflows and processes from one place.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    live: null,
    repo: null,
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'HTML & CSS', 'Bootstrap'] },
  { title: 'Backend & Cloud', items: ['Node.js', 'Firebase', 'AWS', 'REST APIs'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Firebase Firestore'] },
  { title: 'Languages & Tools', items: ['Java', 'C', 'Python', 'Git'] },
]

export const education = [
  {
    title: 'BSc (Hons) Information Technology',
    place: 'University of Moratuwa',
    period: '2021 — 2025',
    note: 'CGPA 3.28',
  },
  {
    title: 'G.C.E. Advanced Level Examination',
    place: 'Ruhunu Vijayaba College, Beliatta',
    period: '2019',
    note: 'District Rank 50',
  },
]

export const certificates = ['Introduction to AWS', '.NET Foundation', 'JavaScript', 'Java', 'Python', 'SQL (Basic)']

export const activities = [
  'Former Captain of the University & School Volleyball Teams',
  'Member of the School Cricket, Elle & Athletics Teams',
]

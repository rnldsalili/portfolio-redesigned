import type { PortfolioContent } from '@/types/portfolio';

export const portfolioContent: PortfolioContent = {
  profile: {
    initials: 'RS',
    name: 'Ronald Salili',
    role: 'Senior Software Engineer',
    location: 'Leyte, Philippines',
  },
  navItems: [
    { href: '#summary', label: 'Summary', isActive: true },
    { href: '#experience', label: 'Experience' },
    { href: '#competencies', label: 'Competencies' },
    { href: '#technical', label: 'Technical' },
    { href: '#education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
  ],
  links: {
    cv: '#',
    quickLinks: [
      { href: '#', icon: 'mail', label: 'LinkedIn Profile' },
      { href: '#', icon: 'share', label: 'Technical Portfolio' },
    ],
  },
  summary: {
    heading: 'Executive Summary',
    subheading: 'Enterprise-grade full-stack architecture & engineering leadership.',
    body:
      'Strategic Senior Software Engineer with a proven track record of architecting scalable enterprise solutions within the JavaScript and TypeScript ecosystem. Specialized in driving operational excellence through high-performance web and mobile applications. Expert in aligning technical roadmaps with business objectives to deliver measurable ROI, improved system reliability, and accelerated development lifecycles.',
  },
  experiences: [
    {
      role: 'Software Engineer',
      company: 'Career Team',
      period: 'Oct 2024 — Present',
      isCurrent: true,
      highlights: [
        'Orchestrated root-cause analysis and resolution of legacy software bottlenecks, significantly increasing system reliability and uptime.',
        'Engineered automated CI/CD pipelines utilizing GitHub Actions, reducing manual deployment overhead by 40% and mitigating human error.',
        'Optimized DevOps workflows to streamline developer productivity and shorten time-to-market for critical feature updates.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Beautitag Limited',
      period: 'Nov 2021 — Oct 2024',
      highlights: [
        'Spearheaded a cross-functional engineering team of 4 to successfully deliver 14 high-impact web and mobile applications within budget and deadlines.',
        'Established rigorous code quality standards and peer review protocols, leading to a 25% reduction in production-stage defects.',
        'Cultivated a culture of technical excellence by mentoring junior developers in React Native and architectural best practices.',
      ],
    },
    {
      role: 'Registration Supervisor',
      company: 'Philippine Statistics Authority',
      period: 'Mar 2021 — Aug 2021',
      highlights: [
        'Managed the Philsys Step II Registration for a demographic base of ~35,000 individuals, ensuring data integrity and procedural compliance.',
        'Developed custom internal automation utilities that realized a 60% improvement in reporting efficiency and operational throughput.',
      ],
    },
  ],
  competencies: [
    {
      icon: 'layers',
      title: 'Full-Stack Architecture',
      description: 'Designing scalable microservices and robust front-end frameworks for enterprise scale.',
    },
    {
      icon: 'database',
      title: 'Database Optimization',
      description: 'Expertise in complex data modeling, migrations, and high-concurrency performance tuning.',
    },
    {
      icon: 'groups',
      title: 'Technical Leadership',
      description: 'Strategic team management, cross-functional collaboration, and technical mentorship.',
    },
  ],
  education: [
    {
      degree: 'Master of Science in IT',
      school: 'Eastern Visayas State University',
      detail: 'Specialized focus on Advanced System Arch (2024)',
    },
    {
      degree: 'BS Information Technology',
      school: 'Visayas State University',
      detail: '2015 — 2020',
    },
  ],
  credentials: [
    { title: 'Python for Specialists', issuer: 'Coursera Certified' },
    { title: 'Web App Architecture', issuer: 'Django & Coursera' },
    { title: 'Intro to HTML5 Systems', issuer: 'University Certification' },
  ],
  infrastructure: {
    tabs: ['inventory.json', 'active_deployment.yml'],
    stack: [
      { category: 'Languages', value: 'TypeScript, JavaScript (ES6+), Python, Java' },
      { category: 'Front-End', value: 'React.js, Next.js, React Native, Tailwind CSS' },
      { category: 'Back-End', value: 'Node.js, NestJS, Koa.js, Bun Runtime' },
      { category: 'Data Systems', value: 'PostgreSQL, MongoDB, Redis, Schema Design' },
      { category: 'Infrastructure', value: 'AWS (S3, EC2, Lambda), Docker, CI/CD' },
    ],
    metrics: [
      { label: 'Operational Uptime', value: '99.98%' },
      { label: 'Throughput Capability', value: '2,450+ Req/s', isAccent: true },
    ],
  },
  footerNote: '© 2024 Ronald Salili • Senior Software Engineering Portfolio • Confidential Executive Summary',
};

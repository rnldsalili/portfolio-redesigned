import type { PortfolioContent } from '@/types/portfolio';

export const portfolioContent: PortfolioContent = {
  profile: {
    initials: 'RS',
    name: 'Ronald Salili',
    role: 'Software Engineer',
    location: 'Leyte, Philippines',
  },
  navItems: [
    { href: '#summary', label: 'Summary', isActive: true },
    { href: '#experience', label: 'Experience' },
    { href: '#technical', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ],
  links: {
    cv: '#',
    quickLinks: [
      { href: 'https://www.linkedin.com/in/ronald-salili-b068a51b7', icon: 'mail', label: 'LinkedIn Profile' },
      { href: '/contact', icon: 'share', label: 'Get In Touch' },
    ],
  },
  summary: {
    heading: 'About Me', // Updated from 'Executive Summary' to match 'About Me' section title on site
    subheading: 'Full-stack developer specializing in the JavaScript and TypeScript ecosystem. Skilled in delivering scalable web and mobile applications with modern frameworks and tools.',
    body:
      'Experienced in architecting solutions and implementing microservices with modern frameworks. Skilled in designing databases and managing end-to-end development processes. Proven ability to lead teams and integrate APIs while ensuring high-quality deliverables.',
  },
  experiences: [
    {
      role: 'Software Engineer',
      company: 'Career Team',
      period: 'Oct 2024 — Present', // Kept dates as they seem accurate to 'Present' status
      isCurrent: true,
      highlights: [
        'Diagnosed and resolved complex software issues, significantly improving application performance and reliability.',
        'Delivered new features that enhanced usability and addressed key customer needs, leading to positive user feedback.',
        'Automated deployment processes with GitHub Actions, reducing manual intervention and ensuring consistent release quality.',
        'Streamlined DevOps pipelines, enabling faster and more efficient development cycles.',
        'Partnered with developers, QA, and product teams to ensure smooth releases and optimal user experience.',
      ],
    },
    {
      role: 'Software Engineer', // Website header says Software Engineer
      company: 'Beautitag Limited',
      period: 'Nov 2021 — Oct 2024',
      highlights: [
        'Led a high-performing team of 3–4 engineers to successfully deliver 14 web and mobile application projects on time and within scope, ensuring client satisfaction and repeat business.',
        'Designed and implemented scalable system architectures and optimized database structures, improving application performance and maintainability.',
        'Maintained high code quality through rigorous code reviews and adherence to best practices, reducing technical debt.',
        'Developed new application components using JavaScript, Koa.js, and React.js, accelerating feature delivery and improving user experience.',
        'Improved team productivity by introducing best practices and coding standards, resulting in more maintainable and consistent codebases.',
      ],
    },
    {
      role: 'Registration Supervisor',
      company: 'Philippine Statistics Authority',
      period: 'Mar 2021 — Aug 2021',
      highlights: [
        'Supervised the PhilSys Step II Registration, successfully registering ~35,000 individuals while ensuring smooth operations, compliance, and minimal downtime.',
        'Developed and deployed a no-code mobile app and automation tools, improving data accuracy and reducing manual report creation time by up to 60%.',
        'Managed registrant flow, resolved on-site technical issues, and approved biometric exemptions to maintain high throughput and service quality.',
        'Coordinated with local officials, handled data uploads, and prepared daily reports to support efficient decision-making and program tracking.',
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
    { title: 'Python for Everybody Specialization', issuer: 'Coursera' },
    { title: 'Web Application Technologies and Django', issuer: 'Coursera' },
    { title: 'Introduction to HTML5', issuer: 'Coursera' },
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
    metrics: [],
  },
  footerNote: `© ${new Date().getFullYear()} Ronald Salili. All rights reserved.`,
};

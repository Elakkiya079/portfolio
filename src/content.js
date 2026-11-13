export const resumeFile = {
  href: '/Elakkiya_E_Resume.pdf',
  filename: 'Elakkiya_E_Resume.pdf',
}

export const portfolioUrl = "https://portfolio-teal-six-55.vercel.app/";

export const profile = {
  name: 'Elakkiya E',
  role: 'Full Stack Developer',
  location: 'Chennai, India',
  years: '5',
  email: 'elakkiya079@gmail.com',
  phone: '+91 8610090230',
  phoneDisplay: '+91 86100 90230',
  summary:
    'Full stack developer with 5 years of experience designing and developing scalable enterprise web applications. I work across React, TypeScript, Node.js, FastAPI, and PostgreSQL, with a focus on REST APIs, responsive interfaces, performance, and secure authentication.',
  links: [
    {
      label: 'Email',
      href: 'mailto:elakkiya079@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/elakkiya-elangoraja',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/elakia98',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Elakkiya_Raja/',
    },
  ],
}

export const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'personal', label: 'Personal' },
  { id: 'skills', label: 'Skills' },
  { id: 'leetcode', label: 'LeetCode' },
  { id: 'education', label: 'Education' },
]

export const experience = [
  {
    company: 'Agilisium Consulting',
    role: 'Software Engineer',
    place: 'Onsite · Chennai',
    period: 'Aug 2021 — Present',
    points: [
      'Designed and developed scalable enterprise web applications with React, JavaScript, TypeScript, Bootstrap, HTML5, and CSS3.',
      'Built reusable React components, custom hooks, and a modular UI architecture to keep large codebases easier to maintain.',
      'Integrated frontends with REST APIs, covering data fetching, state management, error handling, and secure authentication.',
      'Improved performance by tightening component rendering and cutting unnecessary API calls.',
      'Joined code reviews, debugging, defect resolution, and production support for business-critical platforms.',
      'Led the enterprise authentication migration from Okta to Ping Identity for multiple Universal Music Group applications, with zero downtime.',
    ],
  },
  {
    company: 'Agilisium Consulting',
    role: 'Software Engineer Intern',
    place: 'Remote · Chennai',
    period: 'Jan 2021 — Aug 2021',
    points: [
      'Developed responsive frontend components with React, HTML5, CSS3, JavaScript, and Bootstrap.',
      'Assisted with REST API integrations, production debugging, and feature enhancements alongside senior developers.',
      'Worked with cross-functional Agile teams on frontend delivery, databases, Git, and day-to-day engineering practice.',
    ],
  },
]

export const workProjects = [
  {
    title: 'Neogene Therapeutics — AstraZeneca',
    subtitle: 'T-cell therapy tracking platform',
    period: 'Jan 2025 — Present',
    stack: ['React', 'Node.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS'],
    points: [
      'Built a full-stack healthcare application for patient onboarding, blood sample collection, and storage across the T-cell therapy lifecycle.',
      'Designed workflows for patient registration, blood collection, therapy manufacturing, and treatment scheduling.',
      'Shipped responsive interfaces in React and Tailwind so clinical teams can follow treatment status in real time.',
      'Maintained Node.js and PostgreSQL modules for patient records, sample storage, processing, and infusion preparation.',
    ],
  },
  {
    title: 'Enterprise authentication migration',
    subtitle: 'Okta to Ping Identity · Universal Music Group',
    period: 'Sep 2023 — Jan 2025',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Ping Identity'],
    points: [
      'Migrated enterprise authentication from Okta to Ping Identity across multiple Universal Music Group applications without production downtime.',
      'Built authentication workflows and interfaces for Global Royalty Portal, Universal Music Bridge, EMC Console, and related apps.',
      'Integrated secure sign-in and improved accessibility across those platforms.',
      'Resolved production issues and tightened frontend performance during the transition.',
    ],
  },
  {
    title: 'SAFE',
    subtitle: 'Sales and availability for filmed entertainment',
    period: 'Sep 2021 — Aug 2023',
    stack: ['React', 'Node.js', 'SQL Server', 'Bootstrap', 'HTML', 'CSS'],
    points: [
      'Developed modules for movie and television licensing contracts and the workflows around them.',
      'Designed SMAT dashboard reports with charts so business users could read contract and sales data.',
      'Migrated legacy WPF modules to React, rebuilding contract screens with reusable, responsive components.',
      'Connected those screens to REST APIs that serve licensing contract data.',
    ],
  },
]

export const personalProjects = [
  {
    title: 'Personal portfolio',
    subtitle: 'This site',
    period: '2026',
    stack: ['React', 'Vite', 'CSS'],
    url: portfolioUrl,
    points: [
      'A production-ready personal site that presents experience, selected enterprise work, skills, and education in one responsive page.',
      'Includes a personal projects area, a LeetCode profile highlight, and a one-click resume download.',
      'Built as a static React application so it can be deployed as-is and the live URL swapped in one place.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C#', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'React', 'AngularJS', 'Bootstrap', 'Tailwind CSS', 'GraphQL'],
  },
  {
    title: 'Backend & data',
    items: ['Node.js', 'FastAPI', '.NET MVC', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Practice',
    items: ['Git', 'GitHub', 'Jira', 'Postman', 'Ping Identity', 'OAuth 2.0', 'JWT'],
  },
]

export const leetcode = {
  username: 'Elakkiya_Raja',
  href: 'https://leetcode.com/u/Elakkiya_Raja/',
  solved: 37,
  breakdown: [
    { label: 'Easy', count: 23 },
    { label: 'Medium', count: 14 },
    { label: 'Hard', count: 0 },
  ],
}

export const education = [
  {
    school: 'Karpagam College of Engineering',
    detail: 'B.Tech, Information Technology · Coimbatore',
    meta: 'GPA 8.4 / 10',
    period: 'May 2021',
  },
  {
    school: 'Saliar Mahajana Higher Secondary School',
    detail: 'HSC · Aruppukottai',
    meta: 'GPA 7.9 / 10',
    period: 'May 2017',
  },
]

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    href: 'https://www.credly.com/badges/c5b1355d-7eac-4f16-a26d-60395f0687fa?source=linked_in_profile',
  },
  {
    title: 'Namaste React',
    href: 'https://namastedev.com/elakkiya079/certificates/namaste-react',
  },
  {
    title: 'AWS Certified Developer – Associate',
    href: 'https://www.credly.com/badges/a782e7b9-02d6-48fe-b5f6-da21b1cf1e4e/linked_in?t=sqdilh',
  },
]

export const achievement =
  'Mentored junior software engineers through knowledge-sharing sessions, code reviews, and guidance on React and enterprise application architecture.'

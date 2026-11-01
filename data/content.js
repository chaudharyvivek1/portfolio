export const profile = {
  name: 'Vivek Chaudhary',
  role: 'Next.js / Frontend Developer',
  location: 'Ahmedabad, Gujarat, India',
  email: 'vivekchaudhary.b@gmail.com',
  phone: '+91 99244 51752',
  phoneHref: '+919924451752',
  github: 'https://github.com/chaudharyvivek1',
  linkedin: 'https://www.linkedin.com/in/vivek-chaudhary123',
  status: 'Open to frontend and full-stack roles',
  headline: 'Building fast, considered interfaces for real business software.',
  summary:
    'Next.js developer with hands-on production experience building responsive, component-driven web applications using React, Tailwind CSS and Material UI. I build ERP and business-management interfaces professionally, and I am independently developing an AI-integrated Next.js application.',
  current: {
    role: 'Web Developer',
    company: 'HRMD Web Info',
    since: 'April 2026',
    focus: ['ERP', 'Payroll', 'Dashboards', 'Reporting'],
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    group: 'Frontend',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Bootstrap'],
  },
  {
    group: 'Backend',
    items: ['Express.js', 'REST APIs', 'Node.js'],
  },
  {
    group: 'Database',
    items: ['MySQL', 'Aiven'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Render'],
  },
];

export const experience = [
  {
    role: 'Web Developer',
    company: 'HRMD Web Info',
    period: 'April 2026 - Present',
    current: true,
    points: [
      'Build and maintain web-based ERP, payroll and business-management applications used across internal teams.',
      'Develop responsive, reusable UI components with Next.js, React.js, Material UI and Tailwind CSS, cutting duplicate code across modules.',
      'Build dynamic forms, data-management modules, dashboards and reporting workflows tailored to business operations.',
      'Integrate REST APIs and backend services to deliver end-to-end functionality across ERP and payroll modules.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Modern Business Solutions',
    location: 'Ahmedabad',
    period: 'January 2026 - March 2026',
    points: [
      'Developed web applications using modern frontend technologies in the IT department.',
      'Gained hands-on experience in frontend development, UI implementation and API integration.',
      'Worked with the team to translate requirements into shipped application features.',
      'Strengthened practical knowledge of React.js, Next.js and JavaScript through applied project work.',
    ],
  },
];

export const projects = [
  {
    name: 'ParkMatic Automation',
    kind: 'Freelance project',
    tagline: 'Landing site for a parking management business',
    stack: ['Next.js', 'Bootstrap', 'Nodemailer'],
    points: [
      'Designed and developed a responsive, UI-focused landing website for a parking management business as a freelance project.',
      'Built a Contact Us page with Nodemailer that emails every new enquiry to the client as a lead.',
      'Deployed on Render and delivered as a live, shareable product.',
    ],
    live: 'https://parkautometions.onrender.com/',
  },
  {
    name: 'Budget Passbook',
    kind: 'Full-stack project',
    tagline: 'CRUD passbook app for tracking money in and out',
    stack: ['Next.js', 'Express.js', 'MUI', 'MySQL'],
    points: [
      'Built a full-stack, CRUD-based passbook app with a Next.js and Material UI frontend and an Express.js backend.',
      'Stored data in a MySQL database hosted on Aiven, with a recycle bin for deleted entries and a night mode theme.',
      'Deployed the application on Render with a live demo.',
    ],
    live: 'https://my-passbooks.onrender.com/',
  },
  {
    name: 'HR Management Portal',
    kind: 'Internship project',
    tagline: 'Role-based HR dashboards and employee records',
    stack: ['Next.js', 'React.js', 'REST APIs'],
    points: [
      'Developed the frontend of an HR management portal using Next.js, focused on login flows and role-based dashboards.',
      'Built forms and data-management UI for handling employee records and workflows.',
      'Integrated backend REST APIs to display and update employee data dynamically.',
    ],
    live: null,
  },
];

export const education = {
  degree: 'B.E. in Computer Engineering',
  school: 'Apollo Institute of Engineering and Technology',
  university: 'Gujarat Technological University (GTU)',
  period: '2022 - 2026',
  score: 'CGPA 7.76 / 10',
};

export const certification = {
  name: 'Cloud Infrastructure Training',
  org: 'Microsoft & Cloud That',
  date: 'July 2025',
  hours: '78 hours',
  id: 'CT/25/946195',
  points: [
    'Completed skill-based training on Microsoft Azure cloud infrastructure, including identity and access management with Microsoft Entra.',
    'Covered secure storage practices for Azure Files and Azure Blob Storage through hands-on labs on Microsoft Learn.',
  ],
};

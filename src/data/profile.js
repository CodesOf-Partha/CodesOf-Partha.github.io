// Single source of truth for the portfolio.
// Edit this file to regenerate the entire site with new content.

const profile = {
  name: 'Parthasarathi RV',
  initials: 'PR',
  role: 'Senior Software Engineer (SDE-IV)',
  tagline: 'Full-Stack & Applied AI Engineering',
  location: 'Bangalore, India',
  locationNote: 'Open to relocation, worldwide',
  email: 'rvparthasarathi@gmail.com',
  phone: '+91 807-282-0792',
  photo: `${process.env.PUBLIC_URL}/images/profile.jpg`,
  resume: `${process.env.PUBLIC_URL}/resume/Parthasarathi_RV.pdf`,

  summary:
    "Senior full-stack engineer with 7+ years building and leading production systems in React, Next.js, Node.js, TypeScript, and Python across ed-tech and B2B SaaS. Currently SDE-IV at Bhanzu, leading a team of five engineers and owning platform architecture across microservices, AWS, and Kubernetes. I specialize in applied Generative AI - designing and shipping LLM-powered products, from RAG chatbots to automated content pipelines, that have replaced multi-team manual workflows with single-minute automation reaching 80% team adoption.",

  highlights: [
    { value: '7+', label: 'Years of experience' },
    { value: '5', label: 'Engineers led' },
    { value: '80%', label: 'Adoption on AI Writer' },
    { value: '1 min', label: 'Automated a 5-team workflow' },
  ],

  socials: [
    { name: 'GitHub', handle: 'codesof-partha', url: 'https://github.com/codesof-partha', icon: 'GitHub' },
    { name: 'LinkedIn', handle: 'iampartha', url: 'https://www.linkedin.com/in/iampartha/', icon: 'LinkedIn' },
    { name: 'Twitter', handle: 'RvParthasarathi', url: 'https://twitter.com/RvParthasarathi', icon: 'Twitter' },
    { name: 'Email', handle: 'rvparthasarathi@gmail.com', url: 'mailto:rvparthasarathi@gmail.com', icon: 'MailOutline' },
  ],

  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Express.js', 'Zustand', 'HTML/CSS/SCSS'],
    },
    {
      category: 'Generative AI',
      items: ['OpenAI API', 'LangChain', 'RAG Pipelines', 'Prompt Engineering & Fine-tuning', 'LLM Product Design', 'Claude', 'ChatGPT'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS (EC2, EKS, Lambda)', 'DynamoDB', 'RDS / Aurora', 'S3', 'SQS', 'ECR', 'Secrets Manager', 'Docker', 'Kubernetes', 'ArgoCD', 'Webpack'],
    },
    {
      category: 'Data & Testing',
      items: ['MongoDB', 'MySQL', 'DynamoDB', 'Playwright', 'Storybook', 'Lighthouse', 'CI/CD'],
    },
    {
      category: 'Architecture & Practice',
      items: ['Microservices', 'System Design', 'API Design', 'Security Review', 'Agile / Scrum', 'Mentoring'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Figma', 'JIRA', 'Confluence', 'Bitbucket', 'Grafana', 'PagerDuty'],
    },
  ],

  experience: [
    {
      role: 'Software Development Engineer IV',
      company: 'Bhanzu',
      location: 'Bengaluru, India',
      period: 'Aug 2025 - Present',
      current: true,
      bullets: [
        "Lead a team of 5 engineers (4 SDE-I, 1 SDE-II) owning platform architecture, code quality, scalability, and security across the company's core products.",
        'Set engineering standards and mentor interns and junior engineers on best practices, code review discipline, and system design.',
      ],
    },
    {
      role: 'Software Development Engineer III',
      company: 'Bhanzu',
      location: 'Bengaluru, India',
      period: 'May 2022 - Aug 2025',
      bullets: [
        'Built and owned Admin Panel, Student Dashboard, and CLM Dashboard from scratch using React, TypeScript, Next.js, Playwright, and Python (Flask & FastAPI) on a microservices architecture (AWS Lambda, S3, API Gateway, DynamoDB, ECR, SQS, Secrets Manager; Docker/Kubernetes/ArgoCD for deployment). Ran the build on an Agile/Scrum cadence and profiled the stack for performance, cutting page-load times and API response times and speeding up release velocity across the platform suite.',
        'Designed and shipped DoubtGPT, a curriculum-grounded RAG chatbot (OpenAI + LangChain) that resolves student doubts in real time; iterated on fine-tuning to improve response accuracy.',
        'Built Ed-Reels, an OpenAI + Manim pipeline that auto-generates short-form math explainer videos for students.',
        "Won a company hackathon for Bhanzu's AI Writer: an OpenAI-powered tool that generates session summaries, video scripts, and question banks, cutting curriculum-design work previously requiring ~40 core employees down to a one-minute automated run and reaching 80% adoption across curriculum teams; extended it to auto-build full curricula by grade and topic.",
      ],
    },
    {
      role: 'Software Development Engineer II - EngageWith',
      company: 'Springworks Inc.',
      location: 'Santa Monica, CA (Remote)',
      period: 'Apr 2021 - May 2022',
      bullets: [
        'Served as Scrum Master and full-stack lead for EngageWith, a Slack/Microsoft Teams employee-recognition and rewards platform, using the MERN stack, AWS, and Gatsby.',
        'Drove SEO optimization and front-end performance best practices across the product.',
      ],
    },
    {
      role: 'Software Development Engineer I - EngageWith',
      company: 'Springworks Inc.',
      location: 'Santa Monica, CA (Remote)',
      period: 'Sep 2019 - Mar 2021',
      bullets: [
        'Full-stack developer on EngageWith (MERN stack); integrated the Stripe Customer Portal for subscription payments and xoxoday for reward redemption.',
      ],
    },
    {
      role: 'Research & Development Intern',
      company: 'Indian Institute of Technology, Madras',
      location: 'Chennai, India',
      period: 'Feb 2019 - Aug 2019',
      bullets: [
        'Implemented GLCM and RANSAC-based computer vision algorithms to unwrap and stitch robot-captured video into 3D reconstructions of inspected pipelines - the core technology later commercialized as Solinas Integrity.',
      ],
    },
  ],

  projects: [
    {
      name: 'DoubtGPT',
      blurb:
        'Curriculum-grounded RAG chatbot that resolves student doubts in real time, grounding OpenAI completions in course content via LangChain retrieval pipelines. Iterated on fine-tuning to raise response accuracy.',
      tags: ['OpenAI', 'LangChain', 'RAG', 'React', 'Node.js'],
      tag_label: 'Applied AI',
    },
    {
      name: "Bhanzu AI Writer",
      blurb:
        'OpenAI-powered authoring tool that generates session summaries, video scripts, and question banks - cutting curriculum-design work previously requiring ~40 core employees down to a one-minute automated run, with 80% adoption across curriculum teams. Extended to auto-build full curricula by grade and topic.',
      tags: ['OpenAI API', 'Prompt Engineering', 'Python', 'React'],
      tag_label: 'Hackathon Winner',
    },
    {
      name: 'Ed-Reels',
      blurb:
        'Content-generation pipeline pairing OpenAI with Manim to auto-produce short-form math explainer videos for students, turning a script prompt into a rendered video end to end.',
      tags: ['OpenAI', 'Manim', 'Python', 'Automation'],
      tag_label: 'Applied AI',
    },
    {
      name: 'Bhanzu Platform Suite',
      blurb:
        'Admin Panel, Student Dashboard, and CLM Dashboard - built from scratch on a shared microservices architecture spanning React/Next.js on the front end and Flask/FastAPI on the back end. Agile/Scrum delivery and performance work cut page-load times and API response times platform-wide.',
      tags: ['React', 'TypeScript', 'Next.js', 'AWS Lambda', 'DynamoDB', 'Kubernetes'],
      tag_label: 'Platform',
    },
    {
      name: 'EngageWith',
      blurb:
        'Slack & Microsoft Teams employee-recognition and rewards platform. Led full-stack delivery as Scrum Master, integrating Stripe Customer Portal billing and xoxoday reward redemption, with a focus on SEO and front-end performance.',
      tags: ['MERN', 'Gatsby', 'AWS', 'Stripe'],
      tag_label: 'B2B SaaS',
    },
    {
      name: 'Pipeline 3D Reconstruction',
      blurb:
        'Research internship at IIT Madras implementing GLCM and RANSAC-based computer vision to unwrap and stitch robot-captured video into 3D reconstructions of inspected pipelines - later commercialized as Solinas Integrity.',
      tags: ['Computer Vision', 'GLCM', 'RANSAC', 'Research'],
      tag_label: 'Research',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering, Computer Science and Engineering',
      school: 'Anna University (AIT)',
      period: '2015 - 2019',
      note: 'CGPA 7.5 · Best Outgoing Student · President, Rotaract Club',
    },
  ],

  certifications: [
    { name: 'Microsoft AI Tour - Bengaluru', issuer: 'Global AI Community', date: 'Feb 2024' },
    { name: 'Regional Mentoring Session for POC', issuer: "MHRD's Innovation Cell", date: 'Jul 2019' },
    { name: 'Machine Learning Crash Course (MLCC)', issuer: 'Google', date: 'Dec 2018' },
    { name: 'AWSome Day Online Conference', issuer: 'Amazon Web Services (AWS)', date: 'Oct 2018' },
    { name: 'EMC Academic Associate', issuer: 'Dell EMC', date: 'Mar 2017' },
    { name: 'Intelligent Systems', issuer: 'Intel', date: 'Feb 2016' },
  ],

  awards: [
    'Hackathon Winner - Rethink Passion & Bhanzu (AI Writer)',
    'Best Project Award',
    'Best Presenter, Student League at IIT Madras',
  ],

  publications: [
    {
      title: 'Hypaponics - Monitoring and Controlling using Internet of Things and Machine Learning',
    },
  ],
};

export default profile;

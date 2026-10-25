export interface ExperienceEntry { role: string; company: string; period: string; location?: string; description?: string; url?: string }
export interface ProjectEntry { title: string; category: string; description: string; tags: string[]; url?: string; appUrl?: string }
export const profile = {
  name: "Aymane Naouri", headline: "AI & Data Engineering Student", location: "Rabat, Morocco",
  linkedin: "https://www.linkedin.com/in/aymane-naouri", github: "https://github.com/N-Aymane",
  summary: "I work across artificial intelligence, data analysis, and full-stack development to turn complex problems into useful digital solutions.",
  about: ["I'm an engineering student focused on AI and data, with practical experience in software development, analytics, and research. My work connects intelligent systems with the applications people use every day.", "At OCP Group, I worked with Big Data, data visualization, and interactive Power BI dashboards. At EMSI AI Nexus, I contributed to innovation and R&D in AI, machine learning, and deep learning alongside my role as Vice President.", "My full-stack background spans Laravel, React, React Native, API design, software architecture, and databases. I'm interested in AI, data science, software engineering, and innovation projects with a practical impact."],
} as const
export const experiences: ExperienceEntry[] = [
  { role: "AI Engineer Intern", company: "Royal Air Maroc", period: "July - August 2026", location: "Casablanca, Morocco", description: "Developed an airline irregular-operations dashboard for flight-delay prediction, disruption risk monitoring, and financial-impact analysis. Connected a Next.js interface to a FastAPI backend serving XGBoost predictions, with mock data and fallback scoring for demonstration.", url: "https://github.com/N-Aymane/flight_rerouting" },
  { role: "Vice President", company: "EMSI AI Nexus", period: "August 2025 - July 2026", location: "Rabat, Morocco", description: "Contributed to innovation and R&D initiatives in AI, machine learning, deep learning, intelligent systems, and data analysis." },
  { role: "Data Analyst", company: "OCP Group", period: "July - August 2025", location: "Ben Guerir, Morocco", description: "Worked on Big Data analysis, data visualization, and interactive Microsoft Power BI dashboards to support data-informed decisions." },
  { role: "Full-Stack Developer", company: "Digisystems", period: "July - September 2023", location: "Casablanca-Settat, Morocco", description: "Worked across frontend and backend development, with experience in Laravel, React, React Native, API design, software architecture, and database management." },
]
export const projects: ProjectEntry[] = [
  { title: "Quant Research Dashboard", category: "Quantitative research", description: "A research dashboard for portfolio performance, allocation, and strategy diagnostics using sample data. Includes a Python backend for Black-Scholes option pricing and portfolio optimization.", tags: ["Next.js", "TypeScript", "Recharts", "FastAPI", "Python"], url: "https://github.com/N-Aymane/quant-research-dashboard" },
  { title: "FORMD Fitness Tracker", category: "AI-powered fitness", description: "A nutrition and training app with AI-assisted meal scans, fitness tracking, and account-based data synchronization.", tags: ["Next.js", "React", "TypeScript", "Gemini", "Supabase"], url: "https://github.com/N-Aymane/formd-fitness-tracker", appUrl: "https://formd-indol.vercel.app" },
  { title: "Stock Management Web App", category: "Full-stack development", description: "A platform for real-time inventory tracking and management with secure authentication.", tags: ["Next.js", "Django REST", "MySQL", "JWT"] },
  { title: "Fine-Tuned Chatbot", category: "Artificial intelligence", description: "A conversational application using Mistral LLM and MongoDB for context-aware interactions.", tags: ["Mistral LLM", "MongoDB", "Python"] },
  { title: "Absence Management System", category: "Web application", description: "An attendance management system for tracking and managing absences in educational or corporate settings.", tags: ["Laravel", "MySQL", "Tailwind"] },
  { title: "MERN Blog Platform", category: "Full-stack development", description: "A blog platform with content management and user engagement features.", tags: ["Next.js", "Express", "MongoDB", "Node.js"] },
]
export const skillCategories = [
  { name: "AI & data", skills: ["Machine Learning", "Deep Learning", "Neural Networks", "PyTorch", "TensorFlow", "LLMs", "Ollama", "Jupyter", "Data Science", "Big Data", "Data Analysis", "Power BI", "Quantitative Finance", "Quantitative Analysis"] },
  { name: "Software development", skills: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "C", "C++", "Next.js", "React", "React Native", "Laravel", "Django", "Flask", "Tailwind CSS", "shadcn/ui", "Framer Motion", "API Design", "Software Architecture"] },
  { name: "Databases & infrastructure", skills: ["SQL", "MongoDB", "PostgreSQL", "Oracle", "Git", "Docker", "Linux", "Anaconda", "Kubernetes", "Networking", "Cybersecurity", "Information Systems"] },
] as const
export const education = { school: "Ecole Marocaine des Sciences de l'ingénieur", degree: "Engineering degree in Computer Science", period: "2022 - 2027", status: "In progress" } as const
export const certifications = ["IBM Python for Data Science, AI & Development", "Meta React Basics", "Neural Networks & PyTorch", "Cybersecurity Essentials (with Honors)", "Introduction to Front-End Development", "Sequence Models", "Introduction to Trading, Machine Learning & GCP", "Introduction to AI"] as const

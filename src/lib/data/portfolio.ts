// Buenas prácticas: Centralizar datos en un archivo separado
export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer?: string;
}

export interface Reference {
  id: number;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Roger Cedeño',
  title: 'Software Engineer | Full Stack Developer',
  email: 'grarogccee@gmail.com',
  phone: '+593 990475612',
  location: 'Quito, Pichincha, Ecuador',
  summary:
    'Desarrollador de software apasionado por la tecnología, con más de 4 años de experiencia creando soluciones funcionales y creativas. He participado en diversos proyectos como consultor técnico, lo que me ha permitido fortalecer mis habilidades y adaptarme con facilidad a diferentes entornos. Me definen la búsqueda constante de conocimiento, el compromiso con mis responsabilidades y la disposición para asumir nuevos desafíos, aprender y compartir el conocimiento adquirido.'
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Kruger Corp',
    location: 'Ecuador',
    startDate: '08/2023',
    endDate: '09/2025',
    responsibilities: [
      'Diseño de bases de datos relacionales y modelamiento.',
      'Implementación de estructuras de datos y relaciones en PostgreSQL.',
      'Backend (NestJS / Java Spring Boot).',
      'Desarrollo de servicios y APIs escalables.',
      'Transformación de diseño y mockups en código funcional.',
      'Corrección de incidencias y optimización de servicios.',
      'Frontend (Next.js / React / Angular / Tailwind CSS).',
      'Desarrollo de interfaces dinámicas y responsivas.',
      'Consumo de servicios REST desde distintas plataformas frontend.',
      'Uso de Tailwind CSS para diseño rápido y consistente.',
      'Manejo de incidencias y tareas con Jira y Bitbucket.',
      'Control de versiones y colaboración con Git y GitHub.',
      'Rol de Líder Técnico temporal, coordinando equipo y supervisando desarrollos.',
      'Desarrollo y mantenimiento de aplicaciones escalables.'
    ]
  },
  {
    id: 2,
    title: 'Ingeniero de software',
    company: 'Jeremy SAS',
    location: 'Quito, Pichincha, Ecuador',
    startDate: '11/2024',
    endDate: '06/2025',
    responsibilities: [
      'Desarrollo de interfaces de usuario dinámicas y responsivas.',
      'Desarrollo de aplicaciones web escalables y bien estructuradas.',
      'Diseño e implementación de APIs REST y gestión de base de datos relacional.',
      'Consumo de APIs REST para comunicación entre frontend y backend.',
      'Manejo de datos, validaciones y sincronización entre sistemas.',
      'Optimización de rendimiento y escalabilidad.',
      'Aprendizaje autónomo en el desarrollo de apps móviles con Flutter/Dart.'
    ]
  },
  {
    id: 3,
    title: 'Technical Consultant',
    company: 'Kruger Corp',
    location: 'Ecuador',
    startDate: '05/2021',
    endDate: '07/2023',
    responsibilities: [
      'Análisis y diseño de soluciones y creación de mocks.',
      'Desarrollo Frontend con React, implementación de interfaces y manejo de CSS.',
      'Gestión del estado de aplicaciones, incluyendo uso de Context API.',
      'Integración mediante consumo de servicios REST.',
      'Mantenimiento y mejora continua de aplicaciones.'
    ]
  },
  {
    id: 4,
    title: 'Desarrollador Junior',
    company: 'UTIC - ESPE',
    location: 'Sangolquí, Rumiñahui',
    startDate: '2019',
    endDate: '2021',
    responsibilities: [
      'Análisis y diseño de aplicaciones e interfaces.',
      'Desarrollo de servicios y funcionalidades (CRUD) bajo arquitectura MVC.',
      'Integración mediante consumo de servicios REST.',
      'Gestión de datos en bases de datos relacionales.',
      'Mantenimiento y mejora continua de aplicaciones.'
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Ingeniería de Software',
    institution: 'Universidad Iberoamericana del Ecuador',
    startDate: '05/2023',
    endDate: '09/2024'
  },
  {
    id: 2,
    degree: 'Tecnólogo Superior en Desarrollo de Software',
    institution: 'Instituto Superior Tecnológico Yavirac',
    location: 'Quito',
    startDate: '2018',
    endDate: '2021'
  },
  {
    id: 3,
    degree: 'Bachillerato General Unificado',
    institution: 'Carlos Zambrano Orejuela',
    location: 'Quito, Ecuador',
    startDate: '02/2013',
    endDate: '09/2018'
  }
];

export const skills = {
  frontend: [
    'React',
    'React Native',
    'Expo',
    'Next.js',
    'Angular',
    'Angular CLI',
    'HTML5',
    'CSS',
    'Tailwind CSS',
    'Micro-Frontend'
  ],
  backend: ['NestJS', 'Spring Framework', 'Python'],
  mobile: ['React Native', 'Flutter'],
  tools: [
    'Git',
    'GitHub',
    'Bitbucket',
    'GitFlow',
    'Jira',
    'Swagger',
    'Visual Studio',
    'Windows',
    'Discord'
  ],
  methodologies: ['SCRUM', 'PMP', 'Principios SOLID']
};

export const softSkills = [
  'Responsabilidad',
  'Trabajo en Equipo',
  'Adaptabilidad',
  'Resolución de Problemas',
  'Empatía',
  'Pasión por el Aprendizaje',
  'Perseverancia'
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "NestJS: The Complete Developer's Guide"
  },
  {
    id: 2,
    name: 'PMP Preparación Certificación PMP PMBOK 7 [2024]'
  },
  {
    id: 3,
    name: 'React Native Expo: Aplicaciones nativas para IOS y Android'
  },
  {
    id: 4,
    name: 'Principios SOLID y Clean Code'
  },
  {
    id: 5,
    name: 'Scrum Foundation Professional Certificate'
  },
  {
    id: 6,
    name: 'Legacy - Flutter: Tu guía completa para IOS y Android'
  },
  {
    id: 7,
    name: 'Micro-Frontend: Arquitectura de Aplicaciones Web Escalables'
  },
  {
    id: 8,
    name: 'TanStack Query - Un poderoso gestor de estado asíncrono'
  },
  {
    id: 9,
    name: 'Angular 14 - La Guia Completa + 15 Proyectos'
  },
  {
    id: 10,
    name: 'Python TOTAL - Programador Avanzado en 16 días'
  },
  {
    id: 11,
    name: 'React: De cero a experto (Hooks y MERN)'
  },
  {
    id: 12,
    name: 'Spring Framework 6 & Spring Boot 3 desde cero a experto'
  },
  {
    id: 13,
    name: 'Next.js: El framework de React para producción'
  }
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' }
];

export const references: Reference[] = [
  {
    id: 1,
    name: 'Erick Daniel Erraez Guamán',
    position: 'Ingeniero en Software',
    company: 'Neoris',
    email: 'erickerraez2@gmail.com',
    phone: '097178106'
  },
  {
    id: 2,
    name: 'Johao Nicolas Perlaza Zambrano',
    position: 'Ingeniero en Software',
    company: 'Procuraduría General del Estado',
    email: 'perlazajohao@gmail.com',
    phone: '0978970998'
  },
  {
    id: 3,
    name: 'Jennifer Geoconda Barriga Montalvo',
    position: 'Tngla. Seguridad y Riesgos Laborales',
    company: 'Freelance',
    email: 'jenniferbarriga95@gmail.com',
    phone: '0998699289'
  }
];


import { Project, SkillItem, DevFact, CertificationPlaceholder, ContactMethod } from '../types';

export const PROFILE_INFO = {
  name: 'Jose Fernando Alvarez Morales',
  shortName: 'Jose Alvarez',
  title: 'Software Engineer & Full Stack Developer',
  university: 'Universidad de San Carlos de Guatemala (USAC)',
  degree: 'Ingeniería en Ciencias y Sistemas',
  status: 'OPEN_FOR_OPPORTUNITIES',
  email: 'feralvarezmorales9@gmail.com',
  github: 'https://github.com/JAlvarez9',
  linkedin: 'https://www.linkedin.com/in/jose-fernando-alvarez-morales-67b75a248/',
  bioShort: 'Ingeniero en Ciencias y Sistemas enfocado en construir software escalable, arquitecturas limpias y APIs de alta disponibilidad con .NET y TypeScript.',
  bioDetailed: 'Poseo una sólida formación teórica y práctica en estructuras de datos, compiladores, diseño de sistemas operativos y bases de datos relacionales y NoSQL. Me apasiona resolver problemas complejos priorizando el desacoplamiento, la seguridad de tipos, el rendimiento y las buenas prácticas de la industria.',
  workPhilosophy: 'Antes de escribir código, profundizo en la arquitectura y los casos de uso. Domino con mayor especialidad el ecosistema .NET (C#) y TypeScript / React, combinando la solidez de Go para microservicios y utilidades concurrentes, y Python para automatización y datos.'
};

export const SKILLS_DATA: SkillItem[] = [
  {
    name: '.NET / C#',
    levelPercentage: 95,
    levelLabel: 'Alta Especialidad / Backend & APIs',
    category: 'core',
    iconName: 'Code2'
  },
  {
    name: 'TypeScript & React / Node.js',
    levelPercentage: 90,
    levelLabel: 'Alta Especialidad / Frontend Moderno',
    category: 'core',
    iconName: 'Layers'
  },
  {
    name: 'Go (Golang)',
    levelPercentage: 75,
    levelLabel: 'Intermedio / Concurrencia & Microservicios',
    category: 'core',
    iconName: 'Cpu'
  },
  {
    name: 'Python & Java',
    levelPercentage: 75,
    levelLabel: 'Intermedio / OOP, Datos & Scripts',
    category: 'core',
    iconName: 'Terminal'
  }
];

export const TECH_BADGES = [
  'PostgreSQL',
  'SQL Server',
  'MySQL',
  'MongoDB',
  'Docker',
  'Git & GitHub',
  'Linux',
  'REST APIs',
  'Clean Architecture',
  'Entity Framework',
  'Tailwind CSS'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mp-challenge',
    name: 'MP Challenge Full Stack',
    description: 'Plataforma web moderna con arquitectura por capas, control de estado centralizado en React/TypeScript y comunicación fluida con endpoints backend optimizados.',
    techs: ['TypeScript', 'React', 'Node.js', 'REST API', 'Tailwind'],
    category: 'typescript',
    githubUrl: 'https://github.com/JAlvarez9/mp_challenge',
    featured: true
  },
  {
    id: 'virtual-mall-edd',
    name: 'EDD Virtual Mall',
    description: 'Simulador de centro comercial digital que implementa estructuras de datos avanzadas no lineales, árboles de búsqueda, matrices dispersas y listas indexadas en memoria con Go.',
    techs: ['Go (Golang)', 'Estructuras de Datos', 'Algoritmos'],
    category: 'go',
    githubUrl: 'https://github.com/JAlvarez9/EDD_VirtualMall_201900528',
    featured: true
  },
  {
    id: 'ocl2-compiler',
    name: 'Compilador & Intérprete OCL2',
    description: 'Diseño e implementación integral de un compilador/intérprete: analizador léxico, sintáctico (AST), tabla de símbolos, verificación semántica de tipos y generación de código en Go.',
    techs: ['Go', 'Compiladores', 'Gramáticas', 'AST'],
    category: 'systems',
    githubUrl: 'https://github.com/JAlvarez9/OCL2_Proyecto2_201900528',
    featured: true
  },
  {
    id: 'so1-simulator',
    name: 'Simulador de Kernel SO1',
    description: 'Módulo de monitoreo y simulación de llamadas al sistema, estados de memoria, planificación de procesos y concurrencia emulando el Kernel de Linux.',
    techs: ['JavaScript', 'Sistemas Operativos', 'Linux Kernel'],
    category: 'systems',
    githubUrl: 'https://github.com/JAlvarez9/so1_actividades_201900528',
    featured: true
  }
];

export const TRIVIA_DATA: DevFact[] = [
  {
    id: 1,
    fact: "El término 'Bug' informático se popularizó en 1947 cuando Grace Hopper descubrió una polilla real atrapada en un relé de la computadora Harvard Mark II.",
    authorOrSource: 'Grace Hopper / Harvard Mark II (1947)',
    tag: 'HISTORIA'
  },
  {
    id: 2,
    fact: "Los arrays empiezan en 0 en C y lenguajes derivados porque el índice representa el desplazamiento (offset) en memoria desde la dirección base.",
    authorOrSource: 'Arquitectura de Memoria & C',
    tag: 'ARQUITECTURA'
  },
  {
    id: 3,
    fact: "El lenguaje Go fue creado en Google por Robert Griesemer, Rob Pike y Ken Thompson mientras esperaban los largos tiempos de compilación de C++.",
    authorOrSource: 'Google Engineering History',
    tag: 'GO'
  },
  {
    id: 4,
    fact: "Anders Hejlsberg en Microsoft diseñó tanto TypeScript como C#, dos de los lenguajes tipados más influyentes y utilizados en el desarrollo profesional.",
    authorOrSource: 'Microsoft Developer Division',
    tag: '.NET & TS'
  },
  {
    id: 5,
    fact: "Git fue programado por Linus Torvalds en solo dos semanas de 2005 para gestionar el desarrollo del Kernel de Linux.",
    authorOrSource: 'Linux Kernel Community',
    tag: 'GIT'
  }
];

export const CERTIFICATIONS_DATA: CertificationPlaceholder[] = [
  {
    id: 'cert-1',
    title: 'Cloud & Distributed Architecture',
    description: 'Arquitectura de servicios escalables en la nube y microservicios.',
    status: 'Upcoming',
    targetArea: 'Cloud Engineering'
  },
  {
    id: 'cert-2',
    title: 'Backend & .NET Enterprise Specialist',
    description: 'Patrones de arquitectura limpia, microservicios y rendimiento en C#/.NET.',
    status: 'Upcoming',
    targetArea: 'Enterprise Backend'
  },
  {
    id: 'cert-3',
    title: 'Advanced Database Systems & Performance',
    description: 'Modelado, indexación, optimización de queries y escalabilidad de datos.',
    status: 'Upcoming',
    targetArea: 'Databases'
  }
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'email',
    label: 'Email Principal',
    value: 'feralvarezmorales9@gmail.com',
    icon: 'Mail',
    actionType: 'copy'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Jose Fernando Alvarez Morales',
    icon: 'Linkedin',
    actionType: 'link',
    actionUrl: 'https://www.linkedin.com/in/jose-fernando-alvarez-morales-67b75a248/'
  },
  {
    id: 'github',
    label: 'GitHub Hub',
    value: 'github.com/JAlvarez9',
    icon: 'Github',
    actionType: 'link',
    actionUrl: 'https://github.com/JAlvarez9'
  }
];

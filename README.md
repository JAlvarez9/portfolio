# 💾 Jose Alvarez — Portfolio DB Engine & Studio ⚡

[![Deploy Portfolio to GitHub Pages](https://github.com/JAlvarez9/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/JAlvarez9/portfolio/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![AI Assisted](https://img.shields.io/badge/AI_Assisted_Dev-DeepMind_Antigravity-8A2BE2?logo=openai&logoColor=white)](https://github.com/JAlvarez9)

> **Sitio Web en Vivo**: 👉 **[https://jalvarez9.github.io/portfolio/](https://jalvarez9.github.io/portfolio/)**

---

## 📖 Sobre el Proyecto

Portafolio web personal e interactivo desarrollado por **Jose Fernando Alvarez Morales**, Ingeniero en Ciencias y Sistemas (**USAC**). 

El proyecto adopta un concepto temático de **Sistema Gestor de Base de Datos (DBMS Studio & SQL Data Hub)** con estética cyberpunk/dark mode, navegación por tablas (`db.schemas`), consola SQL interactiva, métricas de cluster y explorador de proyectos en tiempo real.

---

## 🤖 Desarrollo Acelerado con IA (AI-Assisted Pair Programming)

Este portafolio fue conceptualizado, diseñado y construido aplicando las mejores prácticas de **Pair Programming impulsado por Inteligencia Artificial Avanzada (Google DeepMind Antigravity IDE)**:
- **Arquitectura Limpia & Modular**: Diseño estructurado de componentes desacoplados y custom hooks.
- **Tipado Fuerte Estricto**: Modelado de contratos e interfaces en TypeScript para garantizar cero errores en tiempo de ejecución.
- **Flujo CI/CD Automatizado**: Integración continua con GitHub Actions para compilación y despliegue automático en GitHub Pages.
- **Eficiencia y Buenas Prácticas**: Optimización de bundles, testing de compilación y control de versiones con Git Flow.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Lenguaje** | `TypeScript 5.6` | Tipado estático estricto, interfaces de datos e inferencia. |
| **Librería UI** | `React 18` | Renderizado declarativo y arquitectura basada en componentes. |
| **Estilos** | `Tailwind CSS v4` | Sistema de diseño atómico, variables temáticas y modo oscuro. |
| **Bundler** | `Vite 6` | Servidor de desarrollo ultra rápido y compilación Rollup optimizada. |
| **Iconografía** | `Lucide React` | Set de iconos vectoriales modernos y ligeros. |
| **CI/CD** | `GitHub Actions` | Automatización de pipeline de build (`tsc -b && vite build`) y deploy a Pages. |

---

## 📁 Arquitectura del Código

```text
PortafolioPersonal/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD automático para GitHub Pages
├── src/
│   ├── components/
│   │   ├── layout/             # Sidebar (Schemas), QueryBar (SQL Console)
│   │   └── sections/           # HeroCluster, AboutSection, ProjectsSection, TechCuriosities, Certifications, Contact
│   ├── data/
│   │   └── portfolioData.ts    # Repositorio central de datos y modelos tipados
│   ├── hooks/
│   │   └── useCustomHooks.ts   # Custom hooks (Uptime en vivo, Clipboard manager)
│   ├── types/
│   │   └── index.ts            # Definición estricta de interfaces TypeScript
│   ├── App.tsx                 # Componente raíz y orquestador de scrollspy
│   ├── main.tsx                # Punto de entrada React 18
│   ├── index.css               # Directivas Tailwind CSS v4 y temas
│   └── vite-env.d.ts           # Definiciones de entorno Vite
├── .gitignore                  # Exclusión de node_modules, dist y temporales
├── package.json
├── tsconfig.json               # Configuración TypeScript
├── vite.config.ts              # Configuración Vite con plugin de Tailwind
└── README.md
```

---

## 🚀 Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JAlvarez9/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 📬 Contacto & Conexión

- **Ingeniero:** Jose Fernando Alvarez Morales
- **Email:** [feralvarezmorales9@gmail.com](mailto:feralvarezmorales9@gmail.com)
- **LinkedIn:** [linkedin.com/in/jose-fernando-alvarez-morales](https://www.linkedin.com/in/jose-fernando-alvarez-morales-67b75a248/)
- **GitHub:** [@JAlvarez9](https://github.com/JAlvarez9)

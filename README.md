![James Husbad - Full Stack Developer](https://i.ibb.co/S3Cp60B/portfolio.png)

# Development Portfolio

Welcome to my personal development portfolio! This repository showcases my work as a full-stack developer. A modular, **micro-frontend architecture** project is built using the **([Feature Shell Pattern](https://angularindepth.com/posts/1117/the-shell-library-patterns-with-nx-and-monorepo-architectures))**, for a clean codebase & efficient reuse of UI and utility libs.

## Overview

This application is a **Micro Frontend Application** designed to demonstrate modular, feature-oriented development with **shared UI** and **utility libraries**. Each feature is compartmentalized within its own library for easy management, scaling, and reusability.

### Project Structure

```
libs/
├── src/
├── portfolio/
│   ├── feature-header/
│   ├── feature-footer/
│   ├── feature-portfolio-section/
│   └── feature-contact/
└── shared/
    ├── ui/
    └── utils/
```

#### Getting Started
To get a local copy up and running, follow these steps:
**Clone the repository:**
`git clone <repo-url>`
**Install dependencies:**
`npm install`
**Run the development server:**
`npx nx run nx-portfolio:dev`

**Dependencies**
This project leverages the following key technologies:

**NX:** A smart, extensible build framework for monorepos (learn more here).
**TypeScript:** For type-safe JavaScript.
**Next.js and React:** Core framework and library for building dynamic web applications.
**Tailwind CSS:** Utility-first CSS framework for fast, responsive styling.

Thank you for checking out my portfolio!

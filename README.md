# 🧩 White Label Structure

This project showcases a modular frontend architecture built with **Nuxt**, enabling dynamic configuration and runtime flexibility to support **white-label products**.

## ✨ Features

- ✅ **Custom Website Identity**
  - Dynamic favicon and page title
- ✅ **SEO Configuration**
  - Dynamic meta tags
  - Configurable `robots.txt`
- ✅ **Theming System**
  - Easily configurable via API

## 📂 Folder Structure

```plaintext
/apps
  ├── admin-core
  │   └── nuxt runtime (pages, components, layouts)
  ├── client-admin
  │   └── nuxt runtime (pages, components, layouts)
  ├── client-customer
  │   └── nuxt runtime (pages, components, layouts)
  └── other apps...
/modules
  ├── payment
  │   ├── api (handle api calls)
  │   ├── logic (handle business logic)
  │   └── types.ts
  ├── assessment
  │   ├── api (handle api calls)
  │   ├── logic (handle business logic)
  │   └── types.ts
  └── other modules...
/shared
  ├── ui (shared ui components (e.g., buttons, modals, etc.))
  ├── validation (shared validation logic (e.g., email validation, etc.))
  ├── config (shared configuration files (e.g., environment variables, etc.))
  ├── types (shared general types (e.g., config, etc.))
  └── utils (shared utils (e.g., date formatting, etc.))
.package.json
pnpm-workspace.yaml
```

The `apps` directory contains the core applications, which are built using Nuxt. Each application is responsible for its own UI and user experience.

The `modules` directory contains the core logic and functionality of the application. Each module is designed to be UI agnostic, meaning it can be used in any application, whether it's an admin interface or a customer-facing application.

The `shared` directory contains shared components, validation logic, configuration files, types, and utility functions that can be used across all applications and modules.

The `package.json` file at the root level contains the workspace configuration for pnpm, allowing for easy management of dependencies across all applications and modules.

## 🚀 Getting Started

### Prerequisites

- **Node.js** version **20 or higher**
- **pnpm** package manager ([Install pnpm](https://pnpm.io))

### Development Setup

1. Install dependencies:
  ```bash
   pnpm install
  ```
2. Start the development server:
  ```bash
   pnpm dev
  ```
3. Open your browser and navigate to:
  ```bash
   http://localhost:3000
  ```

## 📦 Building for Production

To generate the production build:

```bash
   pnpm build
```

## 🔍 Previewing the Build

To preview the production-ready build locally:

```bash
   pnpm preview
```

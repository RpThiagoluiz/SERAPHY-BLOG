# Seraphy Blog

A modern blog application built with React, featuring post listing, search, filtering, and detailed post views.

**Live:** [https://seraphy-blog-g06mrgcrk-thiago-luiz-gonalves-projects.vercel.app/](https://seraphy-blog-g06mrgcrk-thiago-luiz-gonalves-projects.vercel.app/)

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** – Build tool
- **React Router** – Client-side routing
- **TanStack React Query** – Server state management
- **Styled Components** – Styling
- **Axios** – HTTP client

## Prerequisites

- Node.js 20+
- npm

## Running Locally

### Option 1: npm (recommended for development)

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file based on the example:

```bash
cp .env.example .env
```

3. Set your API URL in `.env`:

```
VITE_API_URL=https://tech-test-backend.dwsbrazil.io
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at **http://localhost:5173**

### Option 2: Docker (Recommended)

To run the application with Docker:

```bash
docker compose up -d --build
```

The application will be available at **http://localhost:5173**

## Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm run test`    | Run tests                        |
| `npm run format`  | Format code with Prettier        |

## Why React Query?

We use **TanStack React Query** (formerly React Query) for server state management because it provides:

- **Automatic caching** – Reduces redundant API calls and improves performance
- **Background refetching** – Keeps data fresh without manual refresh
- **Loading and error states** – Built-in handling for async operations
- **Optimistic updates** – Better UX when mutating data
- **DevTools** – Easy debugging of cache and request states

This allows us to focus on UI logic while React Query handles fetching, caching, and synchronization with the server.

## Design System

See [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) for component documentation and visual guidelines.

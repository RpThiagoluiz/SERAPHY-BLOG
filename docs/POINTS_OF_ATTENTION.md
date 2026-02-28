# Points of Attention

---

## Views

- **Feed**: Post listing (consuming `/posts`).
- **Detail**: Post detail page (consuming `/posts/{id}`).
- **Mobile-First**: Styling must prioritize small screens before Desktop.
- **No UI Frameworks**: Tailwind, Material UI, and Bootstrap are not allowed. Focus on your own CSS with Styled Components.
- **Performance**: Use React Query to avoid unnecessary fetches when navigating between Home and Details.

---

## Project Kickoff

- [ ] Error handling when the backend is offline
- [ ] Check Mobile First Every Time

---

## 📌 Library Stack (Defined)

- **Core**: React (Vite) + TypeScript
- **Styling**: styled-components (Focus on Mobile-First and Pixel Perfect)
- **Data Fetching**: axios + @tanstack/react-query (Cache management and loading/error states)
- **State Management**: Context API (For user interactions and lightweight global state)
- **Tests**: Vitest + React Testing Library
- **Quality**: ESLint + Prettier + Husky (maybe sonar)
- **Infra**: Docker (Dockerfile + Docker Compose)

---

## 🐳 Docker & Scripts (Quick Commands)

In your Dockerfile, make sure to expose the correct port (usually 5173 for Vite).

- **Run App**: `npm run dev` or `docker-compose up`
- **Run Tests**: `npm run test`
- **Lint**: `npm run lint`

---

## 🎯 Evaluation Criteria (What Not to Forget)

- **Accessibility**: Use semantic tags (`<article>`, `<main>`, `<nav>`).
- **Visual Fidelity**: The layout must be "Pixel Perfect".
- **State**: Mastery of Hooks (`useEffect`, `useState`, `useContext`).
- **README**: Must contain instructions on how to run the Docker container and run the project.

---

## Related Documentation

- [APIs](APIs.MD) — API endpoints and base URL
- [Architecture](ARCHITECTURE.md) — Suggested modular project structure

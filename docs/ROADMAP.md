# Seraphy Blog — Development Roadmap

---

## Phase 1: Foundation & Infrastructure (The "Construction Site")

Before creating the first component, the house needs a solid foundation.

- **Vite + TS Setup**: Initialize the project and remove unnecessary Vite boilerplate.
- **Quality Configuration**: Install and configure ESLint, Prettier and husky to ensure clean code from the start.
- **Dockerization**: Create the Dockerfile and docker-compose.yml.
  - _Why now?_ To ensure anyone who runs your project sees exactly what you see, without local node_modules issues.
- **Theme & Global Styles**: Create the styled-components theme file (colors, design fonts, breakpoints for mobile-first).
- **Ui Components**: Create with styled-components some components for initialize integrate (Button, Filter,Icon, Sort, Card, Header, Footer, etc).

---

## Phase 2: Service Layer & Data (The "Intelligence")

Define how data flows in before deciding how it appears.

- **Axios Instance**: Configure the DWS API baseURL.
- **Types/Interfaces**: Create TypeScript interfaces for Post, Author, and Category based on the endpoints.
- **React Query Setup**: Configure the QueryClientProvider in App.tsx.
- **Custom Hooks (Data)**: Create the `usePosts()` and `usePost(id)` hooks using React Query. This separates data-fetching logic from the UI.

---

## Phase 3: Route Structure & Layout (The "Skeleton")

Map out the navigation.

- **React Router**: Configure the main routes:
  - `/` — Post Feed
  - `/post/:id` — Post Details
- **Layout Component**: Create a Layout component (Header/Footer) that wraps the pages to avoid code repetition.

---

## Phase 4: UI Development — Mobile First (The "Body")

Focus on the requested "Pixel Perfect" implementation.

- **Atomic Components**: Buttons, Category Badges, Author Avatars.
- **Feed Page (Home)**:
  - Implement the card list.
  - Focus on Mobile first. Then use Media Queries for Desktop.
- **Details Page**: Display the full content, author, and related categories.
- **State Management (Context API)**: Implement state for interactions (e.g., category filter, favorites, or reading history).

---

## Phase 5: Testing & Refinement (The "Finishing Touches")

Where you earn the bonus points.

- **Unit Tests (Vitest)**: Create tests for the most critical components (e.g., Post Card or Header).
- **Accessibility (A11y)**: Review that tags are semantic and images have alt text.
- **Performance Check**: Verify that React Query is correctly caching authors and categories to avoid multiple requests.
- **Final README**: Document how to run the project via Docker and explain the technical decisions (why Styled Components? why React Query?).

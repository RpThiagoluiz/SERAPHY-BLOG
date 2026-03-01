# Suggested Architecture (Modular)

Clean organization to demonstrate seniority in "Code Organization".

---

```
src/
├── @types/      # Interface definitions (Post, Author, Category)
├── api/         # Data layer: isolated config, services with react-query
│   ├── axios.config.ts   # Isolated Axios instance (baseURL, timeout, headers)
│   ├── queryClient.ts   # React Query configuration
│   ├── constants/       # Query keys per domain (queryKeys.ts)
│   ├── types/           # API-specific types (post.types.ts, etc.)
│   └── services/        # Services with useQuery/useMutation (post.service.ts)
├── assets/      # Images, icons, and fonts
├── components/  # Reusable components (Button, Card, Header)
├── context/     # Context API providers
├── hooks/       # Custom hooks that consume the services (usePosts, useAuthor)
├── pages/       # Main views (Home/Feed and PostDetail)
│   ├── Home/
│   │   └── index.tsx
│   └── PostDetail/
│       └── index.tsx
├── routes.tsx   # Register page routers
└── App.tsx
├── styles/      # styled-components base
│   ├── theme.ts         # Design tokens (colors, typography, spacing, breakpoints)
│   ├── themeColors.ts   # Color helper with autocomplete (themeColors, getThemeColor)
│   ├── mediaBreakPoints.ts  # Breakpoint values
│   ├── media.ts         # Mobile-first media queries
│   ├── global.ts       # GlobalStyle (reset, base typography)
│   └── index.ts        # Barrel exports
└── utils/       # Helper functions and formatters
```

### `api/` layer flow

1. **`axios.config.ts`** — Isolated Axios instance configuration (baseURL, timeout, headers). Services import this instance to make requests.

2. **`services/`** — Each service (e.g. `post.service.ts`) encapsulates API calls using **React Query** (`useQuery`, `useMutation`). Each folder/file is responsible for an application domain.

3. **`hooks/`** — Custom hooks consume the services. The hook exposes `data`, `isLoading`, `error` etc. to components, keeping data logic separate from UI.

4. **`constants/`** — Centralized query keys per domain for React Query cache and invalidation.

5. **`types/`** — API-specific types and interfaces, separate from global `@types`.

# Suggested Architecture (Modular)

Clean organization to demonstrate seniority in "Code Organization".

---

```
src/
├── @types/      # Interface definitions (Post, Author, Category)
├── assets/      # Images, icons, and fonts
├── components/  # Reusable components (Button, Card, Header)
├── context/     # Context API providers
├── hooks/       # Custom hooks (e.g., usePosts, useAuthor)
├── pages/       # Main views (Home/Feed and PostDetail)
│   ├── Home/
│   │   └── index.tsx
│   └── PostDetail/
│       └── index.tsx
├── routes.tsx   # Register page routers
└── App.tsx
├── services/    # Axios configuration and API calls
├── styles/      # styled-components base
│   ├── theme.ts         # Design tokens (colors, typography, spacing, breakpoints)
│   ├── themeColors.ts   # Color helper with autocomplete (themeColors, getThemeColor)
│   ├── mediaBreakPoints.ts  # Breakpoint values
│   ├── media.ts         # Mobile-first media queries
│   ├── global.ts       # GlobalStyle (reset, base typography)
│   └── index.ts        # Barrel exports
└── utils/       # Helper functions and formatters
```

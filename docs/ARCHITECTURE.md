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
├── services/    # Axios configuration and API calls
├── styles/      # GlobalStyles and Theme (color/spacing variables)
└── utils/       # Helper functions and formatters
```

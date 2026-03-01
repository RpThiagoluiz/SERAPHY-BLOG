# API Endpoints

**Base URL:** `VITE_API_URL` (default: `https://test_test.com`)

---

| Resource        | Endpoint               | Description                    |
| --------------- | ---------------------- | ------------------------------ |
| Posts           | `GET /posts`           | List all posts                 |
| Post Detail     | `GET /posts/{id}`      | Details of a specific post     |
| Authors         | `GET /authors`         | List all authors               |
| Author Detail   | `GET /authors/{id}`    | Details of a specific author   |
| Categories      | `GET /categories`      | List all categories            |
| Category Detail | `GET /categories/{id}` | Details of a specific category |

---

## Response handling

The API may not always return data in the expected format. Services use type guards to safely parse responses and return empty arrays or `null` when the response is invalid.

# Project Architecture

ContentGen is an enterprise AI content generation SaaS platform built as a pnpm monorepo.

## Tech Stack

### Frontend

- Next.js 15 (App Router, Turbopack)
- React 19 + TypeScript (strict)
- TailwindCSS v4 + Compact Design System (CDS) tokens
- Zustand (global state) + React Context (auth, theme)
- Radix UI + custom ui/ components
- Tiptap v3 (rich text editor)
- Framer Motion (animations)
- Axios (HTTP client)

### Backend

- Node.js >= 18 + TypeScript
- Express.js microservices
- Prisma ORM (PostgreSQL)
- Kafka (messaging)
- Redis / ioredis (caching)
- Winston (logging)

### Shared

- @contentgen/shared package (types, constants, validations, utils)

---

## Architecture Pattern

Monorepo with 3 layers:

```
frontend/ → Next.js App Router (SSR + client components)
    ↕ Axios HTTP
backend/services/gateway/ → API Gateway (auth, routing, rate limiting)
    ↕ Internal HTTP
backend/services/* → Microservices (user, content, brand, pitchdeck, assets, kafka, social-publisher, video-editor)
    ↕ Prisma
backend/database/ → PostgreSQL (Prisma ORM)
```

---

## Backend Microservices

| Service          | Port | Purpose                         |
| ---------------- | ---- | ------------------------------- |
| gateway          | 4000 | API Gateway, auth, routing      |
| user             | 4001 | User management, teams, roles   |
| content          | 4002 | Content generation & management |
| brand            | 4003 | Brand management                |
| pitchdeck        | 4004 | Pitch deck builder              |
| assets           | 4005 | File/image management           |
| kafka            | 4006 | Event messaging                 |
| social-publisher | 4007 | Social media publishing         |
| video-editor     | 4008 | Video editing                   |

---

## Data Flow

```
UI Component → Custom Hook → API function (lib/api/) → Axios → Gateway → Microservice → Prisma → DB
```

---

## Service Internal Pattern

Each microservice follows:

```
src/
  config/        → Environment and service config
  middleware/    → Express middleware (auth, validation, error handling)
  routes/        → Route handlers organized by resource
  services/      → Business logic layer
  utils/         → Utility functions
  validators/    → Request validation (Zod / express-validator)
  jobs/          → Background job processing
  di-container.ts → Dependency injection setup
  index.ts       → Service entry point
```

---

## Frontend Pattern

```
src/
  app/           → Next.js App Router pages (route groups, layouts)
  components/    → Feature-based component directories
  components/ui/ → Shared Radix UI-based components
  hooks/         → Custom React hooks
  lib/api/       → API client functions
  lib/store.ts   → Zustand global store
  contexts/      → React context providers
  types/         → TypeScript type definitions
  utils/         → Utility functions
```

---

## Key Rules

1. API logic must never exist inside components — use lib/api/ functions
2. Components must be feature-based and composable
3. Shared/reusable components go in components/ui/
4. Business logic goes in hooks or lib/ — not in components
5. Each microservice is independently deployable
6. Gateway handles all external auth and routing
7. Use @contentgen/shared for cross-boundary types
8. All API errors handled centrally via api-error-handler.ts

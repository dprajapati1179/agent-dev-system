# Coding Guidelines

## Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router) with Turbopack
- **Language**: TypeScript (strict mode)
- **React**: v19
- **Styling**: TailwindCSS v4 with custom Compact Design System (CDS) tokens
- **State Management**: Zustand (global), React Context (auth, theme)
- **UI Components**: Radix UI primitives + custom `ui/` components
- **Rich Text Editor**: Tiptap v3
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Testing**: Jest + React Testing Library

### Backend

- **Runtime**: Node.js >= 18
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: Microservices (gateway, user, content, brand, pitchdeck, assets, kafka, social-publisher, video-editor)
- **Database**: Prisma ORM (PostgreSQL)
- **Messaging**: Kafka
- **Caching**: Redis / ioredis
- **Validation**: Zod + express-validator
- **Logging**: Winston
- **API Docs**: Swagger (swagger-ui-express)
- **Testing**: Jest + ts-jest

### Shared

- `@contentgen/shared` package for shared types, constants, validations, and utilities

### Package Manager

- **pnpm** (workspace monorepo via `pnpm-workspace.yaml`)

---

## Code Style

### Formatting (Prettier)

- Semicolons: **always**
- Quotes: **single quotes**
- Trailing commas: **es5**
- Print width: **100 characters**
- Tab width: **2 spaces** (no tabs)
- Arrow parens: **always**
- Bracket spacing: **true**
- End of line: **lf**

### Linting (ESLint)

- Extends: `eslint:recommended`, `@typescript-eslint/recommended`, `prettier`
- `@typescript-eslint/no-unused-vars`: error (ignore args starting with `_`)
- `@typescript-eslint/no-explicit-any`: warn
- `@typescript-eslint/explicit-function-return-type`: off
- Ignore patterns: `node_modules/`, `dist/`, `build/`, `.next/`, `coverage/`

---

## Conventions

### File Naming

- **Components**: PascalCase (`ContentEditor.tsx`, `BrandCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAutoSave.ts`, `useContentAI.ts`)
- **Utilities**: camelCase (`api-error-handler.ts`, `navigation-utils.ts`)
- **Types**: camelCase (`drafts.ts`, `health.ts`)
- **API files**: camelCase (`content-api.ts`, `brand-api.ts`)

### Imports

- Use `@/*` path alias for frontend imports (maps to `./src/*`)
- Use relative imports within the same module
- Import shared package as `@contentgen/shared`

### Component Structure

- One component per file
- Place in feature-based directories under `components/`
- Shared/reusable components go in `components/ui/`
- Keep components focused and composable

### Hooks

- Custom hooks live in `src/hooks/`
- Feature-specific hooks in subdirectories (`hooks/pitchdeck/`)
- Prefix with `use` (e.g., `useLocalStorage`, `useAutoSave`)

### API Layer

- API functions live in `src/lib/api/`
- Use Axios for HTTP requests
- Centralized error handling via `api-error-handler.ts`

### Backend Services

- Each microservice follows: `src/` → `config/`, `middleware/`, `routes/`, `services/`, `utils/`, `validators/`
- DI container pattern (`di-container.ts`)
- Routes organized by resource

---

## Git & CI

- **Husky**: pre-commit hooks with lint-staged
- **Lint-staged**: runs linting/formatting on staged files
- **Versioning**: standard-version (semver)
- **Branch validation**: validate-branch-name

---

## Commands

| Action        | Command                     |
| ------------- | --------------------------- |
| Dev (all)     | `pnpm dev` or `npm run dev` |
| Frontend only | `pnpm run df`               |
| Gateway only  | `pnpm run dg`               |
| Build         | `pnpm run build`            |
| Lint          | `pnpm run lint`             |
| Format        | `pnpm run format`           |
| Test          | `pnpm run test`             |
| DB Migrate    | `pnpm run db:migrate`       |
| DB Seed       | `pnpm run db:seed`          |
| DB Studio     | `pnpm run dbs`              |

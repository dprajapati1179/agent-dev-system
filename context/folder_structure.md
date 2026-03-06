# Folder Structure

## Root (Monorepo)

```
content_gen/
├── frontend/                    # Next.js 15 frontend app
├── backend/                     # Backend microservices
│   ├── database/                # Prisma schema, migrations, seeds
│   ├── services/                # Microservices
│   ├── shared/                  # Backend shared utilities
│   └── tests/                   # Backend tests
├── shared/                      # @contentgen/shared package (types, constants, validations)
├── docs/                        # Project documentation
├── agent-dev-system/            # AI agent orchestration system
├── package.json                 # Root workspace config
├── pnpm-workspace.yaml          # pnpm workspace definition
├── .eslintrc.json               # Root ESLint config
├── .prettierrc.json             # Prettier config
└── .husky/                      # Git hooks
```

---

## Frontend (`frontend/`)

```
frontend/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── (app)/               # Main authenticated app routes
│   │   ├── auth/                # Login/signup pages
│   │   ├── api/                 # API routes (Next.js)
│   │   ├── onboarding/          # Onboarding flow
│   │   ├── present/             # Presentation viewer
│   │   ├── view/                # Public content view
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Landing page
│   │   ├── globals.css          # Global styles & CSS variables
│   │   ├── robots.ts            # SEO robots config
│   │   └── sitemap.ts           # SEO sitemap
│   │
│   ├── components/              # React components
│   │   ├── ui/                  # Base UI components (44 files)
│   │   ├── layout/              # Layout components (sidebar, header)
│   │   ├── navigation/          # Navigation components
│   │   ├── auth/                # Auth forms, guards
│   │   ├── dashboard/           # Dashboard widgets
│   │   ├── content/             # Content management
│   │   ├── content-create/      # Content creation flow
│   │   ├── content-planner/     # Content planning (86 files)
│   │   ├── content-editor/      # Content editor
│   │   ├── editor/              # Rich text editor (Tiptap)
│   │   ├── brands/              # Brand management
│   │   ├── pitchdeck/           # Pitch deck builder
│   │   ├── video-generator/     # Video generation
│   │   ├── video-management/    # Video management
│   │   ├── assets/              # Asset management
│   │   ├── admin/               # Admin panel
│   │   ├── super-admin/         # Super admin panel
│   │   ├── subscription/        # Subscription/billing
│   │   ├── onboarding/          # Onboarding components
│   │   ├── toast/               # Toast notification system
│   │   ├── prompts/             # Prompt management
│   │   ├── health/              # System health monitoring
│   │   └── ...                  # Other feature components
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAutoSave.ts
│   │   ├── useContentAI.ts
│   │   ├── useContentStream.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useNotifications.ts
│   │   ├── useSidebarState.ts
│   │   ├── pitchdeck/           # Pitchdeck-specific hooks
│   │   └── ...
│   │
│   ├── lib/                     # Libraries & utilities
│   │   ├── api/                 # API client functions (20 files)
│   │   ├── auth-context.tsx     # Auth context provider
│   │   ├── store.ts             # Zustand store
│   │   ├── config.ts            # App configuration
│   │   ├── permissions.ts       # Permission utilities
│   │   ├── featureFlags.ts      # Feature flag management
│   │   ├── api-error-handler.ts # Centralized error handling
│   │   └── ...
│   │
│   ├── contexts/                # React context providers
│   ├── services/                # Frontend service layer
│   ├── types/                   # TypeScript type definitions
│   ├── utils/                   # Utility functions
│   └── config/                  # Configuration files
│
├── public/                      # Static assets
├── tests/                       # Frontend tests
├── tailwind.config.js           # Tailwind CSS config
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
└── package.json
```

---

## Backend (`backend/`)

### Services

```
backend/services/
├── gateway/         # API Gateway (routes, middleware, auth)
├── user/            # User management service
├── content/         # Content generation & management
├── brand/           # Brand management service
├── pitchdeck/       # Pitch deck service
├── assets/          # Asset management (images, files)
├── kafka/           # Kafka messaging service
├── social-publisher/# Social media publishing
└── video-editor/    # Video editing service
```

### Service Internal Structure (each service)

```
service-name/
├── src/
│   ├── config/          # Service configuration
│   ├── middleware/       # Express middleware
│   ├── routes/          # API route handlers
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── validators/      # Request validation
│   ├── jobs/            # Background jobs
│   ├── metrics/         # Monitoring metrics
│   ├── di-container.ts  # Dependency injection
│   └── index.ts         # Entry point
├── tests/               # Service tests
├── package.json
└── tsconfig.json
```

### Database

```
backend/database/
├── prisma/
│   └── schema.prisma    # Database schema
├── seeds/               # Seed data
├── scripts/             # DB scripts
├── index.ts             # DB client export
└── seed.js              # Main seed runner
```

---

## Shared Package (`shared/`)

```
shared/
├── src/                 # Source code
├── agents/              # AI agent definitions
├── constants/           # Shared constants
├── types/               # Shared TypeScript types
├── utils/               # Shared utilities
├── validations/         # Shared validation schemas
├── docs/                # Documentation
├── index.ts             # Package entry
└── package.json
```

---

## Key Config Files

| File                  | Purpose                     |
| --------------------- | --------------------------- |
| `pnpm-workspace.yaml` | Defines monorepo workspaces |
| `.eslintrc.json`      | Root ESLint configuration   |
| `.prettierrc.json`    | Code formatting rules       |
| `.lintstagedrc.json`  | Lint-staged config          |
| `tailwind.config.js`  | Tailwind CSS + CDS tokens   |
| `next.config.ts`      | Next.js configuration       |
| `dev-starter.js`      | Custom dev server launcher  |
| `build-scripts.js`    | Custom build scripts        |

# Developer Agent

## Role

Implement code changes in the ContentGen platform.

## Before Writing Code

Read these context files:

- context/coding_standards.md
- context/ui_guidelines.md
- context/folder_structure.md
- context/architecture.md

## Frontend Rules

- Framework: Next.js 15 App Router (frontend/src/app/)
- Components: Place in frontend/src/components/{feature}/
- Shared UI: Use Radix UI primitives from frontend/src/components/ui/
- Hooks: Place in frontend/src/hooks/
- API calls: Place in frontend/src/lib/api/
- State: Use Zustand (lib/store.ts) or React Context (contexts/)
- Styling: TailwindCSS v4 with CDS tokens
- Icons: Lucide React
- Animations: Framer Motion
- Imports: Use @/\* path alias
- Forms: React Hook Form + Zod

## Backend Rules

- Services: backend/services/{service-name}/src/
- Routes: src/routes/ organized by resource
- Business logic: src/services/
- Validation: Zod + express-validator in src/validators/
- Shared types: Import from @contentgen/shared

## Tools

- File editor
- Terminal (pnpm run dev, pnpm run build)
- Git

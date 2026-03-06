# Feature Workflow

1. Orchestrator receives feature request from user

2. Research Agent scans codebase:
   - Search frontend/src/components/ for related components
   - Search backend/services/ for related endpoints
   - Check backend/database/prisma/schema.prisma for data models
   - Check shared/src/ for existing types

3. Planner Agent creates task breakdown:
   - Database changes (if needed)
   - Backend API routes and services
   - Shared types and constants
   - Frontend API functions in lib/api/
   - Frontend components and hooks
   - Write tasks to memory/active_tasks.md

4. Task Manager assigns tasks with status: Pending

5. Developer Agent implements code:
   - Follow context/coding_standards.md
   - Follow context/ui_guidelines.md
   - Place files per context/folder_structure.md

6. Reviewer Agent checks:
   - Code quality and architecture
   - Naming conventions
   - Import patterns (@/\* alias, @contentgen/shared)

7. Tester Agent validates:
   - Run: pnpm run build (must pass)
   - Run: pnpm run lint (must pass)
   - Run: pnpm run test (must pass)

8. Documentation Agent updates relevant docs

9. Orchestrator asks user: "Feature complete. Commit and push?"

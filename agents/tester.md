# Tester Agent

## Role

Validate that code changes work correctly in the ContentGen platform.

## Test Commands

| Action         | Command                         | Directory |
| -------------- | ------------------------------- | --------- |
| All tests      | `pnpm run test`                 | Root      |
| Frontend tests | `pnpm run test:frontend`        | Root      |
| Backend tests  | `pnpm run test:backend`         | Root      |
| Frontend build | `cd frontend && pnpm run build` | frontend/ |
| Lint all       | `pnpm run lint`                 | Root      |
| Type check     | `pnpm run type-check`           | Root      |

## Test Framework

- Frontend: Jest + React Testing Library (frontend/tests/)
- Backend: Jest + ts-jest (backend/tests/)

## Validation Steps

1. Run `pnpm run build` (frontend) — must compile without errors
2. Run `pnpm run lint` — must pass without errors
3. Run `pnpm run test` — all tests must pass
4. Check dev server runs without crashes (pnpm run dev)

## If Tests Fail

- Report failing test name and error message
- Identify the file causing the failure
- Send to error_handler agent for analysis

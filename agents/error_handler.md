# Error Handler Agent

## Role

Debug and fix issues in the ContentGen platform.

## Responsibilities

- Read error logs and stack traces
- Identify the failing file and line
- Analyze root cause
- Apply fix or suggest solution

## Common Error Sources

### Frontend

- Build errors: `frontend/.next/` build output, check `next.config.ts`
- Type errors: Run `pnpm run type-check:frontend`
- Component errors: Check imports use `@/*` alias
- API errors: Check `frontend/src/lib/api-error-handler.ts`

### Backend

- Service crash: Check logs in `backend/services/{service}/logs/`
- Database errors: Check `backend/database/prisma/schema.prisma`
- Route errors: Check middleware chain in service `src/middleware/`
- Validation errors: Check `src/validators/` in the service

## Debug Steps

1. Read the error message and stack trace
2. Identify affected file path
3. Check context/architecture.md for where the file fits
4. Read the file and surrounding code
5. Apply fix
6. Run tests to verify: `pnpm run test`
7. Run build to confirm: `cd frontend && pnpm run build`

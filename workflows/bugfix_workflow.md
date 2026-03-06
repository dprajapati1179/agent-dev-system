# Bug Fix Workflow

Step 1: Research Agent identifies the bug

- Read error message or bug report
- Search codebase for related files
- Check recent changes that may have caused the issue
- Identify frontend vs backend scope

Step 2: Planner Agent creates fix plan

- Identify root cause file(s)
- Define minimal changes needed
- Write fix tasks to memory/active_tasks.md

Step 3: Developer Agent applies fix

- Modify files following context/coding_standards.md
- Keep changes minimal and focused
- Do not introduce unrelated changes

Step 4: Reviewer Agent checks fix

- Verify fix addresses root cause
- Check for regressions
- Verify no unintended side effects

Step 5: Tester Agent validates

- Run: pnpm run build
- Run: pnpm run lint
- Run: pnpm run test
- Verify the bug is resolved

Step 6: Orchestrator asks user

- "Bug fix complete. Commit and push?"
- Use commit format: fix: {description of bug}

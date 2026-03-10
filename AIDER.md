# Aider CLI Bootstrap

This file makes Aider CLI load the reusable `agent-dev-system` for this project.

## Required behavior

- If the user says `Hey dev co pilot`, `Hello dev co pilot`, `Hi dev co pilot`, `dev co pilot`, or `Hey agent`, respond according to the imported **Universal Agent System** instructions.
- Treat `agent.md` as the main orchestration prompt.
- Use the imported sub-agent files as role definitions.
- Keep all user-facing coordination in the Universal Agent voice unless the user explicitly asks for raw sub-agent output.
- Once Universal Agent mode is activated, keep all follow-up messages in Universal Agent mode until the user explicitly exits.

## Follow-up task handling

After `Hey dev co pilot`, any natural follow-up request such as `implement test feature`, `add dark mode`, or `review auth flow` must be treated as a Universal Agent-owned task input.

Do not require the user to say `Hey dev co pilot` again within the same session.

## Mandatory file updates

When Universal Agent mode is active, keep these files current:

- `memory/active_tasks.md` 
- `memory/workflow_status.md` 
- `memory/task_progress.md` (append on task completion)
- `memory/implementation_log.md` (append on task completion)
- `docs/agent-runs/<task-slug>.md` for non-trivial work

## Active project context

@./agent.md
@./WORKFLOW_SYSTEM.md
@./IDENTITY.md
@./agents/developer.md
@./agents/planner.md
@./agents/research.md
@./agents/reviewer.md
@./agents/tester.md
@./agents/documentation.md
@./agents/error_handler.md
@./agents/orchestrator.md
@./context/architecture.md
@./context/coding_standards.md
@./context/folder_structure.md
@./context/ui_guidelines.md

## First-message expectation

When the user types `Hey dev co pilot`, greet them and ask what they want to build, fix, review, or plan.

Immediately initialize the universal agent system, then route the next task message through the Universal Agent workflow.

## Trigger phrase detection

The system will automatically activate when any of these phrases are detected:

- `Hey dev co pilot`
- `Hello dev co pilot`
- `Hi dev co pilot`
- `dev co pilot`
- `Hey agent`
- `Hello agent`
- `Hi agent`

## Workflow enforcement

Once activated, the system enforces the complete 7-phase workflow:

1. **Requirements Gathering** - One-on-one clarification session
2. **Planning & Task Breakdown** - Detailed implementation plan
3. **Implementation** - Code execution following standards
4. **Code Review** - Quality assurance and compliance
5. **Testing** - Comprehensive testing and validation
6. **QA & Error Resolution** - Final quality checks
7. **Documentation** - Complete documentation of work done

## Session persistence

The Universal Agent mode remains active for the entire session once activated, providing consistent behavior across all subsequent requests without requiring re-activation.

## Aider-specific optimizations

- Git integration and commit management
- Enhanced file editing capabilities
- Better diff handling and review
- Streamlined code modification workflow

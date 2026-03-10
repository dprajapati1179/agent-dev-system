# CLI Bootstrap Guide

This directory contains bootstrap files for various AI CLI tools to load the `agent-dev-system`.

## Available Bootstrap Files

| CLI Tool | Bootstrap File | Usage |
|----------|----------------|-------|
| **Gemini** | `GEMINI.md` | `gemini "please read @./GEMINI.md and follow its instructions"` |
| **Claude** | `CLAUDE.md` | `claude "please read @./CLAUDE.md and follow its instructions"` |
| **Kilo** | `KILO.md` | `kilo "please read @./KILO.md and follow its instructions"` |
| **Windsurf** | `WINDSURF.md` | `windsurf "please read @./WINDSURF.md and follow its instructions"` |
| **Cursor** | `CURSOR.md` | `cursor "please read @./CURSOR.md and follow its instructions"` |
| **Aider** | `AIDER.md` | `aider "please read @./AIDER.md and follow its instructions"` |
| **Antigravity** | `ANTIGRAVITY.md` | `antigravity "please read @./ANTIGRAVITY.md and follow its instructions"` |
| **Universal** | `UNIVERSAL.md` | `[any-cli] "please read @./UNIVERSAL.md and follow its instructions"` |

## How to Use

### Step 1: Choose Your CLI Tool
Select the bootstrap file that matches your AI CLI tool.

### Step 2: Load the Agent System
Run your CLI tool with the appropriate bootstrap command:

```bash
# Example for Claude
claude "please read @./CLAUDE.md and follow its instructions"

# Example for Gemini
gemini "please read @./GEMINI.md and follow its instructions"

# Example for any other CLI
[cli-name] "please read @./UNIVERSAL.md and follow its instructions"
```

### Step 3: Activate with Trigger Phrase
Once loaded, activate the agent system by saying:
- `Hey dev co pilot`
- `Hello dev co pilot`
- `Hi dev co pilot`
- `dev co pilot`
- `Hey agent`

### Step 4: Follow the Workflow
The agent will automatically start the 7-phase structured workflow:
1. Requirements Gathering
2. Planning & Task Breakdown
3. Implementation
4. Code Review
5. Testing
6. QA & Error Resolution
7. Documentation

## Features

### Universal Trigger Phrases
All bootstrap files respond to the same trigger phrases for consistency.

### Session Persistence
Once activated, the agent system stays active for the entire session.

### Complete Workflow Enforcement
All 7 phases are automatically executed without manual intervention.

### CLI-Specific Optimizations
Each bootstrap file includes optimizations for its specific CLI tool:
- **Claude**: Enhanced code analysis and context management
- **Kilo**: Fast command execution and terminal integration
- **Windsurf**: IDE integration and workspace management
- **Cursor**: VS Code integration and debugging assistance
- **Aider**: Git integration and file editing
- **Antigravity**: Advanced code generation and refactoring

### Memory Tracking
All sessions track progress in:
- `memory/active_tasks.md`
- `memory/workflow_status.md`
- `memory/task_progress.md`
- `memory/implementation_log.md`

## Quick Start Examples

### For New Feature Development
```bash
claude "please read @./CLAUDE.md and follow its instructions"
# Then: "Hey dev co pilot, implement a user authentication system"
```

### For Bug Fixes
```bash
kilo "please read @./KILO.md and follow its instructions"
# Then: "Hey dev co pilot, fix the login page bug"
```

### For Code Review
```bash
cursor "please read @./CURSOR.md and follow its instructions"
# Then: "Hey dev co pilot, review the payment module"
```

## File Structure

```
agent-dev-system/
├── GEMINI.md          # Gemini CLI bootstrap
├── CLAUDE.md          # Claude CLI bootstrap
├── KILO.md            # Kilo CLI bootstrap
├── WINDSURF.md        # Windsurf CLI bootstrap
├── CURSOR.md          # Cursor CLI bootstrap
├── AIDER.md           # Aider CLI bootstrap
├── ANTIGRAVITY.md     # Antigravity CLI bootstrap
├── UNIVERSAL.md       # Universal bootstrap for any CLI
├── agent.md           # Main orchestration system
├── WORKFLOW_SYSTEM.md # Complete workflow definition
├── agents/            # Sub-agent definitions
├── context/           # Project context files
└── memory/            # Session tracking files
```

## Troubleshooting

### Agent System Not Activating
- Ensure you're using the correct bootstrap file for your CLI
- Check that the trigger phrase is spelled correctly
- Verify the agent-dev-system folder is in your project root

### Workflow Not Starting
- Make sure you've loaded the bootstrap file first
- Use one of the trigger phrases to activate
- Check that all required context files exist

### Memory Files Not Updating
- Verify the `memory/` directory exists
- Check file permissions
- Ensure the agent has write access

## Support

For issues or questions:
1. Check the bootstrap file for your CLI tool
2. Verify the agent system is properly loaded
3. Ensure all context files are present
4. Use the universal bootstrap as a fallback

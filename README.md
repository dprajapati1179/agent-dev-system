# Dev Co Pilot - CLI Helper Agent

A simple, non-self-driven helper agent that assists with development tasks in any project. Place this agent in your project directory and call it from your AI CLI tool to get help with tasks.

## What coding is Dev Co Pilot?

Dev Co Pilot is a **passive helper agent** that:
- Waits for your commands before taking action
- Is NOT self-driven or autonomous
- Works with any CLI tool (Claude, Gemini, etc.)
- Provides targeted assistance when invoked

## Installation

1. Copy the `agent-dev-system` folder to your project root
2. That's it - no configuration needed

## How to Use

Call the agent from your AI CLI tool:

```
"Hey Dev Co Pilot, please read @./agent-dev-system/agent.md and help me with..."
```

Or simply:
```
"Use the agent in agent-dev-system folder to help me"
```

## How It Works

1. **You invoke it** - Call the agent when you need help
2. **You specify the task** - Tell it what to do (fix bug, add feature, write tests, etc.)
3. **It executes** - Performs the requested task
4. **Done** - Waits for your next command

It does NOT:
- Start working on its own
- Make autonomous decisions
- Run in the background
- Self-activate on file changes

## Project Structure

```
agent-dev-system/
├── agent.md          # Main agent instructions
├── README.md         # This file
├── developer.md      # Code implementation tasks
├── documentation.md  # Documentation tasks
├── research.md       # Codebase analysis
├── planner.md        # Task planning
├── reviewer.md       # Code review
├── tester.md         # Testing tasks
├── error_handler.md  # Debugging
├── orchestrator.md   # Project coordination
└── context/          # Project context files
    ├── architecture.md
    ├── coding_standards.md
    └── folder_structure.md
```

## Requirements

Before the agent starts working, it will:
- Scan your project structure
- Detect project type and tech stack
- Read existing documentation (README, package.json, etc.)
- Understand the codebase context

## Commands

The agent can help with:
- Implementing new features
- Fixing bugs
- Writing tests
- Refactoring code
- Creating documentation
- Code reviews
- Debugging issues
- Researching codebase

## Notes

- This is a **helper agent**, not an autonomous system
- It only acts when explicitly invoked
- It respects your project's coding standards and architecture
- Always waits for your input before proceeding with tasks

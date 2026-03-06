# Agent Identity System

This system ensures the universal agent can be uniquely identified and called, even when multiple agent folders exist in a project.

## Unique Identification Methods

### 1. Explicit Name Reference
Call this agent by its unique name:
```
"Please use the 'universal-agent' system in this directory"
```

### 2. File-Based Detection
The agent can be identified by these unique files:
- `IDENTITY.md` (this file)
- `agent.md` (main entry point)
- `USAGE.md` (usage guide)

### 3. Folder Name Patterns
The agent system recognizes these folder names:
- `agent-dev-system` (default)
- `universal-agent` (alternative)
- `ai-agent-system` (alternative)
- `.universal-agent` (hidden version)

## Calling the Agent Specifically

### Method 1: Direct File Reference
```
"Please read the agent.md file in the agent-dev-system folder and follow its instructions"
```

### Method 2: Unique Identifier
```
"Use the universal-agent system to help me with this project"
```

### Method 3: Signature File
```
"Look for IDENTITY.md file and use that agent system"
```

### Method 4: Context-Based
```
"Use the agent system that has project_detector.md and init_system.md files"
```

## Priority Detection Order

When multiple agent folders exist, this system uses this priority:

1. **Explicit Reference** - User specifies folder name
2. **IDENTITY.md Presence** - Folder contains IDENTITY.md
3. **agent.md + USAGE.md** - Both signature files present
4. **Folder Name Match** - Matches known folder names
5. **File Count** - Most complete agent system

## Example Scenarios

### Multiple Agents Present
```
project/
├── .claude/                    # Claude's agent
├── .agent-orchestration/       # Another agent system
├── agent/                      # Generic agent folder
└── agent-dev-system/           # Our universal agent ← USE THIS
```

**Call it specifically:**
```
"Please use the agent-dev-system folder to help me"
```

### Hidden Version
```
project/
├── .claude/
├── .agent-orchestration/
└── .universal-agent/           # Hidden version ← USE THIS
```

**Call it specifically:**
```
"Use the .universal-agent system in this directory"
```

### Custom Name
```
project/
├── other-agents/
├── my-agent/                   # Custom name
└── agent-dev-system/           ← USE THIS
```

**Call it specifically:**
```
"Please read agent.md from the agent-dev-system folder"
```

## Enhanced Initialization Logic

The agent now includes this detection in its startup:

```python
def identify_agent_system():
    # 1. Check for explicit user reference
    if user_mentioned_folder:
        return specified_folder
    
    # 2. Look for IDENTITY.md files
    identity_folders = find_folders_with('IDENTITY.md')
    if len(identity_folders) == 1:
        return identity_folders[0]
    
    # 3. Look for signature file combinations
    complete_systems = find_folders_with(['agent.md', 'USAGE.md'])
    if len(complete_systems) == 1:
        return complete_systems[0]
    
    # 4. Check folder name patterns
    for pattern in ['agent-dev-system', 'universal-agent', '.universal-agent']:
        if folder_exists(pattern):
            return pattern
    
    # 5. Ask user for clarification
    return ask_user_which_agent()
```

## Usage Instructions Update

### When Multiple Agents Exist

**Be specific:**
```
"Use the agent-dev-system (the one with IDENTITY.md) to analyze my React app"
```

**Reference unique files:**
```
"Please read the agent.md file that has project_detector.md in the same folder"
```

**Use full path:**
```
"Use the agent system in ./agent-dev-system/ to help me"
```

## Conflict Resolution

If the agent detects multiple agent systems, it will:

1. **List all detected systems**
2. **Ask for user clarification**
3. **Remember user preference** for future calls

Example response:
```
I found multiple agent systems in this project:
- agent-dev-system/ (Universal Agent System)
- .claude/ (Claude Agent)
- .agent-orchestration/ (Orchestration Agent)

Which one would you like me to use? You can specify by name or I can use the universal-agent system by default.
```

## Best Practices

1. **Use explicit folder names** when multiple agents exist
2. **Reference unique files** to avoid confusion
3. **Keep one agent system** per project when possible
4. **Use hidden folders** (.) for background agents
5. **Rename folders** if conflicts occur

## Integration with AI CLI Tools

### Claude CLI
```bash
claude "Use the agent-dev-system folder specifically to help with my React app"
```

### Gemini CLI
```bash
gemini "Look for IDENTITY.md and use that agent system"
```

### ChatGPT CLI
```bash
chatgpt "Please read agent.md from the universal-agent system"
```

This ensures your universal agent can always be identified and used correctly, even in complex projects with multiple AI agent systems!

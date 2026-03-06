# Project Detection Guide

This guide helps you identify which projects are using this universal agent system.

## How to Detect Agent Usage

### 1. File-Based Detection

Look for these signature files in project directories:

**Core Files (Must Have):**
- `IDENTITY.md` - Unique identifier for this agent system
- `agent.md` - Main agent configuration
- `USAGE.md` - Usage instructions

**Supporting Files:**
- `project_detector.md` - Project type detection
- `init_system.md` - Startup sequence
- `README.md` - Updated with agent info

**Directory Structure:**
```
project/
├── agent-dev-system/          # Main folder
│   ├── IDENTITY.md            # ← Unique signature
│   ├── agent.md
│   ├── USAGE.md
│   ├── project_detector.md
│   ├── init_system.md
│   ├── agents/                # Specialized agents
│   ├── context/               # Project context
│   ├── memory/                # Task storage
│   └── workflows/             # Defined workflows
```

### 2. Search Commands

**Find all projects using this agent:**
```bash
# Search for IDENTITY.md (most reliable)
find /path/to/projects -name "IDENTITY.md" -type f

# Search for agent.md in agent-dev-system folders
find /path/to/projects -path "*/agent-dev-system/agent.md" -type f

# Search for the complete system
find /path/to/projects -name "agent-dev-system" -type d
```

**Check specific project:**
```bash
# Check if project has the agent system
ls -la /path/to/project/agent-dev-system/IDENTITY.md

# Verify all core files exist
ls /path/to/project/agent-dev-system/{IDENTITY,agent,USAGE}.md
```

### 3. Automated Detection Script

Create a script to scan multiple projects:

```bash
#!/bin/bash
# detect_agent_usage.sh

echo "Scanning for Universal Agent System usage..."
echo "=========================================="

# Search directories
SEARCH_DIRS="$HOME/projects $HOME/work $HOME/dev"

for dir in $SEARCH_DIRS; do
    if [ -d "$dir" ]; then
        echo "Scanning $dir..."
        find "$dir" -name "IDENTITY.md" -type f | while read file; do
            project_dir=$(dirname $(dirname "$file"))
            echo "✓ Found agent system in: $project_dir"
        done
    fi
done

echo "=========================================="
echo "Scan complete!"
```

### 4. Git Repository Detection

**Check if agent system is tracked in Git:**
```bash
# Check if agent files are in git
git ls-files | grep "agent-dev-system/IDENTITY.md"

# Check git history for agent additions
git log --name-only --grep="agent" --oneline

# Find commits that added agent system
git log --name-only --diff-filter=A -- **/IDENTITY.md
```

### 5. IDE Integration

**VS Code:**
```json
// .vscode/settings.json
{
    "files.associations": {
        "IDENTITY.md": "markdown",
        "agent.md": "markdown"
    },
    "search.exclude": {
        "**/agent-dev-system/agents": false
    }
}
```

**VS Code Workspace Search:**
- Press `Ctrl+Shift+F` (or `Cmd+Shift+F` on Mac)
- Search for `IDENTITY.md`
- Filter results to see all projects using the agent

### 6. Project Registry

Create a central registry to track agent usage:

```markdown
# Agent Usage Registry

## Projects Using Universal Agent System

| Project | Path | Version | Last Updated | Notes |
|---------|------|---------|-------------|-------|
| My React App | ~/projects/react-app | v1.0 | 2025-03-06 | Frontend only |
| API Backend | ~/projects/api | v1.0 | 2025-03-06 | Node.js backend |
| Full-Stack | ~/projects/fullstack | v1.0 | 2025-03-06 | MERN stack |
```

### 7. Version Detection

**Check agent version in projects:**
```bash
# Check version in README.md
grep -r "Universal Agent Development System" /path/to/projects/*/agent-dev-system/README.md

# Check for version tags
grep -r "version:" /path/to/projects/*/agent-dev-system/IDENTITY.md
```

### 8. Integration Markers

**Projects may add integration markers:**

In their main README.md:
```markdown
## AI Assistant

This project uses the Universal Agent Development System for AI-powered development assistance.

To use: "Please use the agent-dev-system folder to help me"
```

In package.json:
```json
{
  "agent-system": "universal-agent-v1.0",
  "agent-folder": "agent-dev-system"
}
```

### 9. Usage Patterns

**Common usage indicators:**
- Recent commits mentioning "agent" or "AI assistant"
- Documentation updates referencing the agent
- Configuration files for AI CLI tools
- Scripts or aliases that call the agent

### 10. Network/Team Detection

**For team environments:**
```bash
# Check shared repositories
git ls-remote --heads origin | grep -i agent

# Search team documentation
grep -r "agent-dev-system" /shared/docs/

# Check team wiki for agent usage
curl "https://company-wiki.com/search?q=agent-dev-system"
```

## Verification Checklist

To confirm a project is using this agent system:

- [ ] `IDENTITY.md` exists in agent folder
- [ ] `agent.md` contains universal agent instructions
- [ ] `USAGE.md` has AI CLI tool examples
- [ ] Folder structure matches expected pattern
- [ ] Main project README mentions agent usage
- [ ] Git history shows agent integration

## Reporting

**Generate usage report:**
```bash
#!/bin/bash
echo "Universal Agent System Usage Report"
echo "=================================="
echo "Generated: $(date)"
echo ""

find $HOME/projects -name "IDENTITY.md" -type f | while read identity; do
    project_dir=$(dirname $(dirname "$identity"))
    project_name=$(basename "$project_dir")
    
    echo "Project: $project_name"
    echo "Path: $project_dir"
    echo "Agent files: $(ls "$project_dir/agent-dev-system"/*.md | wc -l) files"
    echo "Last modified: $(stat -c %y "$identity")"
    echo ""
done
```

This system ensures you can always identify which projects are using your universal agent, even across large codebases or team environments.

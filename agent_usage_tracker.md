# Agent Usage Tracker

This system tracks and verifies when AI CLI tools use your agent system and ensures they follow the complete workflow.

## How to Verify Agent System Usage

### 1. Initial Response Verification

**✅ GOOD RESPONSE (Your agent system working):**
```
✦ I'm the Orchestrator Agent, and I'm here to help you with your Full-stack project.

I've analyzed your project and found:
- Technology: React, TypeScript, Node.js, Express.js, Prisma, pnpm
- Structure: Monorepo with a frontend, multiple backend microservices, and shared packages.
- Build system: pnpm workspaces, TypeScript compiler, and various build/dev scripts.

I can help you with:
- Implementing new features across the stack
- Fixing bugs in frontend or backend services
- Writing or updating documentation
- Managing and running tests
- Refactoring code

What would you like to work on today?
```

**❌ BAD RESPONSE (Agent system NOT working):**
```
I can help you update the UI/UX for your login page. Let me start by examining your current login component...
```

### 2. Workflow Enforcement Verification

The agent should now follow the structured workflow. For your request "Update ui/ux for login page", it should respond:

```
🔍 REQUIREMENTS GATHERING MODE ACTIVATED

Before we start implementing UI/UX updates for your login page, I need to thoroughly understand your requirements.

**Current Request**: Update ui/ux for login page
**Agent**: Workflow Enforcement Agent
**Mode**: Requirements Analysis

I'll ask clarifying questions to ensure I build exactly what you need.

Please provide:
1. **Objective**: What specific UI/UX improvements do you want?
2. **Scope**: Which aspects of the login page? (Layout, colors, animations, etc.)
3. **Users**: Who will use this login page?
4. **Constraints**: Any brand guidelines or design systems to follow?
5. **Success Criteria**: How will we know the UI/UX is improved?

Let's start with the objective - what specific UI/UX problems are you trying to solve with the current login page?
```

## Tracking System Implementation

### 1. Agent Activation Log

Create `logs/agent-activation.log`:
```
TIMESTAMP | PROJECT | AI_TOOL | AGENT_TYPE | REQUEST | STATUS
2025-03-06T14:52:00Z | content_gen | Gemini CLI | Orchestrator | Update ui/ux for login page | WORKFLOW_STARTED
```

### 2. Workflow Status Tracker

Update `memory/workflow_status.md`:
```
### Workflow: WF_20250306_145200_content_gen
**Project**: content_gen
**Request**: Update ui/ux for login page
**AI Tool**: Gemini CLI
**Started**: 2025-03-06T14:52:00Z
**Current Phase**: Requirements Gathering
**Status**: IN PROGRESS

**Phase History**:
1. **Requirements Gathering** - 🔄 IN PROGRESS - 2025-03-06T14:52:00Z
2. **Planning** - ⏳ PENDING
3. **Implementation** - ⏳ PENDING
4. **Code Review** - ⏳ PENDING
5. **Testing** - ⏳ PENDING
6. **QA** - ⏳ PENDING
7. **Documentation** - ⏳ PENDING

**Requirements Status**: Gathering UI/UX requirements for login page
**Next Milestone**: Requirements confirmation
```

### 3. Dashboard Integration

The dashboard should show:
- **Active Workflows**: 1 (content_gen - UI/UX Update)
- **Current Phase**: Requirements Gathering
- **AI Tool Used**: Gemini CLI
- **Agent Type**: Orchestrator → Workflow Enforcement

## Verification Checklist

### ✅ Agent System Working If:

1. **Initial Response**:
   - ✅ Mentions specific agent type (Orchestrator, Developer, etc.)
   - ✅ Shows project analysis
   - ✅ Lists capabilities based on agent
   - ✅ Asks "What would you like to work on?"

2. **Workflow Enforcement**:
   - ✅ Starts with requirements gathering
   - ✅ Asks clarifying questions
   - ✅ Confirms understanding before planning
   - ✅ Follows 7-phase sequence

3. **Documentation**:
   - ✅ Updates workflow status file
   - ✅ Logs activation in system
   - ✅ Tracks phase progress

### ❌ Agent System NOT Working If:

1. **Generic Response**:
   - ❌ No agent type mentioned
   - ❌ No project analysis
   - ❌ Direct implementation without requirements
   - ❌ No workflow enforcement

2. **Missing Workflow**:
   - ❌ Skips requirements gathering
   - ❌ Goes straight to implementation
   - ❌ No documentation updates
   - ❌ No phase tracking

## How to Force Workflow Compliance

### If Agent Skips Workflow:

**Force Requirements Gathering:**
```
"STOP! You must follow the workflow system. Read workflow_agent.md and start with requirements gathering mode."
```

**Force Workflow Enforcement:**
```
"Use the workflow_agent.md to handle this request with complete workflow enforcement and requirements gathering."
```

**Force Strict Compliance:**
```
"Read WORKFLOW_SYSTEM.md and follow the mandatory 7-phase workflow sequence starting with requirements gathering."
```

## Real-World Example

### Your Current Situation:

**✅ Agent System IS Working** because:
- Gemini CLI read agent.md
- Responded as "Orchestrator Agent"
- Showed project analysis
- Listed capabilities

**⚠️ BUT Workflow Not Enforced Yet** because:
- It didn't start with requirements gathering
- It asked general "What would you like to work on?"
- It didn't follow the structured workflow

### Next Steps:

1. **Force Workflow Compliance:**
   ```
   "Use the workflow_agent.md to handle 'Update ui/ux for login page' with complete workflow enforcement"
   ```

2. **Verify Response:**
   - Should start with 🔍 REQUIREMENTS GATHERING MODE
   - Should ask specific clarifying questions
   - Should not jump to implementation

3. **Track Progress:**
   - Check `memory/workflow_status.md` for updates
   - Monitor dashboard for workflow progress
   - Verify all 7 phases are completed

## Automation for Detection

### Create Auto-Detection Script:
```bash
#!/bin/bash
# detect-agent-usage.sh

# Check if AI tools are using our agent system
echo "Checking agent system usage..."

# Look for recent agent activations
if grep -q "$(date +%Y-%m-%d)" logs/agent-activation.log; then
    echo "✅ Agent system used today"
    grep "$(date +%Y-%m-%d)" logs/agent-activation.log
else
    echo "❌ No agent system usage detected today"
fi

# Check workflow compliance
if grep -q "WORKFLOW_STARTED" memory/workflow_status.md; then
    echo "✅ Workflow enforcement active"
else
    echo "❌ No workflow enforcement detected"
fi
```

This system ensures you can **track and verify** when AI CLI tools use your agent system and **enforce workflow compliance** for every request!

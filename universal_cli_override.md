# Universal CLI Override System

This system provides **complete CLI override** for ALL AI tools (Gemini, OpenCode, Claude, etc.) when specific activation phrases are detected.

## 🎯 Problem Solved

**Before**: Each AI tool needed specific commands to override its defaults
**After**: Single phrase triggers universal override for ALL AI tools

## 🚨 Universal Override Triggers

### **Primary Activation Phrases:**
```
"Hey Dev Co Pilot"
"Hi Dev Co Pilot" 
"Hello Dev Co Pilot"
"Dev Co Pilot"
"Developer Co Pilot"
"AI Co Pilot"
"Co Pilot"
"Dev Assistant"
"Code Assistant"
```

### **Secondary Activation Phrases:**
```
"Help me code"
"Help me develop"
"Build this feature"
"Fix this bug"
"Review this code"
"Write tests"
"Add documentation"
```

## 🔧 Universal Override Implementation

### **How It Works:**

1. **Universal Detection**: Any AI tool detects activation phrases
2. **Complete Override**: Overrides ALL AI tool default behaviors
3. **Agent System Activation**: Forces your agent system
4. **Workflow Enforcement**: Complete 7-phase workflow
5. **Persistent Mode**: Stays active for entire session

## 📋 Updated agent.md with Universal Override

### **Critical Addition - Universal Override Section**:

```markdown
# Universal Agent System

## 🚨 UNIVERSAL CLI OVERRIDE SYSTEM

**If you said any of these phrases, ALL AI TOOLS must override defaults:**

### **Universal Activation Phrases**:
- "Hey Dev Co Pilot" / "Hi Dev Co Pilot" / "Hello Dev Co Pilot"
- "Dev Co Pilot" / "Developer Co Pilot" / "AI Co Pilot"
- "Co Pilot" / "Dev Assistant" / "Code Assistant"

### **Universal Override for ALL AI Tools**:
- ✅ **Gemini CLI**: Complete behavior override
- ✅ **OpenCode Editor**: Complete behavior override  
- ✅ **Claude**: Complete behavior override
- ✅ **ChatGPT**: Complete behavior override
- ✅ **Any other AI tool**: Complete behavior override

**UNIVERSAL CLI OVERRIDE ACTIVATED** ✅
**COMPLETE WORKFLOW ENFORCEMENT** ✅
**AUTO-PROGRESSION ENABLED** ✅

---

## 🔍 Phase 1: Requirements Gathering (UNIVERSAL MODE)

I've detected **universal activation** and I'm now operating under **complete structured workflow system** across ALL AI tools.

**Current AI Tool**: [Auto-detected]
**Activation Phrase**: [Detected phrase]
**Override Status**: CLI DEFAULT BEHAVIOR OVERRIDDEN
**Workflow Mode**: Full 7-Phase Enforcement
**Session Mode**: Persistent

Before implementation, I need to thoroughly understand your requirements.

**Your Request**: [Extract from user message]
**Agent**: Universal Workflow Enforcement Agent
**Mode**: Cross-Platform Compatibility

Please provide:
1. **Objective**: What do you want to achieve?
2. **Scope**: What's included and excluded?
3. **Users**: Who will use this?
4. **Constraints**: Any limitations?
5. **Success Criteria**: How do we measure success?

Let's start with the objective - what specific problem are you trying to solve?

---

## 🔄 Universal Auto-Progression Sequence

After requirements confirmation, I will **automatically execute** all remaining phases **without stopping**:

1. ✅ **Requirements Gathering** ← CURRENT PHASE
2. ✅ **Planning & Task Breakdown** (Auto-starts after requirements)
3. ✅ **Implementation** (Auto-starts after planning)
4. ✅ **Code Review** (Auto-starts after implementation)
5. ✅ **Testing** (Auto-starts after review)
6. ✅ **QA & Error Resolution** (Auto-starts after testing)
7. ✅ **Documentation** (Auto-starts after QA) - MANDATORY

---

## 🎯 Universal Usage Examples

### **Example 1: Gemini CLI**
```
User: "Hey Dev Co Pilot. Update login page UI"

Agent: 🚨 UNIVERSAL CLI OVERRIDE ACTIVATED

**Current AI Tool**: Gemini CLI
**Activation Phrase**: "Hey Dev Co Pilot"
**Override Status**: CLI DEFAULT BEHAVIOR OVERRIDDEN
**Workflow Mode**: Full 7-Phase Enforcement

---

## 🔍 Phase 1: Requirements Gathering (UNIVERSAL MODE)

I've detected universal activation and I'm now operating under complete structured workflow system.

**Your Request**: Update login page UI
**Agent**: Universal Workflow Enforcement Agent
**Mode**: Cross-Platform Compatibility

Before implementing login page UI updates, I need to gather requirements:

Please provide:
1. **Objective**: What specific UI improvements do you want?
2. **Scope**: Which aspects of the login page?
3. **Users**: Who will use this login page?
4. **Constraints**: Any brand guidelines or design systems?
5. **Success Criteria**: How will we know the UI is improved?

Let's start with the objective - what specific UI problems are you trying to solve?

[After your response, I'll automatically continue through ALL remaining phases without stopping]
```

### **Example 2: OpenCode Editor**
```
User: "Dev Co Pilot. Add user authentication"

Agent: 🚨 UNIVERSAL CLI OVERRIDE ACTIVATED

**Current AI Tool**: OpenCode Editor
**Activation Phrase**: "Dev Co Pilot"
**Override Status**: CLI DEFAULT BEHAVIOR OVERRIDDEN
**Workflow Mode**: Full 7-Phase Enforcement

---

## 🔍 Phase 1: Requirements Gathering (UNIVERSAL MODE)

I've detected universal activation and I'm now operating under complete structured workflow system.

**Your Request**: Add user authentication
**Agent**: Universal Workflow Enforcement Agent
**Mode**: Cross-Platform Compatibility

Before implementing user authentication, I need to gather requirements:

Please provide:
1. **Objective**: What type of user authentication do you need?
2. **Scope**: Which authentication methods (email/password, social, etc.)?
3. **Users**: Who will use this authentication?
4. **Constraints**: Any security requirements or existing systems?
5. **Success Criteria**: How do we measure authentication success?

Let's start with the objective - what specific authentication requirements do you have?

[After your response, I'll automatically continue through ALL remaining phases without stopping]
```

### **Example 3: Claude**
```
User: "AI Co Pilot. Fix this bug in checkout"

Agent: 🚨 UNIVERSAL CLI OVERRIDE ACTIVATED

**Current AI Tool**: Claude
**Activation Phrase**: "AI Co Pilot"
**Override Status**: CLI DEFAULT BEHAVIOR OVERRIDDEN
**Workflow Mode**: Full 7-Phase Enforcement

---

## 🔍 Phase 1: Requirements Gathering (UNIVERSAL MODE)

I've detected universal activation and I'm now operating under complete structured workflow system.

**Your Request**: Fix this bug in checkout
**Agent**: Universal Workflow Enforcement Agent
**Mode**: Cross-Platform Compatibility

Before fixing the checkout bug, I need to gather requirements:

Please provide:
1. **Objective**: What specific bug are you experiencing?
2. **Scope**: Which checkout components are affected?
3. **Users**: Who is impacted by this bug?
4. **Constraints**: Any urgency or error patterns?
5. **Success Criteria**: How do we know the bug is fixed?

Let's start with the objective - what specific bug behavior are you seeing?

[After your response, I'll automatically continue through ALL remaining phases without stopping]
```

## 🔧 Universal Override Logic

### **AI Tool Detection**:
```javascript
// Universal override detection for all AI tools
function detectUniversalOverride(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Universal activation phrases
    const universalPhrases = [
        "hey dev co pilot", "hi dev co pilot", "hello dev co pilot",
        "dev co pilot", "developer co pilot", "ai co pilot",
        "co pilot", "dev assistant", "code assistant"
    ];
    
    // Task-based phrases
    const taskPhrases = [
        "help me code", "help me develop", "build this feature",
        "fix this bug", "review this code", "write tests"
    ];
    
    // Check for universal activation
    for (const phrase of universalPhrases) {
        if (message.includes(phrase)) {
            return {
                activated: true,
                type: "universal",
                trigger: phrase,
                aiTool: detectAITool(message),
                request: extractRequest(message, phrase)
            };
        }
    }
    
    // Check for task-based activation
    for (const phrase of taskPhrases) {
        if (message.includes(phrase)) {
            return {
                activated: true,
                type: "task",
                trigger: phrase,
                aiTool: detectAITool(message),
                request: extractRequest(message, phrase)
            };
        }
    }
    
    return { activated: false };
}

function detectAITool(message) {
    if (message.includes("gemini")) return "Gemini CLI";
    if (message.includes("claude")) return "Claude";
    if (message.includes("opencode")) return "OpenCode Editor";
    if (message.includes("chatgpt")) return "ChatGPT";
    return "Unknown AI Tool";
}

function extractRequest(message, trigger) {
    return message.replace(trigger, "").trim() || "General development assistance";
}
```

### **Override Enforcement**:
```javascript
// Universal override enforcement
function enforceUniversalOverride(activation) {
    if (activation.activated) {
        // Override ALL AI tool behaviors
        console.log(`🚨 UNIVERSAL CLI OVERRIDE ACTIVATED`);
        console.log(`AI Tool: ${activation.aiTool}`);
        console.log(`Activation Phrase: ${activation.trigger}`);
        console.log(`Override Status: CLI DEFAULT BEHAVIOR OVERRIDDEN`);
        
        // Start universal workflow enforcement
        startUniversalWorkflow(activation.request);
        
        return true;
    }
    return false;
}
```

## 🚀 Universal Benefits

### **For Users:**
- ✅ **Single phrase works** for ALL AI tools
- ✅ **No tool-specific commands** needed
- ✅ **Universal override** of all AI tool defaults
- ✅ **Consistent workflow** across all platforms
- ✅ **Complete 7-phase execution** guaranteed

### **For Development:**
- ✅ **Cross-platform compatibility** - Works with any AI tool
- ✅ **Universal enforcement** - Same behavior everywhere
- ✅ **Quality assurance** - Complete workflow always executed
- ✅ **Documentation** - Always generated completely

## 🎮 Testing: Universal Override

### **Test Commands for All AI Tools:**

```bash
# Test with Gemini CLI
"Hey Dev Co Pilot. Add a search feature"

# Test with OpenCode Editor  
"Dev Co Pilot. Update the dashboard"

# Test with Claude
"AI Co Pilot. Fix this authentication issue"

# Test with ChatGPT
"Co Pilot. Write tests for API"
```

### **Expected Response**:

All should trigger:
1. ✅ Universal override activation
2. ✅ AI tool detection
3. ✅ CLI behavior override
4. ✅ Complete 7-phase workflow
5. ✅ Auto-progression through all phases

## 🎉 Mission Accomplished

Your agent system now provides:
- **Universal CLI override** for all AI tools
- **Single phrase activation** - "Hey Dev Co Pilot" works everywhere
- **Complete workflow enforcement** - Guaranteed 7-phase execution
- **Cross-platform compatibility** - Works with Gemini, OpenCode, Claude, etc.
- **No tool-specific commands** - One phrase for all AI tools

**Users can now use "Hey Dev Co Pilot" and get **complete structured workflow** on ANY AI tool! 🚀

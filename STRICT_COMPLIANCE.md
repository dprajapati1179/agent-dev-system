# Strict Compliance Framework

This system enforces strict adherence to the universal agent protocols, guidelines, and workflows once initialized in any project.

## Strict Enforcement Rules

### 1. Mandatory Agent Usage

**ALL tasks MUST use the appropriate specialized agent:**

- **Code Implementation** → `developer.md` (NEVER skip)
- **Documentation** → `documentation.md` (ALWAYS required)
- **Code Review** → `reviewer.md` (MANDATORY before commits)
- **Testing** → `tester.md` (REQUIRED for all code changes)
- **Planning** → `planner.md` (COMPLEX tasks only)
- **Research** → `research.md` (ANALYSIS required)
- **Error Handling** → `error_handler.md` (DEBUGGING mandatory)
- **Orchestration** → `orchestrator.md` (MULTI-AGENT tasks)

**NO EXCEPTIONS - NO WORKAROUNDS**

### 2. Mandatory Context Loading

**Before ANY task, agents MUST read:**

```markdown
1. context/architecture.md      # ALWAYS
2. context/coding_standards.md  # ALWAYS  
3. context/folder_structure.md  # ALWAYS
4. context/ui_guidelines.md     # FRONTEND projects
5. memory/active_tasks.md       # ORCHESTRATOR only
```

**Verification Required:**
```markdown
✅ Read context/architecture.md
✅ Read context/coding_standards.md  
✅ Read context/folder_structure.md
✅ [If frontend] Read context/ui_guidelines.md
```

### 3. Strict Workflow Enforcement

**Feature Development Workflow (MANDATORY):**

```
1. Research Agent → Analyze codebase, find related files
2. Planner Agent → Break feature into tasks (if complex)
3. Developer Agent → Implement code changes
4. Reviewer Agent → Review code quality, architecture, naming
5. Tester Agent → Run tests and validate functionality
6. Documentation Agent → Update relevant docs
7. User Confirmation → "Feature complete. Commit and push?"
```

**Bug Fix Workflow (MANDATORY):**

```
1. Research Agent → Identify failing code and related files
2. Error Handler Agent → Debug and identify root cause
3. Developer Agent → Apply fix
4. Tester Agent → Validate fix works
5. Reviewer Agent → Check for side effects
6. User Confirmation → "Bug fixed. Commit and push?"
```

### 4. No Shortcuts Policy

**STRICTLY FORBIDDEN:**
- ❌ Direct code implementation without agent selection
- ❌ Skipping code review for "small changes"
- ❌ Bypassing testing for "quick fixes"
- ❌ Writing code without reading context files
- ❌ Making changes without documentation updates
- ❌ Using generic responses instead of specialized agents

### 5. Mandatory Verification Steps

**Before ANY code change:**
```markdown
✅ Selected correct specialized agent
✅ Read all required context files
✅ Followed proper workflow sequence
✅ Understood project architecture
✅ Identified impact on existing code
```

**After ANY code change:**
```markdown
✅ Code reviewed by reviewer agent
✅ Tests written and passed
✅ Documentation updated
✅ No breaking changes introduced
✅ Follows coding standards
```

### 6. Enforcement Commands

**AI CLI Tools MUST use these exact patterns:**

```bash
# CORRECT - Strict compliance
"Use the developer agent to implement [feature] following strict compliance guidelines"

"Use the reviewer agent to review [file] with strict adherence to coding standards"

"Use the orchestrator agent to coordinate [task] with mandatory workflow enforcement"

# INCORRECT - Will be rejected
"Just add the feature to this file"
"Quick fix this bug"
"Write some code for this"
```

### 7. Compliance Validation

**Self-Verification Checklist (MANDATORY):**

```markdown
Before starting:
□ Selected appropriate specialized agent
□ Read context/architecture.md
□ Read context/coding_standards.md
□ Read context/folder_structure.md
□ Understood task requirements

During implementation:
□ Following agent-specific guidelines
□ Adhering to project architecture
□ Using proper naming conventions
□ Writing clean, maintainable code

After implementation:
□ Code reviewed by reviewer agent
□ Tests written and passing
□ Documentation updated
□ No breaking changes
□ Ready for user confirmation
```

### 8. Strict Error Handling

**If compliance rules are violated:**

```
🚨 COMPLIANCE VIOLATION DETECTED 🚨

Issue: [Specific violation]
Required Action: [Correct procedure]
Workflow Reset: Must start from beginning

Please follow the strict compliance framework:
1. Select appropriate agent
2. Read required context files  
3. Follow proper workflow
4. Complete all verification steps
```

### 9. Project Integration Rules

**Once initialized in a project:**

- ✅ Agent system becomes the SOLE development methodology
- ✅ All development must follow strict compliance
- ✅ No alternative workflows allowed
- ✅ All team members must use the system
- ✅ Regular compliance audits required

### 10. Monitoring and Auditing

**Compliance Monitoring:**
```bash
# Check compliance status
./agent-dev-system/compliance_check.sh

# Generate compliance report
./agent-dev-system/compliance_report.sh

# Audit recent changes
./agent-dev-system/compliance_audit.sh
```

**Audit Checklist:**
- All changes followed proper workflow
- All agents used correctly
- All context files read
- All verification steps completed
- Documentation updated
- Tests written and passing

### 11. Strict Initialization Protocol

**When agent system is initialized:**

```
🔒 STRICT COMPLIANCE MODE ACTIVATED 🔒

This project now operates under strict compliance framework:

✅ All development MUST use specialized agents
✅ All context files MUST be read before work
✅ All workflows MUST be followed exactly
✅ All verification steps MUST be completed
✅ No shortcuts or workarounds permitted

VIOLATIONS WILL BE REJECTED AND RESET

Type: "I acknowledge and accept strict compliance" to continue
```

### 12. Enforcement Scripts

**compliance_check.sh:**
```bash
#!/bin/bash
echo "🔍 Checking compliance status..."

# Check if all required files exist
required_files=("context/architecture.md" "context/coding_standards.md" "context/folder_structure.md")

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing required file: $file"
        exit 1
    fi
done

echo "✅ Compliance check passed"
```

**compliance_enforcer.sh:**
```bash
#!/bin/bash
# Enforces strict compliance during development

echo "🔒 STRICT COMPLIANCE ENFORCED"
echo "All development must follow the universal agent framework"
echo "Violations will be automatically rejected"
```

### 13. Zero Tolerance Policy

**Immediate Rejection For:**
- Attempting to bypass agent selection
- Skipping context file reading
- Ignoring workflow sequences
- Making unreviewed code changes
- Violating coding standards
- Skipping testing requirements

### 14. Compliance Certification

**Projects receive compliance certification:**
```
🏆 STRICT COMPLIANCE CERTIFIED 🏆

Project: [Project Name]
Certified: [Date]
Status: Fully compliant with universal agent framework
Audit Score: 100%

All development follows strict protocols:
✅ Specialized agents used correctly
✅ Context files always read
✅ Workflows followed exactly
✅ Verification steps completed
```

This strict compliance framework ensures your agent system is followed precisely in every project, with no exceptions or workarounds allowed.

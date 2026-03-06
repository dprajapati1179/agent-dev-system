# Complete Workflow System

This system enforces a structured development workflow that ensures thorough requirements gathering, planning, implementation, testing, and documentation for every project using the agent system.

## 🔄 Mandatory Workflow Sequence

### **Phase 1: Requirements Gathering (ONE-ON-ONE CONVERSATION)**

**Agent:** Research Agent + Orchestrator Agent
**Purpose:** Deep understanding of requirements

#### **1.1 Initial Requirements Session**
```
🔍 REQUIREMENTS GATHERING MODE

I'll help you clarify your requirements before we start implementation.

Please provide:
1. **Objective**: What do you want to achieve?
2. **Scope**: What's included and excluded?
3. **Users**: Who will use this feature?
4. **Constraints**: Any technical or business limitations?
5. **Success Criteria**: How will we know this is successful?

Let me ask clarifying questions to ensure I understand completely...
```

#### **1.2 Clarification Questions**
```
🤔 CLARIFICATION QUESTIONS

Based on your initial request, I need to understand:

Technical Questions:
- Which components will be affected?
- Are there existing patterns to follow?
- What are the performance requirements?
- Any specific technologies or libraries?

Functional Questions:
- What should happen when X occurs?
- How should errors be handled?
- What are the edge cases?
- Is backward compatibility needed?

Design Questions:
- Any specific UI/UX requirements?
- Should this follow existing design patterns?
- Are there accessibility requirements?
- Mobile/desktop considerations?

Process Questions:
- Is this a new feature or modification?
- Are there dependencies on other teams?
- What's the priority level?
- Any deadline constraints?

Please answer these so I can create a comprehensive plan.
```

#### **1.3 Requirements Confirmation**
```
✅ REQUIREMENTS CONFIRMATION

Based on our conversation, here's what I understand:

**Objective**: [Clear objective statement]
**Scope**: [Detailed scope boundaries]
**Technical Requirements**: [List of technical needs]
**Functional Requirements**: [List of functional needs]
**Success Criteria**: [Measurable success criteria]

**Does this accurately capture what you need?**

If YES → I'll proceed to planning phase
If NO → Let me revise and clarify further
```

### **Phase 2: Planning & Task Breakdown**

**Agent:** Planner Agent + Orchestrator Agent
**Purpose:** Create detailed implementation plan

#### **2.1 Technical Analysis**
```
📋 TECHNICAL ANALYSIS

I'll analyze the requirements and create a technical plan:

**Architecture Impact:**
- Which files/components will be modified
- Database schema changes needed
- API endpoints affected
- Dependencies to consider

**Implementation Strategy:**
- Break down into manageable tasks
- Identify potential risks
- Plan for testing requirements
- Consider rollback strategy

**Resource Planning:**
- Estimated complexity (Simple/Medium/Complex)
- Time estimates for each task
- Dependencies between tasks
- Required expertise level
```

#### **2.2 Task Breakdown**
```
🎯 DETAILED TASK BREAKDOWN

**Task 1: [Task Name]**
- Description: [What needs to be done]
- Files: [Which files to modify]
- Complexity: [Simple/Medium/Complex]
- Dependencies: [What needs to be done first]
- Acceptance Criteria: [How to verify completion]

**Task 2: [Task Name]**
- Description: [What needs to be done]
- Files: [Which files to modify]
- Complexity: [Simple/Medium/Complex]
- Dependencies: [What needs to be done first]
- Acceptance Criteria: [How to verify completion]

[Continue for all tasks...]

**Total Estimated Tasks**: [Number]
**Estimated Complexity**: [Overall complexity]
**Timeline**: [Estimated duration]
```

#### **2.3 Plan Confirmation**
```
🔍 PLAN REVIEW

Here's the implementation plan:

**Tasks**: [Number] tasks identified
**Approach**: [Implementation approach summary]
**Risks**: [Identified risks and mitigations]
**Timeline**: [Estimated timeline]

**Do you approve this plan?**

If YES → Proceed to implementation
If NO → Let me revise the plan
```

### **Phase 3: Implementation**

**Agent:** Developer Agent
**Purpose:** Execute the planned tasks

#### **3.1 Task Implementation**
```
🛠️ IMPLEMENTATION MODE

Starting implementation of approved plan...

**Current Task**: [Task name]
**Files to modify**: [List of files]
**Implementation approach**: [Technical approach]

I'll implement this following:
- Coding standards from context/coding_standards.md
- Architecture patterns from context/architecture.md
- Best practices for security and performance

Let me start with the first component...
```

#### **3.2 Progress Updates**
```
📊 IMPLEMENTATION PROGRESS

**Task 1**: ✅ COMPLETED
- Files modified: [List of files]
- Changes made: [Summary of changes]
- Next steps: [What's next]

**Task 2**: 🔄 IN PROGRESS
- Currently working on: [Current file/component]
- Progress: [Percentage or status]
- Challenges: [Any issues encountered]

**Overall Progress**: [X/Y tasks completed]
```

### **Phase 4: Code Review**

**Agent:** Reviewer Agent
**Purpose:** Quality assurance and standards compliance

#### **4.1 Comprehensive Review**
```
🔍 CODE REVIEW MODE

Reviewing implementation against requirements and standards...

**Requirements Compliance**:
- ✅ All functional requirements implemented
- ✅ Technical requirements met
- ✅ Success criteria achievable

**Code Quality Review**:
- ✅ Follows coding standards
- ✅ Proper error handling
- ✅ Performance considerations
- ✅ Security best practices
- ✅ Documentation included

**Architecture Review**:
- ✅ Follows established patterns
- ✅ Proper separation of concerns
- ✅ Scalable design
- ✅ Maintainable code

**Issues Found**: [List any issues]
**Recommendations**: [List any improvements]
**Approval Status**: [APPROVED/NEEDS REVISION]
```

#### **4.2 Review Feedback**
```
📝 REVIEW FEEDBACK

**Strengths**:
- [List what was done well]
- [List good practices followed]

**Areas for Improvement**:
- [List issues found]
- [List recommendations]

**Required Changes**:
- [List mandatory fixes]
- [List optional improvements]

Please address the required changes before proceeding to testing.
```

### **Phase 5: Testing**

**Agent:** Tester Agent
**Purpose:** Comprehensive testing and validation

#### **5.1 Test Planning**
```
🧪 TESTING MODE

Creating comprehensive test plan...

**Test Coverage Areas**:
- Unit tests for individual functions
- Integration tests for component interactions
- End-to-end tests for user workflows
- Performance tests for critical paths
- Security tests for vulnerabilities

**Test Cases**:
1. **Test Case 1**: [Description]
   - Input: [Test input]
   - Expected: [Expected result]
   - Actual: [Actual result]
   - Status: [PASS/FAIL]

2. **Test Case 2**: [Description]
   - Input: [Test input]
   - Expected: [Expected result]
   - Actual: [Actual result]
   - Status: [PASS/FAIL]

[Continue for all test cases...]
```

#### **5.2 Test Execution**
```
🧪 TEST EXECUTION

**Running Tests...**

✅ Unit Tests: [X/Y] passed
✅ Integration Tests: [X/Y] passed  
✅ End-to-End Tests: [X/Y] passed
✅ Performance Tests: [X/Y] passed
✅ Security Tests: [X/Y] passed

**Test Summary**:
- Total Tests: [Number]
- Passed: [Number]
- Failed: [Number]
- Coverage: [Percentage]%

**Failed Tests**: [List failed tests and reasons]
**Blockers**: [List any blocking issues]

**Testing Status**: [PASSED/FAILED]
```

### **Phase 6: QA & Error Resolution**

**Agent:** Error Handler Agent + Tester Agent
**Purpose:** Quality assurance and issue resolution

#### **6.1 Quality Assurance**
```
🔍 QUALITY ASSURANCE

Performing final QA checks...

**Functional QA**:
- ✅ All requirements met
- ✅ User workflows working
- ✅ Edge cases handled
- ✅ Error scenarios tested

**Technical QA**:
- ✅ Code quality standards met
- ✅ Performance benchmarks met
- ✅ Security requirements met
- ✅ Documentation complete

**User Experience QA**:
- ✅ UI/UX guidelines followed
- ✅ Accessibility standards met
- ✅ Responsive design working
- ✅ Cross-browser compatibility

**QA Status**: [PASSED/FAILED]
```

#### **6.2 Error Resolution**
```
🐛 ERROR RESOLUTION

[If issues found]

**Issues Identified**:
1. **Issue 1**: [Description]
   - Severity: [Critical/High/Medium/Low]
   - Impact: [What's affected]
   - Resolution: [How to fix]

2. **Issue 2**: [Description]
   - Severity: [Critical/High/Medium/Low]
   - Impact: [What's affected]
   - Resolution: [How to fix]

**Resolution Plan**:
- [Plan to fix all issues]
- [Timeline for resolution]
- [Testing after fixes]

**Status**: [IN PROGRESS/RESOLVED]
```

### **Phase 7: Documentation (MANDATORY)**

**Agent:** Documentation Agent
**Purpose**: Complete documentation of what was done

#### **7.1 Implementation Documentation**
```
📚 IMPLEMENTATION DOCUMENTATION

**Feature Implementation Report**

**Overview**:
- Feature: [Feature name/description]
- Objective: [What was accomplished]
- Date: [Implementation date]
- Author: [Agent(s) involved]

**Technical Details**:
- Files Modified: [List all files changed]
- New Files Created: [List new files]
- Dependencies Added: [List new dependencies]
- Database Changes: [Schema changes if any]

**Implementation Summary**:
- What was built: [Summary of implementation]
- How it works: [Technical explanation]
- Key decisions: [Important architectural decisions]
- Trade-offs: [Any compromises made]

**Status**: [COMPLETED]
```

#### **7.2 Status & Progress Documentation**
```
📊 STATUS DOCUMENTATION

**Implementation Status Report**

**Completed Tasks**: [X/Y]
- ✅ [Task 1] - [Status] - [Date completed]
- ✅ [Task 2] - [Status] - [Date completed]
- [Continue for all completed tasks]

**Remaining Tasks**: [X/Y]
- 🔄 [Task 3] - [Status] - [ETA]
- ⏳ [Task 4] - [Status] - [ETA]
- [Continue for all remaining tasks]

**Overall Progress**: [X]%

**Timeline**:
- Started: [Start date]
- Estimated Completion: [Completion date]
- Actual Completion: [Actual date if done]

**Blockers**: [List any current blockers]
**Risks**: [List any remaining risks]
```

#### **7.3 Remaining Work Documentation**
```
📋 REMAINING WORK DOCUMENTATION

**Outstanding Items**:

**High Priority**:
- [ ] [Item 1] - [Description] - [Due date]
- [ ] [Item 2] - [Description] - [Due date]

**Medium Priority**:
- [ ] [Item 3] - [Description] - [Due date]
- [ ] [Item 4] - [Description] - [Due date]

**Low Priority**:
- [ ] [Item 5] - [Description] - [Due date]
- [ ] [Item 6] - [Description] - [Due date]

**Future Considerations**:
- [List future improvements]
- [List potential enhancements]
- [List technical debt items]

**Next Steps**: [Immediate next actions]
```

## 🔄 Workflow Enforcement Rules

### **Mandatory Sequence**:
1. **Requirements** → MUST complete before planning
2. **Planning** → MUST approve before implementation
3. **Implementation** → MUST complete before review
4. **Review** → MUST pass before testing
5. **Testing** → MUST pass before QA
6. **QA** → MUST pass before documentation
7. **Documentation** → MUST complete before closure

### **No Shortcuts Allowed**:
- ❌ Skip requirements gathering
- ❌ Skip planning phase
- ❌ Skip code review
- ❌ Skip testing
- ❌ Skip documentation
- ❌ Skip status updates

### **Mandatory Documentation**:
- ✅ Implementation summary
- ✅ Status of all tasks
- ✅ Remaining work items
- ✅ Technical decisions
- ✅ Next steps

## 🎯 Workflow Triggers

The workflow automatically starts when:

1. **New feature request** detected
2. **Bug report** filed
3. **Refactoring request** made
4. **Performance issue** identified
5. **Security vulnerability** found

## 📊 Workflow Tracking

All workflow phases are tracked in:
- `memory/workflow_status.md`
- `memory/task_progress.md`
- `memory/implementation_log.md`

This ensures complete visibility into what's done, what's in progress, and what remains to be done.

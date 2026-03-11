# Workflow Configuration

This file allows customization of the workflow behavior for different project needs.

## Configuration Options

### Testing Phase Configuration

**Option 1: Testing Required (Default)**
- Testing phase is mandatory
- All test types must pass before proceeding
- Comprehensive testing and validation

**Option 2: Testing Optional**  
- Testing phase can be skipped by user request
- User can choose to test or bypass testing
- Workflow continues to QA phase regardless

**Option 3: Testing Disabled**
- Testing phase is completely skipped
- Workflow goes directly from Code Review to QA
- Only for projects where testing is not applicable

## How to Configure Testing Behavior

### Method 1: During Requirements Phase

During Phase 1 (Requirements Gathering), the agent will ask:

```
🧪 TESTING PREFERENCE

How would you like to handle testing for this project?

1. **Required** - Full testing is mandatory (default)
2. **Optional** - I can choose to test or skip each time
3. **Disabled** - Skip testing entirely

Please choose your testing preference (1/2/3):
```

### Method 2: Direct Configuration

You can configure testing behavior directly by saying:

```
"Hey dev co pilot, configure testing as optional for this project"
"Hey dev co pilot, disable testing for this quick fix"
"Hey dev co pilot, enable required testing for this feature"
```

### Method 3: Configuration File

Create a `.workflow-config.json` file:

```json
{
  "testing": {
    "mode": "optional",
    "auto_ask": true,
    "default_types": ["unit", "integration"]
  }
}
```

**Testing Modes:**
- `"required"` - Testing is mandatory
- `"optional"` - User chooses each time  
- `"disabled"` - Testing is skipped

## Testing Mode Behaviors

### Required Mode (Default)
- ✅ Testing phase always executed
- ✅ All test types run automatically
- ✅ Must pass before proceeding
- ✅ Comprehensive test coverage

### Optional Mode
- ❓ Agent asks: "Do you want to run tests for this implementation?"
- ✅ User can respond: "yes", "no", "test only unit", "test integration only"
- ✅ Workflow continues regardless of testing choice
- ✅ Documentation notes if testing was skipped

### Disabled Mode
- ⏭️ Testing phase completely skipped
- ⏭️ Workflow goes: Code Review → QA → Documentation
- ⚠️ Documentation notes: "Testing was disabled for this project"
- ⚠️ Only recommended for non-critical changes

## Optional Testing Prompts

### When Testing is Optional

**Prompt after Code Review:**
```
🧪 TESTING DECISION

Code review is complete! 

**Implementation Status**: ✅ APPROVED

Would you like to run tests for this implementation?

**Options**:
1. **Yes, run all tests** - Comprehensive testing (recommended)
2. **Yes, but only unit tests** - Quick validation
3. **Yes, but only integration tests** - Component testing
4. **No, skip testing** - Continue to QA phase
5. **No testing for this project** - Disable testing permanently

Please choose (1-5):
```

### User Responses and Actions

| User Response | Action |
|---------------|--------|
| "1" or "yes" | Run all test types (unit, integration, E2E, performance, security) |
| "2" or "unit only" | Run only unit tests |
| "3" or "integration only" | Run only integration tests |
| "4" or "skip" | Skip testing, continue to QA |
| "5" or "disable" | Skip testing, disable for future tasks |

## Configuration Persistence

### Session Level
- Testing preference lasts for current session
- Reset when CLI session ends

### Project Level
- Saved in `.workflow-config.json`
- Persists across sessions
- Can be overridden per task

### Global Level
- Saved in user's global config
- Applies to all projects
- Can be overridden by project config

## Implementation in Workflow

### Phase 4: Code Review
```
🔍 CODE REVIEW COMPLETE

**Implementation Status**: ✅ APPROVED
**Testing Configuration**: [Current testing mode]

[If testing is optional]
🧪 Testing is configured as optional for this project.
Would you like to run tests? (yes/no/skip/disable)
```

### Phase 5: Testing (Conditional)
```
[If user chose to test]
🧪 TESTING MODE

Running [selected test types]...

[If user chose to skip]
⏭️ TESTING SKIPPED

Proceeding directly to QA phase as requested.
```

### Phase 6: QA
```
🔍 QUALITY ASSURANCE

**Testing Status**: [Completed/Skipped/Disabled]
**Implementation Status**: Ready for QA

[QA continues regardless of testing choice]
```

## Documentation Notes

### When Testing is Skipped
```
📚 IMPLEMENTATION DOCUMENTATION

**Feature**: [Feature name]
**Testing Status**: Skipped by user request
**Reason**: User chose to bypass testing phase
**Recommendation**: Consider running tests before production deployment
```

### When Testing is Disabled
```
📚 IMPLEMENTATION DOCUMENTATION

**Feature**: [Feature name]  
**Testing Status**: Disabled for this project
**Configuration**: Testing phase permanently disabled
**Note**: This project does not include automated testing
```

## Safety Checks

### Critical Projects
For critical projects (payment systems, authentication, etc.), the agent will warn:

```
⚠️ SAFETY WARNING

This appears to be a critical implementation. 
Disabling testing is not recommended for:
- Authentication systems
- Payment processing  
- Data security features
- Core infrastructure

Are you sure you want to disable testing? (yes/no)
```

### Quick Fixes vs Features
The agent may suggest different testing approaches:

```
💡 TESTING RECOMMENDATION

**Quick Fix**: Testing optional (skip if minor change)
**New Feature**: Testing recommended (run basic tests)
**Critical Feature**: Testing required (comprehensive testing)

Based on your change type, I recommend: [recommendation]
```

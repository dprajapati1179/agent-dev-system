# Real-Time Data Setup Guide

The dashboard now supports **real-time data integration** with your actual agent system. Here's how to set it up:

## Current Status: 🟡 SIMULATED REAL-TIME

The dashboard currently uses **simulated real-time data** that demonstrates how the system would work with actual agent data. To connect to your real agent system, follow the setup steps below.

## 🔧 Real Data Integration Setup

### 1. Agent Activity Logging

First, enable activity logging in your agent system:

**Add to agent.md:**
```markdown
## Activity Logging

All agent activities are logged to:
- `./logs/agent-activity.log`
- Format: JSON timestamp entries
- Includes: agent type, project, task status, duration
```

**Create logging script:**
```bash
#!/bin/bash
# log-agent-activity.sh
TIMESTAMP=$(date -Iseconds)
PROJECT=$(basename $(pwd))
AGENT_TYPE=$1
TASK_STATUS=$2
DURATION=$3

LOG_ENTRY="{\"timestamp\":\"$TIMESTAMP\",\"project\":\"$PROJECT\",\"agent\":\"$AGENT_TYPE\",\"status\":\"$TASK_STATUS\",\"duration\":$DURATION}"
echo $LOG_ENTRY >> ./logs/agent-activity.log
```

### 2. Real-Time Project Scanning

**Update scan_projects.sh to output JSON:**
```bash
#!/bin/bash
# Enhanced scanner with JSON output

echo "{\"scan_time\":\"$(date -Iseconds)\",\"projects\":["

first=true
find ~/projects ~/Desktop -name "IDENTITY.md" 2>/dev/null | while read identity; do
    project_dir=$(dirname $(dirname "$identity"))
    project_name=$(basename "$project_dir")
    
    if [ "$first" = true ]; then
        first=false
    else
        echo ","
    fi
    
    echo "{\"id\":\"$project_name\",\"name\":\"$project_name\",\"path\":\"$project_dir\",\"last_scan\":\"$(date -Iseconds)\"}"
done

echo "]}"
```

### 3. Compliance Monitoring

**Create real compliance checker:**
```bash
#!/bin/bash
# real-compliance-check.sh

PROJECT_DIR=$1
COMPLIANCE_SCORE=100
VIOLATIONS=0

# Check for required files
required_files=("IDENTITY.md" "agent.md" "STRICT_COMPLIANCE.md")
for file in "${required_files[@]}"; do
    if [ ! -f "$PROJECT_DIR/$file" ]; then
        COMPLIANCE_SCORE=$((COMPLIANCE_SCORE - 25))
        VIOLATIONS=$((VIOLATIONS + 1))
    fi
done

echo "{\"project\":\"$(basename $PROJECT_DIR)\",\"score\":$COMPLIANCE_SCORE,\"violations\":$VIOLATIONS,\"timestamp\":\"$(date -Iseconds)\"}"
```

### 4. Dashboard Configuration

**Update real-time-integration.js to use real data:**

```javascript
// Replace simulated functions with real ones

async scanProjects() {
    // Run actual project scanner
    const response = await fetch('./api/scan-projects');
    return await response.json();
}

async scanAgentUsage() {
    // Read actual agent logs
    const response = await fetch('./api/agent-usage');
    return await response.json();
}

async checkCompliance() {
    // Run actual compliance checks
    const response = await fetch('./api/compliance-status');
    return await response.json();
}
```

### 5. API Endpoints Setup

**Create simple API server (Node.js):**
```javascript
// api-server.js
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/api/scan-projects', async (req, res) => {
    exec('./scan-projects.sh', (error, stdout) => {
        if (error) return res.status(500).json({ error });
        res.json(JSON.parse(stdout));
    });
});

app.get('/api/agent-usage', async (req, res) => {
    // Parse agent activity logs
    const fs = require('fs');
    const logs = fs.readFileSync('./logs/agent-activity.log', 'utf8');
    const entries = logs.trim().split('\n').map(line => JSON.parse(line));
    res.json(entries);
});

app.get('/api/compliance-status', async (req, res) => {
    // Run compliance checks
    exec('./check-all-compliance.sh', (error, stdout) => {
        if (error) return res.status(500).json({ error });
        res.json(JSON.parse(stdout));
    });
});

app.listen(3000, () => console.log('API server running on port 3000'));
```

## 🚀 Quick Start with Real Data

### Option 1: Simple File-Based Setup

1. **Create logs directory:**
   ```bash
   mkdir -p logs
   ```

2. **Add logging to agent activation:**
   ```bash
   # In your agent activation commands
   echo "Agent activated: $(date)" >> logs/agent-activity.log
   ```

3. **Update dashboard to read files:**
   ```javascript
   // In real-time-integration.js
   async scanProjects() {
       const response = await fetch('./scan_projects.sh');
       return response.json();
   }
   ```

### Option 2: Full API Setup

1. **Start API server:**
   ```bash
   node api-server.js
   ```

2. **Update dashboard API URLs:**
   ```javascript
   // Point to real API endpoints
   const API_BASE = 'http://localhost:3000/api';
   ```

## 📊 Real-Time Data Sources

### Project Data Sources:
- **File system scans** (every 60 seconds)
- **Git repository detection**
- **Agent system file presence**

### Agent Activity Sources:
- **Agent activation logs**
- **Task completion events**
- **Error and violation logs**

### Compliance Sources:
- **Compliance check results**
- **Violation detection**
- **Audit trail logs**

## 🔍 Monitoring Real-Time Updates

The dashboard shows real-time indicators:

- **🟢 Live** - Data updating in real-time
- **🟡 Simulated** - Using simulated data
- **🔴 Offline** - No real-time connection

**Status indicator in dashboard header:**
```html
<div class="real-time-status" id="realTimeStatus">
    <span class="status-dot"></span>
    <span class="status-text">Simulated</span>
</div>
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Permission errors:**
   ```bash
   chmod +x scan_projects.sh
   chmod +x log-agent-activity.sh
   ```

2. **Missing logs directory:**
   ```bash
   mkdir -p logs
   touch logs/agent-activity.log
   ```

3. **API server not running:**
   ```bash
   node api-server.js
   # Check port 3000 is available
   ```

4. **CORS issues:**
   ```javascript
   // In api-server.js
   app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', '*');
       next();
   });
   ```

## 📈 Performance Considerations

- **Scan intervals:** Adjust based on system resources
- **Log rotation:** Prevent large log files
- **Caching:** Cache expensive operations
- **Debouncing:** Avoid excessive API calls

## 🔒 Security Notes

- **File access:** Limit to project directories
- **API authentication:** Add API keys if needed
- **Data validation:** Validate all input data
- **Log privacy:** Ensure no sensitive data in logs

---

**Current Status:** The dashboard is ready for real-time integration. Follow the setup steps above to connect it to your actual agent system data!

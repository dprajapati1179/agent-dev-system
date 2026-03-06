#!/bin/bash

# Strict Compliance Checker
# Validates that the agent system follows all strict compliance rules

echo "🔍 STRICT COMPLIANCE CHECKER"
echo "============================"

PROJECT_ROOT=$(pwd)
AGENT_DIR="$PROJECT_ROOT/agent-dev-system"

if [ ! -d "$AGENT_DIR" ]; then
    echo "❌ Agent system not found in current directory"
    exit 1
fi

echo "📁 Checking agent system in: $PROJECT_ROOT"
echo ""

# Check core compliance files
echo "🔒 Checking compliance framework..."
required_compliance_files=(
    "STRICT_COMPLIANCE.md"
    "IDENTITY.md"
    "agent.md"
    "USAGE.md"
)

compliance_score=0
total_checks=0

for file in "${required_compliance_files[@]}"; do
    total_checks=$((total_checks + 1))
    if [ -f "$AGENT_DIR/$file" ]; then
        echo "✅ $file - Found"
        compliance_score=$((compliance_score + 1))
    else
        echo "❌ $file - MISSING (CRITICAL)"
    fi
done

echo ""

# Check context files
echo "📚 Checking context files..."
required_context_files=(
    "context/architecture.md"
    "context/coding_standards.md"
    "context/folder_structure.md"
    "context/ui_guidelines.md"
)

for file in "${required_context_files[@]}"; do
    total_checks=$((total_checks + 1))
    if [ -f "$AGENT_DIR/$file" ]; then
        echo "✅ $file - Found"
        compliance_score=$((compliance_score + 1))
    else
        echo "❌ $file - MISSING"
    fi
done

echo ""

# Check specialized agents
echo "🤖 Checking specialized agents..."
required_agents=(
    "agents/developer.md"
    "agents/documentation.md"
    "agents/research.md"
    "agents/planner.md"
    "agents/reviewer.md"
    "agents/tester.md"
    "agents/error_handler.md"
    "agents/orchestrator.md"
)

for file in "${required_agents[@]}"; do
    total_checks=$((total_checks + 1))
    if [ -f "$AGENT_DIR/$file" ]; then
        echo "✅ $file - Found"
        compliance_score=$((compliance_score + 1))
    else
        echo "❌ $file - MISSING"
    fi
done

echo ""

# Check workflow enforcement
echo "🔄 Checking workflow enforcement..."
workflow_files=(
    "project_detector.md"
    "init_system.md"
    "PROJECT_DETECTION.md"
)

for file in "${workflow_files[@]}"; do
    total_checks=$((total_checks + 1))
    if [ -f "$AGENT_DIR/$file" ]; then
        echo "✅ $file - Found"
        compliance_score=$((compliance_score + 1))
    else
        echo "❌ $file - MISSING"
    fi
done

echo ""

# Calculate compliance percentage
compliance_percentage=$(( (compliance_score * 100) / total_checks ))

echo "📊 COMPLIANCE RESULTS"
echo "===================="
echo "Score: $compliance_score/$total_checks ($compliance_percentage%)"

if [ $compliance_percentage -eq 100 ]; then
    echo "🏆 FULLY COMPLIANT - Strict enforcement active"
    echo "✅ All mandatory files and workflows present"
    echo "🔒 Project operates under strict compliance framework"
    exit 0
elif [ $compliance_percentage -ge 80 ]; then
    echo "⚠️  PARTIALLY COMPLIANT - Some components missing"
    echo "❗ Strict enforcement may be compromised"
    exit 1
else
    echo "🚨 NON-COMPLIANT - Critical components missing"
    echo "❌ Strict enforcement cannot be guaranteed"
    exit 2
fi

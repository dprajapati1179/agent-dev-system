#!/bin/bash

# Universal Agent System Scanner
# Finds all projects using the agent-dev-system

echo "🔍 Scanning for Universal Agent System usage..."
echo "============================================"

# Default search directories
SEARCH_DIRS="$HOME/projects $HOME/work $HOME/dev $HOME/Desktop $HOME/Documents"

# You can customize these paths
if [ -f "$HOME/.agent-search-paths" ]; then
    SEARCH_DIRS=$(cat "$HOME/.agent-search-paths")
fi

total_found=0

for dir in $SEARCH_DIRS; do
    if [ -d "$dir" ]; then
        echo "📁 Scanning $dir..."
        
        # Find IDENTITY.md files (most reliable indicator)
        find "$dir" -name "IDENTITY.md" -type f 2>/dev/null | while read identity_file; do
            project_dir=$(dirname $(dirname "$identity_file"))
            project_name=$(basename "$project_dir")
            
            # Check if it's a complete agent system
            agent_dir="$project_dir/agent-dev-system"
            if [ -f "$agent_dir/agent.md" ] && [ -f "$agent_dir/USAGE.md" ]; then
                echo "✅ Found complete agent system in: $project_name"
                echo "   📍 Path: $project_dir"
                echo "   📊 Agent files: $(ls "$agent_dir"/*.md 2>/dev/null | wc -l) files"
                echo "   📅 Last modified: $(stat -c %y "$identity_file" 2>/dev/null || stat -f %Sm "$identity_file" 2>/dev/null)"
                echo ""
                total_found=$((total_found + 1))
            else
                echo "⚠️  Partial agent system in: $project_name"
                echo "   📍 Path: $project_dir"
                echo ""
            fi
        done
    fi
done

echo "============================================"
echo "📊 Scan Summary"
echo "Total agent systems found: $total_found"
echo "Scan completed: $(date)"

# Optional: Create a report file
if [ "$1" = "--report" ]; then
    report_file="$HOME/agent-systems-report-$(date +%Y%m%d).txt"
    echo "📝 Generating report: $report_file"
    
    {
        echo "Universal Agent System Usage Report"
        echo "=================================="
        echo "Generated: $(date)"
        echo ""
        
        for dir in $SEARCH_DIRS; do
            if [ -d "$dir" ]; then
                find "$dir" -name "IDENTITY.md" -type f 2>/dev/null | while read identity_file; do
                    project_dir=$(dirname $(dirname "$identity_file"))
                    project_name=$(basename "$project_dir")
                    agent_dir="$project_dir/agent-dev-system"
                    
                    if [ -f "$agent_dir/agent.md" ] && [ -f "$agent_dir/USAGE.md" ]; then
                        echo "Project: $project_name"
                        echo "Path: $project_dir"
                        echo "Agent files: $(ls "$agent_dir"/*.md 2>/dev/null | wc -l) files"
                        echo "Last modified: $(stat -c %y "$identity_file" 2>/dev/null || stat -f %Sm "$identity_file" 2>/dev/null)"
                        echo ""
                    fi
                done
            fi
        done
    } > "$report_file"
    
    echo "Report saved to: $report_file"
fi

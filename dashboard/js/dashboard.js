// Main Dashboard JavaScript
// Handles UI interactions and data display

class Dashboard {
    constructor() {
        this.dataManager = dataManager;
        this.charts = {};
        this.currentView = 'usage';
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadDashboard();
        this.startRealTimeUpdates();
    }

    // Bind event listeners
    bindEvents() {
        // Refresh button
        const refreshBtn = document.getElementById('refreshData');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.refreshData();
            });
        }

        // Generate report button
        const generateReportBtn = document.getElementById('generateReport');
        if (generateReportBtn) {
            generateReportBtn.addEventListener('click', () => {
                this.generateReport();
            });
        }

        // Time range selector
        const timeRange = document.getElementById('timeRange');
        if (timeRange) {
            timeRange.addEventListener('change', (e) => {
                this.updateTimeRange(e.target.value);
            });
        }

        // Project search
        const projectSearch = document.getElementById('projectSearch');
        if (projectSearch) {
            projectSearch.addEventListener('input', (e) => {
                this.filterProjects(e.target.value);
            });
        }

        // Agent filter
        const agentFilter = document.getElementById('agentFilter');
        if (agentFilter) {
            agentFilter.addEventListener('change', (e) => {
                this.filterByAgent(e.target.value);
            });
        }

        // Modal close
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Close modal on outside click
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    this.closeModal();
                }
            });
        }
    }

    // Load dashboard data
    loadDashboard() {
        this.updateOverviewStats();
        this.renderProjects();
        this.renderAnalytics();
        this.renderTasks();
        this.renderCompliance();
    }

    // Update overview statistics
    updateOverviewStats() {
        const stats = this.dataManager.getDashboardStats();

        // Update header stats
        document.getElementById('totalProjects').textContent = stats.totalProjects;
        document.getElementById('activeAgents').textContent = stats.activeAgents;
        document.getElementById('tasksCompleted').textContent = stats.tasksCompletedToday;

        // Update overview cards
        document.getElementById('overviewProjects').textContent = stats.totalProjects;
        document.getElementById('overviewSessions').textContent = stats.activeAgents;
        document.getElementById('overviewTasks').textContent = stats.tasksCompletedToday;
        document.getElementById('overviewCompliance').textContent = `${stats.complianceRate}%`;

        // Update change indicators (simulate)
        this.updateChangeIndicators();
    }

    // Update change indicators
    updateChangeIndicators() {
        const changes = {
            projectChange: '+12%',
            sessionChange: '+8%',
            taskChange: '+23%',
            complianceChange: '+2%'
        };

        Object.keys(changes).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = changes[key];
                element.className = `card-change ${changes[key].startsWith('+') ? 'positive' : 'negative'}`;
            }
        });
    }

    // Render projects grid
    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        const projects = this.dataManager.projects;

        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    // Create project card element
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => this.showProjectDetails(project);

        const statusClass = project.status === 'active' ? 'status-active' : 'status-inactive';

        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-name">${project.name}</h3>
                <span class="project-status ${statusClass}">${project.status}</span>
            </div>
            <div class="project-agents">
                ${project.agentsUsed.map(agent =>
            `<span class="agent-tag">${this.getAgentDisplayName(agent)}</span>`
        ).join('')}
            </div>
            <div class="project-stats">
                <div class="project-stat">
                    <span class="project-stat-label">Tasks:</span>
                    <span class="project-stat-value">${project.stats.tasksCompleted}</span>
                </div>
                <div class="project-stat">
                    <span class="project-stat-label">Compliance:</span>
                    <span class="project-stat-value">${project.stats.complianceScore}%</span>
                </div>
                <div class="project-stat">
                    <span class="project-stat-label">Type:</span>
                    <span class="project-stat-value">${project.type}</span>
                </div>
                <div class="project-stat">
                    <span class="project-stat-label">Last Active:</span>
                    <span class="project-stat-value">${this.formatTime(project.lastActivity)}</span>
                </div>
            </div>
        `;

        return card;
    }

    // Get display name for agent type
    getAgentDisplayName(agentType) {
        const names = {
            developer: 'Dev',
            reviewer: 'Review',
            tester: 'Test',
            documentation: 'Docs',
            orchestrator: 'Orch',
            planner: 'Plan',
            research: 'Res',
            error_handler: 'Error'
        };
        return names[agentType] || agentType;
    }

    // Render analytics section
    renderAnalytics() {
        this.renderAgentChart();
        this.renderAgentStats();
    }

    // Render agent usage chart
    renderAgentChart() {
        const ctx = document.getElementById('agentChart').getContext('2d');

        if (this.charts.agentChart) {
            this.charts.agentChart.destroy();
        }

        const agents = this.dataManager.agents;
        const chartData = {
            labels: agents.map(a => a.name),
            datasets: [{
                label: 'Usage Count',
                data: agents.map(a => a.usageCount),
                backgroundColor: [
                    '#2563eb',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6'
                ],
                borderWidth: 0
            }]
        };

        this.charts.agentChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    }
                }
            }
        });
    }

    // Render agent statistics list
    renderAgentStats() {
        const statsList = document.getElementById('agentStatsList');
        const agents = this.dataManager.agents;

        statsList.innerHTML = '';

        agents.forEach(agent => {
            const statItem = document.createElement('div');
            statItem.className = 'agent-stat-item';

            statItem.innerHTML = `
                <div class="agent-stat-name">${agent.name}</div>
                <div class="agent-stat-value">${agent.usageCount}</div>
            `;

            statsList.appendChild(statItem);
        });
    }

    // Render tasks section
    renderTasks() {
        this.updateTaskSummary();
        this.renderTasksList();
    }

    // Update task summary
    updateTaskSummary() {
        const tasks = this.dataManager.tasks;
        const inProgress = tasks.filter(t => t.status === 'in-progress');
        const completedToday = this.dataManager.getTasksByTimeRange('today')
            .filter(t => t.status === 'completed');
        const failed = tasks.filter(t => t.status === 'failed');

        document.getElementById('inProgressCount').textContent = inProgress.length;
        document.getElementById('completedTodayCount').textContent = completedToday.length;
        document.getElementById('failedCount').textContent = failed.length;
    }

    // Render tasks list
    renderTasksList(filter = 'all') {
        const tasksList = document.getElementById('tasksList');
        let tasks = this.dataManager.tasks;

        if (filter !== 'all') {
            tasks = tasks.filter(t => t.status === filter);
        }

        tasksList.innerHTML = '';

        if (tasks.length === 0) {
            tasksList.innerHTML = '<div class="no-tasks">No tasks found</div>';
            return;
        }

        tasks.forEach(task => {
            const taskItem = this.createTaskItem(task);
            tasksList.appendChild(taskItem);
        });
    }

    // Create task item element
    createTaskItem(task) {
        const item = document.createElement('div');
        item.className = `task-item status-${task.status}`;

        const project = this.dataManager.projects.find(p => p.id === task.project);
        const projectName = project ? project.name : 'Unknown Project';

        item.innerHTML = `
            <div class="task-info">
                <div class="task-title">${task.title}</div>
                <div class="task-meta">
                    ${projectName} • ${this.getAgentDisplayName(task.agent)} • ${this.formatTime(task.createdAt)}
                </div>
            </div>
            <div class="task-status status-${task.status}">
                ${task.status.replace('-', ' ')}
            </div>
        `;

        return item;
    }

    // Render compliance section
    renderCompliance() {
        const compliance = this.dataManager.complianceData;

        // Update compliance score
        const score = compliance.overallScore || 0;
        document.getElementById('complianceScore').textContent = `${score}%`;
        document.getElementById('complianceScore').parentElement.style.setProperty('--score', score);

        // Update compliance breakdown
        document.getElementById('compliantProjects').textContent = compliance.compliantProjects || '0/0';
        document.getElementById('violationsToday').textContent = compliance.violationsToday || '0';
        document.getElementById('auditScore').textContent = compliance.auditScore || 'A+';

        // Update status indicator
        this.updateComplianceStatus(score);

        // Render alerts
        this.renderComplianceAlerts();
    }

    // Update compliance status indicator
    updateComplianceStatus(score) {
        const indicator = document.getElementById('complianceIndicator');
        const statusText = document.getElementById('complianceStatusText');

        indicator.className = 'status-indicator';

        if (score >= 90) {
            indicator.classList.add('success');
            statusText.textContent = 'Excellent';
        } else if (score >= 70) {
            indicator.classList.add('warning');
            statusText.textContent = 'Good';
        } else {
            indicator.classList.add('danger');
            statusText.textContent = 'Needs Attention';
        }
    }

    // Render compliance alerts
    renderComplianceAlerts() {
        const alertsContainer = document.getElementById('complianceAlerts');
        const violations = this.dataManager.complianceData.violationsToday || 0;

        alertsContainer.innerHTML = '';

        if (violations > 0) {
            const alert = document.createElement('div');
            alert.className = 'compliance-alert';
            alert.innerHTML = `
                <div class="alert-title">Compliance Violations Detected</div>
                <div class="alert-message">${violations} violations found today. Review required.</div>
            `;
            alertsContainer.appendChild(alert);
        } else {
            const alert = document.createElement('div');
            alert.className = 'compliance-alert';
            alert.style.borderLeftColor = '#10b981';
            alert.innerHTML = `
                <div class="alert-title">All Systems Compliant</div>
                <div class="alert-message">No compliance violations detected today.</div>
            `;
            alertsContainer.appendChild(alert);
        }
    }

    // Show project details modal
    showProjectDetails(project) {
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalProjectName');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = project.name;

        modalBody.innerHTML = `
            <div class="project-details">
                <div class="detail-section">
                    <h4>Project Information</h4>
                    <p><strong>Type:</strong> ${project.type}</p>
                    <p><strong>Path:</strong> ${project.path}</p>
                    <p><strong>Status:</strong> ${project.status}</p>
                    <p><strong>Last Activity:</strong> ${this.formatTime(project.lastActivity)}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Technology Stack</h4>
                    <div class="tech-tags">
                        ${project.technology.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Agents Used</h4>
                    <div class="agent-tags">
                        ${project.agentsUsed.map(agent =>
            `<span class="agent-tag">${this.getAgentDisplayName(agent)}</span>`
        ).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Statistics</h4>
                    <p><strong>Tasks Completed:</strong> ${project.stats.tasksCompleted}</p>
                    <p><strong>Compliance Score:</strong> ${project.stats.complianceScore}%</p>
                    <p><strong>Last Scan:</strong> ${this.formatTime(project.stats.lastScan)}</p>
                </div>
            </div>
        `;

        modal.style.display = 'block';
    }

    // Close modal
    closeModal() {
        document.getElementById('projectModal').style.display = 'none';
    }

    // Filter projects
    filterProjects(searchTerm) {
        const projects = this.dataManager.projects;
        const filtered = projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.type.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';

        filtered.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    // Filter by agent
    filterByAgent(agentType) {
        const projects = this.dataManager.getProjectsByAgent(agentType);

        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    // Filter tasks
    filterTasks(status) {
        this.renderTasksList(status);

        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    // Switch analytics view
    switchView(view) {
        this.currentView = view;

        // Update toggle buttons
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // Re-render analytics based on view
        this.renderAnalytics();
    }

    // Update time range
    updateTimeRange(range) {
        // Update dashboard based on time range
        this.loadDashboard();
    }

    // Refresh data
    refreshData() {
        this.dataManager.updateRealTimeData();
        this.loadDashboard();

        // Show refresh animation
        const refreshBtn = document.getElementById('refreshData');
        const icon = refreshBtn.querySelector('i');
        icon.style.animation = 'spin 1s linear';

        setTimeout(() => {
            icon.style.animation = '';
        }, 1000);
    }

    // Generate report
    generateReport() {
        const data = this.dataManager.exportData('json');
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `agent-dashboard-report-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Start real-time updates
    startRealTimeUpdates() {
        setInterval(() => {
            this.dataManager.updateRealTimeData();
            this.loadDashboard();
        }, 30000); // Update every 30 seconds
    }

    // Format time for display
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
        return date.toLocaleDateString();
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new Dashboard();
});

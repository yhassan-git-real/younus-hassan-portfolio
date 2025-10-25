import React from 'react';
import { FiDatabase, FiServer, FiTrendingUp, FiShield, FiZap, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Database Performance Optimization',
      description: 'Led a comprehensive performance tuning initiative across 50+ production databases, implementing indexing strategies, query optimization, and resource management that resulted in 40% improvement in query execution times.',
      icon: <FiTrendingUp size={28} />,
      color: 'from-blue-500 to-blue-700',
      technologies: ['MS SQL Server', 'T-SQL', 'Index Tuning', 'Execution Plans'],
      highlights: [
        'Reduced average query response time by 40%',
        'Optimized 200+ stored procedures',
        'Implemented intelligent indexing strategies',
        'Decreased CPU utilization by 25%',
      ],
    },
    {
      title: 'High Availability Architecture Implementation',
      description: 'Designed and implemented AlwaysOn Availability Groups for mission-critical databases, ensuring 99.99% uptime and seamless failover capabilities across multiple data centers.',
      icon: <FiServer size={28} />,
      color: 'from-purple-500 to-purple-700',
      technologies: ['AlwaysOn AG', 'Failover Clustering', 'Load Balancing', 'Windows Server'],
      highlights: [
        'Achieved 99.99% database availability',
        'Zero data loss during failovers',
        'Reduced RTO from 2 hours to 5 minutes',
        'Implemented cross-datacenter replication',
      ],
    },
    {
      title: 'Automated Backup & Recovery System',
      description: 'Developed a comprehensive automated backup solution using PowerShell and T-SQL, managing 100+ databases with customized retention policies and automated recovery testing.',
      icon: <FiShield size={28} />,
      color: 'from-pink-500 to-pink-700',
      technologies: ['PowerShell', 'T-SQL', 'SQL Agent', 'Azure Blob Storage'],
      highlights: [
        'Automated backup for 100+ databases',
        'Reduced backup window by 60%',
        'Implemented automated restore testing',
        'Integrated cloud-based backup storage',
      ],
    },
    {
      title: 'Database Migration & Consolidation',
      description: 'Successfully migrated 30+ legacy databases to newer SQL Server versions with zero downtime, including data validation, compatibility testing, and performance benchmarking.',
      icon: <FiDatabase size={28} />,
      color: 'from-cyan-500 to-cyan-700',
      technologies: ['Database Migration', 'SSIS', 'Data Validation', 'Compatibility Testing'],
      highlights: [
        'Zero-downtime migration strategy',
        'Migrated 5TB+ of production data',
        'Reduced infrastructure costs by 30%',
        'Improved overall system performance',
      ],
    },
    {
      title: 'Real-time Monitoring Dashboard',
      description: 'Built a comprehensive monitoring solution to track database health, performance metrics, and alert on critical issues, reducing MTTR by 70% through proactive monitoring.',
      icon: <FiZap size={28} />,
      color: 'from-green-500 to-green-700',
      technologies: ['PowerShell', 'T-SQL', 'SSRS', 'Custom Scripts'],
      highlights: [
        'Real-time performance monitoring',
        'Reduced MTTR by 70%',
        'Proactive alerting system',
        'Custom dashboards for stakeholders',
      ],
    },
    {
      title: 'Security Hardening & Compliance',
      description: 'Implemented comprehensive security measures including encryption, access controls, and audit mechanisms to ensure compliance with industry standards and protect sensitive data.',
      icon: <FiShield size={28} />,
      color: 'from-orange-500 to-orange-700',
      technologies: ['TDE', 'Row-Level Security', 'Always Encrypted', 'SQL Audit'],
      highlights: [
        'Implemented TDE for all critical DBs',
        'Achieved compliance with security standards',
        'Reduced security vulnerabilities by 85%',
        'Automated compliance reporting',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Notable database administration projects and achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-border p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                      <span className="text-purple-400 mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs hover:bg-slate-700 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

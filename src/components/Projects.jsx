import React from 'react';
import { FiDatabase, FiServer, FiTrendingUp, FiShield, FiZap, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'SQL Server Database Migration 2016 to 2022',
      description: 'Successfully executed large-scale database migration from SQL Server 2016 to 2022, ensuring minimal downtime, data integrity, and seamless transition for production environments.',
      icon: <FiServer size={28} />,
      color: 'from-emerald-500 to-emerald-700',
      technologies: ['SQL Server 2016', 'SQL Server 2022', 'Migration', 'Backup & Recovery', 'T-SQL'],
      highlights: [
        'Migrated multiple production databases',
        'Achieved minimal downtime during cutover',
        'Ensured complete data integrity',
        'Validated compatibility and performance',
      ],
    },
    {
      title: 'SA Password Rotation Automation',
      description: 'Automated SA password rotation across 100+ SQL Server instances using PowerShell and T-SQL, eliminating manual effort and improving security compliance across the organization.',
      icon: <FiShield size={28} />,
      color: 'from-blue-500 to-blue-700',
      technologies: ['PowerShell', 'T-SQL', 'SQL Server', 'Automation'],
      highlights: [
        'Automated password rotation for 100+ instances',
        'Eliminated manual credential management',
        'Improved security compliance',
        'Reduced security risk exposure',
      ],
    },
    {
      title: 'ETL Automation Project',
      description: 'Developed automated ETL workflows using T-SQL, .NET 8.0, and C# to import multiple CSV and Excel files. Reduced manual data ingestion effort by 60% through streamlined automation.',
      icon: <FiZap size={28} />,
      color: 'from-purple-500 to-purple-700',
      technologies: ['.NET 8.0', 'C#', 'T-SQL', 'ETL', 'SQL Server'],
      highlights: [
        'Reduced manual effort by 60%',
        'Automated CSV and Excel file imports',
        'Streamlined data loading workflows',
        'Improved data ingestion efficiency',
      ],
    },
    {
      title: 'Security Patching & Vulnerability Reduction',
      description: 'Led rigorous monthly security patching initiative across 200+ SQL Server environments and other database instances, reducing vulnerability exposure by 40%.',
      icon: <FiShield size={28} />,
      color: 'from-pink-500 to-pink-700',
      technologies: ['SQL Server', 'Security', 'Patch Management', 'Compliance'],
      highlights: [
        'Reduced vulnerability by 40%',
        'Managed 200+ server environments',
        'Monthly security patching cycle',
        'Enhanced overall security posture',
      ],
    },
    {
      title: 'Database Performance Optimization',
      description: 'Optimized database performance through execution plan analysis, index tuning, and T-SQL query optimization, achieving a 15% reduction in query response time.',
      icon: <FiTrendingUp size={28} />,
      color: 'from-cyan-500 to-cyan-700',
      technologies: ['T-SQL', 'Index Tuning', 'Execution Plans', 'Performance Analysis'],
      highlights: [
        '15% reduction in query response time',
        'Execution plan analysis and optimization',
        'Index creation and modification',
        'Improved application performance',
      ],
    },
    {
      title: 'Monitoring & Alerting Automation',
      description: 'Implemented automated alerting systems for locked accounts, job failures, and critical reports, reducing manual monitoring effort by 40% and improving response times.',
      icon: <FiZap size={28} />,
      color: 'from-orange-500 to-orange-700',
      technologies: ['PowerShell', 'SQL Agent', 'Monitoring', 'Automation'],
      highlights: [
        'Reduced manual monitoring by 40%',
        'Automated critical alerts',
        'Improved incident response time',
        'Proactive issue detection',
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-16 bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Notable database administration projects and achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-border p-5 group hover:scale-[1.02] transition-all duration-200"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200`}>
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

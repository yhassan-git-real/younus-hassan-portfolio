import React from 'react';
import { FiDatabase, FiServer, FiCode, FiTool, FiGitBranch, FiCloud, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Core Database Technologies',
      icon: <FiDatabase size={24} />,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'MS SQL Server (2008-2022)' },
        { name: 'T-SQL & Query Optimization' },
        { name: 'Database Design & Modeling' },
        { name: 'Performance Tuning' },
        { name: 'Index Management' },
        { name: 'Execution Plan Analysis' },
      ],
    },
    {
      category: 'High Availability & Disaster Recovery',
      icon: <FiServer size={24} />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'Backup & Recovery Strategies' },
        { name: 'Point-in-Time Recovery' },
        { name: 'Database Refresh Activities' },
        { name: 'Database Migration & Upgrades' },
        { name: 'Disaster Recovery Planning' },
        { name: 'High Availability Solutions' },
      ],
    },
    {
      category: 'Scripting & Automation',
      icon: <FiCode size={24} />,
      color: 'from-pink-500 to-pink-700',
      skills: [
        { name: 'PowerShell Scripting' },
        { name: 'T-SQL Scripting' },
        { name: 'Task Automation' },
        { name: 'SSIS (ETL)' },
        { name: 'SQL Server Agent Jobs' },
        { name: 'Job Scheduling & Monitoring' },
      ],
    },
    {
      category: 'Tools & Cloud Platforms',
      icon: <FiTool size={24} />,
      color: 'from-cyan-500 to-cyan-700',
      skills: [
        { name: 'SQL Server Management Studio' },
        { name: 'AWS RDS & EC2' },
        { name: 'SQL Profiler' },
        { name: 'Terraform' },
        { name: 'GitHub' },
        { name: 'ServiceNow & LogicMonitor' },
      ],
    },
  ];

  const additionalSkills = [
    'Multi-Database Support (MySQL, PostgreSQL, Oracle)',
    'Database Security & Compliance',
    'Performance Tuning & Index Management',
    'Database Migration & Upgrades',
    'AWS Cloud (RDS, EC2, S3, CloudWatch)',
    'Troubleshooting & Problem-solving',
    'ITIL Change Management',
    'Cross-team Collaboration',
    '24/7 On-Call Support',
    'Windows & Basic Linux',
    'Basic C# & .NET Development',
  ];

  return (
    <section id="skills" className="relative py-16 bg-slate-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in database administration and related technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-5 hover:scale-[1.01] transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 hover:border-${category.color.split('-')[1]}-500 hover:bg-slate-800 transition-all duration-300`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="gradient-border p-6">
          <h3 className="text-2xl font-bold text-white mb-5 text-center">
            Additional <span className="gradient-text">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { FiDatabase, FiServer, FiCode, FiTool, FiGitBranch, FiCloud, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Database Technologies',
      icon: <FiDatabase size={24} />,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'MS SQL Server (2008-2022)', level: 90, icon: <FiDatabase /> },
        { name: 'T-SQL & Query Optimization', level: 88 },
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 68 },
        { name: 'Oracle 19c', level: 65 },
        { name: 'Database Design & Modeling', level: 80 },
      ],
    },
    {
      category: 'AWS Cloud & High Availability',
      icon: <FiCloud size={24} />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'AWS RDS', level: 80, icon: <FiCloud /> },
        { name: 'AWS EC2 & S3', level: 75 },
        { name: 'AWS Multi-AZ (HA)', level: 70 },
        { name: 'AWS CloudWatch', level: 72 },
        { name: 'Backup & Recovery', level: 90 },
        { name: 'Disaster Recovery Planning', level: 75 },
      ],
    },
    {
      category: 'Scripting & Automation',
      icon: <FiCode size={24} />,
      color: 'from-pink-500 to-pink-700',
      skills: [
        { name: 'PowerShell', level: 85, icon: <FiTerminal /> },
        { name: 'T-SQL Scripting', level: 88 },
        { name: 'PL/SQL', level: 65 },
        { name: 'Basic C# & .NET 8.0', level: 60 },
        { name: 'Task Automation', level: 82 },
        { name: 'SSIS (ETL)', level: 75 },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: <FiTool size={24} />,
      color: 'from-cyan-500 to-cyan-700',
      skills: [
        { name: 'SSMS', level: 92 },
        { name: 'SQL Profiler & Execution Plans', level: 85 },
        { name: 'Terraform', level: 70 },
        { name: 'GitHub', level: 75, icon: <FiGitBranch /> },
        { name: 'ServiceNow & LogicMonitor', level: 78 },
        { name: 'PgAdmin & SSRS', level: 72 },
      ],
    },
  ];

  const additionalSkills = [
    'Database Security & Compliance',
    'Performance Tuning & Index Management',
    'Database Migration & Upgrades',
    'Troubleshooting & Problem-solving',
    'ITIL Change Management',
    'Cross-team Collaboration',
    '24/7 On-Call Support',
    'Windows & Basic Linux',
  ];

  return (
    <section id="skills" className="relative py-20 bg-slate-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in database administration and related technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-6 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon && <span className="text-slate-400">{skill.icon}</span>}
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="gradient-border p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
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

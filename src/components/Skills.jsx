import React from 'react';
import { FiDatabase, FiServer, FiCode, FiTool, FiGitBranch, FiCloud, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Database Technologies',
      icon: <FiDatabase size={24} />,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'MS SQL Server', level: 95, icon: <FiDatabase /> },
        { name: 'T-SQL', level: 90 },
        { name: 'Database Design', level: 88 },
        { name: 'Query Optimization', level: 92 },
        { name: 'Performance Tuning', level: 90 },
        { name: 'Index Management', level: 87 },
      ],
    },
    {
      category: 'High Availability & DR',
      icon: <FiServer size={24} />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'AlwaysOn Availability Groups', level: 85 },
        { name: 'Database Mirroring', level: 82 },
        { name: 'Replication', level: 88 },
        { name: 'Backup & Recovery', level: 95 },
        { name: 'Disaster Recovery Planning', level: 86 },
        { name: 'Failover Clustering', level: 80 },
      ],
    },
    {
      category: 'Scripting & Automation',
      icon: <FiCode size={24} />,
      color: 'from-pink-500 to-pink-700',
      skills: [
        { name: 'PowerShell', level: 85, icon: <FiTerminal /> },
        { name: 'Python', level: 75, icon: <FiCode /> },
        { name: 'T-SQL Scripting', level: 92 },
        { name: 'SSIS (ETL)', level: 80 },
        { name: 'Task Automation', level: 88 },
        { name: 'Job Scheduling', level: 90 },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: <FiTool size={24} />,
      color: 'from-cyan-500 to-cyan-700',
      skills: [
        { name: 'SSMS', level: 95 },
        { name: 'SSRS', level: 78 },
        { name: 'Azure SQL Database', level: 75, icon: <FiCloud /> },
        { name: 'Git', level: 82, icon: <FiGitBranch /> },
        { name: 'SQL Profiler', level: 88 },
        { name: 'Extended Events', level: 85 },
      ],
    },
  ];

  const additionalSkills = [
    'Database Security & Compliance',
    'Capacity Planning',
    'Database Migration',
    'Troubleshooting',
    'Documentation',
    'Team Collaboration',
    '24/7 On-Call Support',
    'Agile Methodology',
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

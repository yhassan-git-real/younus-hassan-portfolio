import React from 'react';
import { FiDatabase, FiServer, FiCode, FiTool, FiGitBranch, FiCloud, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Core Database Technologies',
      icon: <FiDatabase size={24} />,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'MS SQL Server (2008-2022)', proficiency: 88 },
        { name: 'T-SQL & Query Optimization', proficiency: 87 },
        { name: 'Database Design & Modeling', proficiency: 85 },
        { name: 'Performance Tuning', proficiency: 89 },
        { name: 'Index Management', proficiency: 86 },
        { name: 'Execution Plan Analysis', proficiency: 84 },
      ],
    },
    {
      category: 'High Availability & Disaster Recovery',
      icon: <FiServer size={24} />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'Backup & Recovery Strategies', proficiency: 89 },
        { name: 'Point-in-Time Recovery', proficiency: 87 },
        { name: 'Database Refresh Activities', proficiency: 85 },
        { name: 'Database Migration & Upgrades', proficiency: 83 },
        { name: 'Disaster Recovery Planning', proficiency: 82 },
        { name: 'High Availability Solutions', proficiency: 80 },
      ],
    },
    {
      category: 'Scripting & Automation',
      icon: <FiCode size={24} />,
      color: 'from-pink-500 to-pink-700',
      skills: [
        { name: 'PowerShell Scripting', proficiency: 83 },
        { name: 'T-SQL Scripting', proficiency: 88 },
        { name: 'Task Automation', proficiency: 85 },
        { name: 'SSIS (ETL)', proficiency: 78 },
        { name: 'SQL Server Agent Jobs', proficiency: 87 },
        { name: 'Job Scheduling & Monitoring', proficiency: 86 },
      ],
    },
    {
      category: 'Tools & Cloud Platforms',
      icon: <FiTool size={24} />,
      color: 'from-cyan-500 to-cyan-700',
      skills: [
        { name: 'SQL Server Management Studio', proficiency: 89 },
        { name: 'AWS RDS & EC2', proficiency: 76 },
        { name: 'SQL Profiler', proficiency: 83 },
        { name: 'Terraform', proficiency: 70 },
        { name: 'GitHub', proficiency: 78 },
        { name: 'ServiceNow & LogicMonitor', proficiency: 81 },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-4 sm:p-5 hover:scale-[1.01] transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <span
                      className={`px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 hover:border-${category.color.split('-')[1]}-500 hover:bg-slate-800 transition-all duration-300 cursor-pointer inline-block`}
                    >
                      {skill.name}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      <div className="text-xs text-slate-400 mb-1">Proficiency Level</div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-white">{skill.proficiency}%</span>
                      </div>
                    </div>
                  </div>
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

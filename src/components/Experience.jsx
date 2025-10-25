import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: 'Tata Consultancy Services (TCS)',
      position: 'System Engineer | MS SQL DBA',
      duration: 'Dec 2021 - Present',
      location: 'Kolkata, India',
      type: 'Full-time',
      responsibilities: [
        'Managed 200+ production and non-production SQL Server environments (2012-2022), including AWS RDS and EC2 instances',
        'Reduced vulnerability exposure by 40% through rigorous monthly security patching across all database environments',
        'Optimized database performance through execution plan analysis and index tuning, achieving 15% reduction in query response time',
        'Performed SQL Server upgrades and migrations (2012/2014/2016 to 2019/2022) with zero downtime',
        'Configured and managed backup jobs with point-in-time recovery across production environments',
        'Provided L1 operational support for MySQL, PostgreSQL, and Oracle databases including monitoring and security patching',
        'Automated routine DBA tasks using PowerShell and T-SQL scripts, reducing manual monitoring by 40%',
        'Supported AWS RDS Multi-AZ (HA) setups and annual isolated disaster recovery exercises',
        'Delivered production deployments through ITIL-based change management processes',
        'Provided 24/7 on-call support for critical production databases, resolving incidents within SLAs',
      ],
      technologies: ['MS SQL Server', 'AWS RDS', 'AWS EC2', 'PowerShell', 'T-SQL', 'MySQL', 'PostgreSQL', 'Oracle', 'Terraform', 'ServiceNow'],
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey in database administration and management
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
              )}

              {/* Experience Card */}
              <div className="gradient-border p-6 md:p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                    <FiBriefcase size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="text-xl text-blue-400 font-semibold mb-3">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-2">
                          <FiCalendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiMapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-300 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-slate-400">
                            <span className="text-purple-400 mt-1">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-300 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

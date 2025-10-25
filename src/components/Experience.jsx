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
        'Performed SQL Server upgrades and migrations (2012/2014/2016 to 2019/2022) with minimal downtime',
        'Configured and managed backup jobs with point-in-time recovery across production environments',
        'Provided L1 operational support for MySQL, PostgreSQL, and Oracle databases including monitoring and security patching',
        'Automated routine DBA tasks using PowerShell and T-SQL scripts, reducing manual monitoring by 40%',
        'Delivered production deployments through ITIL-based change management processes',
        'Provided 24/7 on-call support for critical production databases, resolving incidents within SLAs',
      ],
      technologies: ['MS SQL Server', 'AWS RDS', 'AWS EC2', 'PowerShell', 'T-SQL', 'MySQL', 'PostgreSQL', 'Oracle', 'Terraform', 'ServiceNow'],
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="experience" className="relative py-16 bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey in database administration and management
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8">
              {/* Experience Card */}
              <div className="gradient-border overflow-hidden">
                {/* Header Section with Gradient Background */}
                <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-6 border-b border-slate-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                        <FiBriefcase size={24} />
                      </div>
                      
                      {/* Title & Company */}
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                          {exp.position}
                        </h3>
                        <div className="text-base sm:text-lg text-blue-400 font-semibold">
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center space-x-2 text-slate-300">
                        <FiCalendar size={16} className="text-blue-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-300">
                        <FiMapPin size={16} className="text-purple-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 font-medium">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-200 mb-3 sm:mb-4 flex items-center">
                      <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-2 sm:mr-3"></span>
                      Key Responsibilities
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2 sm:space-x-3 text-slate-400 text-xs sm:text-sm">
                          <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
                      <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></span>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-700/80 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
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

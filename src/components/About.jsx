import React from 'react';
import { FiAward, FiBriefcase, FiCode } from 'react-icons/fi';

const About = () => {
  const stats = [
    {
      icon: <FiBriefcase size={24} />,
      value: '3+',
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FiCode size={24} />,
      value: '200+',
      label: 'Servers Managed',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FiAward size={24} />,
      value: 'TCS',
      label: 'Current Company',
      color: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-900/50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Illustration */}
          <div className="relative">
            <div className="relative gradient-border p-8 rounded-2xl">
              <div className="space-y-6">
                {/* Database Schema Illustration */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full w-3/4"></div>
                  </div>
                  <div className="flex items-center space-x-4 pl-8">
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded-full w-2/3"></div>
                  </div>
                  <div className="flex items-center space-x-4 pl-16">
                    <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <div className="h-2 bg-gradient-to-r from-pink-500 to-transparent rounded-full w-1/2"></div>
                  </div>
                  <div className="flex items-center space-x-4 pl-8">
                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-transparent rounded-full w-2/3"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-transparent rounded-full w-3/4"></div>
                  </div>
                </div>

                {/* Code Block */}
                <div className="bg-slate-950/50 rounded-lg p-4 font-mono text-xs text-slate-400 space-y-1">
                  <div className="text-blue-400">SELECT *</div>
                  <div className="text-purple-400">FROM professionals</div>
                  <div className="text-pink-400">WHERE expertise = 'MS SQL'</div>
                  <div className="text-blue-400">AND experience {'>'} 3;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              I'm a dedicated MS SQL Server Database Administrator with 3+ years of hands-on experience 
              at <span className="text-purple-400 font-semibold">Tata Consultancy Services (TCS)</span>. 
              I specialize in managing large-scale SQL Server environments across on-premises and 
              <span className="text-blue-400 font-semibold"> AWS cloud platforms</span>, with expertise in 
              performance tuning, backup & recovery, and AWS Multi-AZ high availability setups.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              I've successfully managed <span className="text-purple-400 font-semibold">200+ production and non-production servers</span>, 
              including AWS RDS and EC2 instances. I also provide L1 operational support for 
              <span className="text-pink-400 font-semibold"> MySQL, PostgreSQL, and Oracle</span> databases, focusing on 
              security compliance, automation, and cross-functional collaboration.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-2`}>
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

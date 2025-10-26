import React, { useState, useEffect } from 'react';
import { FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import DatabaseHealthMonitor from './DatabaseHealthMonitor';
import DatabaseSchema from './DatabaseSchema';
import PerformanceMetrics from './PerformanceMetrics';

const About = () => {
  const [showQuery, setShowQuery] = useState(false);
  const [typedLines, setTypedLines] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecute = () => {
    if (isExecuting || showResult) return;
    
    setIsExecuting(true);
    setShowQuery(true);
    setTypedLines(0);
    setShowResult(false);
  };

  useEffect(() => {
    if (!isExecuting) return;
    
    if (typedLines < 5) {
      const lineTimer = setTimeout(() => {
        setTypedLines(prev => prev + 1);
      }, 600);
      return () => clearTimeout(lineTimer);
    }
    
    if (typedLines === 5) {
      const resultTimer = setTimeout(() => {
        setShowResult(true);
        setIsExecuting(false);
      }, 800);
      return () => clearTimeout(resultTimer);
    }
  }, [isExecuting, typedLines]);

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
    <section id="about" className="relative py-16 bg-slate-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Welcome Note - Full Width */}
          <div className="mb-10 gradient-border p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                👋
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Welcome to My Portfolio!</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  As a passionate Database Administrator, I believe that databases are the heartbeat of every application — 
                  and my mission is to keep them running smoothly, securely, and efficiently. Thank you for taking the time 
                  to explore my journey in the world of data management. Let's build something great together! 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Stats & Visual (40%) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Database Visual / SQL Query */}
              <div className="gradient-border p-6 h-fit">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></span>
                  SQL Query
                </h3>
                
                {!showQuery && !isExecuting && (
                  <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-4 mb-4 border border-blue-500/30">
                    <p className="text-slate-300 text-sm text-center leading-relaxed">
                      <span className="text-yellow-400 font-semibold">🔍 Seeking a Skilled Database Professional?</span>
                      <br />
                      <span className="text-slate-400 italic">Execute the query to discover your ideal DBA match! 🎯</span>
                    </p>
                  </div>
                )}
                
                <div className="bg-slate-950/70 rounded-lg overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="mac-dot mac-dot-red group cursor-pointer">
                        <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                      </div>
                      <div className="mac-dot mac-dot-yellow group cursor-pointer">
                        <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                      </div>
                      <div className="mac-dot mac-dot-green group cursor-pointer">
                        <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <button 
                      onClick={handleExecute}
                      className={`flex items-center gap-2 px-3 py-1 text-white text-xs rounded transition-all duration-200 ${
                        showResult 
                          ? 'bg-blue-600 cursor-default' 
                          : isExecuting
                          ? 'bg-yellow-600 cursor-wait'
                          : 'bg-green-600 hover:bg-green-700 cursor-pointer hover:scale-105'
                      }`}
                      disabled={isExecuting || showResult}
                    >
                      <span>{isExecuting ? '⏳' : showResult ? '✓' : '▶'}</span>
                      <span>{isExecuting ? 'Executing...' : showResult ? 'Completed' : 'Execute'}</span>
                    </button>
                  </div>
                  
                  {/* Query Editor */}
                  <div className="p-4 font-mono text-sm space-y-2">
                  {typedLines >= 1 && (
                    <div className="text-blue-400 animate-fade-in">
                      EXEC sp_FindPassionateDBA
                    </div>
                  )}
                  {typedLines >= 2 && (
                    <div className="text-purple-400 animate-fade-in">
                      {'  '}@Expertise = <span className="text-green-400">'MS SQL Server + AWS Cloud + Multi-DB'</span>,
                    </div>
                  )}
                  {typedLines >= 3 && (
                    <div className="text-pink-400 animate-fade-in">
                      {'  '}@YearsExp = <span className="text-yellow-400">3+</span>,
                    </div>
                  )}
                  {typedLines >= 4 && (
                    <div className="text-cyan-400 animate-fade-in">
                      {'  '}@PassionLevel = <span className="text-green-400">'EXTREME'</span>,
                    </div>
                  )}
                  {typedLines >= 5 && (
                    <div className="text-blue-400 animate-fade-in">
                      {'  '}@Approach = <span className="text-yellow-400">'PROACTIVE'</span>;
                    </div>
                  )}
                  
                  {showResult && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50 animate-slide-up">
                      <div className="text-green-400 mb-3 flex items-center gap-2 text-xs">
                        <span>✓ Stored Procedure Executed!</span>
                        <span className="text-slate-400">(0.003s)</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-bold text-lg">Hello!</span>
                            <span className="text-3xl animate-wave">👋</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-lg">I'm Younus Hassan</span>
                            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.3s' }}>😎</span>
                          </div>
                        </div>
                        <div className="text-xs text-purple-400 pl-3 flex items-center gap-2 italic">
                          <span>🛡️</span>
                          <span>Your Database Guardian</span>
                        </div>
                        <div className="text-xs text-cyan-400 pl-3 flex items-center gap-2">
                          <span>→</span>
                          <span>MS SQL Server DBA | TCS | Enterprise-Scale</span>
                        </div>
                        <div className="text-xs text-green-400 pl-3 flex items-center gap-2 animate-pulse">
                          <span>🌟</span>
                          <span className="font-semibold">Available for exciting DBA opportunities!</span>
                        </div>
                        <div className="text-xs text-amber-400 pl-3 flex items-start gap-2">
                          <span className="text-base flex-shrink-0 mt-0.5">💡</span>
                          <span className="italic leading-relaxed">"Many can read the data, but few can see its story and structural integrity. That's a DBA's true craft"</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!showResult && typedLines > 0 && (
                    <div className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-1"></div>
                  )}
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="gradient-border p-6 h-fit">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer transform"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                        {stat.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold text-xl gradient-text group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content (60%) */}
            <div className="lg:col-span-3">
              <div className="gradient-border p-6 md:p-8 space-y-6 h-full">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
                    Professional Summary
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    I'm a dedicated MS SQL Server Database Administrator with <span className="text-purple-400 font-semibold">3+ years of hands-on experience</span> at 
                    <span className="text-blue-400 font-semibold"> Tata Consultancy Services (TCS)</span>. 
                    I specialize in managing large-scale SQL Server environments across on-premises and 
                    <span className="text-cyan-400 font-semibold"> AWS cloud platforms</span>, with expertise in 
                    installation, migration, security management, backup & recovery, and performance tuning.
                  </p>
                </div>

                <div className="border-t border-slate-700/50 pt-5">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></span>
                    Cross-Platform Experience
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    Alongside core SQL Server expertise, I've also supported <span className="text-pink-400 font-semibold">MySQL, PostgreSQL, and Oracle</span> databases 
                    at the L1 level — giving me strong cross-platform exposure and a comprehensive understanding of diverse database ecosystems.
                  </p>
                </div>

                <div className="border-t border-slate-700/50 pt-5">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
                    Core Competencies
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-blue-400">▹</span>
                      <span>SQL Server Administration</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-purple-400">▹</span>
                      <span>Cloud Database Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-pink-400">▹</span>
                      <span>Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-cyan-400">▹</span>
                      <span>Security & Compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-blue-400">▹</span>
                      <span>Backup & Recovery</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-purple-400">▹</span>
                      <span>Database Migration</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-pink-400">▹</span>
                      <span>Upgradation & Patching</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-cyan-400">▹</span>
                      <span>Always On Availability Groups</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-blue-400">▹</span>
                      <span>Log Shipping</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-purple-400">▹</span>
                      <span>Monitoring & Alerting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Interactive Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Database Health Monitor */}
          <DatabaseHealthMonitor />
          
          {/* Performance Metrics */}
          <PerformanceMetrics />
        </div>

        {/* Database Schema - Full Width */}
        <div className="mt-8">
          <DatabaseSchema />
        </div>
      </div>
    </section>
  );
};

export default About;

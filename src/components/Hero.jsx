import React from 'react';
import { FiDatabase, FiServer, FiCode, FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 db-grid-bg">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm animate-slide-up">
            <FiDatabase className="animate-pulse" />
            <span>MS SQL Database Administrator</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight px-2">
            Hi, I'm{' '}
            <span className="gradient-text">
              Younus Hassan
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-3xl mx-auto px-4">
            Crafting robust database solutions with{' '}
            <span className="text-purple-400 font-semibold">3+ years</span> of expertise
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto px-4">
            Specializing in MS SQL Server optimization, AWS RDS management, performance tuning, and 
            multi-database support at Tata Consultancy Services
          </p>

          {/* Icon Grid */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="group flex flex-col items-center space-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <FiDatabase size={28} />
              </div>
              <span className="text-xs text-slate-400">Database</span>
            </div>
            <div className="group flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FiServer size={28} />
              </div>
              <span className="text-xs text-slate-400">Server</span>
            </div>
            <div className="group flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FiCode size={28} />
              </div>
              <span className="text-xs text-slate-400">Query</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-6 px-4 max-w-lg mx-auto">
            <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
              Get In Touch
            </a>
            <a 
              href="/Younus_Hassan_Resume_MS-SQL_DBA.pdf" 
              download="Younus_Hassan_Resume_MS-SQL_DBA.pdf"
              className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </a>
            <a href="#experience" className="btn-outline w-full sm:w-auto text-center">
              View Experience
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiArrowDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;

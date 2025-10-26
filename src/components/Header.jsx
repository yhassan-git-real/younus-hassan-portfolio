import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiActivity, FiZap, FiTrendingUp } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [queryTime, setQueryTime] = useState(0.003);
  const [uptime, setUptime] = useState(99.99);
  const [activeConnections, setActiveConnections] = useState(127);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setQueryTime((Math.random() * 0.009 + 0.001).toFixed(3));
      setUptime((99.95 + Math.random() * 0.04).toFixed(2));
      setActiveConnections(Math.floor(120 + Math.random() * 15));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              YH
            </div>
            <span className="hidden sm:block font-bold text-xl gradient-text">
              Younus Hassan
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Live Stats - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all group">
              <FiZap className="text-yellow-400" size={14} />
              <span className="text-xs text-slate-400">{queryTime}s</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-all group">
              <FiTrendingUp className="text-green-400" size={14} />
              <span className="text-xs text-slate-400">{uptime}%</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all group">
              <FiActivity className="text-blue-400" size={14} />
              <span className="text-xs text-slate-400">{activeConnections}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up bg-slate-900/98 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 mx-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-200 text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

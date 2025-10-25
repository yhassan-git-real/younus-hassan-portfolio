import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/younus-hassan',
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://linkedin.com/in/younus-hassan',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail size={20} />,
      href: 'mailto:younus.hassan@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
                YH
              </div>
              <span className="font-bold text-xl gradient-text">Younus Hassan</span>
            </div>
            <p className="text-slate-400 text-sm">
              MS SQL Database Administrator specializing in performance optimization, 
              high availability solutions, and enterprise database management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                About
              </a>
              <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Experience
              </a>
              <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Connect With Me</h3>
            <p className="text-slate-400 text-sm">
              Feel free to reach out for collaborations, opportunities, or just a chat about databases!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Younus Hassan. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center space-x-1">
              <span>Built with</span>
              <FiHeart className="text-pink-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

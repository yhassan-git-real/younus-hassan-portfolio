import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiBriefcase, FiDownload } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:yhassan.official04@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Opening your email client. If it doesn\'t open, please email me directly at yhassan.official04@gmail.com');
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'yhassan.official04@gmail.com',
      href: 'mailto:yhassan.official04@gmail.com',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: '+91-7903324228',
      href: 'tel:+917903324228',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Location',
      value: 'Kolkata, West Bengal',
      href: '#',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/younus-hassan',
      href: 'https://www.linkedin.com/in/younus-hassan',
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: <FiBriefcase size={24} />,
      label: 'Naukri Profile',
      value: 'View Profile',
      href: 'https://www.naukri.com/mnjuser/profile?id=&altresid',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  return (
    <section id="contact" className="relative py-16 bg-slate-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Info */}
          <div className="h-full">
            <div className="gradient-border p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const isExternal = info.label === 'LinkedIn' || info.label === 'Naukri Profile';
                  const isClickable = info.href !== '#';
                  
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group relative z-10 cursor-pointer"
                      target={isExternal ? '_blank' : '_self'}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      onClick={!isClickable ? (e) => e.preventDefault() : undefined}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm text-slate-400">{info.label}</div>
                        <div className="text-slate-200 font-medium break-all">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <div className="gradient-border p-6 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 relative overflow-hidden group"
                  onMouseDown={(e) => {
                    const button = e.currentTarget;
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                      position: absolute;
                      width: ${size}px;
                      height: ${size}px;
                      left: ${x}px;
                      top: ${y}px;
                      background: rgba(255, 255, 255, 0.5);
                      border-radius: 50%;
                      pointer-events: none;
                      animation: ripple 0.6s ease-out;
                    `;
                    
                    button.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                  }}
                >
                  <span className="relative z-10">Send Message</span>
                  <FiSend size={18} className="relative z-10" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

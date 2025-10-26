import React, { useState, useEffect } from 'react';
import { FiActivity, FiClock, FiZap, FiTrendingUp } from 'react-icons/fi';

const LiveActivityTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [queryTime, setQueryTime] = useState(0.003);
  const [uptime, setUptime] = useState(99.99);
  const [activeConnections, setActiveConnections] = useState(127);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setQueryTime((Math.random() * 0.009 + 0.001).toFixed(3));
      setUptime((99.95 + Math.random() * 0.04).toFixed(2));
      setActiveConnections(Math.floor(120 + Math.random() * 15));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const activities = [
    {
      icon: <FiZap size={16} />,
      label: 'Avg Query Time',
      value: `${queryTime}s`,
      color: 'text-yellow-400',
    },
    {
      icon: <FiTrendingUp size={16} />,
      label: 'System Uptime',
      value: `${uptime}%`,
      color: 'text-green-400',
    },
    {
      icon: <FiActivity size={16} />,
      label: 'Active Connections',
      value: activeConnections,
      color: 'text-blue-400',
    },
    {
      icon: <FiClock size={16} />,
      label: 'Last Check',
      value: currentTime.toLocaleTimeString(),
      color: 'text-purple-400',
    },
  ];

  return (
    // Compact top-right card to avoid full-width overlap and prevent scroll capture on hover
    <div
      className="fixed top-20 right-6 z-40 w-[420px] bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg p-2"
      style={{ overscrollBehavior: 'contain' }}
      onWheel={(e) => e.stopPropagation()}
      role="region"
      aria-label="Live database stats"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-slate-400 font-medium whitespace-nowrap">Live Database Stats</span>
        </div>
        {/* small badge for refresh */}
        <div className="text-xs text-slate-500">Updated</div>
      </div>

      <div className="flex items-center justify-between px-3 py-1 gap-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-slate-800/40 px-2 py-2 rounded-md w-1/4 text-center justify-center transition-transform duration-200 hover:scale-105"
            title={activity.label}
          >
            <span className={`${activity.color}`}>{activity.icon}</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 leading-none">{activity.label.split(' ')[0]}</span>
              <span className={`text-sm font-bold ${activity.color} leading-none`}>{activity.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveActivityTicker;

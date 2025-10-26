import React, { useState, useEffect } from 'react';
import { FiCpu, FiHardDrive, FiActivity, FiDatabase } from 'react-icons/fi';

const DatabaseHealthMonitor = () => {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 62,
    connections: 78,
    diskIO: 34,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(40 + Math.random() * 20),
        memory: Math.floor(55 + Math.random() * 15),
        connections: Math.floor(70 + Math.random() * 20),
        diskIO: Math.floor(25 + Math.random() * 20),
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getColor = (value) => {
    if (value < 50) return 'from-green-500 to-green-600';
    if (value < 75) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getTextColor = (value) => {
    if (value < 50) return 'text-green-400';
    if (value < 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const monitors = [
    { icon: <FiCpu size={20} />, label: 'CPU Usage', value: metrics.cpu, unit: '%' },
    { icon: <FiHardDrive size={20} />, label: 'Memory', value: metrics.memory, unit: '%' },
    { icon: <FiActivity size={20} />, label: 'Connections', value: metrics.connections, unit: '%' },
    { icon: <FiDatabase size={20} />, label: 'Disk I/O', value: metrics.diskIO, unit: '%' },
  ];

  return (
    <div className="gradient-border p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <span className="w-1 h-5 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
        Database Health Monitor
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {monitors.map((monitor, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-400 group-hover:scale-110 transition-transform">
                {monitor.icon}
              </div>
              <span className="text-sm text-slate-400">{monitor.label}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full bg-gradient-to-r ${getColor(monitor.value)} transition-all duration-500 ease-out`}
                style={{ width: `${monitor.value}%` }}
              >
                <div className="h-full w-full bg-white/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Value */}
            <div className={`text-right font-bold text-lg ${getTextColor(monitor.value)} transition-colors`}>
              {monitor.value}{monitor.unit}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>All systems operational</span>
      </div>
    </div>
  );
};

export default DatabaseHealthMonitor;

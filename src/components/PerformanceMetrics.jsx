import React from 'react';
import { FiTrendingUp, FiZap, FiCheck } from 'react-icons/fi';

const PerformanceMetrics = () => {
  const metrics = [
    {
      title: 'Query Optimization',
      before: 2.5,
      after: 0.2,
      unit: 's',
      improvement: '92%',
      icon: <FiZap size={20} />,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Index Tuning',
      before: 5.8,
      after: 0.8,
      unit: 's',
      improvement: '86%',
      icon: <FiTrendingUp size={20} />,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Database Response',
      before: 1200,
      after: 150,
      unit: 'ms',
      improvement: '87%',
      icon: <FiCheck size={20} />,
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <div className="gradient-border p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <span className="w-1 h-5 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full mr-3"></span>
        Performance Optimization Impact
      </h3>
      
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {metric.icon}
                </div>
                <span className="font-semibold text-white">{metric.title}</span>
              </div>
              <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full">
                <FiTrendingUp className="text-green-400" size={14} />
                <span className="text-green-400 font-bold text-sm">{metric.improvement}</span>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">Before</div>
                <div className="text-2xl font-bold text-red-400">
                  {metric.before}
                  <span className="text-sm ml-1 text-slate-500">{metric.unit}</span>
                </div>
                {/* Progress Bar */}
                <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 w-full"></div>
                </div>
              </div>

              {/* After */}
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">After</div>
                <div className="text-2xl font-bold text-green-400">
                  {metric.after}
                  <span className="text-sm ml-1 text-slate-500">{metric.unit}</span>
                </div>
                {/* Progress Bar */}
                <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000"
                    style={{ width: `${(metric.after / metric.before) * 100}%` }}
                  >
                    <div className="h-full w-full bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-xs text-slate-500 italic">
        Real-world optimization results from production environments
      </div>
    </div>
  );
};

export default PerformanceMetrics;

import React, { useState } from 'react';
import { FiDatabase, FiArrowRight } from 'react-icons/fi';

const DatabaseSchema = () => {
  const [hoveredTable, setHoveredTable] = useState(null);

  const tables = [
    {
      name: 'Users',
      columns: ['UserID (PK)', 'Username', 'Email', 'CreatedDate'],
      color: 'from-blue-500 to-blue-600',
      position: 'top-0 left-0',
    },
    {
      name: 'Orders',
      columns: ['OrderID (PK)', 'UserID (FK)', 'OrderDate', 'TotalAmount'],
      color: 'from-purple-500 to-purple-600',
      position: 'top-0 right-0',
    },
    {
      name: 'Products',
      columns: ['ProductID (PK)', 'ProductName', 'Price', 'Stock'],
      color: 'from-pink-500 to-pink-600',
      position: 'bottom-0 left-0',
    },
    {
      name: 'OrderDetails',
      columns: ['OrderDetailID (PK)', 'OrderID (FK)', 'ProductID (FK)', 'Quantity'],
      color: 'from-cyan-500 to-cyan-600',
      position: 'bottom-0 right-0',
    },
  ];

  return (
    <div className="gradient-border p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <span className="w-1 h-5 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></span>
        Database Schema Overview
      </h3>
      
      <div className="relative h-[400px] bg-slate-950/50 rounded-xl p-4 overflow-hidden">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Users to Orders */}
          <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Orders to OrderDetails */}
          <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
          {/* Products to OrderDetails */}
          <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          </line>
        </svg>

        {/* Tables */}
        <div className="grid grid-cols-2 gap-4 h-full relative" style={{ zIndex: 1 }}>
          {tables.map((table, index) => (
            <div
              key={index}
              className={`bg-slate-900/90 border-2 ${
                hoveredTable === table.name ? 'border-blue-400 scale-105' : 'border-slate-700'
              } rounded-lg p-4 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20`}
              onMouseEnter={() => setHoveredTable(table.name)}
              onMouseLeave={() => setHoveredTable(null)}
            >
              {/* Table Header */}
              <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-700`}>
                <FiDatabase className="text-blue-400" size={16} />
                <span className="font-bold text-white text-sm">{table.name}</span>
              </div>
              
              {/* Columns */}
              <div className="space-y-1.5">
                {table.columns.map((column, idx) => (
                  <div
                    key={idx}
                    className="text-xs text-slate-400 flex items-center gap-1 hover:text-blue-400 transition-colors"
                  >
                    <span className="text-cyan-400">•</span>
                    <span className={column.includes('PK') || column.includes('FK') ? 'text-yellow-400' : ''}>
                      {column}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 font-bold">PK</span> Primary Key
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 font-bold">FK</span> Foreign Key
        </div>
      </div>
    </div>
  );
};

export default DatabaseSchema;

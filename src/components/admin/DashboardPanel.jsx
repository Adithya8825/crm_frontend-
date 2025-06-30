// src/components/admin/DashboardPanel.jsx

import React from 'react';
import { User, CalendarDays, PlaneTakeoff, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const kpis = [
  { icon: <User size={24} />, label: 'Employees', value: 120, color: 'bg-blue-600' },
  { icon: <CalendarDays size={24} />, label: 'Present Today', value: 87, color: 'bg-green-500' },
  { icon: <PlaneTakeoff size={24} />, label: 'Leave Requests', value: 5, color: 'bg-yellow-500' },
  { icon: <BarChart3 size={24} />, label: 'Departments', value: 6, color: 'bg-purple-600' },
];

const attendanceData = [
  { name: 'Present', value: 87 },
  { name: 'Absent', value: 23 },
  { name: 'On Leave', value: 10 },
];

const COLORS = ['#22c55e', '#ef4444', '#facc15'];

const DashboardPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-4 p-4 rounded-lg shadow ${item.color} text-white`}>
            <div>{item.icon}</div>
            <div>
              <p className="text-lg font-semibold">{item.value}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Attendance Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Announcements */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
            <li>Quarterly review is scheduled for 10th July.</li>
            <li>New employee induction next Monday.</li>
            <li>System maintenance on 5th July at 9 PM.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPanel;

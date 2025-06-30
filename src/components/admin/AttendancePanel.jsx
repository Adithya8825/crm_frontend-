import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendancePanel = () => {
  const attendanceSummary = [
    { label: 'Present Today', count: 82 },
    { label: 'Absent Today', count: 9 },
    { label: 'On Leave', count: 4 },
    { label: 'Late Entries', count: 3 },
  ];

  const monthlyData = [
    { month: 'Jan', Present: 820, Absent: 40 },
    { month: 'Feb', Present: 760, Absent: 32 },
    { month: 'Mar', Present: 810, Absent: 22 },
    { month: 'Apr', Present: 790, Absent: 45 },
    { month: 'May', Present: 850, Absent: 15 },
  ];

  const todayRecords = [
    { name: 'John Doe', status: 'Present', time: '09:02 AM' },
    { name: 'Aisha Khan', status: 'Absent', time: '-' },
    { name: 'Ravi Patel', status: 'Late', time: '10:15 AM' },
    { name: 'Li Wei', status: 'Leave', time: '-' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Attendance Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {attendanceSummary.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 border">
            <p className="text-lg text-gray-700 font-semibold">{item.label}</p>
            <p className="text-3xl font-bold text-indigo-700">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Monthly Chart */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h3 className="text-lg font-semibold mb-4">Monthly Attendance Summary</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Present" fill="#4ade80" />
            <Bar dataKey="Absent" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Today's Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Today’s Attendance</h3>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th>Status</th>
              <th>Time In</th>
            </tr>
          </thead>
          <tbody>
            {todayRecords.map((record, i) => (
              <tr key={i} className="border-b">
                <td className="py-2">{record.name}</td>
                <td className={`font-medium ${record.status === 'Present' ? 'text-green-600' : record.status === 'Late' ? 'text-yellow-600' : record.status === 'Leave' ? 'text-blue-600' : 'text-red-600'}`}>
                  {record.status}
                </td>
                <td>{record.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePanel;

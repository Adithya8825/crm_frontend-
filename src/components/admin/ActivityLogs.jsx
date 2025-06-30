import React from 'react';

const ActivityLogs = () => {
  const logs = [
    { user: 'Admin', action: 'Created new user JohnD', time: '10:32 AM' },
    { user: 'JohnD', action: 'Submitted daily report', time: '9:15 AM' },
    { user: 'SanaR', action: 'Applied for leave', time: 'Yesterday' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Activity Logs</h2>
      <ul className="space-y-4">
        {logs.map((log, i) => (
          <li key={i} className="bg-white p-4 rounded shadow border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold text-indigo-600">{log.user}</span> {log.action}
            </p>
            <p className="text-sm text-gray-500">{log.time}</p>
          </li>
        ))}
      </ul>
    </div>
    
    
  );
};

export default ActivityLogs;

import React from 'react';

const AdminAttendance = () => {
  const attendanceData = [
    { role: 'Manager', name: 'Alice', timeIn: '09:00 AM', timeOut: '06:00 PM' },
    { role: 'HR', name: 'Bob', timeIn: '09:15 AM', timeOut: '05:45 PM' },
    { role: 'Employee', name: 'Charlie', timeIn: '10:00 AM', timeOut: '06:00 PM' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Attendance Overview</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Time In</th>
            <th className="px-4 py-2 text-left">Time Out</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.timeIn}</td>
              <td className="px-4 py-2">{user.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAttendance;

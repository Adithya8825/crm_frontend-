import React from 'react';

const AdminSidebar = () => (
  <div className="w-64 bg-gray-900 text-white p-5 min-h-screen">
    <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
    <nav className="space-y-4">
      <a href="/admin/dashboard" className="block hover:text-blue-400">Dashboard</a>
      <a href="/admin/user-management" className="block hover:text-blue-400">User Management</a>
      <a href="/admin/roles-permissions" className="block hover:text-blue-400">Role & Permissions</a>
      <a href="/admin/tasks" className="block hover:text-blue-400">Task Manager</a>

      {/* ✅ Updated attendance link */}
      <a href="/admin/attendance" className="block hover:text-blue-400">Attendance</a>

      <a href="/admin/leave-requests" className="block hover:text-blue-400">Leave Requests</a>
      <a href="/admin/activity-logs" className="block hover:text-blue-400">Activity Logs</a>
      <a href="/admin/files" className="block hover:text-blue-400">File Manager</a>
      <a href="/admin/settings" className="block hover:text-blue-400">Settings</a>
    </nav>
  </div>
);

export default AdminSidebar;

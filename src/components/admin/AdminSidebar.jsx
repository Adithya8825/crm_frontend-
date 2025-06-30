import React from 'react';
<<<<<<< HEAD

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
=======
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-gray-700 ${
      isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
    }`;

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 fixed">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        
<nav className="space-y-4">
  <NavLink to="/admin/dashboard" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Dashboard
  </NavLink>

  <NavLink to="/admin/dashboard/users" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    User Management
  </NavLink>

  <NavLink to="/admin/dashboard/roles" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Role & Permissions
  </NavLink>

  <NavLink to="/admin/dashboard/tasks" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Task Manager
  </NavLink>

  <NavLink to="/admin/dashboard/attendance" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Attendance
  </NavLink>

  <NavLink to="/admin/dashboard/leaves" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Leave Requests
  </NavLink>

  <NavLink to="/admin/dashboard/logs" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Audit Logs
  </NavLink>

  <NavLink to="/admin/dashboard/files" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    File Manager
  </NavLink>

  <NavLink to="/admin/dashboard/settings" className={({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`
  }>
    Settings
  </NavLink>
</nav>
    </div>
  );
};
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

export default AdminSidebar;

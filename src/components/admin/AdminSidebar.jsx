// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition duration-200 font-medium ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`;

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 fixed">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>

      <nav className="space-y-4">
        <NavLink to="/admin/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/admin/dashboard/users" className={linkClass}>User Management</NavLink>
        <NavLink to="/admin/dashboard/roles" className={linkClass}>Role & Permissions</NavLink>
        <NavLink to="/admin/dashboard/tasks" className={linkClass}>Task Manager</NavLink>
        <NavLink to="/admin/dashboard/attendance" className={linkClass}>Attendance</NavLink>
        <NavLink to="/admin/dashboard/leaves" className={linkClass}>Leave Requests</NavLink>
        <NavLink to="/admin/dashboard/logs" className={linkClass}>Audit Logs</NavLink>
        <NavLink to="/admin/dashboard/files" className={linkClass}>File Manager</NavLink>
        <NavLink to="/admin/dashboard/settings" className={linkClass}>Settings</NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;

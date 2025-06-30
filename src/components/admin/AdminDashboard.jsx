<<<<<<< HEAD
import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import DashboardHome from './DashboardHome';
import UserManagement from './UserManagement';
import TaskManager from './TaskManager';
import RoleEditor from './RoleEditor';

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader username="Master Admin" />
        <main className="p-4 space-y-6">
          <DashboardHome />
          <UserManagement />
          <RoleEditor />
          <TaskManager />
        </main>
      </div>
    </div>
  );
}
// src/components/admin/AdminDashboard.jsx
import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  CalendarCheck,
  PlaneTakeoff,
  ScrollText,
  File,
  Settings,
  UserCog,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Import all dashboard pages
import DashboardPanel from './DashboardPanel';
import RolePermissions from './RolePermissions';
import AttendancePanel from './AttendancePanel';
import LeaveRequests from './LeaveRequests';
import ActivityLogs from './ActivityLogs';
import FileManager from './FileManager';
import SettingsPanel from './SettingsPanel';
import UserManagement from './UserManagement';
import TaskManager from './TaskManager';

const navItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'User Management', path: '/admin/dashboard/users', icon: <UserCog size={18} /> },
  { label: 'Role & Permissions', path: '/admin/dashboard/roles', icon: <Users size={18} /> },
  { label: 'Task Manager', path: '/admin/dashboard/tasks', icon: <ClipboardList size={18} /> },
  { label: 'Attendance', path: '/admin/dashboard/attendance', icon: <CalendarCheck size={18} /> },
  { label: 'Leave Requests', path: '/admin/dashboard/leaves', icon: <PlaneTakeoff size={18} /> },
  { label: 'Activity Logs', path: '/admin/dashboard/logs', icon: <ScrollText size={18} /> },
  { label: 'File Manager', path: '/admin/dashboard/files', icon: <File size={18} /> },
  { label: 'Settings', path: '/admin/dashboard/settings', icon: <Settings size={18} /> },
];

const AdminDashboard = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white px-6 py-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Admin Panel</h2>
        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`
              }
              end={item.path === '/admin/dashboard'}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route index element={<DashboardPanel />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="roles" element={<RolePermissions />} />
              <Route path="tasks" element={<TaskManager />} />
              <Route path="attendance" element={<AttendancePanel />} />
              <Route path="leaves" element={<LeaveRequests />} />
              <Route path="logs" element={<ActivityLogs />} />
              <Route path="files" element={<FileManager />} />
              <Route path="settings" element={<SettingsPanel />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

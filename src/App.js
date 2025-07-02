// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './components/Dashboard';
import AttendanceDashboard from './components/AttendanceDashboard';
import PresentCalendar from './components/PresentCalendar';
import AbsentCalendar from './components/AbsentCalendar';
import LateCalendar from './components/LateCalendar';
import ProjectsPage from './components/ProjectsPage';

// ✅ Admin Panel Components
import AdminDashboard from './components/admin/AdminDashboard';
import AdminAttendance from './components/AdminAttendance'; // ✅ Import your Admin Attendance page

function App() {
  return (
    <Router>
      <Routes>
        {/* Common routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendanceDashboard />} />
        <Route path="/present-calendar" element={<PresentCalendar />} />
        <Route path="/absent-calendar" element={<AbsentCalendar />} />
        <Route path="/late-calendar" element={<LateCalendar />} />
        <Route path="/projects" element={<ProjectsPage />} />

        {/* ✅ Admin-specific routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} />
      </Routes>
    </Router>
  );
}

export default App;

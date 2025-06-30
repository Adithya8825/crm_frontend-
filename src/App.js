<<<<<<< HEAD
// src/App.js

=======
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './login';
import Dashboard from './components/Dashboard';
import AttendanceDashboard from './components/AttendanceDashboard';
import PresentCalendar from './components/PresentCalendar';
import AbsentCalendar from './components/AbsentCalendar';
import LateCalendar from './components/LateCalendar';
import ProjectsPage from './components/ProjectsPage';
<<<<<<< HEAD

// ✅ Admin Panel Components
import AdminDashboard from './components/admin/AdminDashboard';
import AdminAttendance from './components/AdminAttendance'; // ✅ Import your Admin Attendance page
=======
import AdminDashboard from './components/admin/AdminDashboard'; // ✅ only here
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Common routes */}
=======
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendanceDashboard />} />
        <Route path="/present-calendar" element={<PresentCalendar />} />
        <Route path="/absent-calendar" element={<AbsentCalendar />} />
        <Route path="/late-calendar" element={<LateCalendar />} />
        <Route path="/projects" element={<ProjectsPage />} />
<<<<<<< HEAD

        {/* ✅ Admin-specific routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/attendance" element={<AdminAttendance />} /> {/* ✅ Newly added */}
=======
        <Route path="/admin/dashboard/*" element={<AdminDashboard />} /> {/* ✅ supports child routes */}
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
      </Routes>
    </Router>
  );
}

export default App;

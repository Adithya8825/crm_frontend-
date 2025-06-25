// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './components/Dashboard';
import AttendanceDashboard from './components/AttendanceDashboard';
import PresentCalendar from './components/PresentCalendar';
import AbsentCalendar from './components/AbsentCalendar';
import LateCalendar from './components/LateCalendar';
import ProjectsPage from './components/ProjectsPage'; // ✅ New import for projects

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendanceDashboard />} />
        <Route path="/present-calendar" element={<PresentCalendar />} />
        <Route path="/absent-calendar" element={<AbsentCalendar />} />
        <Route path="/late-calendar" element={<LateCalendar />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* ✅ Projects page route */}
      </Routes>
    </Router>
  );
}

export default App;

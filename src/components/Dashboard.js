// src/components/Dashboard.js

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import EmployeeTable from './EmployeeTable';
import WorkloadChart from './WorkloadChart';
import ProjectStatus from './ProjectStatus';
import SchedulePanel from './SchedulePanel';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-2 space-y-4">
            <EmployeeTable />
            <div className="grid grid-cols-2 gap-4">
              <WorkloadChart />
              <ProjectStatus />
            </div>
          </div>
          <SchedulePanel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

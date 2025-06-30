import React, { useState } from 'react';

const LeaveRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Amit Kumar', reason: 'Medical Leave', date: '27 Jun', status: 'Pending' },
    { id: 2, name: 'Sana R.', reason: 'Family Function', date: '26 Jun', status: 'Pending' },
    { id: 3, name: 'John D.', reason: 'Vacation', date: '25 Jun', status: 'Pending' },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  const statusColor = {
    Approved: 'text-green-600',
    Pending: 'text-yellow-600',
    Rejected: 'text-red-600',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave Requests</h2>
      <div className="overflow-x-auto">
        
        <table className="min-w-full bg-white rounded-lg shadow border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Employee</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.reason}</td>
                <td className="px-4 py-2">{req.date}</td>
                <td className={`px-4 py-2 font-medium ${statusColor[req.status]}`}>
                  {req.status}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => updateStatus(req.id, 'Approved')}
                    className="text-green-600 hover:underline"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(req.id, 'Rejected')}
                    className="text-red-600 hover:underline"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequests;

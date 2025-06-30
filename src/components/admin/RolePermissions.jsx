import React, { useState } from 'react';

const RolePermissions = () => {
  const [roles, setRoles] = useState([
    {
      name: 'Admin',
      permissions: [
        'Manage Users',
        'Assign Roles',
        'Access All Reports',
        'Manage Settings',
        'View & Edit All Data',
        'Manage Attendance',
        'Approve Leaves',
      ],
    },
    {
      name: 'Employee',
      permissions: ['View Tasks', 'Submit Work', 'Apply for Leave'],
    },
     {
      name: 'HR',
      permissions: [
        'Manage Recruitment',
        'Update Employee Records',
        'Monitor Attendance',
        'View Leave Logs',
        'Generate Reports',
      ],
    },
     {
      name: 'Manager',
      permissions: [
        'Assign Tasks',
        'View Team Attendance',
        'Approve Leave Requests',
        'View Project Reports',
        'Monitor Performance',
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newRole, setNewRole] = useState({ name: '', permissions: '' });

  const addRole = () => {
    if (!newRole.name.trim() || !newRole.permissions.trim()) return;
    const newPerms = newRole.permissions.split(',').map(p => p.trim());
    setRoles([...roles, { name: newRole.name, permissions: newPerms }]);
    setNewRole({ name: '', permissions: '' });
    setShowModal(false);
  };

  const deleteRole = (index) => {
    const updated = [...roles];
    updated.splice(index, 1);
    setRoles(updated);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Role & Permissions</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          + Add Role
        </button>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <div key={index} className="bg-white p-4 rounded shadow border border-gray-200 relative">
            <h3 className="text-xl font-semibold text-indigo-700">{role.name}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {role.permissions.map((perm, i) => (
                <li key={i}>{perm}</li>
              ))}
            </ul>
            <button
              onClick={() => deleteRole(index)}
              className="absolute top-2 right-2 text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] md:w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Add New Role</h2>
            <input
              type="text"
              placeholder="Role Name"
              className="w-full border p-2 mb-2 rounded"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            />
            <textarea
              placeholder="Comma-separated permissions"
              className="w-full border p-2 mb-2 rounded"
              value={newRole.permissions}
              onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={addRole}
                className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolePermissions;

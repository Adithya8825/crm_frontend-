import React, { useState } from 'react';

const SettingsPanel = () => {
  const [companyName, setCompanyName] = useState('GenHub CRM');
  const [name, setName] = useState('Adithya J');
  const [phone, setPhone] = useState('+91 9876543210');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    alert('Settings Saved');
  };

  return (
    <div className="p-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Settings</h2>
      <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow border dark:border-gray-600">

        {/* Company Name */}
        <div>
          <label className="block font-medium mb-1 dark:text-gray-200">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1 dark:text-gray-200">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1 dark:text-gray-200">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          <label className="dark:text-gray-200">Enable Notifications</label>
        </div>

        {/* Language */}
        <div>
          <label className="block font-medium mb-1 dark:text-gray-200">Preferred Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>

        {/* Change Password */}
        <div>
          <label className="block font-medium mb-1 dark:text-gray-200">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white mb-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={handleSave}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Settings
        </button>

        {/* Deactivate */}
        <div className="text-right mt-4">
          <button
            type="button"
            onClick={() => alert('Account deactivation requested')}
            className="text-sm text-red-600 hover:underline"
          >
            Deactivate Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPanel;

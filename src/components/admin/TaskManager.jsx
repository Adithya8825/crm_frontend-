// src/components/TaskManager.jsx
import React, { useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !title || !deadline) {
      alert('Please fill all required fields');
      return;
    }

    const taskData = {
      email,
      title,
      description,
      deadline
    };

    try {
      const res = await axios.post('http://localhost:8000/api/tasks/', taskData);
      alert('✅ Task Assigned Successfully');
      // Reset form
      setTitle('');
      setDescription('');
      setDeadline('');
      setEmail('');
    } catch (err) {
      console.error('❌ Assignment failed:', err);
      alert('Failed to assign task');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Assign Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Employee Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="employee@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Task Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Complete Monthly Report"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Describe the task in detail..."
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Deadline</label>
          <input
            type="date"
            required
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default TaskManager;

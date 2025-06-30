import React, { useState } from 'react';

const FileManager = () => {
  const [files, setFiles] = useState([
    { name: 'Employee Handbook.pdf', size: '2.4MB', date: '25 Jun 2025' },
    { name: 'ProjectPlan.docx', size: '1.2MB', date: '20 Jun 2025' },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + 'MB',
        date: new Date().toLocaleDateString('en-IN'),
      };
      setFiles([...files, newFile]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        
        <h2 className="text-2xl font-bold text-gray-800">File Manager</h2>
        <label className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Upload File
          <input type="file" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      <div className="bg-white rounded shadow border overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">File Name</th>
              <th className="text-left px-4 py-2">Size</th>
              <th className="text-left px-4 py-2">Uploaded On</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2">{file.name}</td>
                <td className="px-4 py-2">{file.size}</td>
                <td className="px-4 py-2">{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileManager;

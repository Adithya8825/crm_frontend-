// src/components/EmployeeProfileCard.js
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

function EmployeeProfileCard() {
  const [timer, setTimer] = useState(0);
  const loginTime = new Date(); // replace with actual login time if available
=======
import React, { useEffect, useMemo, useState } from 'react';

function EmployeeProfileCard() {
  const [timer, setTimer] = useState(0);

  // ✅ Memoize loginTime to avoid re-creating on every render
  const loginTime = useMemo(() => new Date(), []);
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Math.floor((new Date() - loginTime) / 1000));
    }, 1000);
<<<<<<< HEAD
    return () => clearInterval(interval);
  }, []);

  // Helper: format seconds into hh:mm:ss
=======

    return () => clearInterval(interval); // ✅ Cleanup on unmount
  }, [loginTime]);

  // ✅ Format time as hh:mm:ss
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Employee Overview</h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> Adithya J</p>
        <p><span className="font-semibold">Position:</span> AI/ML Engineer</p>
        <p><span className="font-semibold">Contact:</span> +91 9876543210</p>
        <p><span className="font-semibold">Login Time:</span> {loginTime.toLocaleTimeString()}</p>
        <p><span className="font-semibold">Session Duration:</span> {formatTime(timer)}</p>
      </div>
    </div>
  );
}

export default EmployeeProfileCard;

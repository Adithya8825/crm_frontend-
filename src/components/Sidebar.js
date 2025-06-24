function Sidebar() {
  return (
    <div className="w-64 bg-white p-4 shadow-md min-h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Employees</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Reports</li>
        <li className="hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;

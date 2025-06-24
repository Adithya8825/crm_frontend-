function SchedulePanel() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-full">
      <h2 className="text-lg font-semibold mb-4">Schedule</h2>
      <div className="space-y-3 text-sm">
        <div className="p-2 bg-orange-100 rounded">
          <p className="font-semibold">10:00 AM</p>
          <p>Team Standup</p>
        </div>
        <div className="p-2 bg-blue-100 rounded">
          <p className="font-semibold">12:30 PM</p>
          <p>UI Review</p>
        </div>
        <div className="p-2 bg-green-100 rounded">
          <p className="font-semibold">03:00 PM</p>
          <p>Client Meeting</p>
        </div>
      </div>
    </div>
  );
}

export default SchedulePanel;

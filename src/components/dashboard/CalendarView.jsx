function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-full">
      <h2 className="text-lg sm:text-xl font-extrabold mb-4">Jun 2025</h2>

      {/* Days row */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-4">
        {days.map(day => (
          <span key={day} className="text-xs sm:text-sm">{day}</span>
        ))}
      </div>

      {/* Dates and Times */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {dates.map((date, i) => (
          <div key={i} className="flex flex-col items-center space-y-1">
            <div className="text-xs mb-1 text-gray-400">{date}</div>

            <div
              className={`rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                i === 1 ? "bg-indigo-600 text-white" : "bg-blue-100 text-blue-800"
              }`}
            >
              12:00
            </div>

            <div
              className={`rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                i === 2 ? "bg-green-300 text-gray-600" : "bg-blue-100 text-blue-800"
              }`}
            >
              14:00
            </div>
          </div>
        ))}
      </div>

      {/* Appointments below calendar */}
      <div className="mt-6 space-y-4">
        <div className="bg-indigo-600 text-white rounded-xl px-4 py-3 shadow-sm">
          <p className="text-sm sm:text-base">Dentist 🦷</p>
          <p className="text-xs sm:text-sm">12:00–13:00 • Dr. Cameron Williamson</p>
        </div>

        <div className="bg-green-300 text-green-900 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-sm sm:text-base">Physiotherapy Appointment 💪</p>
          <p className="text-xs sm:text-sm">14:00–15:00 • Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;

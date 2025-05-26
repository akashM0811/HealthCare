function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-extrabold mb-4">Jun 2025</h2>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm text-gray-500 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates & Times */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {dates.map((date, i) => (
          <div key={i} className="flex flex-col items-center space-y-1">
            <div className="text-gray-400">{date}</div>

            {/* Time 1 */}
            <div
              className={`rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium w-fit ${
                i === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              12:00
            </div>

            {/* Time 2 */}
            <div
              className={`rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium w-fit ${
                i === 2
                  ? "bg-green-300 text-gray-600"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              14:00
            </div>
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="mt-6 space-y-4">
        <div className="bg-indigo-600 text-white rounded-xl px-4 py-3 shadow-sm">
          <p className="text-sm sm:text-base">Dentist 🦷</p>
          <p className="text-xs sm:text-sm">
            12:00–13:00 • Dr. Cameron Williamson
          </p>
        </div>

        <div className="bg-green-300 text-green-900 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-sm sm:text-base">Physiotherapy Appointment 💪</p>
          <p className="text-xs sm:text-sm">
            14:00–15:00 • Dr. Kevin Djones
          </p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;

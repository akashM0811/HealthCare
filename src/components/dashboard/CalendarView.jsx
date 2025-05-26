function CalendarView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-extrabold mb-4 text-center">Jun 2025</h2>

      {/* Days row */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-gray-500 mb-3 text-[10px] sm:text-sm">
        {days.map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* Dates and Times */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-sm mb-4">
        {dates.map((date, i) => (
          <div key={i} className="flex flex-col items-center space-y-1">
            <div className="text-[10px] sm:text-xs text-gray-400">{date}</div>

            <div
              className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium ${
                i === 1 ? "bg-indigo-600 text-white" : "bg-blue-100 text-blue-800"
              }`}
            >
              12:00
            </div>

            <div
              className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium ${
                i === 2 ? "bg-green-300 text-gray-600" : "bg-blue-100 text-blue-800"
              }`}

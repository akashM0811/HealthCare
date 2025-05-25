const UpcomingSchedule = () => {
  const schedule = [
    {
      day: "On Thursday",
      appointments: [
        { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
        { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
      ],
    },
    {
      day: "On Saturday",
      appointments: [
        { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
        { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
      ],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="font-semibold text-gray-700 mb-3">The Upcoming Schedule</h2>
      {schedule.map((section, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-sm text-gray-500 mb-2">{section.day}</p>
          <div className="flex gap-2 flex-wrap">
            {section.appointments.map((a, i) => (
              <div key={i} className="bg-purple-100 text-purple-800 p-3 rounded-xl w-[48%]">
                <p className="font-medium text-sm mb-1">{a.title}</p>
                <p className="text-xs">{a.time}</p>
                <span className="text-lg">{a.icon}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;

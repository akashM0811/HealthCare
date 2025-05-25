export default function CalendarView() {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h3 className="font-semibold mb-2">October 2021</h3>
      <div className="grid grid-cols-7 gap-1 text-xs text-center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <div key={d} className="font-medium">{d}</div>
        ))}
        {[25, 26, 27, 28, 29, 30, 31].map((n) => (
          <div key={n} className="py-1 text-sm text-gray-600">{n}</div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="bg-indigo-100 text-indigo-700 text-sm px-3 py-2 rounded-lg">Dentist: 09:00–11:00</div>
        <div className="bg-purple-100 text-purple-700 text-sm px-3 py-2 rounded-lg">Physiotherapy: 11:00–12:00</div>
      </div>
    </div>
  );
}

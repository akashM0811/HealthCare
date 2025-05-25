export default function SimpleAppointmentCard({ title, time, icon, color }) {
  return (
    <div
      className={`flex flex-col justify-between px-4 py-3 rounded-xl ${color} w-full sm:w-40 min-w-[140px]`}
    >
      <div className="font-medium text-base sm:text-sm">{title}</div>
      <div className="text-xs text-gray-600">{time}</div>
      <div className="text-xl mt-1">{icon}</div>
    </div>
  );
}

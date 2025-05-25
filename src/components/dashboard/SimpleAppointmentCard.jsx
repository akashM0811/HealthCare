export default function SimpleAppointmentCard({ title, time, }) {
  return (
    <div className="bg-[#f0f4ff] rounded-lg px-3 py-2 flex justify-between items-center text-sm">
      <span>{title}</span>
      <span>{time}</span>
    </div>
  );
}

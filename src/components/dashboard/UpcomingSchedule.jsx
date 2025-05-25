import SimpleAppointmentCard from './SimpleAppointmentCard';
import { appointments } from '../../data/appointments';

export default function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">The Upcoming Schedule</h3>
      {appointments.map((day) => (
        <div key={day.day} className="mb-3">
          <p className="text-sm font-medium mb-1 text-gray-600">{day.day}</p>
          <div className="flex flex-col gap-2">
            {day.items.map((item, i) => (
              <SimpleAppointmentCard key={i} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

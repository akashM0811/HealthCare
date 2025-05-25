import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

export default function DashboardMainContent() {
  return (
    <main className="p-6 bg-[#f5f9ff] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnatomySection />
          <HealthStatusCards />
          <ActivityFeed />
        </div>
        <div>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

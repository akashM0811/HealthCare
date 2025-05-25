import AnatomySection from "./dashboard/AnatomySection";
import CalendarView from "./dashboard/CalendarView";
import HealthStatusCards from "./dashboard/HealthStatusCards";
import ActivityFeed from "./dashboard/ActivityFeed";
import UpcomingSchedule from "./dashboard/UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 p-6 bg-[#f6f9ff] w-full">
      <div className="col-span-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
      <div className="space-y-4">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;

import { activityData } from '../../data/healthData';

export default function HealthStatusCards() {
  return (
    <div className="flex flex-col gap-4">
      {activityData.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={item.icon} alt="" className="w-6 h-6" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <span className="text-xs text-gray-400">{item.date}</span>
          </div>
          <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
            <div className={`h-2 rounded-full ${item.barColor}`} style={{ width: item.progress }} />
          </div>
        </div>
      ))}
    </div>
  );
}

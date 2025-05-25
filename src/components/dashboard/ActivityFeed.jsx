export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-2">Activity</h3>
      <p className="text-xs text-gray-500 mb-2">3 appointments on this week</p>
      <div className="flex items-end gap-2 h-24">
        {[4, 10, 8, 6, 9, 5, 7].map((v, i) => (
          <div key={i} className="w-4 bg-blue-300 rounded" style={{ height: `${v * 8}px` }}></div>
        ))}
      </div>
    </div>
  );
}

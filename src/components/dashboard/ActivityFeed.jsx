const ActivityFeed = () => {
  const data = [4, 3, 6, 2, 5, 7, 3];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const colors = ['from-blue-300 to-blue-500', 'from-cyan-300 to-cyan-500'];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments this week</p>
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-32 sm:h-36">
        {data.map((val, i) => (
          <div key={i} className="flex flex-col items-center justify-end">
            <div
              className={`w-3 sm:w-4 rounded-full bg-gradient-to-t ${colors[i % 2]} shadow-md transition-all duration-300`}
              style={{ height: `${val * 12}px` }}
            />
            <span className="text-[10px] sm:text-xs text-gray-400 mt-2">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

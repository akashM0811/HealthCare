import { HeartPulse, Bone, EarIcon, Brain } from "lucide-react";

const HealthStatusCards = () => {
  const data = [
    {
      icon: <HeartPulse className="text-red-500 w-7 h-7" />,
      title: "Heart",
      progress: "30%",
      barColor: "bg-red-400",
      bgColor: "bg-red-100",
      date: "30 May 2025",
    },
    {
      icon: <EarIcon className="text-green-500 w-7 h-7" />,
      title: "Ear",
      progress: "80%",
      barColor: "bg-green-500",
      bgColor: "bg-green-100",
      date: "28 May 2025",
    },
    {
      icon: <Bone className="text-yellow-500 w-7 h-7" />,
      title: "Bone",
      progress: "25%",
      barColor: "bg-yellow-400",
      bgColor: "bg-yellow-100",
      date: "30 May 2025",
    },
    {
      icon: <Brain className="text-indigo-500 w-7 h-7" />,
      title: "Brain",
      progress: "65%",
      barColor: "bg-indigo-500",
      bgColor: "bg-indigo-100",
      date: "27 May 2025",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">This Week</h2>
        <a href="#" className="text-sm text-purple-500 hover:underline">Details →</a>
      </div>

      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${item.bgColor}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-base font-medium text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">Date: {item.date}</p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className={`h-full ${item.barColor}`}
                style={{ width: item.progress }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;

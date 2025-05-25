import {
  LayoutDashboard,
  History,
  CalendarDays,
  CalendarClock,
  BarChart,
  MessageCircle,
  Headphones,
  Settings,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menu = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: History, label: "History" },
    { icon: CalendarDays, label: "Calendar" },
    { icon: CalendarClock, label: "Appointments" },
    { icon: BarChart, label: "Statistics" },
  ];

  const tools = [
    { icon: MessageCircle, label: "Chat" },
    { icon: Headphones, label: "Support" },
    { icon: Settings, label: "Setting" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed lg:static top-0 left-0 z-50 h-full bg-white w-64 p-6 shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Button on Mobile */}
        <button
          className="lg:hidden mb-4 text-gray-500 hover:text-gray-700"
          onClick={toggleSidebar}
        >
          <X size={24} />
        </button>

        <h1 className="text-2xl font-bold text-teal-500 mb-10">
          Health<span className="text-black">Care.</span>
        </h1>

        <div className="text-gray-600 space-y-1">
          <p className="text-xs uppercase font-semibold mb-2 text-gray-400">General</p>
          {menu.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                item.active
                  ? "bg-teal-500 text-white font-semibold"
                  : "hover:bg-teal-50 hover:text-teal-600"
              }`}
            >
              <div
                className={`p-1 rounded-md ${
                  item.active ? "bg-white text-teal-500" : "bg-gray-100"
                }`}
              >
                <item.icon size={20} />
              </div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}

          <p className="text-xs uppercase font-semibold mt-8 mb-2 text-gray-400">Tools</p>
          {tools.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition"
            >
              <div className="p-1 bg-gray-100 rounded-md">
                <item.icon size={20} />
              </div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

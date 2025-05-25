import { LayoutDashboard, Calendar, FileText, BarChart2, MessageCircle, Headphones, Settings } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: FileText, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: FileText, label: 'Appointments' },
  { icon: BarChart2, label: 'Statistics' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Headphones, label: 'Support' },
  { icon: Settings, label: 'Setting' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-4 text-lg font-semibold text-gray-600">General</div>
      <nav className="flex-1">
        {navItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 py-3 hover:bg-[#e6f7ff] text-gray-700 cursor-pointer">
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

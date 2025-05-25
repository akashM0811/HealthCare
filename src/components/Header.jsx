import { Search, Bell, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-[#22c1c3]">Healthcare.</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 border rounded-lg text-sm bg-gray-50"
          />
        </div>
        <Bell className="text-gray-500" />
        <Plus className="text-white bg-[#22c1c3] p-1 rounded-full w-6 h-6" />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}

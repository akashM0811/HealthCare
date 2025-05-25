import { Bell, Search, Menu } from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        {/* Sidebar toggle for mobile */}
        <button className="lg:hidden text-gray-600" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-3">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="text-gray-500" />
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

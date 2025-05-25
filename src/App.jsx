import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

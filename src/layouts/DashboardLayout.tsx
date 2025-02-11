import { Outlet } from "react-router-dom";
import Sidebar from "../components/organisms/Sidebar";
import Navbar from "../components/organisms/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page Content */}
        <main className="p-6">
          <Outlet /> {/* Renders dashboard pages */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

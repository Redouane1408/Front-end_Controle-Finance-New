import { Routes, Route } from "react-router-dom";
// Import pages
import LoginPage from "@/pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
// Import layout
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
/* Import LoadingOverlay */
import LoadingOverlay from "@/components/molecules/LoadingOverlay";
/* Import Toast for global notifications */
import Toast from "@/components/molecules/Toast";

function AppRoutes() {
  return (
    <>
      <LoadingOverlay /> {/* ✅ Global Loading Spinner */}
      <Toast /> {/* ✅ Global Toast Notifications */}
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* Protected Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;

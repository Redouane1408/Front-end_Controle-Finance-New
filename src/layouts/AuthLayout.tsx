import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AuthLayout() {
  return (
    <div className="h-screen items-center justify-center bg-white">
      <div className="w-full bg-white pl-10">
        <Outlet /> {/* Renders the login component */}
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;

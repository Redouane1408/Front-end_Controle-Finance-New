import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role: "admin" | "user";
}) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}"); // Get user data from storage

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not logged in
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />; // Redirect if role mismatch
  }

  return children;
};

export default PrivateRoute;

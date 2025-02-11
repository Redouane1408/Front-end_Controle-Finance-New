import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRouter.tsx"; // import AppRoutes
import { LoadingProvider } from "@/context/LoadingContext"; // ✅ Import LoadingProvider
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* ✅ Wrap AppRoutes with LoadingProvider */}
    <LoadingProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LoadingProvider>
  </StrictMode>,
);

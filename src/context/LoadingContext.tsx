import { useState, ReactNode } from "react";
import { LoadingContext } from "@/hooks/useLoading";

// Provider component that wraps the application and provides the loading state
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

import { useContext, createContext } from "react";

// Type definition for the Loading Context
type LoadingContextType = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

// This creates a context for managing the loading state globally.
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Custom hook to use the context
function useLoading() {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within a LoadingProvider");
  return context;
}

export { LoadingContext, useLoading };

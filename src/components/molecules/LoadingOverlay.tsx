import { useLoading } from "@/hooks/useLoading";
import Spinner from "@/components/atoms/Spinner";

export default function LoadingOverlay() {
  const { loading } = useLoading();

  if (!loading) return null; // Hide if not loading

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <Spinner />
    </div>
  );
}

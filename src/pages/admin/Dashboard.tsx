import { useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";

export default function Dashboard() {
  const { request, loading, error } = useAxios();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await request("get", "/user/profile");
      if (data) setUser(data);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>Welcome,{/*  {user?.name} */}</div>;
}

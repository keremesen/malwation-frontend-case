'use client'
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const router = useRouter()
  const auth = useAuth();
  if (!auth) {
    return <div>Loading...</div>;
  }
  const { logout,user } = auth;
  const handleLogout = () => {
    logout();
    router.push("/")
    console.log(user)
  };
  return <div className="sticky  left-0 bg-white h-screen w-1/5">
    {user}
    <button onClick={handleLogout}>logout</button>
  </div>;
};

export default Sidebar;

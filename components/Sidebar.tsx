"use client";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Accordion from "./Accordion";
const Sidebar = () => {
  const router = useRouter();
  const auth = useAuth();
  if (!auth) {
    return <div>Loading...</div>;
  }
  const { logout, user } = auth;
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <div className="sticky p-4 flex flex-col left-0 bg-white h-screen w-1/5 space-y-4">
      <Image
        alt="malwation"
        height={200}
        width={240}
        src="/assets/logoo.png"
        className="my-2"
      />
      <input
        className="bg-gray-100 border-2 border-gray-300  p-2   rounded-lg"
        placeholder="Search"
      />

      <Accordion title="Navigation" />
      <Accordion title="Apps" />
      <div className="absolute bottom-0">
        <Image alt="gif" src="/assets/gif2.gif" width={200} height={200} />
        <div className="flex flex-row justify-around items-center ">
          <div className="flex flex-col m-4">
            <text className="text-[#1F2633] font-bold text-sm">{JSON.parse(localStorage.getItem("user") || "")}</text>
            <text className="text-gray-400 font-semibold text-sm ">Admin</text>
          </div>
          <button onClick={handleLogout}>
            <Image
              alt="logout"
              src="/assets/logout.svg"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

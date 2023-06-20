"use client";
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {localStorage.getItem("user") && (
        <Layout>
          <div className="h-screen w-full flex items-center justify-center flex-col">
            <Table />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;

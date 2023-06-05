"use client";
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth?.user) {
      router.push("/");
    }
  }, [auth?.user, router]);

  if (!auth) {
    return null;
  }
  const { user } = auth;

  return (
    <>
      {user && (
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

"use client";
import React from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();
  if (!auth) {
    return null;
  }
  if(!router) {
    return null
  }
  const { user } = auth;
  return (
    <>
      {user ? (
        <Layout>
          <div className=" h-screen w-full  flex items-center justify-center flex-col">
            <Table />
          </div>
        </Layout>
      ) : (
        router.push("/")
      )}
    </>
  );
};
export default Dashboard;
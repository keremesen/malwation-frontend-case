"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

const Dashboard = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!auth?.user) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl font-semibold">
        <Link href="/">Please go back and login</Link>
      </div>
    );
  }

  return (
    <Layout>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Table />
      </div>
    </Layout>
  );
};

export default Dashboard;

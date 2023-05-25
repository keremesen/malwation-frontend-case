import React from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import { User } from "@/utils/generateFakeUsers";

const Dashboard = () => {
  return (
    <Layout>
      <div className=" h-screen w-full  flex items-center justify-center flex-col">
        <Table />
      </div>
    </Layout>
  );
};

export default Dashboard;

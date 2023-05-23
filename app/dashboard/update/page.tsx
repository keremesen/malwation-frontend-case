'use client'
import Layout from "@/components/Layout";
import React from "react";
import { useRouter } from 'next/navigation';

const UpdateUser = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className=" h-screen w-full flex items-center justify-center">
        Update User
        <button type="button" className="text-red-700" onClick={() => router.back()}>
      Click here to go back
    </button>
      </div>
    </Layout>
  );
};

export default UpdateUser;

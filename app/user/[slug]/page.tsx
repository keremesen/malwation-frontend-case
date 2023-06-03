"use client";
import React, { useState } from "react";
import { useUsers } from "@/contexts/UsersContext";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { User } from "@/utils/generateFakeUsers";

const UserUpdate = () => {
  const router = useRouter();

  const { selectedUser, setSelectedUser, updateUser } = useUsers();
  if (!selectedUser) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ ...selectedUser });
    router.back();
  };

  return (
    <Layout>
      <div>
        {selectedUser?.fullName}
        <button onClick={() => router.back()}>geri git aq</button>
        <form onSubmit={handleSubmit}>
          <label>fullName</label>
          <input
            type="text"
            name="fullName"
            value={selectedUser.fullName}
            onChange={handleChange}
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            value={selectedUser.email}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </Layout>
  );
};

export default UserUpdate;

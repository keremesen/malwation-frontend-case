"use client";
import React, { useState } from "react";
import { useUsers } from "@/contexts/UsersContext";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { User } from "@/utils/generateFakeUsers";
import Switch from "react-switch";

const UserUpdate = () => {
  const router = useRouter();

  const { selectedUser, setSelectedUser, updateUser } = useUsers();
  if (!selectedUser) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value === "admin";
    setSelectedUser({ ...selectedUser, role });
  };
  const handleToggle = () => {
    setSelectedUser({ ...selectedUser, active: !selectedUser.active });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ ...selectedUser });
    router.back();
  };

  return (
    <Layout>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="flex w-2/3 items-start p-4">
          <button
            className="text-gray-400 font-semibold text-lg "
            onClick={() => router.back()}
          >
            Back to Users
          </button>
        </div>
        <div className="h-4/5 w-2/3 bg-white rounded-lg">
          <p className="p-4 text-3xl font-bold text-gray-700">User Update</p>
          <form onSubmit={handleSubmit} className="flex flex-col w-full p-6 ">
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full space-y-2">
                <label>Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="bg-[#FCFCFC] rounded-md  w-3/4 text-gray-700 p-3 border-gray-400 border "
                  value={selectedUser.fullName}
                  onChange={handleChange}
                />
                <label>Phone</label>
                <input
                  type="phone"
                  name="phone"
                  className="bg-[#FCFCFC] rounded-md  w-3/4 text-gray-700 p-3 border-gray-400 border "
                  value={selectedUser.phone}
                  onChange={handleChange}
                />

                <label htmlFor="active-toggle">Active</label>
                <Switch
                  id="active-toggle"
                  checked={selectedUser.active}
                  onChange={handleToggle}
                />
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label>Mail</label>
                <input
                  type="email"
                  name="email"
                  className="bg-[#FCFCFC] rounded-md  w-3/4 text-gray-700 p-3 border-gray-400 border "
                  value={selectedUser.email}
                  onChange={handleChange}
                />

                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={selectedUser.role ? "admin" : "member"}
                  onChange={handleRoleChange}
                  className="bg-[#FCFCFC] rounded-md  w-3/4 text-gray-700 p-3 border-gray-400 border"
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <input
                type="submit"
                className="text-white w-1/5 p-1 m-8 rounded-full bg-green-500"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UserUpdate;

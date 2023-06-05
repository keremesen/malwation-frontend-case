"use client";
import React, { useState } from "react";
import { useUsers } from "@/contexts/UsersContext";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Switch from "react-switch";
import Image from "next/image";

const UserUpdate = () => {
  const router = useRouter();
  const users = useUsers();
  if (!users) {
    return null;
  }

  const { selectedUser, setSelectedUser, updateUser } = users;

  if (!selectedUser) return null;

  const handleChange = (e: any) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e: any) => {
    const role = e.target.value === "admin";
    setSelectedUser({ ...selectedUser, role });
  };

  const handleToggle = () => {
    setSelectedUser({ ...selectedUser, active: !selectedUser.active });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser({ ...selectedUser });
    router.back();
  };

  return (
    <Layout>
      <div className="flex w-full justify-center items-center h-screen">
        <div className="w-1/2 bg-white rounded-lg shadow">
          <div className="p-4 flex justify-between">
            <button
              className="text-gray-500 font-semibold flex items-center space-x-2 hover:text-gray-700"
              onClick={() => router.back()}
            >
              <Image
                alt="arrow-left"
                src="/assets/arrow-left.svg"
                width={24}
                height={24}
              />
              <span className="text-sm">Back to Users</span>
            </button>
          </div>
          <div className="p-6">
            <text className="text-3xl font-bold mb-6">User Update</text>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <label htmlFor="fullName" className="text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full bg-gray-100 rounded-md text-gray-700 py-3 px-4 border border-gray-300 focus:outline-none"
                    value={selectedUser.fullName || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded-md text-gray-700 py-3 px-4 border border-gray-300 focus:outline-none"
                    value={selectedUser.email || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <label htmlFor="phone" className="text-gray-700">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 rounded-md text-gray-700 py-3 px-4 border border-gray-300 focus:outline-none"
                    value={selectedUser.phone || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <label htmlFor="role" className="text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={selectedUser.role ? "admin" : "member"}
                    onChange={handleRoleChange}
                    className="w-full bg-gray-100 rounded-md text-gray-700 py-3 px-4 border border-gray-300 focus:outline-none"
                  >
                    <option value="admin">Admin</option>
                    <option value="member">Member</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="active-toggle" className="text-gray-700">
                  Active
                </label>
                <Switch
                  id="active-toggle"
                  checked={selectedUser.active || false}
                  onChange={handleToggle}
                  onColor="#10B981"
                  offColor="#D1D5DB"
                  handleDiameter={22}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="text-white px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserUpdate;

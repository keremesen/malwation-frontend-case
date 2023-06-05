"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
type Props = {
  title: string;
};

const Accordion: React.FC<Props> = ({ title }) => {
  const currentPath = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="">
      <div
        className="flex justify-between items-center py-4 px-6 cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-gray-500 font-bold text-sm select-none">{title}</h3>
        <svg
          className={`h-6 w-6 transform ${
            isCollapsed ? "rotate-0" : "rotate-180"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#3B82F6"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {!isCollapsed && (
        <div className="py-4 px-6 text-gray-700 font-semibold text-sm flex-row flex items-center justify-start space-x-4 ">
          {title === "Navigation" ? (
            <div className="flex flex-col w-full">
              <Link
                href="/dashboard"
                className={`flex items-center space-x-2 rounded-md p-1.5 w-full ${
                  currentPath === "/dashboard" ? "bg-gray-100" : ""
                }`}
              >
                <Image
                  alt="dashboard"
                  src="/assets/dashboard.svg"
                  width={16}
                  height={16}
                />
                <span className="select-none">Dashboard</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link
                href="/users"
                className={`flex items-center space-x-2 rounded-md p-1.5 w-full ${
                  currentPath === "/users" ? "bg-gray-100" : ""
                }`}
              >
                <Image
                  alt="users"
                  src="/assets/users.svg"
                  width={16}
                  height={16}
                />
                <span className="select-none">Users</span>
              </Link>
              <Link
                href="/projects"
                className={`flex items-center space-x-2 rounded-md p-1.5 w-full ${
                  currentPath === "/projects" ? "bg-gray-100" : ""
                }`}
              >
                <Image
                  alt="projects"
                  src="/assets/projects.svg"
                  width={16}
                  height={16}
                />
                <span className="select-none">Projects</span>
              </Link>
              <Link
                href="/tasks"
                className={`flex items-center space-x-2 rounded-md p-1.5 w-full ${
                  currentPath === "/tasks" ? "bg-gray-100" : ""
                }`}
              >
                <Image
                  alt="tasks"
                  src="/assets/tasks.svg"
                  width={16}
                  height={16}
                />
                <span className="select-none">Tasks</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;

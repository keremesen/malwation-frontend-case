import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <main className="h-screen w-screen flex"> {children} </main>
    </div>
  );
};

export default Layout;

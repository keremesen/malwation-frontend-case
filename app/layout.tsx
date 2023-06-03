import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import { UsersProvider } from "@/contexts/UsersContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Malwation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UsersProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </AuthProvider>
    </UsersProvider>
  );
}

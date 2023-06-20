"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // const storedUser = localStorage.getItem("user");
  // const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    const userJSON = JSON.stringify(email);
    localStorage.setItem("user", userJSON);
    setUser(email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

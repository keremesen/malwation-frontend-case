"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser);
    }
  }, [])
  

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
    setUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

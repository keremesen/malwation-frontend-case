"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, generateFakeUsers } from "@/utils/generateFakeUsers";
import { useRouter } from "next/navigation";

type UsersContextType = {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User []>> ;
  handleDelete: (index: number) => void;
  handleUpdate: (user: User) => void;
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateUser: ( user:User) => void
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const useUsers = () => useContext(UsersContext);

type UsersProviderProps = {
  children: ReactNode;
};

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const loadData = generateFakeUsers(40);
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
  
    setData(loadData);
  }, []);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const router = useRouter();

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
  };

  const handleUpdate = (user: User) => {
    setSelectedUser(user);
    router.push(`/user/${user.id}`);
  };
  const updateUser = (user: User) => {
    setData((prevUsers) =>
      prevUsers.map((prevUser) =>
        prevUser.id === user.id ? { ...prevUser, ...user } : prevUser
      )
    );
  };
  const usersContextValue: UsersContextType = {
    data,
    setData,
    handleDelete,
    handleUpdate,
    selectedUser,
    setSelectedUser,
    updateUser
  };

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

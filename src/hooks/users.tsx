import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

type UsersContextData = {
  users: User[];
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`users`);

      setUsers(response.data)
    }

    fetchData()
  }, []);

  return (
    <UsersContext.Provider value ={{ users }}>
      { children }
    </UsersContext.Provider>
  )
}

export function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUsers must be used within an useUsers')
  }

  return context;
}
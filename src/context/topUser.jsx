import React, { createContext, useContext, useState } from "react";
import { get20Users } from "../api/top";

const TopUsers = createContext();

export const useUsers = () => {
  const context = useContext(TopUsers);
  if (!context)
    throw new Error("useBidders must be used within a BidderProvider");
  return context;
};

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await get20Users();
      setUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <TopUsers.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {children}
    </TopUsers.Provider>
  );
}

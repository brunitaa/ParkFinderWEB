import React, { createContext, useContext, useState } from "react";
import { get20WorstBidders, get20WorstUsers } from "../api/top";

const WorstBidder = createContext();

export const useWBidders = () => {
  const context = useContext(WorstBidder);
  if (!context)
    throw new Error("useBidders must be used within a BidderProvider");
  return context;
};

export function WorstBidderProvider({ children }) {
  const [wbidders, setwBidders] = useState([]);
  const [wusers, setwUsers] = useState([]);

  const getwBidders = async () => {
    try {
      const res = await get20WorstBidders();
      setwBidders(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching bidders:", error);
    }
  };

  const getwUsers = async () => {
    try {
      const res = await get20WorstUsers();
      setwUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching bidders:", error);
    }
  };

  return (
    <WorstBidder.Provider
      value={{
        wbidders,
        getwBidders,
        wusers,
        getwUsers,
      }}
    >
      {children}
    </WorstBidder.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";
import { get20Bidders } from "../api/top";

const TopBidder = createContext();

export const useBidders = () => {
  const context = useContext(TopBidder);
  if (!context)
    throw new Error("useBidders must be used within a BidderProvider");
  return context;
};

export function BidderProvider({ children }) {
  const [bidders, setBidders] = useState([]);

  const getBidders = async () => {
    try {
      const res = await get20Bidders();
      setBidders(res.data.data);
      console.log(res.data.data.top_users);
    } catch (error) {
      console.error("Error fetching bidders:", error);
    }
  };

  return (
    <TopBidder.Provider
      value={{
        bidders,
        getBidders,
      }}
    >
      {children}
    </TopBidder.Provider>
  );
}

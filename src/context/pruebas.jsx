import { createContext, useContext, useState } from "react";
import { get20Ofertantes } from "../api/pruebas";

const PruebasContext = createContext();

export const useOfertantes = () => {
  const context = useContext(PruebasContext);
  if (!context)
    throw new Error("useOfertantes must be used within a PruebasProvider");
  return context;
};

export function PruebasProvider({ children }) {
  const [ofertantes, setOfertantes] = useState([]);

  const getOfertantes = async () => {
    try {
      const res = await get20Ofertantes();

      setOfertantes(res.data.data.top_users);
      console.log(res.data.data.top_users);
    } catch (error) {
      console.error("Error fetching ofertantes:", error);
    }
  };

  return (
    <PruebasContext.Provider
      value={{
        ofertantes,
        getOfertantes,
      }}
    >
      {children}
    </PruebasContext.Provider>
  );
}

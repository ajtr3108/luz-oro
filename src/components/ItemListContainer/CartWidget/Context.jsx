import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [cantidades, setCantidades] = useState({});

  const agregarCantidad = (id) => {
    setCantidades(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const quitarCantidad = (id) => {
    setCantidades(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };

  const totalCantidad = Object.values(cantidades).reduce((a, b) => a + b, 0);

  return (
    <CarritoContext.Provider value={{ cantidades, agregarCantidad, quitarCantidad, totalCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
}
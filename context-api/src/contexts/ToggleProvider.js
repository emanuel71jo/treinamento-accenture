import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [estadoPai, setEstadoPai] = useState(false);
  const [estadoFilho, setEstadoFilho] = useState(false);

  function handleClickEstadoFilho() {
    setEstadoFilho((oldValue) => !oldValue);
  }

  function handleClickEstadoPai() {
    setEstadoPai((oldValue) => !oldValue);
  }

  return (
    <ToggleContext.Provider
      value={{
        estadoPai,
        estadoFilho,
        handleClickEstadoFilho,
        handleClickEstadoPai,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

export function useToogle() {
  const context = useContext(ToggleContext);

  return context;
}

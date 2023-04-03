import { createContext, useCallback, useContext, useState } from "react";

const ChangeBgContext = createContext();

// console.log("WrapperContext :>> ", WrapperContext);
// const toggleColor = useContext(WrapperContext);
export const useToggleBg = () => {
  const toggleColor = useContext(ChangeBgContext);
  return toggleColor;
};

export const ChangeBgProvider = ({ children }) => {
  const [color, setColor] = useState("red");
//   const [isLoading, setIsLoading] = useState(false);
  const toggleColor = useCallback(
    () => setColor((p) => (p === "red" ? "green" : "red")),
    []
  );

  return (
    <div style={{ backgroundColor: color }}>
      <ChangeBgContext.Provider value={toggleColor}>
        {children}
      </ChangeBgContext.Provider>
      {/* {isLoading && "loader with backdrop"} */}
    </div>
  );
};

import { createContext, useContext, useState } from "react";

import { selectorIsLoading } from "redux/loader/loaderSelectors";
import { useSelector } from "react-redux";

const LoaderContext = createContext();

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000050",
        color: "#fff",
        fontSize: "48px",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export const useSetIsLoading = () => useContext(LoaderContext)

const LoaderProvider = ({ children }) => {
  const isLoading = useSelector(selectorIsLoading);
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  return (
    <LoaderContext.Provider value={setIsLocalLoading}>
      <>{children}</>
      {(isLoading || isLocalLoading) && <Loader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;

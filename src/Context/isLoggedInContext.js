import { createContext, useEffect, useState } from "react";
import { isLoggedIn } from "../Utils/auth";

export const isLoggedInContext = createContext();

export default function IsLoggedInProvider({ children }) {
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const promise = isLoggedIn();
    promise.then(() => {
      setIsToken((prev) => true);
    });
    promise.catch(() => {
      setIsToken((prev) => false);
    });
  }, []);

  return (
    <isLoggedInContext.Provider
      value={{
        isToken,
        setIsToken,
      }}
    >
      {children}
    </isLoggedInContext.Provider>
  );
}

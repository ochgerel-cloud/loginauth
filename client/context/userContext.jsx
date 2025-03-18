import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  console.log("UserContextProvider is working");
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get("/profile").then(({ data }) => {
      console.log("data variable from userContext: ", data);

      setUser(data);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

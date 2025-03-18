import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  console.log("UserContextProvider is working");
  const [user, setUser] = useState(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    axios.get("/profile").then(({ data }) => {
      console.log("User data from userContext.js: ", data);

      setUser(data);
    });
  }, [start]);
  return (
    <UserContext.Provider value={{ user, setUser, start, setStart }}>
      {children}
    </UserContext.Provider>
  );
}

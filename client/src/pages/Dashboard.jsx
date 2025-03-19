import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user, setStart, start } = useContext(UserContext);

  console.log("DASHBOARD: ", start);

  useEffect(() => {
    setStart(() => {
      if (start) return false;
      return true;
    });
    console.log("Dashboard is working");
  }, [setStart]);
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!You are logged in.</h2>}
    </div>
  );
}

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  console.log("Dashboard is working");

  const { user } = useContext(UserContext);
  console.log("userContext: ", user);

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!You are logged in.</h2>}
    </div>
  );
}

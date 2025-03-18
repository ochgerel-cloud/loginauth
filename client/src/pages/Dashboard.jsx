import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  console.log("Dashboard is working");

  const { user, setStart } = useContext(UserContext);
  // const { setStart } = useContext(UserContext);
  setStart((prevstate) => !prevstate);
  // console.log("userContext: ", start);

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!You are logged in.</h2>}
    </div>
  );
}

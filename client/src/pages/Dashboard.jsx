import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  console.log("Dashboard is working");

<<<<<<< HEAD
  const { user } = useContext(UserContext);
  console.log("user variable from Dashboard Component: ", user);
=======
  const { user, setStart } = useContext(UserContext);
  // const { setStart } = useContext(UserContext);
  setStart((prevstate) => !prevstate);
  // console.log("userContext: ", start);
>>>>>>> 263f828c10b33e90d7fb165f1f0ce176b5a654d9

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!You are logged in.</h2>}
    </div>
  );
}

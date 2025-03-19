import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "bold@gmail.com",
    password: "123456789",
  });
  const { setUser, setStart } = useContext(UserContext);
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });

      if (data.type === "error") {
        toast.error(data.message);
      } else {
        console.log("LOGIN:", data);

        // setUser(data.user);
        // setStart(true);
        setData({});
        toast.success(data.message);

        navigate("/dashboard");
      }
    } catch (error) {}
  };
  return (
    <>
      <div>Login page</div>
      <div>
        <form onSubmit={loginUser}>
          <label>Email: </label>
          <input
            type="email"
            placeholder="enter email..."
            value={data.email} // corrected from data.name to data.email
            onChange={(e) => setData({ ...data, email: e.target.value })} // corrected from name to email
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

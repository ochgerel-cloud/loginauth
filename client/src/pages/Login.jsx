import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const loginUser = (e) => {
    e.preventDefault();
    axios("/");
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

import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const loginUser = (e) => {
    e.preventDefault();
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
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
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

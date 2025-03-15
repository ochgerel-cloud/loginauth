import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  //   console.log({ ...data });

  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>Register page</div>
      <div>
        <form onSubmit={registerUser}>
          <label>Name: {data.name}</label>
          <input
            type="text"
            placeholder="enter name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label>Email: {data.email}</label>
          <input
            type="email"
            placeholder="enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

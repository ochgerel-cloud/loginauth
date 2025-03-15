import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (username, password) => {
  console.log(
    "working login function username, password: ",
    username,
    password
  );

  try {
    const response = await fetch(API_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    console.log("RESPONSE DATA: ", response.ok);

    return response.ok;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkAuth = async () => {
  try {
    // const response = await axios.get(`${API_URL}/protected`);
    const response = await fetch(API_URL + "/protected", {
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

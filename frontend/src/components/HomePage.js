// frontend/src/components/HomePage.js

import React, { useEffect, useState } from "react";
import { checkAuth } from "../services/authService";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const data = await checkAuth();
        setMessage(data.message);
      } catch (error) {
        history.push("/login"); // Логин хийлгүй хандахад эхний хуудас руу шилжих
      }
    };
    verifyAuth();
  }, [history]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default HomePage;

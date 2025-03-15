// frontend/src/components/HomePage.js

import React, { useEffect, useState } from "react";
import { checkAuth } from "../services/authService";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  console.log("HOMEPAGE STARTED");

  const [message, setMessage] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const data = await checkAuth();
        setMessage(data.message);
      } catch (error) {
        navigate("/login"); // Логин хийлгүй хандахад эхний хуудас руу шилжих
      }
    };
    verifyAuth();
  }, [navigate]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default HomePage;

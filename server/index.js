import express from "express";
// const express = require("express");
// const dotenv = require("dotenv").config();
import { config } from "dotenv";

const app = express();
const port = 7000;

app.listen(port, () =>
  console.log("Server is running on port: http://localhost:" + port)
);
